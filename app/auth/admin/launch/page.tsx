import { getAllLaunchApplications } from "@/actions/admin";
import LaunchAdmin from "@/components/LaunchAdmin";
import Navbar from "@/components/Navbar";

export default async function page() {
  const launch = await getAllLaunchApplications();

  if (launch.length === 0 || null) {
    return <div className="mt-16 mx-auto text-xl">No Application yet!</div>;
  }

  return <LaunchAdmin launch={launch} />;
}
