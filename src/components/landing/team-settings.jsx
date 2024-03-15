import { Card } from './team';
import Team_Luis from '@/assets/images/assetTeamLuis.webp';
import Team_Arturo from '@/assets/images/assetTeamArturo.webp';
import Team_Esteban from '@/assets/images/assetTeamEsteban.webp';
import Team_Danna from '@/assets/images/assetTeamDanna.webp';
import Team_Paul from '@/assets/images/assetTeamPaul.webp';
import Team_Sebastian from '@/assets/images/assetTeamSebastian.webp';

import BackLuis from '@/assets/images/backLuis.webp'
import BackArturo from '@/assets/images/backArturo.webp'
import BackEsteban from '@/assets/images/backEsteban.webp'
import BackDanna from '@/assets/images/backDanna.webp'
import BackPaul from '@/assets/images/backPaul.webp'
import BackSebastian from '@/assets/images/backSebastian.webp'

const cards = [
  {
    back: BackLuis,
    asset: Team_Luis,
    name: 'Luis Cabral',
    content: 'Backend Developer',
    desc: `I'm a Backend Software Engineer specialized in Web Development.`,
    linkedin: 'https://www.linkedin.com/in/luis-fernando-cabral-b13847220/',
  },
  {
    back: BackArturo,
    asset: Team_Arturo,
    name: 'Arturo Claudio',
    content: 'Full Stack Developer',
    desc: `I'm an enthusiast for emerging technologies and their practical application.`,
    linkedin: 'https://www.linkedin.com/in/sweng1josearturocb/',
  },
  {
    back: BackEsteban,
    asset: Team_Esteban,
    name: 'Esteban Pereda',
    content: 'Frontend Developer',
    desc: `Passionate for creating compelling and user-centric designs.`,
    linkedin: 'https://www.linkedin.com/in/esteban-pereda-78396621b/',
  },
  {
    back: BackDanna,
    asset: Team_Danna,
    name: 'Danna Ramos',
    content: 'UI/UX Designer',
    desc: `Software Engineering Student 👩🏻‍💻| UI/UX Desinger 🌸💻`,
    linkedin: 'https://www.linkedin.com/in/danna-ramos/',
  },
  {
    back: BackPaul,
    asset: Team_Paul,
    name: 'Obed Vega',
    content: 'Full Stack Developer',
    desc: `I'm a Software Engineer passionate about Web Development.`,
    linkedin: 'https://www.linkedin.com/in/swobedvega/',
  },
  {
    back: BackSebastian,
    asset: Team_Sebastian,
    name: 'Sebastián Ramírez',
    content: 'Project Manager',
    desc: `Highly motivated and dedicated Software Engineering Student.`,
    linkedin: 'https://www.linkedin.com/in/sebasti%C3%A1n-ram%C3%ADrez-salas-505962251/',
  },
  // Add more cards here
];

const UseTeamCard = () => {

  return (
    <div className="max-w-sm mx-auto grid gap-4 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
        {cards.map((card, i) => (
            <Card
                key={i}
                back={card.back}
                asset={card.asset}
                name={card.name}
                content={card.content}
                desc={card.desc}
                linkedin={card.linkedin}
            />
        ))}
    </div>
  );
};

export default UseTeamCard;
