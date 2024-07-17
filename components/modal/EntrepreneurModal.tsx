"use client";

import { useMemo, useState, useTransition } from "react";
import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";

import { useEntrepreneurModalStore } from "@/hooks/use-entrepreneur-modal";
import Modal from "./Modal";
import AppInput from "./AppInput";
import RadioButton from "./RadioButton";
import { createEntre } from "@/actions/coach";
import { toast } from "../ui/use-toast";
import { removeEmptyKeys } from "@/lib/fn";
import { useRouter } from "next/navigation";

enum STEPS {
  PERSONAL = 0,
  BUSINESSIDEA = 1,
  BUSINESSOPS = 2,
  EXPECTATIONS = 3,
  INFO = 4,
}

const options = [
  { label: "Idea Stage", value: "Idea_Stage" },
  { label: "Proof of Concept/Prototype", value: "Prototype" },
  { label: "Early Revenue/Growth Stage", value: "Growth_Idea" },
];
const businessPlanOpt = [
  { label: "Yes", value: "Yes" },
  { label: "No", value: "No" },
];

const EntrepreneurModal = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const [step, setStep] = useState(STEPS.PERSONAL);

  const modal = useEntrepreneurModalStore();

  const {
    reset,
    watch,
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      address: "",
      bckGround: "",
      experience: "",
      businessName: "",
      businessDesc: "",
      businessAim: "",
      businessTarget: "",
      businessPlan: "",
      stage: "Idea_Stage",
      teamMember: "",
      teamMemberRole: "",
      devPrototype: "NO",
      businessFin: "No",
      businessFinDetails: "",
      businessVal: "No",
      businessValDetails: "",
      PrototypeTeamMember: "",
      PrototypeTeamMemberRole: "",
      prototyDevPrototype: "No",
      prototypeDevPrototypeDetails: "",
      prototypeFin: "",
      prototypeFinDetails: "",
      prototypeFinProj: "No",
      prototypeFinProjDetails: "",
      prototypeVal: "No",
      prototypeValDetails: "",
      prototypeMarket: "No",
      prototypeMarketDetails: "",
      GrowthTeamMember: "",
      GrowtheeeTeamMemberRole: "",
      growthDevPrototype: "No",
      growthDevPrototypeDetails: "",
      GrowthFin: "No",
      GrowthFinDetails: "",
      GrowthRevenue: "",
      GrowthFinProj: "No",
      GrowthFinProjDetails: "",
      GrowthVal: "No",
      GrowthValDetails: "",
      GrowthMarket: "No",
      GrowthMarketDetails: "",
      exp1: "",
      exp2: "",
      exp3: "",
      info1: "No",
      info2: "",
    },
  });

  const stage = watch("stage");
  const businessFin = watch("businessFin");
  const businessVal = watch("businessVal");
  const prototypeFin = watch("prototypeFin");
  const prototypeFinProj = watch("prototypeFinProj");
  const prototyDevPrototype = watch("prototyDevPrototype");
  const prototypeVal = watch("prototypeVal");
  const prototypeMarket = watch("prototypeMarket");
  const growthDevPrototype = watch("growthDevPrototype");
  const GrowthFin = watch("GrowthFin");
  const GrowthFinProj = watch("GrowthFinProj");
  const GrowthVal = watch("GrowthVal");
  const GrowthMarket = watch("GrowthMarket");

  const onNext = () => {
    if (step !== STEPS.INFO) setStep((value) => value + 1);
  };
  const actionLabel = useMemo(() => {
    if (step === STEPS.INFO) return "Submit";
    return "Ok";
  }, [step]);

  const title = useMemo(() => {
    if (step === STEPS.PERSONAL) {
      return "Personal Information (General)";
    }
    if (step === STEPS.BUSINESSIDEA) {
      return "Business Idea (General)";
    }
    if (step === STEPS.BUSINESSOPS) {
      return "Business Operations";
    }
    if (step === STEPS.EXPECTATIONS) {
      return "Program Expectations (General)";
    }

    return "Additional Information (General)";
  }, [step]);

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    if (step !== STEPS.INFO) return onNext();

    return startTransition(() => {
      console.log(values);

      const formData = removeEmptyKeys(values);
      createEntre(formData).then((data) => {
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
          router.push("/");
        }
      });
      reset();
    });
  };

  let bodyContent = (
    <div className="flex flex-col gap-4">
      <AppInput
        id="fullName"
        label="Type your full name here..."
        disabled={isPending}
        errors={errors}
        register={register}
        required
      />
      <AppInput
        id="email"
        label="Type your email here..."
        disabled={isPending}
        errors={errors}
        register={register}
        required
      />
      <AppInput
        id="phone"
        label="Type your phone number here..."
        disabled={isPending}
        errors={errors}
        register={register}
        required
      />
      <AppInput
        id="address"
        label="Type your Residential Address here..."
        disabled={isPending}
        errors={errors}
        register={register}
        required
      />
      <AppInput
        id="bckGround"
        label="Type your educational background here..."
        disabled={isPending}
        errors={errors}
        register={register}
        required
      />
      <AppInput
        id="experience"
        label="Type your work experience here..."
        disabled={isPending}
        errors={errors}
        register={register}
        required
      />
    </div>
  );
  if (step === STEPS.BUSINESSIDEA) {
    bodyContent = (
      <div className="flex flex-col flex-wrap gap-4">
        <AppInput
          id="businessName"
          label="Type your business name here..."
          disabled={isPending}
          errors={errors}
          register={register}
        />
        <AppInput
          id="businessDesc"
          label="Describe your business idea in a few sentences..."
          disabled={isPending}
          errors={errors}
          register={register}
          required
        />
        <AppInput
          id="businessAim"
          label="What problem does your business aim to solve?"
          disabled={isPending}
          errors={errors}
          register={register}
          required
        />
        <AppInput
          id="businessTarget"
          label="Who is your target market?"
          disabled={isPending}
          errors={errors}
          register={register}
          required
        />
        <div className="flex flex-col gap-2">
          <h3>Do you have a business plan?</h3>
          <Controller
            name="businessPlan"
            control={control}
            render={({ field }) => {
              return (
                <div className="flex gap-3">
                  {businessPlanOpt.map((opt) => (
                    <RadioButton
                      value={opt.value}
                      isSelected={field.value === opt.value}
                      name="businessPlan"
                      label={opt.label}
                      key={opt.label}
                      onChange={field.onChange}
                    />
                  ))}
                </div>
              );
            }}
          />
        </div>
      </div>
    );
  }
  if (step === STEPS.BUSINESSOPS) {
    bodyContent = (
      <div className="flex flex-col flex-wrap gap-4">
        <div className="flex flex-col gap-2">
          <h3>Select your business stage</h3>
          <Controller
            name="stage"
            control={control}
            render={({ field }) => {
              return (
                <div className="flex gap-3 items-center w-full min-w-max">
                  {options.map((opt) => (
                    <RadioButton
                      value={opt.value}
                      isSelected={field.value === opt.value}
                      name="stage"
                      label={opt.label}
                      key={opt.label}
                      onChange={field.onChange}
                    />
                  ))}
                </div>
              );
            }}
          />
        </div>
        {stage === "Idea_Stage" ? (
          <div className="flex flex-col flex-wrap gap-4">
            <AppInput
              id="teamMember"
              label="How many team members are currently involved in your startup?"
              disabled={isPending}
              errors={errors}
              register={register}
              required
            />
            <AppInput
              id="teamMemberRole"
              label="How many team members are currently involved in your startup?"
              disabled={isPending}
              errors={errors}
              register={register}
              required
            />
            <div className="flex flex-col gap-2">
              <h3>Have you developed a prototype or proof of concept?</h3>
              <Controller
                name="devPrototype"
                control={control}
                render={({ field }) => {
                  return (
                    <div className="flex gap-3">
                      {businessPlanOpt.map((opt) => (
                        <RadioButton
                          value={opt.value}
                          isSelected={field.value === opt.value}
                          name="devPrototype"
                          label={opt.label}
                          key={opt.label}
                          onChange={field.onChange}
                        />
                      ))}
                    </div>
                  );
                }}
              />
            </div>
            <div className="flex flex-col gap-x-2">
              <h3>
                Do you have a financial plan or projection for the next 1-2
                years?
              </h3>
              <Controller
                name="businessFin"
                control={control}
                render={({ field }) => {
                  return (
                    <div className="flex gap-3">
                      {businessPlanOpt.map((opt) => (
                        <RadioButton
                          value={opt.value}
                          isSelected={field.value === opt.value}
                          name="businessFin"
                          label={opt.label}
                          key={opt.label}
                          onChange={field.onChange}
                        />
                      ))}
                    </div>
                  );
                }}
              />
              {businessFin === "Yes" && (
                <div className="-mt-3">
                  <AppInput
                    id="businessFinDetails"
                    label="If yes, please provide a brief overview."
                    disabled={isPending}
                    errors={errors}
                    register={register}
                    required
                  />
                </div>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <h3>
                Have you conducted any market research or validation for your
                idea?
              </h3>
              <Controller
                name="businessVal"
                control={control}
                render={({ field }) => {
                  return (
                    <div className="flex gap-3">
                      {businessPlanOpt.map((opt) => (
                        <RadioButton
                          value={opt.value}
                          isSelected={field.value === opt.value}
                          name="businessVal"
                          label={opt.label}
                          key={opt.label}
                          onChange={field.onChange}
                        />
                      ))}
                    </div>
                  );
                }}
              />
              {businessVal === "Yes" && (
                <div className="-mt-3">
                  <AppInput
                    id="businessValDetails"
                    label="If yes, please provide a brief overview."
                    disabled={isPending}
                    errors={errors}
                    register={register}
                    required
                  />
                </div>
              )}
            </div>
          </div>
        ) : stage === "Prototype" ? (
          <div className="flex flex-col flex-wrap gap-4">
            <AppInput
              id="PrototypeTeamMember"
              label="How many team members are currently involved in your startup?"
              disabled={isPending}
              errors={errors}
              register={register}
              required
            />
            <AppInput
              id="PrototypeTeamMemberRole"
              label="List the core team members and their roles"
              disabled={isPending}
              errors={errors}
              register={register}
              required
            />
            <div className="flex flex-col gap-2">
              <h3>
                Have you developed a working prototype or proof of concept?
              </h3>
              <Controller
                name="prototyDevPrototype"
                control={control}
                render={({ field }) => {
                  return (
                    <div className="flex gap-3">
                      {businessPlanOpt.map((opt) => (
                        <RadioButton
                          value={opt.value}
                          isSelected={field.value === opt.value}
                          name="prototyDevPrototype"
                          label={opt.label}
                          key={opt.label}
                          onChange={field.onChange}
                        />
                      ))}
                    </div>
                  );
                }}
              />
              {prototyDevPrototype === "Yes" && (
                <div className="-mt-3">
                  <AppInput
                    id="prototypeDevPrototypeDetails"
                    label="If yes, please describe it briefly."
                    disabled={isPending}
                    errors={errors}
                    register={register}
                    required
                  />
                </div>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <h3>Have you received any funding so far?</h3>
              <Controller
                name="prototypeFin"
                control={control}
                render={({ field }) => {
                  return (
                    <div className="flex gap-3">
                      {businessPlanOpt.map((opt) => (
                        <RadioButton
                          value={opt.value}
                          isSelected={field.value === opt.value}
                          name="prototypeFin"
                          label={opt.label}
                          key={opt.label}
                          onChange={field.onChange}
                        />
                      ))}
                    </div>
                  );
                }}
              />
              {prototypeFin === "Yes" && (
                <div className="-mt-3">
                  <AppInput
                    id="prototypeFinDetails"
                    label="If yes, please specify the amount and source of funding"
                    disabled={isPending}
                    errors={errors}
                    register={register}
                    required
                  />
                </div>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <h3>
                Do you have a financial plan or projection for the next 1-2
                years?
              </h3>
              <Controller
                name="prototypeFinProj"
                control={control}
                render={({ field }) => {
                  return (
                    <div className="flex gap-3">
                      {businessPlanOpt.map((opt) => (
                        <RadioButton
                          value={opt.value}
                          isSelected={field.value === opt.value}
                          name="prototypeFinProj"
                          label={opt.label}
                          key={opt.label}
                          onChange={field.onChange}
                        />
                      ))}
                    </div>
                  );
                }}
              />
              {prototypeFinProj === "Yes" && (
                <div className="-mt-3">
                  <AppInput
                    id="prototypeFinProjDetails"
                    label="If yes, please provide a brief overview."
                    disabled={isPending}
                    errors={errors}
                    register={register}
                    required
                  />
                </div>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <h3>Do you have any potential customers or users?</h3>
              <Controller
                name="prototypeVal"
                control={control}
                render={({ field }) => {
                  return (
                    <div className="flex gap-3">
                      {businessPlanOpt.map((opt) => (
                        <RadioButton
                          value={opt.value}
                          isSelected={field.value === opt.value}
                          name="prototypeVal"
                          label={opt.label}
                          key={opt.label}
                          onChange={field.onChange}
                        />
                      ))}
                    </div>
                  );
                }}
              />
              {prototypeVal === "Yes" && (
                <div className="-mt-3">
                  <AppInput
                    id="prototypeValDetails"
                    label="If yes, please provide details."
                    disabled={isPending}
                    errors={errors}
                    register={register}
                    required
                  />
                </div>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <h3>
                Have you conducted any market research or validation for your
                prototype?
              </h3>
              <Controller
                name="prototypeMarket"
                control={control}
                render={({ field }) => {
                  return (
                    <div className="flex gap-3">
                      {businessPlanOpt.map((opt) => (
                        <RadioButton
                          value={opt.value}
                          isSelected={field.value === opt.value}
                          name="prototypeMarket"
                          label={opt.label}
                          key={opt.label}
                          onChange={field.onChange}
                        />
                      ))}
                    </div>
                  );
                }}
              />
              {prototypeMarket === "Yes" && (
                <div className="-mt-3">
                  <AppInput
                    id="prototypeMarketDetails"
                    label="If yes, please provide details."
                    disabled={isPending}
                    errors={errors}
                    register={register}
                    required
                  />
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="flex flex-col flex-wrap gap-4">
            <AppInput
              id="GrowthTeamMember"
              label="How many team members are currently involved in your startup?"
              disabled={isPending}
              errors={errors}
              register={register}
              required
            />
            <AppInput
              id="GrowthTeamMemberRole"
              label="List the core team members and their roles"
              disabled={isPending}
              errors={errors}
              register={register}
              required
            />
            <div className="flex flex-col gap-2">
              <h3>
                Have you developed a working prototype or proof of concept?
              </h3>
              <Controller
                name="growthDevPrototype"
                control={control}
                render={({ field }) => {
                  return (
                    <div className="flex gap-3">
                      {businessPlanOpt.map((opt) => (
                        <RadioButton
                          value={opt.value}
                          isSelected={field.value === opt.value}
                          name="growthDevPrototype"
                          label={opt.label}
                          key={opt.label}
                          onChange={field.onChange}
                        />
                      ))}
                    </div>
                  );
                }}
              />
              {growthDevPrototype === "Yes" && (
                <div className="-mt-3">
                  <AppInput
                    id="growthDevPrototypeDetails"
                    label="If yes, please describe it briefly."
                    disabled={isPending}
                    errors={errors}
                    register={register}
                    required
                  />
                </div>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <h3>Have you received any funding so far?</h3>
              <Controller
                name="GrowthFin"
                control={control}
                render={({ field }) => {
                  return (
                    <div className="flex gap-3">
                      {businessPlanOpt.map((opt) => (
                        <RadioButton
                          value={opt.value}
                          isSelected={field.value === opt.value}
                          name="GrowthFin"
                          label={opt.label}
                          key={opt.label}
                          onChange={field.onChange}
                        />
                      ))}
                    </div>
                  );
                }}
              />
              {GrowthFin === "Yes" && (
                <div className="-mt-3">
                  <AppInput
                    id="GrowthFinDetails"
                    label="If yes, please specify the amount and source of funding"
                    disabled={isPending}
                    errors={errors}
                    register={register}
                    required
                  />
                </div>
              )}
            </div>
            <AppInput
              id="GrowthRevenue"
              label="What is your current revenue (if any)?"
              disabled={isPending}
              errors={errors}
              register={register}
              required
            />
            <div className="flex flex-col gap-2">
              <h3>
                Do you have a financial plan or projection for the next 1-2
                years?
              </h3>
              <Controller
                name="GrowthFinProj"
                control={control}
                render={({ field }) => {
                  return (
                    <div className="flex gap-3">
                      {businessPlanOpt.map((opt) => (
                        <RadioButton
                          value={opt.value}
                          isSelected={field.value === opt.value}
                          name="GrowthFinProj"
                          label={opt.label}
                          key={opt.label}
                          onChange={field.onChange}
                        />
                      ))}
                    </div>
                  );
                }}
              />
              {GrowthFinProj === "Yes" && (
                <div className="-mt-3">
                  <AppInput
                    id="GrowthFinProjDetails"
                    label="If yes, please provide a brief overview."
                    disabled={isPending}
                    errors={errors}
                    register={register}
                    required
                  />
                </div>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <h3>Do you have any potential customers or users?</h3>
              <Controller
                name="GrowthVal"
                control={control}
                render={({ field }) => {
                  return (
                    <div className="flex gap-3">
                      {businessPlanOpt.map((opt) => (
                        <RadioButton
                          value={opt.value}
                          isSelected={field.value === opt.value}
                          name="GrowthVal"
                          label={opt.label}
                          key={opt.label}
                          onChange={field.onChange}
                        />
                      ))}
                    </div>
                  );
                }}
              />
              {GrowthVal === "Yes" && (
                <div className="-mt-3">
                  <AppInput
                    id="GrowthValDetails"
                    label="If yes, please provide details."
                    disabled={isPending}
                    errors={errors}
                    register={register}
                    required
                  />
                </div>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <h3>
                Have you conducted any market research or validation for your
                Growtheee?
              </h3>
              <Controller
                name="GrowthMarket"
                control={control}
                render={({ field }) => {
                  return (
                    <div className="flex gap-3">
                      {businessPlanOpt.map((opt) => (
                        <RadioButton
                          value={opt.value}
                          isSelected={field.value === opt.value}
                          name="GrowthMarket"
                          label={opt.label}
                          key={opt.label}
                          onChange={field.onChange}
                        />
                      ))}
                    </div>
                  );
                }}
              />
              {GrowthMarket === "Yes" && (
                <div className="-mt-3">
                  <AppInput
                    id="GrowthMarketDetails"
                    label="If yes, please provide details."
                    disabled={isPending}
                    errors={errors}
                    register={register}
                    required
                  />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }
  if (step === STEPS.EXPECTATIONS) {
    bodyContent = (
      <div className="flex flex-col gap-6 pb-12">
        <AppInput
          id="exp1"
          label="Why do you want to join the Beehive Park Incubator?"
          disabled={isPending}
          errors={errors}
          register={register}
          required
        />
        <AppInput
          id="exp2"
          label="What specific support or resources are you looking for from the incubator?"
          disabled={isPending}
          errors={errors}
          register={register}
          required
        />
        <AppInput
          id="exp3"
          label="What are your main objectives for the incubator program?"
          disabled={isPending}
          errors={errors}
          register={register}
          required
        />
      </div>
    );
  }
  if (step === STEPS.INFO) {
    bodyContent = (
      <div className="flex flex-col flex-wrap gap-4">
        <div className="flex flex-col gap-2">
          <h3>
            Are you willing to commit to the full duration of the program (6-12
            months) in Akure, Ondo State?
          </h3>
          <Controller
            name="info1"
            control={control}
            render={({ field }) => {
              return (
                <div className="flex gap-3">
                  {businessPlanOpt.map((opt) => (
                    <RadioButton
                      value={opt.value}
                      isSelected={field.value === opt.value}
                      name="info1"
                      label={opt.label}
                      key={opt.label}
                      onChange={field.onChange}
                    />
                  ))}
                </div>
              );
            }}
          />
        </div>
        <AppInput
          id="info2"
          label="Is there any other information you would like to provide that would support your application?"
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
      isPending={isPending}
      isOpen={modal.isOpen}
      title={title}
      actionLabel={actionLabel}
      onClose={modal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      // secondaryAction={onNext}
      // secondaryActionLabel="next"
    />
  );
};

export default EntrepreneurModal;
