'use client';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'John Smith',
    role: 'CTO',
    company: 'SecureBank Inc.',
    content:
      'Optimus Consulting transformed our mobile banking app completely. Their expertise and dedication resulted in a 340% increase in user engagement.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'RetailMax Group',
    content:
      'The e-commerce platform modernization was seamless. We saw a 45% increase in conversions and 280% faster checkout times.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Michael Chen',
    role: 'Head of Innovation',
    company: 'MediCare Solutions',
    content:
      'Their AI solution for diagnostic support has been invaluable. Reduced diagnosis time by 60% while maintaining 98.5% accuracy.',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 text-sm font-medium mb-4">
            Client Stories
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-base text-white/70 max-w-2xl mx-auto">
            Real results from real partners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white/[0.05] rounded-xl border border-white/10 hover:border-blue-400/30 transition p-8"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-blue-400 text-xl">
                    ★
                  </span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-white/75 mb-6 leading-relaxed italic text-sm">
                &quot;{testimonial.content}&quot;
              </p>

              {/* Author */}
              <div className="border-t border-white/10 pt-6">
                <p className="font-semibold text-white">

                  {testimonial.name}
                </p>
                <p className="text-sm text-white/60">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
