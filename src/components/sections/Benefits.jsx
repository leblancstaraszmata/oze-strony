import { CheckCircle, Users, Zap } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Strony tworzone przez marketingowca",
      description: "Treści i układ elementów są zaprojektowane z myślą o generowaniu jak największej ilości zapytań",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Unikalne projekty",
      description: "Każda strona jest nieszablonowa i tworzona od zera, dostosowana do Twoich potrzeb",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Kompleksowa obsługa",
      description: "Hosting, domena i certyfikat SSL w cenie - zero ukrytych kosztów",
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-on-scroll">
          Dlaczego warto?
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="glass-card rounded-xl p-6 text-center animate-on-scroll"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;