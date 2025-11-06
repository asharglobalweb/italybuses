"use client";

import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="w-full">
          <Image
            src="/images/abtus.png"
            alt="Italy Buses modern coach and minibus fleet in Italy"
            width={1600}
            height={900}
            quality={100}
            priority
            unoptimized={false}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
            className="rounded-lg shadow-lg object-cover w-full h-auto"
          />
        </div>

        <div>
          <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
            About Us
          </span>
          <p className="mt-4 text-gray-700">
            At <strong>Italy Buses</strong>, we provide dependable coach and minibus hire across <strong>Italy</strong> — serving Rome, Milan, Florence, Venice, Naples and beyond. Our modern fleet, experienced drivers, and customer-first approach make group travel easy and comfortable.
          </p>

          <ul className="mt-6 space-y-3 list-disc list-inside text-gray-700">
            <li>
              <strong>Modern Fleet:</strong> From 16-seat minibuses to 50-seat luxury coaches, all vehicles are air-conditioned, safety-checked and equipped for long-distance comfort.
            </li>
            <li>
              <strong>Experienced Drivers:</strong> All <strong>Italy Buses</strong> drivers are fully licensed, background-checked, and trained to provide safe, punctual, and friendly service.
            </li>
            <li>
              <strong>Tailored Travel:</strong> We manage corporate shuttles, school trips, wedding transport, airport transfers and private tours across Italy with attention to detail and reliable logistics.
            </li>
            <li>
              <strong>Transparent Pricing:</strong> Clear, all-inclusive quotes with no hidden fees so you can plan with confidence.
            </li>
          </ul>

          <p className="mt-6 text-gray-700">
            With years of experience in group transport, <strong>Italy Buses</strong> is trusted by businesses, schools, and families for safe, comfortable travel across Italy’s cities and scenic regions.
          </p>
        </div>
      </div>
    </section>
  );
}
