import { Carousel, Card } from "./carousel";

const UseCarousel = () => {
  const cards = [
    {
      asset: "/assets/images/Barrios.webp",
      title: "Lizeth Barrios",
      subtitle: "Medical Oncologist",
      content:
        '"I find really useful to bring the cancer patients their medical information and progress in one single place."',
    },
    {
      asset: "/assets/images/Vega.webp",
      title: "Valeria Vega",
      subtitle: "Nursing Assistant",
      content: `"I think that this application would ease the tracking when dealing with patients since a lot of times it's difficult to give continuity to their progression "`,
    },
  ];

  return (
    <div className="cards-carousel my-6">
      <Carousel>
        {cards.map((card, i) => (
          <Card
            key={i}
            asset={card.asset}
            title={card.title}
            subtitle={card.subtitle}
            content={card.content}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default UseCarousel;
