import { Check, X } from "lucide-react";

const Comparison = () => {
  const features = [
    {
      name: "Realizacja w 48h",
      us: true,
      others: false,
    },
    {
      name: "Hosting i domena w cenie",
      us: true,
      others: false,
    },
    {
      name: "Certyfikat SSL",
      us: true,
      others: false,
    },
    {
      name: "Optymalizacja pod konwersję",
      us: true,
      others: false,
    },
    {
      name: "Unikalne projekty",
      us: true,
      others: false,
    },
  ];

  return (
    <section className="section-padding bg-muted">
      <div className="container mx-auto container-padding">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-on-scroll">
          Porównanie ofert
        </h2>
        <div className="max-w-3xl mx-auto glass-card rounded-xl p-8">
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="col-span-1"></div>
            <div className="text-center font-bold">Nasza oferta</div>
            <div className="text-center font-bold">Konkurencja</div>
          </div>
          {features.map((feature) => (
            <div key={feature.name} className="grid grid-cols-3 gap-4 py-4 border-t">
              <div>{feature.name}</div>
              <div className="text-center">
                {feature.us ? (
                  <Check className="inline-block w-6 h-6 text-green-500" />
                ) : (
                  <X className="inline-block w-6 h-6 text-red-500" />
                )}
              </div>
              <div className="text-center">
                {feature.others ? (
                  <Check className="inline-block w-6 h-6 text-green-500" />
                ) : (
                  <X className="inline-block w-6 h-6 text-red-500" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Comparison;