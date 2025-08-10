"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Maria Rodriguez",
      business: "Mama's Kitchen Restaurant",
      avatar: "👩‍🍳",
      rating: 5,
      review: "WebCraft transformed our restaurant's online presence! We went from zero online orders to 40+ daily orders within just 2 weeks of launching. The WhatsApp integration is a game-changer for customer communication."
    },
    {
      name: "Mike Johnson",
      business: "FitZone Gym",
      avatar: "💪",
      rating: 5,
      review: "Outstanding work! The website looks professional and modern. Our new member sign-ups increased by 200% since the launch. The booking system works flawlessly, and customers love the easy navigation."
    },
    {
      name: "Sarah Chen",
      business: "Glamour Hair Salon",
      avatar: "✂️",
      rating: 5,
      review: "I couldn't be happier with my new website! It's exactly what I envisioned. The online booking feature reduced my administrative work significantly, and the beautiful gallery showcases our work perfectly."
    },
    {
      name: "David Thompson",
      business: "AutoCare Garage",
      avatar: "🔧",
      rating: 5,
      review: "Professional, fast, and affordable. John delivered everything he promised within the 7-day timeline. The Google Maps integration helps customers find us easily, and the contact forms work perfectly."
    },
    {
      name: "Lisa Patel",
      business: "Sweet Treats Bakery",
      avatar: "🧁",
      rating: 5,
      review: "The website exceeded my expectations! The design is beautiful and captures our brand perfectly. Online cake orders have tripled since launch. Highly recommended for any local business!"
    },
    {
      name: "Carlos Rivera",
      business: "Rivera's Electronics",
      avatar: "📱",
      rating: 5,
      review: "Fantastic experience from start to finish. The website is fast, mobile-friendly, and easy to update. Customer inquiries through WhatsApp have made communication so much smoother."
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            What Our <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what local business owners say about working with us.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <CardContent className="p-6">
                  {/* Rating Stars */}
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Review Text */}
                  <blockquote className="text-gray-600 italic mb-6 text-center leading-relaxed">
                    "{testimonial.review}"
                  </blockquote>

                  {/* Client Info */}
                  <div className="text-center">
                    <div className="text-4xl mb-2">{testimonial.avatar}</div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.business}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-gray-600 mb-6">
              Let's discuss how we can help your business grow online.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get Your Free Consultation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}