import CoachModal from "@/components/modal/CoachModal";
import { Toaster } from "@/components/ui/toaster";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <CoachModal />
      <Toaster />
      {children}
    </div>
  );
};

export default layout;
