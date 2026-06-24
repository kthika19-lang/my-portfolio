"use client";
import { useState } from "react";
import Image from "next/image";

const brands = [
  { key: "blau", label: "Blau", src: "/whatsapp-sim/img-118.jpeg", h: 3713 },
  { key: "nettokom", label: "NettoKOM", src: "/whatsapp-sim/img-106.jpeg", h: 4096 },
  { key: "whatsapp", label: "WhatsApp SIM", src: "/whatsapp-sim/img-102.jpeg", h: 4096 },
];

export function FinalDesignsTabs() {
  const [active, setActive] = useState("blau");
  const current = brands.find((b) => b.key === active)!;

  return (
    <div>
      <div className="flex gap-3 mb-6">
        {brands.map((b) => (
          <button
            key={b.key}
            onClick={() => setActive(b.key)}
            className={`px-6 py-2.5 rounded-full text-sm font-semibold border transition-colors ${
              active === b.key
                ? "bg-black text-white border-black"
                : "bg-white text-gray-500 border-gray-300 hover:border-gray-600 hover:text-gray-800"
            }`}
          >
            {b.label}
          </button>
        ))}
      </div>
      <p className="text-[#555] text-sm italic mb-4">Scroll inside</p>
      <div className="w-full h-[680px] overflow-y-auto overflow-x-hidden border border-gray-200 rounded-xl">
        <div style={{ height: current.h, position: "relative", width: "100%" }}>
          <Image src={current.src} alt={current.label} fill className="object-cover object-top" />
        </div>
      </div>
    </div>
  );
}
