"use client";

import { useMemo, useState, useTransition } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import Modal from "./Modal";
import { useEntrepreneurModalStore } from "@/hooks/use-entrepreneur-modal";

enum STEPS {
  COACH_NAME = 0,
  COACH_INTEREST = 1,
}

const EntrepreneurModal = () => {
  const [isPending, startTransition] = useTransition();
  const [step, setStep] = useState(STEPS.COACH_NAME);

  const modal = useEntrepreneurModalStore();

  const form = useForm<FieldValues>({
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      role: "",
      url: "",
      interest: "",
    },
  });

  // const setCustomValue = (id: string, value: any) => {
  //   setValue(value, {
  //     shouldDirty: true,
  //     shouldTouch: true,
  //     shouldValidate: true,
  //     validate: (value: string) => value.length > 0,
  //   });
  // };

  const onNext = () => {
    if (step !== STEPS.COACH_INTEREST) setStep((value) => value + 1);
  };
  const actionLabel = useMemo(() => {
    if (step === STEPS.COACH_INTEREST) return "Submit";
    return "Ok";
  }, [step]);

  const title = useMemo(() => {
    if (step === STEPS.COACH_NAME) {
      return "Hi there!, So what's your name?";
    }

    return "And finally! Why are you interested in coaching at The Hive Incubator?";
  }, [step]);

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    if (step !== STEPS.COACH_INTEREST) return onNext();

    return startTransition(() => {
      console.log(values);
    });
  };

  let bodyContent = <div className="flex flex-col gap-4">hello world</div>;

  return (
    <Modal
      disabled={isPending}
      isOpen={modal.isOpen}
      title={title}
      actionLabel={actionLabel}
      onClose={modal.onClose}
      onSubmit={form.handleSubmit(onSubmit)}
      body={bodyContent}
      // secondaryAction={step === STEPS.COACH_NAME ? undefined : onBack}
      // secondaryActionLabel={secondaryActionLabel}
    />
  );
};

export default EntrepreneurModal;
