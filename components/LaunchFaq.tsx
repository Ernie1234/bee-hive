import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export default function LaunchFaq() {
  return (
    <div className="flex flex-col justify-center items-center gap-5 my-16">
      <h2 className="text-[#ffba00] text-5xl font-primary font-semibold">
        FAQ
      </h2>
      <div className="w-full">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>What is LaunchLab? </AccordionTrigger>
            <AccordionContent>
              LaunchLab is a signature event by The Hive Incubator where
              aspiring entrepreneurs and startups have the opportunity to pitch
              their innovative ideas. The event aims to identify and support
              promising ventures by selecting the top five startups to join our
              incubator program.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              Who can participate in LaunchLab?
            </AccordionTrigger>
            <AccordionContent>
              LaunchLab is open to all entrepreneurs, whether you{"'"}re in the
              idea stage, have a prototype, or an early-stage startup. We are
              looking for individuals and teams with unique and impactful ideas
              ready to take the next step.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              How do I apply to pitch at LaunchLab?
            </AccordionTrigger>
            <AccordionContent>
              You can apply to participate in LaunchLab by filling out the
              registration form on our website. Be sure to include a brief
              description of your idea, your team{"'"}s background, and any
              relevant information. Applications will be reviewed, and selected
              participants will be invited to pitch at the event.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              What is the selection process for LaunchLab?
            </AccordionTrigger>
            <AccordionContent>
              After the pitch presentations, a panel of judges, including
              industry experts, investors, and mentors, will evaluate the
              pitches based on criteria such as innovation, market potential,
              and team capability. The top five startups will be selected to
              join our incubator program.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              What do the selected startups receive?
            </AccordionTrigger>
            <AccordionContent>
              The selected startups will gain access to The Hive Incubator{"'"}s
              resources, including mentorship, co-working space, funding
              opportunities, and a supportive community. They will also
              participate in a structured incubation program designed to
              accelerate their growth.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>
              When and where is the LaunchLab event taking place?
            </AccordionTrigger>
            <AccordionContent>
              The LaunchLab event will be held on [date] at [location]. Further
              details, including the schedule and format, will be provided to
              the selected participants.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger>
              What should I prepare for the pitch?
            </AccordionTrigger>
            <AccordionContent>
              Participants should prepare a concise and compelling pitch
              presentation, including an overview of the problem they{"'"}re
              solving, their solution, target market, business model, and team.
              Visual aids like slides are encouraged to enhance the
              presentation.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-8">
            <AccordionTrigger>
              Is there a cost to participate in LaunchLab?
            </AccordionTrigger>
            <AccordionContent>
              No, there is no cost to participate in LaunchLab. The event is
              free for all selected participants, as our goal is to provide a
              platform for entrepreneurs to showcase their ideas and receive
              support.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-9">
            <AccordionTrigger>
              How will I know if I{"'"}ve been selected to pitch?
            </AccordionTrigger>
            <AccordionContent>
              Selected participants will be notified via email with further
              instructions and details about the event. Be sure to check your
              inbox and spam folder for communication from The Hive Incubator.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-9">
            <AccordionTrigger>
              How can I get more information about LaunchLab?
            </AccordionTrigger>
            <AccordionContent>
              For more information about LaunchLab, please contact us through
              our website, email us at [email address], or call us at [phone
              number]. We are happy to answer any questions and provide
              additional details about the event.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
