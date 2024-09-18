import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";

type CardProps = {
  back: string;
  asset: string;
  name: string;
  content: string;
  desc: string;
  linkedin: string;
};

export const Card = ({
  back,
  asset,
  name,
  content,
  desc,
  linkedin,
}: CardProps) => (
  <div className="relative flex flex-col items-center p-2 bg-white border transition duration-300 ease-in-out rounded-2xl shadow-md border-gray-200 hover:shadow-xl overflow-hidden">
    <Image
      className="absolute top-0 object-cover aspect-[10/2] h-auto w-full"
      src={back}
      alt={`background-${name}`}
      width={480}
      height={480}
    />
    <div className="relative">
      <Image
        className="object-cover h-24 w-24 aspect-square rounded-full shadow-md mb-2 border-white border-2"
        src={asset}
        alt={`team-${name}`}
        width={480}
        height={480}
      />
      <div className="absolute w-4 h-4 right-[10px] bottom-[10px] border-white border-2 rounded-full bg-green-500" />
    </div>
    <h4 className="text-xl font-bold text-gray-900">{name}</h4>
    <p className="text-base text-gray-600 font-semibold text-center mb-1">
      {content}
    </p>
    <p className="text-gray-600 font-normal text-center mb-2">{desc}</p>
    <a
      href={linkedin}
      target="_blank"
      className="flex justify-center items-center rounded-lg gap-2 w-auto px-3 py-2 bg-[#0288d1] text-white hover:bg-[#076fa3]"
    >
      <span className="font-semibold">LinkedIn</span>
      <FaLinkedin size={20} />
    </a>
  </div>
);
