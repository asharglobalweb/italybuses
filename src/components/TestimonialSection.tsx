"use client";
import { Star } from "lucide-react";
import { useState } from 'react';

export default function TestimonialSection() {
  const testimonials = [
    {
      key: 'passengers',
      name: "Giulia Rossi",
      role: "Regular Commuter, Rome",
      avatar: "avatar1",
      message: "I commute frequently between Rome and Florence. Italy Buses is always punctual and the coaches are very comfortable.",
    },
    {
      key: 'passengers',
      name: "Luca Bianchi",
      role: "University Student, Milan",
      avatar: "avatar2",
      message: "Affordable and reliable service for students. The drivers are friendly and helpful.",
    },
    {
      key: 'passengers',
      name: "Sara Conti",
      role: "Family Traveller, Venice",
      avatar: "avatar3",
      message: "We used Italy Buses for a family trip to Venice — the coach was clean and the journey was pleasant.",
    },
    {
      key: 'corporate',
      name: "Marco Romano",
      role: "Operations Manager, Rome",
      avatar: "avatar4",
      message: "Professional service for our corporate transfers. Italy Buses handled our logistics smoothly.",
    },
    {
      key: 'corporate',
      name: "Elisa Fontana",
      role: "HR Director, Milan",
      avatar: "avatar5",
      message: "Organised and punctual — perfect for our conference transport needs.",
    },
    {
      key: 'corporate',
      name: "Davide Moretti",
      role: "Event Coordinator, Florence",
      avatar: "avatar6",
      message: "Great service for events in Florence. Comfortable coaches and timely arrivals impressed our guests.",
    },
    {
      key: 'school',
      name: "Mrs. Ferraro",
      role: "Primary School Teacher, Naples",
      avatar: "avatar7",
      message: "Our school trip was organised professionally and the children were safe and happy throughout.",
    },
    {
      key: 'school',
      name: "Mr. Greco",
      role: "Sports Coach, Bari",
      avatar: "avatar8",
      message: "We rely on Italy Buses for away matches. They understand scheduling and safety well.",
    },
    {
      key: 'school',
      name: "Ms. Romano",
      role: "Headmistress, Genoa",
      avatar: "avatar9",
      message: "Excellent communication and reliable drivers. Parents were very pleased with the service.",
    },
  ];

  const categories = ['passengers', 'corporate', 'school'];
  const [active, setActive] = useState(categories[0]);
  const filtered = testimonials.filter(t => t.key === active);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="flex flex-col items-center mb-8">
          <h3 className="inline-block bg-blue-100 text-blue-600 px-3 py-2 rounded-full text-sm font-semibold ">
            Client Testimonials
          </h3>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
            What Our Clients Say
          </h2>
        </div>
        <div className="mb-12 flex justify-center gap-4 flex-wrap">
          {categories.map(key => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`px-5 py-2 rounded-full transition-colors duration-200 focus:outline-none border ${active === key ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-600 border-gray-300 hover:bg-blue-50 hover:text-blue-600'}`}
            >
              {key === 'passengers' ? 'From passengers' : key === 'corporate' ? 'From companies' : 'From schools'}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filtered.map((t, idx) => (
            <div key={idx} className="flex flex-col bg-white rounded-xl shadow-md p-6 text-left h-full">
              <p className="text-gray-700 mb-6 flex-grow">{t.message}</p>
              <div className="flex mb-4">
                {Array(5).fill(0).map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400" />
                ))}
              </div>
              <div className="flex items-center gap-4 mt-auto">
                <div>
                  <p className="font-semibold text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
