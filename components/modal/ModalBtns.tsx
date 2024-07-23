"use client";

import { useCoachModalStore } from "@/hooks/use-coach-modal";
import { Button } from "../ui/button";
import { useEntrepreneurModalStore } from "@/hooks/use-entrepreneur-modal";

export const ModalBtns = () => {
  const modal = useCoachModalStore();
  const entreModal = useEntrepreneurModalStore();

  return (
    <div className="flex flex-col sm:flex-row gap-8 mt-8">
      <Button
        className="bg-background hover:bg-background/95 text-foreground text-lg px-14 py-3 rounded-full transition-all duration-500 w-full text-center"
        onClick={entreModal.onOpen}
      >
        Enterprenuer
      </Button>
      <Button
        className="border-2 border-background hover:bg-background text-background hover:text-foreground text-lg px-14 py-3 rounded-full transition-all duration-500 w-full text-center min-w-max"
        onClick={modal.onOpen}
      >
        Coach
      </Button>
    </div>
  );
};
