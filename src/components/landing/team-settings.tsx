import { Card } from "./team";

const cards = [
  {
    back: "/assets/images/backLuis.webp",
    asset: "/assets/images/assetTeamLuis.webp",
    name: "Luis Cabral",
    content: "Backend Developer",
    desc: `I'm a Backend Software Engineer specialized in Web Development.`,
    linkedin: "https://www.linkedin.com/in/luis-fernando-cabral-b13847220/",
  },
  {
    back: "/assets/images/backArturo.webp",
    asset: "/assets/images/assetTeamArturo.webp",
    name: "Arturo Claudio",
    content: "Full Stack Developer",
    desc: `I'm an enthusiast for emerging technologies and their practical application.`,
    linkedin: "https://www.linkedin.com/in/sweng1josearturocb/",
  },
  {
    back: "/assets/images/backEsteban.webp",
    asset: "/assets/images/assetTeamEsteban.webp",
    name: "Esteban Pereda",
    content: "Frontend Developer",
    desc: `Passionate for creating compelling and user-centric designs.`,
    linkedin: "https://www.linkedin.com/in/esteban-pereda-78396621b/",
  },
  {
    back: "/assets/images/backDanna.webp",
    asset: "/assets/images/assetTeamDanna.webp",
    name: "Danna Ramos",
    content: "UI/UX Designer",
    desc: `Software Engineering Student 👩🏻‍💻| UI/UX Desinger 🌸💻`,
    linkedin: "https://www.linkedin.com/in/danna-ramos/",
  },
  {
    back: "/assets/images/backPaul.webp",
    asset: "/assets/images/assetTeamPaul.webp",
    name: "Obed Vega",
    content: "Full Stack Developer",
    desc: `I'm a Software Engineer passionate about Web Development.`,
    linkedin: "https://www.linkedin.com/in/swobedvega/",
  },
  {
    back: "/assets/images/backSebastian.webp",
    asset: "/assets/images/assetTeamSebastian.webp",
    name: "Sebastián Ramírez",
    content: "Project Manager",
    desc: `Highly motivated and dedicated Software Engineering Student.`,
    linkedin:
      "https://www.linkedin.com/in/sebasti%C3%A1n-ram%C3%ADrez-salas-505962251/",
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
