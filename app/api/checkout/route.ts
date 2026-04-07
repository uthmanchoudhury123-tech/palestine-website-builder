import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

export async function POST(req: NextRequest) {
  try {
    const { size, customerName, customerEmail, customerPhone, address } =
      await req.json();

    if (!size || !customerName || !customerEmail) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: 2399, // £23.99 in pence
      currency: "gbp",
      automatic_payment_methods: { enabled: true },
      metadata: {
        product: "FC Palestina Floral Jersey",
        size,
        customerName,
        customerEmail,
        customerPhone: customerPhone || "",
        address: address || "",
        charityDonation: "20% of profit to MAP",
      },
      receipt_email: customerEmail,
      description: `Palestina — FC Palestina Jersey (Size ${size})`,
    });

    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error("Checkout error:", error);
    return NextResponse.json(
      { error: "Failed to create payment intent" },
      { status: 500 }
    );
  }
}
