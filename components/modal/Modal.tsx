"use client";

import { useCallback, useEffect, useState } from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Loader2, X } from "lucide-react";

interface IModal {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
  isPending: boolean;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
}

const Modal = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  actionLabel,
  disabled,
  isPending,
  secondaryAction,
  secondaryActionLabel,
}: IModal) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }

    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [disabled, onClose]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }
    onSubmit();
  }, [disabled, onSubmit]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) {
      return;
    }

    secondaryAction();
  }, [disabled, secondaryAction]);

  if (!isOpen) return null;

  return (
    <div className={cn(isOpen ? "flex" : "hidden")}>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
        <div className="absolute top-0 bottom-0 left-0 right-0 h-dvh w-full flex-1">
          <Image
            src="https://png.pngtree.com/thumb_back/fh260/background/20230803/pngtree-a-couch-with-cushions-and-book-image_12984604.jpg"
            alt="bg-image"
            className="absolute h-full w-full object-cover"
            width={500}
            height={500}
          />
        </div>
        <div className="absolute h-full w-full bg-zinc-800/80">
          {/*content*/}
          <div
            className={`translate duration-500 h-full w-full flex justify-center ${
              showModal ? "translate-y-0" : "translate-y-full"
            } ${showModal ? "opacity-100" : "opacity-0"}`}
          >
            <div
              className="absolute z-40 top-4 right-4 text-white"
              onClick={handleClose}
            >
              <X />
            </div>
            <div className="flex flex-col flex-1 justify-center items-center">
              <div className="relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-full lg:h-auto md:h-auto space-y-4">
                <h3 className="text-2xl font-medium font-primary text-left">
                  {title}
                </h3>

                {body}
                <div className="flex flex-row items-center gap-4 w-full">
                  {secondaryActionLabel && secondaryActionLabel && (
                    <Button disabled={disabled} onClick={handleSecondaryAction}>
                      {secondaryActionLabel}
                    </Button>
                  )}
                  <Button
                    type="submit"
                    disabled={disabled}
                    onClick={handleSubmit}
                  >
                    {isPending ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />{" "}
                        Loading...
                      </>
                    ) : (
                      <>{actionLabel}</>
                    )}
                  </Button>
                </div>
              </div>
            </div>
            <div className="w-3/12 p-6 flex flex-col gap-3 bg-gray-300/20 backdrop-blur-md h-full justify-center shadow-md">
              <h1 className="text-3xl font-medium font-primary text-left">
                Welcome to the Bee Hive Coach App!
              </h1>
              <p className="text-base text-left font-medium font-primary">
                Empowering Entrepreneurs for a Brighter Tomorrow
              </p>
            </div>
          </div>

          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Modal;
