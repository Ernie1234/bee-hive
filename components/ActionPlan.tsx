import { Separator } from "./ui/separator";

export default function ActionPlan() {
  return (
    <div className="my-20 sm:mt-24 md:mt-28">
      <div className="flex justify-center flex-col items-center">
        <h2 className="text-[#ffba00] text-5xl font-primary font-semibold">
          ACTION PLAN
        </h2>
        <div className="mb-8 flex justify-center items-center flex-col">
          <p className="text-2xl font-primary text-center">
            O l{"'"}oun t{"'"}awa se n{"'"}yara je k{"'"}abere - Fela
          </p>
          <p className="">Let us start what we came to the room to do.</p>
        </div>
        <Separator className="my-0 w-24 mb-8 bg-[#ffba00]" />
        <p className="font-display text-lg text-center">
          The implementation plan plays a vital role in the successful launch of
          The Hive Incubator. This part will detail all the essential steps and
          tasks required before the business{"'"}s official launch. While
          nothing is finalized, preparations have been made to ensure a smooth
          start
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-20 mt-8">
        <div className="flex flex-col gap-3">
          <div className="text-5xl">🏗️</div>
          <h5 className="text-3xl font-primary capitalize">
            Stakeholder Building
          </h5>
          <p className="text-xl text-amber-100 font-display">
            Presentations to coaches, mentors, investors and other partners.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <div className="text-5xl">🛰️</div>
          <h5 className="text-3xl font-primary capitalize">
            Co-Working Space Upgrade
          </h5>
          <p className="text-xl text-amber-100 font-display">
            Upgrading the existing co-working space to meet world class
            standard. Expected to be complete September.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <div className="text-5xl">🥇</div>
          <h5 className="text-3xl font-primary capitalize">
            First-Mix Cohort 10 Startups
          </h5>
          <p className="text-xl text-amber-100 font-display">
            Upgrading the existing co-working space to meet world class
            standard. Expected to be complete September.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <div className="text-5xl">🚀</div>
          <h5 className="text-3xl font-primary capitalize">Official Launch</h5>
          <p className="text-xl text-amber-100 font-display">
            Between August and December, we want to get partners and network.
            Build relationships and go to press with our UVP.
          </p>
        </div>
      </div>
    </div>
  );
}
