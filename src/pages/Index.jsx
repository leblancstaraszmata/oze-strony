import { useEffect } from "react";
import { ArrowRight, CheckCircle, Clock, Users, Zap } from "lucide-react";

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

  const portfolio = [
    {
      name: "Columbus Energy",
      url: "https://columbusenergy.pl/dla-domu/fotowoltaika/",
      image: "/columbus.png",
    },
    {
      name: "Dobra Energia",
      url: "https://dobraenergia.tech",
      image: "/dobra-energia.png",
    },
    {
      name: "E.ON",
      url: "https://eon.pl/dla-domu",
      image: "/eon.png",
    },
  ];

  const process = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Konsultacja i analiza potrzeb",
      description: "Bezpłatna rozmowa o Twoich celach i wymaganiach",
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Oferta i płatność",
      description: "Przedstawienie propozycji i szybka płatność online",
    },
    {
      icon: <Zap className="w-6 h-6" />,
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

      {/* Portfolio Section */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto container-padding">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-on-scroll">
            Nasze realizacje
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((item) => (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block animate-on-scroll"
              >
                <div className="glass-card rounded-xl overflow-hidden transition-transform hover:scale-105">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-lg">{item.name}</h3>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-on-scroll">
            Jak wygląda współpraca?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {process.map((step, index) => (
              <div
                key={step.title}
                className="glass-card rounded-xl p-6 text-center animate-on-scroll"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto container-padding">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-on-scroll">
            Dlaczego warto?
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="glass-card rounded-xl p-6 animate-on-scroll">
              <h3 className="text-xl font-semibold mb-2">
                Strony tworzone przez marketingowca
              </h3>
              <p className="text-gray-600">
                Treści i układ elementów są zaprojektowane z myślą o generowaniu jak największej ilości zapytań
              </p>
            </div>
            <div className="glass-card rounded-xl p-6 animate-on-scroll">
              <h3 className="text-xl font-semibold mb-2">
                Unikalne projekty
              </h3>
              <p className="text-gray-600">
                Każda strona jest nieszablonowa i tworzona od zera, dostosowana do Twoich potrzeb
              </p>
            </div>
          </div>
        </div>
      </section>

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