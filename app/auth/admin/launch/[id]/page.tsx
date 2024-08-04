import { getLaunchById } from "@/actions/admin";
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

  const launch = await getLaunchById(id);
  console.log(launch);

  if (launch === null) {
    return <div className="mt-16 mx-auto text-xl">No Launch details yet!</div>;
  }

  return (
    <div className="py-8">
      <div className="">
        <h1 className="text-4xl text-center">Admin Dashboard</h1>
        <div className="flex gap-6 justify-center mt-4">
          <div
            className={cn(
              "bg-muted-foreground/10 bg-none px-8 py-2 rounded-full mb-8"
            )}
          >
            Launch Application Details
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
            <TableCell>{launch.fullName}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Email Address</TableCell>
            <TableCell>{launch.email}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Phone Number</TableCell>
            <TableCell>{launch.phone}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Age Range</TableCell>
            <TableCell>{launch.age}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell>Business Residence in Akure?</TableCell>
            <TableCell>{launch.businessResidence}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Business name</TableCell>
            <TableCell>{launch.businessName}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Business Idea</TableCell>
            <TableCell>{launch.businessIdea}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Business Aim</TableCell>
            <TableCell>{launch.businessAim}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Business Plan</TableCell>
            <TableCell>{launch.businessPlan}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Business Stage</TableCell>
            <TableCell>{launch.businessCurrently}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Uniqueness of business</TableCell>
            <TableCell>{launch.unique}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>The problem the business is solving</TableCell>
            <TableCell>{launch.problemSolving}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Team Member</TableCell>
            <TableCell>{launch.teamMember}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              Do you agree to remain in Akure for the duration of the Incubator?
            </TableCell>
            <TableCell>{launch.remainInAkure}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
