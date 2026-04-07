"use client";

import { useState } from "react";

const ACCORDION = [
  {
    title: "Fabric & Fit",
    content: `100% polyester performance fabric. Lightweight, breathable and moisture-wicking.
    Regular fit — true to size. Finished with a ribbed crew neck collar and
    subtle FC Palestina branding throughout. The floral botanical print is sublimation-dyed
    directly into the fabric — it will not crack, fade or peel.`,
  },
  {
    title: "Size Guide",
    content: null,
    table: [
      ["Size", "Chest (in)", "Length (in)"],
      ["S", '36–38"', '27"'],
      ["M", '38–40"', '28"'],
      ["L", '40–42"', '29"'],
      ["XL", '42–44"', '30"'],
    ],
  },
  {
    title: "Shipping",
    content: `Shipped via Evri. Orders dispatched within 1–2 business days.
    UK delivery typically 2–4 working days after dispatch.
    You will receive a tracking link by email once your order has shipped.
    International shipping coming soon.`,
  },
  {
    title: "Returns & Refunds",
    content: `We accept returns within 14 days of delivery. Item must be unworn,
    unwashed and in its original packaging. To start a return, email us with your
    order number. Refunds are processed within 5 business days of receiving the return.
    Return shipping is at the customer's expense unless the item is faulty.`,
  },
];

export default function JerseyDetails() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="px-4 py-10 max-w-lg mx-auto">
      <h2 className="font-bebas text-3xl tracking-wide text-[#F5F5F5] mb-6">
        Jersey Details
      </h2>

      <div className="flex flex-col gap-2">
        {ACCORDION.map((item, i) => (
          <div
            key={i}
            className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl overflow-hidden"
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between px-5 py-4 text-left"
            >
              <span className="font-semibold text-[#F5F5F5] text-sm">{item.title}</span>
              <span
                className={`text-[#FF2D9B] text-lg transition-transform duration-200 ${
                  open === i ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>

            {open === i && (
              <div className="px-5 pb-5">
                {item.table ? (
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr>
                          {item.table[0].map((h) => (
                            <th
                              key={h}
                              className="text-left text-[#888] font-medium pb-2 pr-4"
                            >
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {item.table.slice(1).map((row, ri) => (
                          <tr key={ri} className="border-t border-[#2a2a2a]">
                            {row.map((cell, ci) => (
                              <td
                                key={ci}
                                className={`py-2 pr-4 text-sm ${
                                  ci === 0
                                    ? "text-[#FF2D9B] font-semibold"
                                    : "text-[#aaa]"
                                }`}
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <p className="text-[#888] text-sm leading-relaxed">{item.content}</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
