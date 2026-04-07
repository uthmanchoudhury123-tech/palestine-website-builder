"use client";

import { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

interface FormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postcode: string;
}

function PaymentForm({
  size,
  formData,
  clientSecret,
  onSuccess,
  onClose,
}: {
  size: string;
  formData: FormData;
  clientSecret: string;
  onSuccess: () => void;
  onClose: () => void;
}) {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);
    setError(null);

    const { error: stripeError } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/success`,
        payment_method_data: {
          billing_details: {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            address: {
              line1: formData.address,
              city: formData.city,
              postal_code: formData.postcode,
              country: "GB",
            },
          },
        },
      },
    });

    if (stripeError) {
      setError(stripeError.message || "Payment failed. Please try again.");
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <PaymentElement
        options={{
          layout: "tabs",
        }}
      />

      {error && (
        <p className="text-[#EE2A35] text-sm bg-[#EE2A35]/10 border border-[#EE2A35]/20 rounded-xl px-4 py-3">
          {error}
        </p>
      )}

      {/* Order summary */}
      <div className="bg-[#111] border border-[#2a2a2a] rounded-xl p-4">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-[#888]">FC Palestina Jersey (Size {size})</span>
          <span className="text-[#F5F5F5]">£23.99</span>
        </div>
        <div className="flex justify-between text-sm mb-2">
          <span className="text-[#888]">Shipping (Evri)</span>
          <span className="text-[#009736]">FREE</span>
        </div>
        <div className="flex justify-between text-sm mb-2">
          <span className="text-[#009736]">🇵🇸 Donation to MAP (20% profit)</span>
          <span className="text-[#009736]">✓</span>
        </div>
        <div className="border-t border-[#2a2a2a] pt-2 flex justify-between font-bold">
          <span className="text-[#F5F5F5]">Total</span>
          <span className="text-[#FF2D9B] text-lg">£23.99</span>
        </div>
      </div>

      <button
        type="submit"
        disabled={loading || !stripe}
        className="w-full bg-[#FF2D9B] hover:bg-[#e0257f] disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 transition-all text-white font-bold text-lg py-4 rounded-2xl glow-pink"
      >
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <span className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
            Processing...
          </span>
        ) : (
          "Pay £23.99 Securely"
        )}
      </button>

      <p className="text-center text-[#555] text-xs flex items-center justify-center gap-1">
        <span>🔒</span> Secured by Stripe · Your card details are never stored
      </p>
    </form>
  );
}

function CustomerDetailsForm({
  formData,
  onChange,
  onNext,
}: {
  formData: FormData;
  onChange: (f: Partial<FormData>) => void;
  onNext: () => void;
}) {
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onNext();
  }

  const inputClass =
    "w-full bg-[#111] border border-[#2a2a2a] text-[#F5F5F5] placeholder-[#555] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#FF2D9B] transition-colors";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <div>
        <label className="text-[#888] text-xs font-medium mb-1 block">Full Name *</label>
        <input
          required
          type="text"
          placeholder="Your full name"
          value={formData.name}
          onChange={(e) => onChange({ name: e.target.value })}
          className={inputClass}
        />
      </div>
      <div>
        <label className="text-[#888] text-xs font-medium mb-1 block">Email *</label>
        <input
          required
          type="email"
          placeholder="your@email.com"
          value={formData.email}
          onChange={(e) => onChange({ email: e.target.value })}
          className={inputClass}
        />
      </div>
      <div>
        <label className="text-[#888] text-xs font-medium mb-1 block">Phone</label>
        <input
          type="tel"
          placeholder="07xxx xxxxxx"
          value={formData.phone}
          onChange={(e) => onChange({ phone: e.target.value })}
          className={inputClass}
        />
      </div>
      <div>
        <label className="text-[#888] text-xs font-medium mb-1 block">
          Delivery Address *
        </label>
        <input
          required
          type="text"
          placeholder="House number & street"
          value={formData.address}
          onChange={(e) => onChange({ address: e.target.value })}
          className={inputClass}
        />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="text-[#888] text-xs font-medium mb-1 block">City *</label>
          <input
            required
            type="text"
            placeholder="City"
            value={formData.city}
            onChange={(e) => onChange({ city: e.target.value })}
            className={inputClass}
          />
        </div>
        <div>
          <label className="text-[#888] text-xs font-medium mb-1 block">Postcode *</label>
          <input
            required
            type="text"
            placeholder="SW1A 1AA"
            value={formData.postcode}
            onChange={(e) => onChange({ postcode: e.target.value })}
            className={inputClass}
          />
        </div>
      </div>
      <button
        type="submit"
        className="w-full bg-[#FF2D9B] hover:bg-[#e0257f] active:scale-95 transition-all text-white font-bold text-base py-4 rounded-2xl mt-2 glow-pink"
      >
        Continue to Payment →
      </button>
    </form>
  );
}

export default function CheckoutModal({
  isOpen,
  onClose,
  initialSize,
}: {
  isOpen: boolean;
  onClose: () => void;
  initialSize?: string;
}) {
  const [step, setStep] = useState<"details" | "payment">("details");
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postcode: "",
  });

  useEffect(() => {
    if (!isOpen) {
      setStep("details");
      setClientSecret(null);
    }
  }, [isOpen]);

  async function handleProceedToPayment() {
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          size: initialSize,
          customerName: formData.name,
          customerEmail: formData.email,
          customerPhone: formData.phone,
          address: `${formData.address}, ${formData.city}, ${formData.postcode}`,
        }),
      });
      const data = await res.json();
      if (data.clientSecret) {
        setClientSecret(data.clientSecret);
        setStep("payment");
      }
    } catch (err) {
      console.error("Failed to create payment intent:", err);
    }
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full sm:max-w-md bg-[#0d0d0d] border border-[#2a2a2a] rounded-t-3xl sm:rounded-3xl overflow-hidden max-h-[95vh] overflow-y-auto">
        {/* Pink top accent */}
        <div className="h-1 bg-gradient-to-r from-[#7B5EA7] via-[#FF2D9B] to-[#7B5EA7]" />

        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#2a2a2a]">
          <div>
            <h2 className="font-bebas text-2xl tracking-wide text-[#F5F5F5]">
              {step === "details" ? "Your Details" : "Secure Payment"}
            </h2>
            <div className="flex items-center gap-2 mt-0.5">
              <div className={`w-2 h-2 rounded-full ${step === "details" ? "bg-[#FF2D9B]" : "bg-[#2a2a2a]"}`} />
              <div className={`w-2 h-2 rounded-full ${step === "payment" ? "bg-[#FF2D9B]" : "bg-[#2a2a2a]"}`} />
              <span className="text-[#555] text-xs">Size: {initialSize}</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center text-[#888] hover:text-[#F5F5F5] transition-colors"
          >
            ✕
          </button>
        </div>

        <div className="px-5 py-5">
          {step === "details" ? (
            <CustomerDetailsForm
              formData={formData}
              onChange={(f) => setFormData((prev) => ({ ...prev, ...f }))}
              onNext={handleProceedToPayment}
            />
          ) : clientSecret ? (
            <Elements
              stripe={stripePromise}
              options={{
                clientSecret,
                appearance: {
                  theme: "night",
                  variables: {
                    colorPrimary: "#FF2D9B",
                    colorBackground: "#1a1a1a",
                    colorText: "#F5F5F5",
                    borderRadius: "12px",
                  },
                },
              }}
            >
              <PaymentForm
                size={initialSize || ""}
                formData={formData}
                clientSecret={clientSecret}
                onSuccess={() => {}}
                onClose={onClose}
              />
            </Elements>
          ) : (
            <div className="flex items-center justify-center py-10">
              <div className="w-8 h-8 border-2 border-[#FF2D9B] border-t-transparent rounded-full animate-spin" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
