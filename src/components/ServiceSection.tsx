"use client";

import { useState } from "react";
import Image from "next/image";

const services = [
  {
    key: "corporate",
    title: "Corporate Events",
    description: `Dependable coach hire for conferences, meetings and corporate travel across Italy. Present a professional image with comfortable, punctual transport for delegates.`,
    image: "/images/corporate21.png",
  },
  {
    key: "school",
    title: "School Trips",
    description: `Safe and well-organised school transport for educational outings in Italy. From museums in Florence to historical trips in Rome, we ensure students travel securely and comfortably.`,
    image: "/images/school21.png",
  },
  {
    key: "shuttles",
    title: "Shuttles",
    description: `Efficient shuttle services between airports, hotels and event venues. Ideal for conferences, hotels and large events in cities such as Milan and Venice.`,
    image: "/images/shuttle21.png",
  },
  {
    key: "transfers",
    title: "Transfers",
    description: `Reliable door-to-door transfers across Italy, including airport pickups and intercity journeys. Our drivers monitor flights and traffic to ensure punctual arrivals.`,
    image: "/images/transfer21.png",
  },
  {
    key: "home",
    title: "Home to School",
    description: `Safe, reliable home to school transport for daily commutes. Our drivers prioritise punctuality and child safety for students across Italian towns and cities.`,
    image: "/images/home21.png",
  },
];

export default function ServicesSection() {
  const [active, setActive] = useState(services[0].key);
  const current = services.find((s) => s.key === active)!;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">Our Services</span>
          <h2 className="mt-2 text-3xl font-bold text-gray-900">Coach Hire and Group Travel Across Italy</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Reliable, safe and affordable coach hire, minibus rental and group transport services throughout Italy.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {services.map((s) => (
            <button
              key={s.key}
              onClick={() => setActive(s.key)}
              className={`px-6 py-3 rounded-full border-2 font-medium transition-all duration-200 ${
                active === s.key ? "bg-blue-600 text-white border-blue-600 shadow-md" : "bg-white text-gray-700 border-gray-300 hover:border-blue-500"
              }`}
            >
              {s.title}
            </button>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-900">{current.title}</h3>
            <p className="mt-4 text-gray-700 text-lg leading-relaxed">{current.description}</p>
          </div>

          <div className="w-full flex justify-center">
            <div className="relative w-full max-w-[700px] h-[450px]">
              <Image src={current.image} alt={`${current.title} Italy Buses`} fill className="object-cover rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
