const About = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container mx-auto container-padding">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <img
              src="https://images.unsplash.com/photo-1556157382-97eda2d62296?w=800&auto=format"
              alt="Expert"
              className="rounded-xl shadow-lg"
            />
          </div>
          <div className="animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ekspert w branży OZE
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Z ponad 5-letnim doświadczeniem w marketingu internetowym dla branży odnawialnych źródeł energii, 
              specjalizuję się w tworzeniu stron internetowych, które skutecznie generują leady sprzedażowe.
            </p>
            <p className="text-lg text-gray-600">
              Współpracowałem z czołowymi firmami w branży, pomagając im zwiększyć sprzedaż poprzez 
              optymalizację ich obecności online i tworzenie skutecznych ścieżek konwersji.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;