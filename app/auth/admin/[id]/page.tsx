import { getEntrepreneurById } from "@/actions/admin";
import EmailBtn from "@/components/EmailBtn";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

export default async function page({ params }: { params: { id: string } }) {
  const id = params.id;

  const entre = await getEntrepreneurById(id);

  if (entre === null) {
    return <div className="mt-16 mx-auto text-xl">No Entrepreneur yet!</div>;
  }

  return (
    <div className="py-8">
      <div className="">
        <h1 className="text-4xl text-center">Admin Dashboard</h1>
        <div className="flex gap-6 justify-center mt-4">
          <div
            className={cn(
              "bg-muted-foreground/10 bg-none px-8 py-2 rounded-full cursor-pointer"
            )}
          >
            {entre.businessName}
          </div>
        </div>
      </div>
      <Table className="max-w-screen-xl mx-auto border rounded-lg">
        {/* <TableCaption>A list of your recent commodity.</TableCaption> */}
        <TableHeader>
          <TableRow>
            <TableHead>Question</TableHead>
            <TableHead>Response</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="px-8">
          <TableRow>
            <TableCell>Full Name</TableCell>
            <TableCell>{entre.fullName}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Email Address</TableCell>
            <TableCell>{entre.email}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Phone Number</TableCell>
            <TableCell>{entre.phone}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Residential Address</TableCell>
            <TableCell>{entre.address}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Educational Background</TableCell>
            <TableCell>{entre.bckGround}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Work Experience</TableCell>
            <TableCell>{entre.experience}</TableCell>
          </TableRow>
          {entre.businessName && (
            <TableRow>
              <TableCell>Business Name</TableCell>
              <TableCell>{entre.businessName}</TableCell>
            </TableRow>
          )}
          {entre.businessDesc && (
            <TableRow>
              <TableCell>
                Describe your business idea in a few sentences
              </TableCell>
              <TableCell>{entre.businessDesc}</TableCell>
            </TableRow>
          )}
          {entre.businessAim && (
            <TableRow>
              <TableCell>
                What problem does your business aim to solve?
              </TableCell>
              <TableCell>{entre.businessAim}</TableCell>
            </TableRow>
          )}
          {entre.businessTarget && (
            <TableRow>
              <TableCell>Who is your target market?</TableCell>
              <TableCell>{entre.businessTarget}</TableCell>
            </TableRow>
          )}
          {entre.businessPlan && (
            <TableRow>
              <TableCell>Do you have a business plan? (Yes/No)</TableCell>
              <TableCell>{entre.businessPlan}</TableCell>
            </TableRow>
          )}
          {entre.stage && (
            <TableRow>
              <TableCell>What stage is your business currently at?</TableCell>
              <TableCell>{entre.stage}</TableCell>
            </TableRow>
          )}
          {entre.teamMember && (
            <TableRow>
              <TableCell>
                How many team members are currently involved in your startup?
              </TableCell>
              <TableCell>{entre.teamMember}</TableCell>
            </TableRow>
          )}
          {entre.teamMemberRole && (
            <TableRow>
              <TableCell>List the core team members and their roles</TableCell>
              <TableCell>{entre.teamMemberRole}</TableCell>
            </TableRow>
          )}
          {entre.devPrototype && (
            <TableRow>
              <TableCell>
                Have you developed a prototype or proof of concept? (Yes/No)
              </TableCell>
              <TableCell>{entre.devPrototype}</TableCell>
            </TableRow>
          )}
          {entre.businessFin && (
            <TableRow>
              <TableCell>
                Do you have a financial plan or projection for the next 1-2
                years? (Yes/No)
              </TableCell>
              <TableCell>{entre.businessFin}</TableCell>
            </TableRow>
          )}
          {entre.businessFinDetails && (
            <TableRow>
              <TableCell>If yes, please provide a brief overview.</TableCell>
              <TableCell>{entre.businessFinDetails}</TableCell>
            </TableRow>
          )}
          {entre.businessVal && (
            <TableRow>
              <TableCell>
                Have you conducted any market research or validation for your
                idea? (Yes/No)
              </TableCell>
              <TableCell>{entre.businessVal}</TableCell>
            </TableRow>
          )}
          {entre.businessValDetails && (
            <TableRow>
              <TableCell>If yes, please provide details.</TableCell>
              <TableCell>{entre.businessValDetails}</TableCell>
            </TableRow>
          )}
          {entre.PrototypeTeamMember && (
            <TableRow>
              <TableCell>What stage is your business currently at?</TableCell>
              <TableCell>{entre.PrototypeTeamMember}</TableCell>
            </TableRow>
          )}
          {entre.PrototypeTeamMember && (
            <TableRow>
              <TableCell>
                How many team members are currently involved in your startup?
              </TableCell>
              <TableCell>{entre.PrototypeTeamMember}</TableCell>
            </TableRow>
          )}
          {entre.PrototypeTeamMemberRole && (
            <TableRow>
              <TableCell>List the core team members and their roles</TableCell>
              <TableCell>{entre.PrototypeTeamMemberRole}</TableCell>
            </TableRow>
          )}
          {entre.prototyDevPrototype && (
            <TableRow>
              <TableCell>
                Have you developed a working prototype or proof of concept?
                (Yes/No)
              </TableCell>
              <TableCell>{entre.prototyDevPrototype}</TableCell>
            </TableRow>
          )}
          {entre.prototypeDevPrototypeDetails && (
            <TableRow>
              <TableCell>If yes, please describe it briefly.</TableCell>
              <TableCell>{entre.prototypeDevPrototypeDetails}</TableCell>
            </TableRow>
          )}
          {entre.prototypeFin && (
            <TableRow>
              <TableCell>Have you received any funding so far?</TableCell>
              <TableCell>{entre.prototypeFin}</TableCell>
            </TableRow>
          )}
          {entre.prototypeFinDetails && (
            <TableRow>
              <TableCell>
                If yes, please specify the amount and source of funding
              </TableCell>
              <TableCell>{entre.prototypeFinDetails}</TableCell>
            </TableRow>
          )}
          {entre.prototypeFinProj && (
            <TableRow>
              <TableCell>
                Do you have a financial plan or projection for the next 1-2
                years?
              </TableCell>
              <TableCell>{entre.prototypeFinProj}</TableCell>
            </TableRow>
          )}
          {entre.prototypeFinProjDetails && (
            <TableRow>
              <TableCell>If yes, please provide a brief overview.</TableCell>
              <TableCell>{entre.prototypeFinProjDetails}</TableCell>
            </TableRow>
          )}
          {entre.prototypeVal && (
            <TableRow>
              <TableCell>
                Do you have any potential customers or users?
              </TableCell>
              <TableCell>{entre.prototypeVal}</TableCell>
            </TableRow>
          )}
          {entre.prototypeValDetails && (
            <TableRow>
              <TableCell>If yes, please provide details.</TableCell>
              <TableCell>{entre.prototypeValDetails}</TableCell>
            </TableRow>
          )}
          {entre.prototypeMarket && (
            <TableRow>
              <TableCell>
                Have you conducted any market research or validation for your
                prototype?
              </TableCell>
              <TableCell>{entre.prototypeMarket}</TableCell>
            </TableRow>
          )}
          {entre.prototypeMarketDetails && (
            <TableRow>
              <TableCell>If yes, please provide details.</TableCell>
              <TableCell>{entre.prototypeMarketDetails}</TableCell>
            </TableRow>
          )}
          {entre.GrowthTeamMember && (
            <TableRow>
              <TableCell>
                How many team members are currently involved in your startup?
              </TableCell>
              <TableCell>{entre.GrowthTeamMember}</TableCell>
            </TableRow>
          )}
          {entre.GrowthTeamMemberRole && (
            <TableRow>
              <TableCell>List the core team members and their roles</TableCell>
              <TableCell>{entre.GrowthTeamMemberRole}</TableCell>
            </TableRow>
          )}
          {entre.growthDevPrototype && (
            <TableRow>
              <TableCell>
                Have you developed a working prototype or proof of concept?
              </TableCell>
              <TableCell>{entre.growthDevPrototype}</TableCell>
            </TableRow>
          )}
          {entre.growthDevPrototypeDetails && (
            <TableRow>
              <TableCell>If yes, please provide details.</TableCell>
              <TableCell>{entre.growthDevPrototypeDetails}</TableCell>
            </TableRow>
          )}
          {entre.GrowthFin && (
            <TableRow>
              <TableCell>Have you received any funding so far?</TableCell>
              <TableCell>{entre.GrowthFin}</TableCell>
            </TableRow>
          )}
          {entre.GrowthFinDetails && (
            <TableRow>
              <TableCell>
                If yes, please specify the amount and source of funding
              </TableCell>
              <TableCell>{entre.GrowthFinDetails}</TableCell>
            </TableRow>
          )}
          {entre.GrowthRevenue && (
            <TableRow>
              <TableCell>What is your current revenue (if any)?</TableCell>
              <TableCell>{entre.GrowthRevenue}</TableCell>
            </TableRow>
          )}
          {entre.GrowthFinProj && (
            <TableRow>
              <TableCell>
                Do you have a financial plan or projection for the next 1-2
                years?
              </TableCell>
              <TableCell>{entre.GrowthFinProj}</TableCell>
            </TableRow>
          )}
          {entre.GrowthFinProjDetails && (
            <TableRow>
              <TableCell>If yes, please provide a brief overview.</TableCell>
              <TableCell>{entre.GrowthFinProjDetails}</TableCell>
            </TableRow>
          )}
          {entre.GrowthVal && (
            <TableRow>
              <TableCell>
                Do you have any potential customers or users?
              </TableCell>
              <TableCell>{entre.GrowthVal}</TableCell>
            </TableRow>
          )}
          {entre.GrowthValDetails && (
            <TableRow>
              <TableCell>If yes, please provide details.</TableCell>
              <TableCell>{entre.GrowthValDetails}</TableCell>
            </TableRow>
          )}
          {entre.GrowthMarket && (
            <TableRow>
              <TableCell>
                Have you conducted any market research or validation for your
                Growtheee?
              </TableCell>
              <TableCell>{entre.GrowthMarket}</TableCell>
            </TableRow>
          )}
          {entre.GrowthMarketDetails && (
            <TableRow>
              <TableCell>If yes, please provide details.</TableCell>
              <TableCell>{entre.GrowthMarketDetails}</TableCell>
            </TableRow>
          )}
          {entre.exp1 && (
            <TableRow>
              <TableCell>
                Why do you want to join the Beehive Park Incubator?
              </TableCell>
              <TableCell>{entre.exp1}</TableCell>
            </TableRow>
          )}
          {entre.exp2 && (
            <TableRow>
              <TableCell>
                What specific support or resources are you looking for from the
                incubator?
              </TableCell>
              <TableCell>{entre.exp2}</TableCell>
            </TableRow>
          )}
          {entre.exp3 && (
            <TableRow>
              <TableCell>
                What are your main objectives for the incubator program?
              </TableCell>
              <TableCell>{entre.exp3}</TableCell>
            </TableRow>
          )}
          {entre.info1 && (
            <TableRow>
              <TableCell>
                Are you willing to commit to the full duration of the program
                (6-12 months) in Akure, Ondo State?
              </TableCell>
              <TableCell>{entre.info1}</TableCell>
            </TableRow>
          )}
          {entre.info2 && (
            <TableRow>
              <TableCell>
                Is there any other information you would like to provide that
                would support your application?
              </TableCell>
              <TableCell>{entre.info2}</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <EmailBtn userEmail={entre.email} />
    </div>
  );
}
