
import React from 'react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    name: 'Sarah Jenkins',
    role: 'Freelance Designer',
    content: "I saved $3,200 just by applying the 'Home Office' section of this book. It's written in plain English, finally!",
    avatar: 'https://picsum.photos/seed/sarah/100/100',
  },
  {
    name: 'David Chen',
    role: 'SaaS Founder',
    content: "LiteTax clarified more in 50 pages than my previous accountant did in 2 years. Essential for every entrepreneur.",
    avatar: 'https://picsum.photos/seed/david/100/100',
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold text-slate-900 mb-12">Trusted by Professionals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col gap-6">
              <p className="text-lg text-slate-700 italic leading-relaxed">"{t.content}"</p>
              <div className="flex items-center gap-4 mt-auto">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full" />
                <div>
                  <div className="font-bold text-slate-900">{t.name}</div>
                  <div className="text-sm text-slate-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
