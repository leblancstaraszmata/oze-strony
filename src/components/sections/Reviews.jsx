import { Star } from "lucide-react";

const Reviews = () => {
  const rating = 4.9;
  const reviewCount = 48;

  const testimonials = [
    {
      text: "Strona internetowa, którą dla nas stworzyli, znacząco zwiększyła liczbę leadów. Profesjonalna obsługa i szybka realizacja.",
      author: "Marek Kowalski",
      company: "Solar Energy Pro",
      rating: 5
    },
    {
      text: "Świetna współpraca i doskonałe efekty. Nasza konwersja wzrosła o 150% w ciągu pierwszego miesiąca.",
      author: "Anna Nowak",
      company: "EKO Instalacje",
      rating: 5
    },
    {
      text: "Bardzo dobry kontakt i profesjonalne podejście. Strona została wykonana zgodnie z naszymi oczekiwaniami i w ekspresowym tempie.",
      author: "Piotr Wiśniewski",
      company: "Green Power Solutions",
      rating: 5
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-on-scroll">
            Co mówią klienci?
          </h2>
          
          <div className="space-y-8">
            {/* Testimonials */}
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="glass-card rounded-xl p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4">{testimonial.text}</p>
                  <div className="mt-auto">
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Overall Rating Card */}
            <div className="glass-card rounded-xl p-8 max-w-sm mx-auto text-center">
              <div className="flex justify-center items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-6 h-6 ${
                      i < Math.floor(rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <div className="text-3xl font-bold mb-2">{rating}/5.0</div>
              <p className="text-gray-600">Na podstawie {reviewCount} opinii</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;