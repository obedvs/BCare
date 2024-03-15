import { Carousel, Card } from './carousel';
import Vega from '@/assets/images/Vega.webp'
import Barrios from '@/assets/images/Barrios.webp'

const UseCarousel = () => {
  const cards = [
    {
      asset:  Barrios,
      title: 'Lizeth Barrios',
      subtitle: 'Medical Oncologist',
      content: '"I find really useful to bring the cancer patients their medical information and progress in one single place."',
    },
    {
      asset: Vega,
      title: 'Valeria Vega',
      subtitle: 'Nursing Assistant',
      content: `"I think that this application would ease the tracking when dealing with patients since a lot of times it's difficult to give continuity to their progression "`,
    },

    // Add more cards here
  ];

  return (
    <div className='cards-carousel my-6'>
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