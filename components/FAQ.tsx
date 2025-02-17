import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export default function FAQ() {
  return (
    <div className="flex flex-col justify-center gap-5 sm:gap-8 md:gap-12 lg:gap-16 bg-faq-pattern bg-contain bg-no-repeat bg-top mb-12 md:mb-0 min-h-[45vw]">
      <h2 className="font-primary font-semibold text-3xl text-white self-center">
        Frequently asked Question
      </h2>
      <div className="w-full max-w-2xl pr-10 self-end">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>What is The Hive Incubator? </AccordionTrigger>
            <AccordionContent>
              The Hive Incubator is a dynamic startup business incubator located
              in Akure, Nigeria, dedicated to fueling the entrepreneurial spirit
              in the local community. We are not just a space for budding
              businesses; we are a comprehensive ecosystem designed to ignite
              ideas and cultivate innovation. Whether you have a groundbreaking
              idea or an established startup seeking to scale, The Hive
              Incubator is your partner in transforming dreams into reality and
              shaping the future of innovation!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>What does the Incubator offer? </AccordionTrigger>
            <AccordionContent>
              At The Hive Incubator, we provide a rich spectrum of resources and
              support tailored to aspiring entrepreneurs and emerging startups.
              Our offerings are designed to foster innovation, encourage growth,
              and empower you through every step of your entrepreneurial
              journey.
              <ol className="pt-2 font-medium list-decimal list-inside">
                <li>Mentorship</li>
                <li>Financing</li>
                <li>Coach</li>
                <li>Co-working space</li>
                <li>Networking opportunities</li>
                <li>Ready market access</li>
                <li>Workshops and training</li>
              </ol>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>How can I join the Incubator?</AccordionTrigger>
            <AccordionContent>
              The incubator will have programs dedicated to entrepreneurs to
              join. The incubator will require 10% of equity to give you access
              to the benefits depending on the program and the stage of your
              business. For more check (link this to launch lab)
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              I am a freelancer and I want to work from the hub. Can I?
            </AccordionTrigger>
            <AccordionContent>
              The hub will have fees for using the co-working space, this would
              be published and available. We welcome all gigsters to the hive
              and our community
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              How long does the incubator program last?
            </AccordionTrigger>
            <AccordionContent>
              Our programs vary in length, typically ranging from a few months
              to a year. The duration depends on the specific program and the
              stage of your startup. We aim to provide continuous support
              throughout your entrepreneurial journey.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>
              Where is The Hive Incubator located?
            </AccordionTrigger>
            <AccordionContent>
              The Hive Incubator is based in Akure, Nigeria
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
