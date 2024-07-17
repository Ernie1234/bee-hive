import { getEntrepreneurById } from "@/actions/admin";
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
      <Table className="max-w-screen-xl mx-auto">
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
          {entre.teamMemberRole && (
            <TableRow>
              <TableCell>
                Have you developed a prototype or proof of concept? (Yes/No)
              </TableCell>
              <TableCell>{entre.devPrototype}</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
