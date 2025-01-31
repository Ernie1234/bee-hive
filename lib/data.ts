import * as z from "zod";

export const options = [
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

export interface IEntrepreneur {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  address: string;
  bckGround: string;
  experience: string;
  businessName: string | null;
  businessDesc: string | null;
  businessAim: string | null;
  businessTarget: string | null;
  businessPlan: string | null;
  stage: string | null;
  teamMember: string | null;
  teamMemberRole: string | null;
  devPrototype: string | null;
  businessFin: string | null;
  businessFinDetails: string | null;
  businessVal: string | null;
  businessValDetails: string | null;
  PrototypeTeamMember: string | null;
  PrototypeTeamMemberRole: string | null;
  prototyDevPrototype: string | null;
  prototypeDevPrototypeDetails: string | null;
  prototypeFin: string | null;
  prototypeFinDetails: string | null;
  prototypeFinProj: string | null;
  prototypeFinProjDetails: string | null;
  prototypeVal: string | null;
  prototypeValDetails: string | null;
  prototypeMarket: string | null;
  prototypeMarketDetails: string | null;
  GrowthTeamMember: string | null;
  GrowthTeamMemberRole: string | null;
  growthDevPrototype: string | null;
  growthDevPrototypeDetails: string | null;
  GrowthFin: string | null;
  GrowthFinDetails: string | null;
  GrowthRevenue: string | null;
  GrowthFinProj: string | null;
  GrowthFinProjDetails: string | null;
  GrowthVal: string | null;
  GrowthValDetails: string | null;
  GrowthMarket: string | null;
  GrowthMarketDetails: string | null;
  exp1: string | null;
  exp2: string | null;
  exp3: string | null;
  info1: string | null;
  info2: string | null;
  type: string;
  createdAt: Date;
  updatedAt: Date;
}
export type TCoaches = {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  url: string;
  type: string;
  expertise: string[];
  interest: string;
  createdAt: Date;
  updatedAt: Date;
};
export type TLaunch = {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  age: string;
  businessName: string;
  businessResidence: string;
  businessIdea: string;
  businessAim: string;
  unique: string;
  problemSolving: string;
  teamMember: string;
  businessPlan: string;
  howMany: string;
  businessCurrently: string;
  remainInAkure: string;
  createdAt: Date;
  updatedAt: Date;
};

export enum TYPE {
  ENTREPRENEUR,
  COACH,
}

export const launchFormSchema = z.object({
  fullName: z.string().min(2).max(50),
  email: z.string().email(),
  phone: z.string().min(10),
  age: z.string({ required_error: "Please select an email to display" }),
  businessName: z.string(),
  businessResidence: z.enum(["yes", "no"], {
    required_error: "You need to select business residence.",
  }),
  businessIdea: z.string().min(2),
  businessAim: z.string().min(2),
  unique: z.string().min(2),
  problemSolving: z.string().min(2),
  teamMember: z.enum(["yes", "no"], {
    required_error: "You need to select team member option.",
  }),
  businessPlan: z.enum(["yes", "no"], {
    required_error: "You need to select team member option.",
  }),
  howMany: z.string(),
  businessCurrently: z.string().min(2),
  remainInAkure: z.enum(["yes", "no"], {
    required_error: "You need to select team member option.",
  }),
});

export const MOST_RECENT_ITEMS = [
  {
    id: 1,
    src: "/images/blogs/1.svg",
    alt: "blog_1",
    title: "How to Validate Your Startup Idea Before Launching",
    content: "Entrepreneurship & Startups",
  },
  {
    id: 2,
    src: "/images/blogs/2.svg",
    alt: "blog_2",
    title: "Breaking into Competitive Markets as a Small Business",
    content: "Business Growth & Strategy",
  },
  {
    id: 3,
    src: "/images/blogs/3.svg",
    alt: "blog_2",
    title: "How to Stay Motivated During Challenging Phases in Business",
    content: "Personal Development & Leadership",
  },
];
export const BUSINESS_GROWTH_ITEMS = [
  {
    id: 1,
    src: "/images/blogs/4.svg",
    alt: "blog_4",
    title: "How to Validate Your Startup Idea Before Launching",
    content: "Entrepreneurship & Startups",
  },
  {
    id: 2,
    src: "/images/blogs/5.svg",
    alt: "blog_5",
    title: "Breaking into Competitive Markets as a Small Business",
    content: "Business Growth & Strategy",
  },
  {
    id: 3,
    src: "/images/blogs/6.svg",
    alt: "blog_6S",
    title: "How to Stay Motivated During Challenging Phases in Business",
    content: "Personal Development & Leadership",
  },
];
export const ENTREPRENEURSHIP_STARTUP_ITEMS = [
  {
    id: 1,
    src: "/images/blogs/4.svg",
    alt: "blog_4",
    title: "How to Validate Your Startup Idea Before Launching",
    content: "Entrepreneurship & Startups",
  },
  {
    id: 2,
    src: "/images/blogs/7.svg",
    alt: "blog_7",
    title: "Breaking into Competitive Markets as a Small Business",
    content: "Business Growth & Strategy",
  },
  {
    id: 3,
    src: "/images/blogs/8.svg",
    alt: "blog_8",
    title: "How to Stay Motivated During Challenging Phases in Business",
    content: "Personal Development & Leadership",
  },
];
export const INNOVATION_TECHNOLOGY_ITEMS = [
  {
    id: 1,
    src: "/images/blogs/9.svg",
    alt: "blog_9",
    title: "How to Validate Your Startup Idea Before Launching",
    content: "Entrepreneurship & Startups",
  },
  {
    id: 2,
    src: "/images/blogs/10.svg",
    alt: "blog_10",
    title: "Breaking into Competitive Markets as a Small Business",
    content: "Business Growth & Strategy",
  },
  {
    id: 3,
    src: "/images/blogs/11.svg",
    alt: "blog_11",
    title: "How to Stay Motivated During Challenging Phases in Business",
    content: "Personal Development & Leadership",
  },
];
export const PERSONAL_DEVELOPMENT_ITEMS = [
  {
    id: 1,
    src: "/images/blogs/12.svg",
    alt: "blog_9",
    title: "How to Validate Your Startup Idea Before Launching",
    content: "Entrepreneurship & Startups",
  },
  {
    id: 2,
    src: "/images/blogs/13.svg",
    alt: "blog_10",
    title: "Breaking into Competitive Markets as a Small Business",
    content: "Business Growth & Strategy",
  },
  {
    id: 3,
    src: "/images/blogs/14.svg",
    alt: "blog_11",
    title: "How to Stay Motivated During Challenging Phases in Business",
    content: "Personal Development & Leadership",
  },
];
export const SUCCESS_STORIES_ITEMS = [
  {
    id: 1,
    src: "/images/blogs/15.svg",
    alt: "blog_9",
    title: "How to Validate Your Startup Idea Before Launching",
    content: "Entrepreneurship & Startups",
  },
  {
    id: 2,
    src: "/images/blogs/16.svg",
    alt: "blog_10",
    title: "Breaking into Competitive Markets as a Small Business",
    content: "Business Growth & Strategy",
  },
  {
    id: 3,
    src: "/images/blogs/17.svg",
    alt: "blog_11",
    title: "How to Stay Motivated During Challenging Phases in Business",
    content: "Personal Development & Leadership",
  },
];
