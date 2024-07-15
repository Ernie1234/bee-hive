import CoachModal from "@/components/modal/CoachModal";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <CoachModal />
      {children}
    </div>
  );
};

export default layout;
