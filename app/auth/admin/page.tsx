import { getAllEntrepreneur, getAllCoach } from "@/actions/admin";
import Admin from "@/components/Admin";

const page = async () => {
  const coaches = await getAllCoach();
  const entre = await getAllEntrepreneur();

  if (coaches.length === 0 || null) {
    return <div className="mt-16 mx-auto text-xl">No Coaches yet!</div>;
  }
  if (entre.length === 0 || null) {
    return <div className="mt-16 mx-auto text-xl">No Entrepreneur yet!</div>;
  }
  return <Admin coaches={coaches} entre={entre} />;
};

export default page;
