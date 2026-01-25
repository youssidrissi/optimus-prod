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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-4">
            What Our Clients Say
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-4">
            Testimonials
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Hear what our clients have to say about working with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-gray-700 p-8 border border-gray-200 dark:border-gray-700 hover:shadow-lg dark:hover:shadow-gray-600 transition-shadow"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">
                    ★
                  </span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed italic">
                &quot;{testimonial.content}&quot;
              </p>

              {/* Author */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                <p className="font-semibold text-black dark:text-white">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
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
