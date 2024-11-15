import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Portfolio = () => {
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
    {
      name: "Solar Pro",
      url: "#",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&auto=format",
    },
    {
      name: "Green Power",
      url: "#",
      image: "https://images.unsplash.com/photo-1509390874199-d4e0405ebd01?w=800&auto=format",
    },
    {
      name: "Sun Energy",
      url: "#",
      image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&auto=format",
    },
    {
      name: "Eco Solutions",
      url: "#",
      image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=800&auto=format",
    },
    {
      name: "Solar Future",
      url: "#",
      image: "https://images.unsplash.com/photo-1497354829124-d3d0cb664056?w=800&auto=format",
    },
    {
      name: "Power Plus",
      url: "#",
      image: "https://images.unsplash.com/photo-1497211419994-14ae40a3c7a3?w=800&auto=format",
    },
  ];

  return (
    <section className="section-padding bg-muted">
      <div className="container mx-auto container-padding">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-on-scroll">
          Nasze realizacje
        </h2>
        <Carousel className="max-w-5xl mx-auto">
          <CarouselContent>
            {portfolio.map((item) => (
              <CarouselItem key={item.name} className="md:basis-1/3">
                <a
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
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Portfolio;