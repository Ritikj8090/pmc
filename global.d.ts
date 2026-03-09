declare module "*.css";
declare module "*.css";
declare module "*.scss";
declare module "*.module.css";
declare module "*.module.scss";

type EventItem = {
  id: number;
  title: string;
  date: string;
  tag: string;
  description: string;
  color: string;
  icon: string;
  hasButton?: boolean;
  buttonLink?: string;
};

type FacultyType = {
  name: string;
  role: string;
  initials: string;
  dept: string;
};

type MemberType = {
  name: string;
  role: string;
  dept: string;
  initials: string;
  tier: number;
  poster: string;
};