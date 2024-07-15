import CoachModal from "@/components/modal/CoachModal";
import EntrepreneurModal from "@/components/modal/EntrepreneurModal";
import { Toaster } from "@/components/ui/toaster";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <CoachModal />
      <EntrepreneurModal />
      <Toaster />
      {children}
    </div>
  );
};

export default layout;
