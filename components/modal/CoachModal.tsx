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
  COACH_ROLE = 3,
  COACH_URL = 4,
  COACH_EXPERTISE = 5,
  COACH_INTEREST = 6,
}

const options = [
  { value: "Financial_Management", label: "Financial Management" },
  {
    value: "Business_Strategy_and_Planning",
    label: "Business Strategy and Planning",
  },
  { value: "Marketing_and_Branding", label: "Marketing and Branding" },
  {
    value: "Sales_and_Business_Development",
    label: "Sales and Business Development",
  },
  {
    value: "Product_Development",
    label: "Product Development",
  },
  {
    value: "Product_Management",
    label: "Product Management",
  },
  {
    value: "Technology_and_Innovation",
    label: "Technology and Innovation",
  },
  {
    value: "Operations_and_Supply_Chain_Management",
    label: "Operations and Supply Chain Management",
  },
  {
    value: "Legal_and_Compliance",
    label: "Legal and Compliance",
  },
  {
    value: "Human_Resources_and_Talent_Management",
    label: "Human Resources and Talent Management",
  },
  {
    value: "Pitching_and_Presentation_Skills",
    label: "Pitching and Presentation Skills",
  },
  {
    value: "Growth_Hacking_and_Scaling",
    label: "Growth Hacking and Scaling",
  },
  {
    value: "Customer_Experience_and_Service",
    label: "Customer Experience and Service",
  },
];

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
      role: "",
      url: "",
      interest: "",
    },
  });

  const expertise = watch("expertise");

  const setCustomValue = (id: string, value: any) => {
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
  if (step === STEPS.COACH_PHONE) {
    bodyContent = (
      <div className="flex flex-col gap-4">
        <AppInput
          id="phone"
          label="Type your answer here..."
          disabled={isLoading}
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
          disabled={isLoading}
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
          disabled={isLoading}
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
