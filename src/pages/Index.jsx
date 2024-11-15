import { useEffect } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import Portfolio from "@/components/sections/Portfolio";
import Benefits from "@/components/sections/Benefits";
import Comparison from "@/components/sections/Comparison";
import Reviews from "@/components/sections/Reviews";
import About from "@/components/sections/About";

const Index = () => {
  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
    });

    document.querySelectorAll(".animate-on-scroll").forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const prices = [
    {
      name: "Strona One-page",
      price: "800 zł",
      monthly: "mniej niż 70 zł miesięcznie",
      features: [
        "Strona główna z wszystkimi niezbędnymi sekcjami",
        "Hosting i domena w cenie",
        "Certyfikat SSL",
        "Brak dodatkowych kosztów",
        "Realizacja w 48h",
      ],
    },
    {
      name: "Strona 5-podstron",
      price: "1200 zł",
      monthly: "100 zł miesięcznie",
      features: [
        "5 spersonalizowanych podstron",
        "Hosting i domena w cenie",
        "Certyfikat SSL",
        "Brak dodatkowych kosztów",
        "Realizacja w 48h",
      ],
    },
  ];

  const process = [
    {
      title: "Konsultacja i analiza potrzeb",
      description: "Bezpłatna rozmowa o Twoich celach i wymaganiach",
    },
    {
      title: "Oferta i płatność",
      description: "Przedstawienie propozycji i szybka płatność online",
    },
    {
      title: "Realizacja w 48h",
      description: "Błyskawiczne wdrożenie Twojej nowej strony",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-green-50 to-white section-padding">
        <div className="container mx-auto container-padding">
          <div className="max-w-3xl mx-auto text-center animate-on-scroll">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Strony internetowe dla branży OZE, które generują leady
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Profesjonalne strony internetowe stworzone przez marketingowca, z gwarancją realizacji w 48 godzin
            </p>
            <a
              href="https://meetings-eu1.hubspot.com/meetings/bachowski-konrad/konsultacja-strona-dla-oze"
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Umów bezpłatną konsultację
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-on-scroll">
            Przejrzyste ceny bez ukrytych kosztów
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {prices.map((plan) => (
              <div
                key={plan.name}
                className="glass-card rounded-xl p-8 animate-on-scroll"
              >
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-sm text-gray-600 block">
                    rocznie ({plan.monthly})
                  </span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-primary mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://meetings-eu1.hubspot.com/meetings/bachowski-konrad/konsultacja-strona-dla-oze"
                  className="block text-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Zamów teraz
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Portfolio />
      <Benefits />
      <Comparison />
      <Reviews />
      <About />

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container mx-auto container-padding text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll">
            Gotowy na zwiększenie liczby leadów?
          </h2>
          <p className="text-xl mb-8 animate-on-scroll">
            Umów bezpłatną konsultację i rozpocznij współpracę już dziś
          </p>
          <a
            href="https://meetings-eu1.hubspot.com/meetings/bachowski-konrad/konsultacja-strona-dla-oze"
            className="inline-flex items-center px-8 py-4 bg-white text-primary rounded-lg hover:bg-gray-100 transition-colors animate-on-scroll"
            target="_blank"
            rel="noopener noreferrer"
          >
            Zarezerwuj termin konsultacji
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Index;