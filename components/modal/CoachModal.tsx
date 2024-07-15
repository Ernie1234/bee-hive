"use client";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Modal from "./Modal";
import { useMemo, useState } from "react";
import { useCoachModalStore } from "@/hooks/use-coach-modal";
import AppInput from "./AppInput";

enum STEPS {
  COACH_NAME = 0,
  COACH_EMAIL = 1,
  COACH_PHONE = 2,
  COACH_SKILLS = 3,
  COACH_INTEREST = 4,
}

const CoachModal = () => {
  const [step, setStep] = useState(STEPS.COACH_NAME);
  const [isLoading, setIsLoading] = useState(false);

  const modal = useCoachModalStore();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      skills: "",
      interests: "",
    },
  });

  const fullName = watch("fullName");
  const email = watch("email");

  const setCustomValue = (value: string) => {
    setValue(value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
      validate: (value: string) => value.length > 0,
    });
  };

  const onBack = () => {
    if (step !== STEPS.COACH_NAME) setStep((value) => value - 1);

    return null;
  };
  const onNext = () => {
    if (step !== STEPS.COACH_INTEREST) setStep((value) => value + 1);
  };
  const actionLabel = useMemo(() => {
    if (step === STEPS.COACH_INTEREST) return "Submit";
    return "Ok";
  }, [step]);

  const secondaryActionLabel = useMemo(() => {
    if (step === STEPS.COACH_NAME) return undefined;
    return "Back";
  }, [step]);

  const title = useMemo(() => {
    if (step === STEPS.COACH_NAME) {
      return "Hi there!, So what's your name?";
    }
    if (step === STEPS.COACH_EMAIL) {
      return "Enter your e-mail";
    }
    return "Submit";
  }, [step]);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    if (step !== STEPS.COACH_INTEREST) return onNext();

    console.log(data);
  };

  let bodyContent = (
    <div className="flex flex-col gap-4">
      <AppInput
        id="fullName"
        label="Fullname"
        disabled={isLoading}
        errors={errors}
        register={register}
        required
      />
    </div>
  );
  if (step === STEPS.COACH_EMAIL) {
    bodyContent = (
      <div className="flex flex-col gap-4">
        <AppInput
          id="email"
          label="Type your answer here..."
          disabled={isLoading}
          errors={errors}
          register={register}
          required
        />
      </div>
    );
  }

  return (
    <Modal
      disabled={false}
      isOpen={modal.isOpen}
      title={title}
      actionLabel={actionLabel}
      onClose={modal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      secondaryAction={step === STEPS.COACH_NAME ? undefined : onBack}
      secondaryActionLabel={secondaryActionLabel}
    />
  );
};

export default CoachModal;
