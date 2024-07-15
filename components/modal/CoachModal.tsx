"use client";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Modal from "./Modal";
import { useMemo, useState, useTransition } from "react";
import { useCoachModalStore } from "@/hooks/use-coach-modal";
import AppInput from "./AppInput";
import { options } from "@/lib/data";
import { createCoach } from "@/actions/coach";
import { toast } from "../ui/use-toast";

enum STEPS {
  COACH_NAME = 0,
  COACH_EMAIL = 1,
  COACH_PHONE = 2,
  COACH_ROLE = 3,
  COACH_URL = 4,
  COACH_EXPERTISE = 5,
  COACH_INTEREST = 6,
}

const CoachModal = () => {
  const [isPending, startTransition] = useTransition();
  const [step, setStep] = useState(STEPS.COACH_NAME);

  const modal = useCoachModalStore();

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
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
      return "What's your email _____?";
    }
    if (step === STEPS.COACH_PHONE) {
      return "Fab! Enter your phone";
    }
    if (step === STEPS.COACH_ROLE) {
      return "Cool! So what Role would you like to begin with?";
    }
    if (step === STEPS.COACH_URL) {
      return "And your URL?";
    }
    if (step === STEPS.COACH_EXPERTISE) {
      return "And Area of Expertise: Select all that apply";
    }
    return "And finally! Why are you interested in coaching at The Hive Incubator?";
  }, [step]);

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    if (step !== STEPS.COACH_INTEREST) return onNext();
    const trueObj = values.options;

    const expertise = Object.entries(trueObj)
      .filter(([, value]) => value)
      .map(([key]) => key);

    const data = {
      name: values.fullName,
      email: values.email,
      phone: values.phone,
      role: values.role,
      url: values.url,
      interest: values.interest,
    };
    const formData = { ...data, expertise };

    return startTransition(() => {
      console.log(formData);
      createCoach(formData).then((data) => {
        if (data?.error) {
          toast({
            description: data.error,
            variant: "destructive",
          });
        } else {
          toast({
            description: data.success,
            variant: "default",
          });
        }
      });
    });
  };

  let bodyContent = (
    <div className="flex flex-col gap-4">
      <AppInput
        id="fullName"
        label="Fullname"
        disabled={isPending}
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
          disabled={isPending}
          errors={errors}
          register={register}
          required
        />
      </div>
    );
  }
  if (step === STEPS.COACH_PHONE) {
    bodyContent = (
      <div className="flex flex-col gap-4">
        <AppInput
          id="phone"
          label="Type your answer here..."
          disabled={isPending}
          errors={errors}
          register={register}
          required
        />
      </div>
    );
  }
  if (step === STEPS.COACH_ROLE) {
    bodyContent = (
      <div className="flex flex-col gap-4">
        <AppInput
          id="role"
          label="Type your answer here..."
          disabled={isPending}
          errors={errors}
          register={register}
          required
        />
      </div>
    );
  }
  if (step === STEPS.COACH_URL) {
    bodyContent = (
      <div className="flex flex-col gap-4">
        <AppInput
          id="url"
          label="Type your answer here..."
          disabled={isPending}
          errors={errors}
          register={register}
          required
        />
      </div>
    );
  }
  if (step === STEPS.COACH_EXPERTISE) {
    bodyContent = (
      <div className="flex flex-wrap gap-4">
        {options.map((option) => (
          <div key={option.value} className="flex items-center gap-2">
            <input
              type="checkbox"
              id={option.value}
              {...register(`options.${option.value}`, { required: false })}
              className="mr-2 h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500"
            />
            <label htmlFor={option.value} className="text-gray-700">
              {option.label}
            </label>
          </div>
        ))}
      </div>
    );
  }
  if (step === STEPS.COACH_INTEREST) {
    bodyContent = (
      <div className="flex flex-col gap-4">
        <AppInput
          id="interest"
          label="Type your answer here..."
          disabled={isPending}
          errors={errors}
          register={register}
          required
        />
      </div>
    );
  }

  return (
    <Modal
      disabled={isPending}
      isOpen={modal.isOpen}
      title={title}
      actionLabel={actionLabel}
      onClose={modal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      // secondaryAction={step === STEPS.COACH_NAME ? undefined : onBack}
      // secondaryActionLabel={secondaryActionLabel}
    />
  );
};

export default CoachModal;
