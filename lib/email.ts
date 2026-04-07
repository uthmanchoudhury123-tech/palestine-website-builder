import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function sendOrderConfirmationEmail(order: {
  name: string;
  email: string;
  size: string;
  address: string;
}) {
  await resend.emails.send({
    from: "Palestina <orders@palestina.store>",
    to: order.email,
    subject: "Your Palestina Order is Confirmed 🇵🇸",
    html: `
      <!DOCTYPE html>
      <html>
        <body style="background:#0d0d0d;color:#F5F5F5;font-family:Arial,sans-serif;padding:32px;max-width:520px;margin:0 auto;">
          <h1 style="font-size:32px;letter-spacing:4px;margin-bottom:4px;">PALESTINA</h1>
          <p style="color:#555;font-size:12px;margin-bottom:32px;">Wear it. Mean it. Free Palestine.</p>

          <div style="background:#1a1a1a;border:1px solid #2a2a2a;border-radius:16px;padding:24px;margin-bottom:24px;">
            <h2 style="color:#FF2D9B;font-size:20px;margin-bottom:16px;">Order Confirmed ✓</h2>
            <p style="color:#888;margin-bottom:8px;">Hi ${order.name},</p>
            <p style="color:#888;margin-bottom:16px;">Your FC Palestina jersey is on its way. Thank you for standing with Palestine.</p>

            <div style="border-top:1px solid #2a2a2a;padding-top:16px;">
              <div style="display:flex;justify-content:space-between;margin-bottom:8px;">
                <span style="color:#888;font-size:14px;">FC Palestina Floral Jersey (${order.size})</span>
                <span style="font-size:14px;">£23.99</span>
              </div>
              <div style="display:flex;justify-content:space-between;margin-bottom:8px;">
                <span style="color:#888;font-size:14px;">Shipping (Evri)</span>
                <span style="color:#009736;font-size:14px;">FREE</span>
              </div>
              <div style="border-top:1px solid #2a2a2a;padding-top:12px;display:flex;justify-content:space-between;">
                <span style="font-weight:bold;">Total</span>
                <span style="color:#FF2D9B;font-size:18px;font-weight:bold;">£23.99</span>
              </div>
            </div>
          </div>

          <div style="background:#009736;background:linear-gradient(135deg,#005c28,#009736);border-radius:16px;padding:20px;margin-bottom:24px;">
            <p style="font-size:14px;font-weight:bold;margin-bottom:4px;">🕊 Your purchase supports Gaza</p>
            <p style="font-size:13px;color:rgba(255,255,255,0.85);">20% of profits from your order are donated to Medical Aid for Palestinians (MAP). Thank you for making a difference.</p>
          </div>

          <div style="background:#1a1a1a;border:1px solid #2a2a2a;border-radius:16px;padding:20px;margin-bottom:24px;">
            <h3 style="font-size:14px;margin-bottom:12px;">Delivery Details</h3>
            <p style="color:#888;font-size:13px;">Delivering to: ${order.address}</p>
            <p style="color:#888;font-size:13px;margin-top:4px;">Carrier: Evri · 2–4 working days after dispatch</p>
            <p style="color:#888;font-size:13px;margin-top:4px;">You'll receive a tracking link once dispatched.</p>
          </div>

          <p style="color:#444;font-size:12px;text-align:center;">Questions? Email us at hello@palestina.store</p>
          <p style="color:#333;font-size:12px;text-align:center;margin-top:8px;">From the river to the sea 🇵🇸</p>
        </body>
      </html>
    `,
  });
}
