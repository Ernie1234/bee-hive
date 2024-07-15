import { getAllForm } from "@/actions/admin";
import Admin from "@/components/Admin";

const page = async () => {
  const coaches = await getAllForm();
  console.log(coaches);

  if (coaches.length === 0 || null) {
    return <div className="mt-16 mx-auto text-xl">No Coaches yet!</div>;
  }
  return <Admin coaches={coaches} />;
};

export default page;
