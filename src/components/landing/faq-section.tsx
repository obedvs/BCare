import Image from "next/image";

import { HiLightningBolt, HiStar } from "react-icons/hi";

const tabs = [
  {
    name: "How does the blockchain tracking work?",
    description:
      "In B-Care we securely record and store patient data using blockchain technology, assigning a unique contract to represent each process of treatment in their sickness.",
    icon: HiLightningBolt,
  },
  {
    name: "How is patient privacy and data security maintained?",
    description:
      "We prioritize patient privacy and data security. We use encryption and blockchain to protect data.",
    icon: HiStar,
  },
  {
    name: "How does B-care benefit cancer patients?",
    description:
      "B-care empowers patients by providing a transparent record of their journey, enabling them to track progress and monitor treatment effectiveness.",
    icon: HiLightningBolt,
  },
  {
    name: "Does it have any cost?",
    description:
      "We plan to sell this services to insurance companies so they will take the cost and be brought as a feature in their services.",
    icon: HiStar,
  },
  {
    name: "Is it hard to use?",
    description:
      "We plan to make it as easy to use as possible provided the fact that it will be used by people of all ages.",
    icon: HiLightningBolt,
  },
];

export default function FAQ() {
  return (
    <section id="FAQ" className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="absolute inset-0 bg-gray-100 pointer-events-none mb-16"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-6 md:pt-10">
          {/* Section content */}
          <div className="md:grid md:grid-cols-2 md:gap-4">
            {/* Content */}
            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto col-span-1 md:mt-6"
              data-aos="fade-right"
            >
              <div className="mb-4 mx-2 text-center">
                <h2 className="text-4xl font-extrabold mb-2">FAQ</h2>
                <p className="text-xl text-gray-600">
                  Answers to Your Most Commonly Asked Questions
                </p>
              </div>
              {/* Tabs */}
              <div className="mb-8 md:mb-0">
                {tabs.map((tab, i) => (
                  <div
                    key={i}
                    className="flex items-center text-lg p-4 rounded border transition duration-300 ease-in-out mb-2 bg-white shadow-md border-gray-200 hover:shadow-lg"
                  >
                    <div>
                      <div className="font-bold leading-snug tracking-tight mb-2">
                        {tab.name}
                      </div>
                      <div className="text-gray-600">{tab.description}</div>
                    </div>
                    <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-2">
                      <tab.icon size={16} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tabs items */}
            <div
              className="md:flex hidden h-full w-full col-span-1 pb-3"
              data-aos="zoom-y-out"
            >
              <div className="h-full w-full relative inline-flex flex-col bg-white rounded shadow-xl">
                <Image
                  className="rounded object-cover h-full w-auto"
                  src="/assets/images/FAQ.webp"
                  alt="Features bg"
                  height={1015}
                  width={1528}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
