export async function sendOrderSMS(order: {
  name: string;
  size: string;
  amount: string;
  address: string;
  email: string;
}) {
  const twilio = (await import("twilio")).default;
  const client = twilio(
    process.env.TWILIO_ACCOUNT_SID!,
    process.env.TWILIO_AUTH_TOKEN!
  );

  const message = `🛒 New Palestina Order!\n\nName: ${order.name}\nSize: ${order.size}\nAmount: £${order.amount}\nEmail: ${order.email}\nAddress: ${order.address}\n\nCheck Stripe dashboard for full details.`;

  await client.messages.create({
    body: message,
    from: process.env.TWILIO_PHONE_NUMBER!,
    to: process.env.OWNER_PHONE_NUMBER!,
  });
}
