import { Star } from "lucide-react";

const Reviews = () => {
  const rating = 4.9;
  const reviewCount = 48;

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 animate-on-scroll">
            Co mówią klienci?
          </h2>
          <div className="glass-card rounded-xl p-8 mb-8">
            <div className="flex justify-center items-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-8 h-8 ${
                    i < Math.floor(rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <div className="text-4xl font-bold mb-2">{rating}/5.0</div>
            <p className="text-gray-600">Na podstawie {reviewCount} opinii</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;