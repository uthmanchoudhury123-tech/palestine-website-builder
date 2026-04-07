import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { supabase } from "@/lib/supabase";
import { sendOrderSMS } from "@/lib/sms";
import { sendOrderConfirmationEmail } from "@/lib/email";
import Stripe from "stripe";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature");

  if (!sig) {
    return NextResponse.json({ error: "No signature" }, { status: 400 });
  }

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    console.error("Webhook signature error:", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  if (event.type === "payment_intent.succeeded") {
    const pi = event.data.object as Stripe.PaymentIntent;
    const meta = pi.metadata;

    const orderData = {
      stripe_payment_id: pi.id,
      customer_name: meta.customerName || "",
      customer_email: meta.customerEmail || "",
      customer_phone: meta.customerPhone || "",
      address: meta.address || "",
      size: meta.size || "",
      amount_gbp: (pi.amount / 100).toFixed(2),
      status: "paid",
      created_at: new Date().toISOString(),
    };

    // 1. Save to Supabase
    const { error: dbError } = await supabase.from("orders").insert(orderData);
    if (dbError) {
      console.error("Supabase insert error:", dbError);
    }

    // 2. SMS alert to owner
    try {
      await sendOrderSMS({
        name: orderData.customer_name,
        size: orderData.size,
        amount: orderData.amount_gbp,
        address: orderData.address,
        email: orderData.customer_email,
      });
    } catch (smsError) {
      console.error("SMS error:", smsError);
    }

    // 3. Confirmation email to customer
    try {
      await sendOrderConfirmationEmail({
        name: orderData.customer_name,
        email: orderData.customer_email,
        size: orderData.size,
        address: orderData.address,
      });
    } catch (emailError) {
      console.error("Email error:", emailError);
    }
  }

  return NextResponse.json({ received: true });
}
