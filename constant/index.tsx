import { CalendarDays, Check, Contact, Mail, User, Users } from "lucide";
import { Zap, Clock, MapPin } from "lucide-react";
import {
  FaDiscord,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export const navbarLists = [
  {
    name: "Officers",
    href: "/officers",
    logo: Users,
  },
  {
    name: "Events",
    href: "/events",
    logo: CalendarDays,
  },
  {
    name: "Success Program",
    href: "/success-program",
    logo: Check,
  },
  {
    name: "Membership",
    href: "/membership",
    logo: User,
  },
  {
    name: "Contact",
    href: "/contact",
    logo: Contact,
  },
];

export const socialMediaList = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/utdpmc/",
    icon: FaInstagram,
    subtitle: "Updates",
    description: "@utdpmc",
    accentColor: "bg-pink-900/20 text-pink-400",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/utd-pmc/mycompany/",
    icon: FaLinkedin,
    subtitle: "Professional Network",
    description: "UTD Project Management Club",
    accentColor: "bg-blue-900/20 text-blue-400",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/utdpmc/",
    icon: FaFacebook,
    subtitle: "Community",
    description: "UTD Project Management Club",
    accentColor: "bg-blue-900/20 text-blue-400",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/channel/UCVDz3TFLsQ-y-aQ8FMfOkXA",
    icon: FaYoutube,
    subtitle: "Learn",
    description: "UTD Project Management Club",
    accentColor: "bg-red-900/20 text-red-400",
  },
  {
    name: "Whatsapp",
    href: "https://wa.me/+19403441855",
    icon: FaWhatsapp,
    subtitle: "Fastest Way to Reach Us",
    description: "Chat with us on WhatsApp",
    accentColor: "bg-green-900/20 text-green-400",
  },
  {
    name: "Email",
    href: "mailto:utdpmc@gmail.com",
    icon: SiGmail,
    subtitle: "Get in Touch",
    description: "Send us an email",
    accentColor: "bg-amber-900/20 text-amber-400",
  },
  {
    name: "Discord",
    href: "https://www.utdpmc.com/#",
    icon: FaDiscord,
    subtitle: "Connect",
    description: "UTD Project Management Club",
    accentColor: "bg-indigo-900/20 text-indigo-400",
  },
];

export const FEATURES = [
  {
    icon: "🏗️",
    title: "PM Workshops",
    desc: "Hands-on sessions covering agile, scrum, and industry-standard methodologies.",
  },
  {
    icon: "🎯",
    title: "Interview Excellence",
    desc: "Structured prep sessions with industry professionals to land your dream role.",
  },
  {
    icon: "🌱",
    title: "Mentorship Program",
    desc: "1-on-1 guidance from seasoned PMs at top-tier global organizations.",
  },
  {
    icon: "🤝",
    title: "Networking",
    desc: "Connect with peers, alumni, and industry leaders who shape the future.",
  },
];

export const STATS = [
  { value: 450, label: "Members", isCount: true },
  { value: 32, label: "Mentors", isCount: true },
  { value: "65+", label: "Events", isCount: false },
  { value: "35+", label: "Speakers", isCount: false },
  { value: "98%", label: "4–5★ Feedback", isCount: false },
  { value: 92, label: "PMC Alumni", isCount: true },
];

export const STORIES = [
  {
    initials: "AM",
    name: "Anisha Manvatkar",
    role: "iXP Intern",
    company: "SAP",
    image: "/anisha.jpg",
    article_link: "/articles/anisha-manvatkar",
  },
  {
    initials: "KD",
    name: "Kruthagama Divakar",
    role: "PMO Intern",
    company: "Cooper Surgical",
    image: "/kruthagama.jpg",
    article_link: "/articles/kruthagama-divakar",
  },
  {
    initials: "IS",
    name: "Ishika Singh Chandel",
    role: "PM Analyst",
    company: "US Crew Change",
    image: "/ishika.jpg",
    article_link: "/articles/ishika-singh-chandel",
  },
  {
    initials: "AS",
    name: "Akanksha Singh",
    role: "Technical PM",
    company: "Tesla",
    image: "/akanksha.jpg",
    article_link: "/articles/akanksha-singh",
  },
];

export const EVENTS = [
  {
    bg: "linear-linear(135deg,#0d3b2a,#1b6b45)",
    poster: "/Convergence_360.png",
    tag: "Workshop",
    title: "Convergence 360",
    date: "3rd April 2024 at 6:30 PM CST",
    link: "#",
  },
  {
    bg: "linear-linear(135deg,#1a2840,#2d4a6a)",
    poster: "/Project_Management_101.png",
    tag: "Bootcamp",
    title: "Project Management 101",
    date: "1st February 2024 at 5:00 PM CST",
    link: "#",
  },
  {
    bg: "linear-linear(135deg,#2b1a40,#5a2d6a)",
    poster: "/Digital_Transformation.png",
    tag: "Conference",
    title: "Digital Transformation & AI",
    date: "26th October 2023 at 1:00 PM CST",
    link: "#",
  },
  {
    bg: "linear-linear(135deg,#402b1a,#6a4a2d)",
    poster: "/proj_management_certification.png",
    tag: "Certification",
    title: "PM Certification Prep",
    date: "13th October 2023 at 1:00 PM CST",
    link: "#",
  },
];

export const SPEAKERS = [
  "/microsoft.svg",
  "/google.svg",
  "/uber.svg",
  "/amazon.svg",
  "/salesforce.svg",
  "paypal.svg",
  "netflix.svg",
  "cisco.svg",
];

export const ARTICLES = [
  {
    id: "anisha-manvatkar",
    title: "ANISHA MANVATKAR - iXP Intern at SAP",
    description: (
      <>
        <p>
          Project management is a crucial aspect of any organization, and it
          plays a vital role in ensuring the success of Projects. It involves
          planning, executing, and monitoring Projects to achieve specific goals
          within a defined timeline and budget.
        </p>
        <p>
          Our past president, Anisha Manvatkar, shares her incredible internship
          journey with us today. With the perfect blend of skills, a solid
          foundation from JSOM, and an unyielding positive attitude, Anisha has
          embraced the dynamic world of project management.
        </p>
      </>
    ),
    image: "/anisha.jpg",
    linkedIn: "https://www.linkedin.com/in/anisha-manvatkar/",
  },
  {
    id: "kruthagama-divakar",
    title: "Kruthagama Divakar - PMO Intern at Cooper Surgical",
    description: (
      <>
        <p>
          Kruthagama Divakar has interned at Cooper Surgical as a PMO, where he
          is responsible for managing the Smartsheet solution for portfolio
          management. He has successfully navigated the challenges of remote
          work through proactive communication and collaboration with his team.
          Kruthagama's internship has further solidified his passion for project
          management and highlighted the importance of industry certifications
          in building a strong personal brand and career pathway.
        </p>
        <h1 className=" font-black">
          His view on the Summer PMO internship at Cooper Surgical:
        </h1>
        <p className="ml-5">
          Mastering Smartsheet Solution for Portfolio Management, he also
          overcame remote work challenges through proactive communication. The
          internship further strengthened his passion for project management and
          emphasized the power of industry certifications in building a strong
          personal brand and career pathway.
        </p>
      </>
    ),
    image: "/kruthagama.jpg",
    linkedIn: "https://www.linkedin.com/in/kruthagama-divakar/",
  },
  {
    id: "ishika-singh-chandel",
    title: "Ishika Singh Chandel - PM Analyst at US Crew Change",
    description: (
      <>
        <p>
          Project management is an organizational function that guides every
          step of a Project’s lifecycle — from development to positioning and
          pricing — by focusing on the Project and its customers first and
          foremost.
        </p>
        <h1 className=" font-black">
          HIshika Singh Chandel, our previous Growth Team Lead shares her Fall
          internship experience as a Project Management Analyst at US Crew
          Change:
        </h1>
        <p className="ml-5">
          Managing a dynamic portfolio of concurring projects, she overcame her
          challenges at work through proactive communication and effective task
          prioritization . The internship further strengthened her passion for
          project management and emphasized the power of adaptability and
          critical thinking as an analyst.
        </p>
      </>
    ),
    image: "/ishika.jpg",
    linkedIn: "https://www.linkedin.com/in/ishika-singh-chandel/",
  },
  {
    id: "akanksha-singh",
    title: "Akanksha Singh - PM Analyst at US Crew Change",
    description: (
      <>
        <p>
          Project management is an organizational function that guides every
          step of a Project’s lifecycle — from development to positioning and
          pricing — by focusing on the Project and its customers first and
          foremost.
        </p>

        <p>
          Delving deeper into Akansha’s internship journey as a Technical
          Project Manager at Tesla, how embracing project management principles
          allowed her to navigate challenges, coordinate new Project launches,
          and optimize manufacturing processes.
        </p>
      </>
    ),
    image: "/akanksha.jpg",
    linkedIn: "https://www.linkedin.com/in/singhakanksha11/",
  },
];

export const FAQs = [
  {
    question: "How do I join PMC?",
    answer:
      "To join PMC, attend one of our meetings or events, or contact us through any of our channels. We welcome students from all backgrounds and majors.",
  },
  {
    question: "Is the $15 fee one-time?",
    answer:
      "Yes, the $15 membership fee is a one-time payment for the academic year. This includes access to all events, networking opportunities, and member benefits.",
  },
  {
    question: "Can non-UTD students join?",
    answer:
      "While PMC is primarily for UTD students, we encourage interested individuals to reach out. Contact us to discuss potential membership opportunities.",
  },
  {
    question: "How do I become an officer?",
    answer:
      "Officer positions are filled based on interest, involvement, and leadership qualities. Express your interest by contacting us or attending our officer nomination period.",
  },
  {
    question: "Do you offer partnerships or speaking slots?",
    answer:
      "Absolutely! We're always looking for partnerships and guest speakers. Send us a message with your proposal and we'll get back to you within 3 days.",
  },
];

export const QuickInfoData = [
  { label: "RESPONSE TIME", value: "Within 3 days", icon: Zap },
  { label: "LOCATION", value: "UT Dallas, TX", icon: MapPin },
  { label: "OFFICE HOURS", value: "Mon–Fri, 10am–6pm", icon: Clock },
];

export const PERKS = [
  {
    icon: "🎤",
    title: "Speaker Sessions",
    desc: "Inspiring talks from PMs at Microsoft, Google, Tesla, Amazon & more top companies.",
  },
  {
    icon: "📄",
    title: "Resume Reviews",
    desc: "Tailored 1-on-1 feedback from industry professionals to perfect your resume.",
  },
  {
    icon: "🎯",
    title: "Interview Prep",
    desc: "Expert-led mock interviews and prep sessions to land your dream PM role.",
  },
  {
    icon: "🤝",
    title: "Networking Events",
    desc: "Connect with peers, mentors, and industry leaders who shape PM careers.",
  },
  {
    icon: "💬",
    title: "PM Community",
    desc: "Join an engaging community of 450+ members passionate about project management.",
  },
  {
    icon: "📜",
    title: "Certification Guidance",
    desc: "Workshops on PMP, Agile, and Scrum certifications with certified experts.",
  },
];

export const STEPS = [
  {
    num: "01",
    title: "Fill the Form",
    desc: "Complete the Google Form with your details to register your membership.",
  },
  {
    num: "02",
    title: "Send Payment",
    desc: "Pay $15 via Zelle to the PMC email. Scan the QR code to pay instantly.",
  },
  {
    num: "03",
    title: "Submit Screenshot",
    desc: "Attach a screenshot of your payment confirmation to the Google Form.",
  },
  {
    num: "04",
    title: "Get Confirmed",
    desc: "Receive your confirmation email within 3 days. Questions? WhatsApp us.",
  },
];

export const MEMBER_STATS = [
  { value: "450+", label: "Members" },
  { value: "32", label: "Mentors" },
  { value: "65+", label: "Events" },
  { value: "$15", label: "Lifetime Access" },
];

export const BUDDIES = [
  {
    name: "",
    image: "/ssp_1.png",
  },
  {
    name: "",
    image: "/ssp_2.png",
  },
  {
    name: "",
    image: "/ssp_3.png",
  },
  {
    name: "",
    image: "/ssp_4.png",
  },
  {
    name: "",
    image: "/ssp_5.png",
  },
  {
    name: "",
    image: "/ssp_6.png",
  },
  {
    name: "",
    image: "/ssp_7.png",
  },
  {
    name: "",
    image: "/ssp_8.png",
  },
  {
    name: "",
    image: "/ssp_9.png",
  },
  {
    name: "",
    image: "/ssp_10.png",
  },
];

export const UPCOMING = [
  {
    id: 1,
    title: "Keep in Touch!",
    date: "Rolling / Ongoing",
    tag: "Community",
    description:
      "Waiting for more events? Follow us on all social media platforms to stay updated on upcoming workshops, networking events, and exclusive member opportunities.",
    color: "#52b788",
    icon: "📡",
  },
];

export const PAST = [
  {
    id: 2,
    title: "Project Management Club Social!",
    date: "Spring 2024",
    tag: "Social",
    icon: "🎉",
    color: "#52b788",
    description:
      "PMC hosted a phenomenal social event in honor of finishing the semester strong — 'The PMC Social'. We welcomed members from across campus to join the PMC family, connect with Amazon, Deloitte, and more amazing companies. A networking opportunity for everyone who attended.",
    hasButton: false,
  },
  {
    id: 3,
    title: "Mastering MS Project",
    date: "November 9th, 2024 · 11:00 AM – 1:30 PM",
    tag: "Workshop",
    icon: "📊",
    color: "#4895ef",
    description:
      "The Project Management Club is hosting a data competition and interactive workshop on Saturday, November 9th, 2024, from 11:00 AM to 1:30 PM. This event will be facilitated by a top-tier industry professional giving you a chance to enhance your project management skills using MS Project. Register here to secure your spot!",
    hasButton: false,
  },
  {
    id: 4,
    title: "Level Up your PM Career: PMP & Agile Certifications Explained",
    date: "Fall 2024",
    tag: "Career",
    icon: "🏆",
    color: "#d4a017",
    description:
      "A professional development event hosted by the Project Management Club to help students level up their certifications. Learn how PMP and Agile certifications are exactly what you need for the next step in your career, led by industry-level cert experts. Featuring Daniel Santos from Solutions Consultants at Levi Strauss, and Anand Nair from Infosys at Living Payments.",
    hasButton: false,
  },
  {
    id: 5,
    title: "Mastering MS Project",
    date: "November 9th, 2024",
    tag: "Workshop",
    icon: "📊",
    color: "#4895ef",
    description:
      "The Project Management Club is organizing a data competition and interactive workshop on Saturday. This event will be facilitated by a top-tier industry professional. Register now to secure your spot — limited seats available.",
    hasButton: false,
  },
  {
    id: 6,
    title: "Fall 2025 Kickoff",
    date: "Fall 2025",
    tag: "Kickoff",
    icon: "🚀",
    color: "#f77f00",
    description:
      "The Project Management Club is thrilled to welcome you to the Fall 2025 Kickoff! With a brand new semester comes exciting workshops, networking and career resources to grow your skill set. Stay tuned for our action-packed schedule of events all semester long — you won't want to miss a single one! Let's make this semester one to remember together.",
    hasButton: true,
    buttonLink: "/Fall25kickoff",
  },
  {
    id: 7,
    title: "Mastering MS Project",
    date: "Fall 2024",
    tag: "Workshop",
    icon: "📊",
    color: "#4895ef",
    description:
      "Ever wondered how Project Management works in the real world? Join our 150-person community for a comprehensive and hands-on workshop learning how to efficiently manage projects. You'll work with MS Project tools learning real-time skills through a data competition. Learn the skills that help seasoned experts bring projects to life in digital form.",
    hasButton: false,
  },
  {
    id: 8,
    title: "Charting the PM Adventure",
    date: "Spring 2024",
    tag: "Speaker",
    icon: "🗺️",
    color: "#c77dff",
    description:
      "Learn all about Project Management and how to step into PM. Connect with PMC to learn how industry professionals filled exciting PM roles filled with amazing growth-oriented experience. Gain inside knowledge through live speakers, PMC community discussions and expert Q&A from industry leaders.",
    hasButton: true,
    buttonLink: "/CharteringAdventure",
  },
  {
    id: 9,
    title: "PMC Kickoff Event",
    date: "Fall 2023",
    tag: "Kickoff",
    icon: "🎯",
    color: "#f77f00",
    description:
      "Welcome to the Project Management Club at UTD! Come join our exciting kickoff to be part of a leading student organization from UTD. You'll be meeting an amazing community and learning exciting options for the upcoming year. Let's kick it off at Comet Cafe!",
    hasButton: true,
    buttonLink: "/Spring25kickoff",
  },
  {
    id: 10,
    title: "Vision to Value",
    date: "Spring 2024",
    tag: "Workshop",
    icon: "💡",
    color: "#52b788",
    description:
      "The Project Management Club is excited to bring Vision to Value, a workshop on business and products that will help first-year students explore how you can learn all about Project Management. How to level up your career, discussions with experts, networking and more — register now to find your place in PM and be part of our community.",
    hasButton: false,
  },
  {
    id: 11,
    title: "PM Launchpad",
    date: "Spring 2024",
    tag: "Career",
    icon: "🛸",
    color: "#4895ef",
    description:
      "Are you aspiring to build a Summer internship in Project Management? Join us to understand how you can break into the PM industry. There's also an interactive workshop to analyze and deliver ongoing projects. Meet industry experts who will share more about Project Management.",
    hasButton: false,
  },
  {
    id: 12,
    title: "Introduction to Product Management",
    date: "Wednesday, October 11, 2023 · 6:00 PM",
    tag: "Speaker",
    icon: "📦",
    color: "#c77dff",
    description:
      "Learn all about Product Management and how to step into PM and grow your existing skills — how to change your career or level your existing skills. Workshops with a PM professor, industry experts — learn how industry professionals break into Product Management. When to step into Project Management as a graduate, why the transition helps you gain a foothold in industry and helps you grow.",
    hasButton: false,
  },
  {
    id: 13,
    title: "Convergence 360",
    date: "Spring 2024",
    tag: "Conference",
    icon: "🔄",
    color: "#52b788",
    description:
      "If you want the world of project management with Convergence 360! Discuss open positions for PM roles filled with amazing growth during a fireside dialog, guest speakers, community meetups, and a round-table conversation for teams and great opportunities for students and alumni.",
    hasButton: true,
    buttonLink: "/Convergence360",
  },
  {
    id: 14,
    title: "Project Management 101",
    date: "February 14, 2023 · 5 PM CST",
    tag: "Workshop",
    icon: "📋",
    color: "#4895ef",
    description:
      "From beginner lessons on frameworks, methodologies, and the fundamentals of consulting, this Project Management essentials session builds a strong foundation for your career. Get involved with project management professionals and work with industry talent.",
    hasButton: true,
    buttonLink: "/ProjectManagement101",
  },
  {
    id: 15,
    title:
      "Digital Transformation, Emerging Technologies & Impact of Generative AI",
    date: "September 2023",
    tag: "Conference",
    icon: "🤖",
    color: "#d4a017",
    description:
      "Gain exposure to thousands of individuals and industries that are a broad cross-industry discussion covering how emerging GenAI technology has become central to PM practices worldwide.",
    hasButton: false,
  },
  {
    id: 16,
    title: "Project Management and Beyond",
    date: "April 11, 2024 · 6:30 PM CST",
    tag: "Panel",
    icon: "🌐",
    color: "#48cae4",
    description:
      "With an all-star cast of speakers, join a discussion on the future of PM at UTD. Project Management professionals, including Senior Program Managers, Branch Managers and Strategy Planners, sharing extensive thoughts and ideas for the industry and growing impact. For students and alumni: get prepared to make your mark on PM and advance your professional career.",
    hasButton: true,
    buttonLink: "/ProjectManagementAndBeyond",
  },
];

export const TAG_COLORS: Record<
  string,
  {
    active: string;
    inactive: string;
    color: string;
    via: string;
    tag: string;
  }
> = {
  All: {
    active: "bg-green-500 text-white border-green-500",
    inactive: "border hover:border-green-500 hover:text-green-500",
    color: "bg-green-500 opacity-30",
    via: "via-green-500",
    tag: "bg-green-500/10 border-green-500/30 text-green-500",
  },
  Social: {
    active: "bg-green-500 text-white border-green-500",
    inactive: "border hover:border-green-500 hover:text-green-500",
    color: "bg-green-500 opacity-30",
    via: "via-green-500",
    tag: "bg-green-500/10 border-green-500/30 text-green-500",
  },
  Workshop: {
    active: "bg-sky-500 text-white border-sky-500",
    inactive: "border hover:border-sky-500 hover:text-sky-500",
    color: "bg-sky-500 opacity-30",
    via: "via-sky-500",
    tag: "bg-sky-500/10 border-sky-500/30 text-sky-500",
  },
  Career: {
    active: "bg-amber-500 text-white border-amber-500",
    inactive: "border hover:border-amber-500 hover:text-amber-500",
    color: "bg-amber-500 opacity-30",
    via: "via-amber-500",
    tag: "bg-amber-500/10 border-amber-500/30 text-amber-500",
  },
  Kickoff: {
    active: "bg-orange-500 text-white border-orange-500",
    inactive: "border hover:border-orange-500 hover:text-orange-500",
    color: "bg-orange-500 opacity-30",
    via: "via-orange-500",
    tag: "bg-orange-500/10 border-orange-500/30 text-orange-500",
  },
  Speaker: {
    active: "bg-purple-500 text-white border-purple-500",
    inactive: "border hover:border-purple-500 hover:text-purple-500",
    color: "bg-purple-500 opacity-30",
    via: "via-purple-500",
    tag: "bg-purple-500/10 border-purple-500/30 text-purple-500",
  },
  Conference: {
    active: "bg-emerald-500 text-white border-emerald-500",
    inactive: "border hover:border-emerald-500 hover:text-emerald-500",
    color: "bg-emerald-500 opacity-30",
    via: "via-emerald-500",
    tag: "bg-emerald-500/10 border-emerald-500/30 text-emerald-500",
  },
  Panel: {
    active: "bg-cyan-500 text-white border-cyan-500",
    inactive: "border hover:border-cyan-500 hover:text-cyan-500",
    color: "bg-cyan-500 opacity-30",
    via: "via-cyan-500",
    tag: "bg-cyan-500/10 border-cyan-500/30 text-cyan-500",
  },
  Community: {
    active: "bg-green-500 text-white border-green-500",
    inactive: "border hover:border-green-500 hover:text-green-500",
    color: "bg-green-500 opacity-30",
    via: "via-green-500",
    tag: "bg-green-500/10 border-green-500/30 text-green-500",
  },
};

export const FACULTY: FacultyType = {
  name: "Prof. Surmann Kennedyl, PhD",
  role: "Faculty Advisor",
  initials: "SK",
  dept: "School of Management",
};

export const TEAM: MemberType[] = [
  {
    name: "Rucha Sonje",
    role: "President",
    dept: "MS ITM",
    initials: "RS",
    tier: 1,
    poster: "/president.png",
  },
  {
    name: "Debopriya Pal",
    role: "Vice President",
    dept: "MS BA&AI",
    initials: "DP",
    tier: 1,
    poster: "/vice_president.png",
  },
  {
    name: "Vanshu Batra",
    role: "General Secretary",
    dept: "MS ITM",
    initials: "VB",
    tier: 1,
    poster: "/general_secretary.png",
  },
  {
    name: "Anush Ramachandran",
    role: "Strategy Lead",
    dept: "MBA, MS Supply Chain",
    initials: "AR",
    tier: 1,
    poster: "/strategy_lead.png",
  },
  {
    name: "Venkata Sai Charan Reddy",
    role: "SOC & Treasurer",
    dept: "",
    initials: "VC",
    tier: 2,
    poster: "/soc_treasure.png",
  },
  {
    name: "Teja Kuragayalabathi",
    role: "Growth Officer",
    dept: "MS BA & AI",
    initials: "TK",
    tier: 2,
    poster: "/growth_1.png",
  },
  {
    name: "Tejasvi Sagi",
    role: "Growth Officer",
    dept: "",
    initials: "TS",
    tier: 2,
    poster: "/growth_2.png",
  },
  {
    name: "Shivani Garg",
    role: "Growth Officer",
    dept: "",
    initials: "SG",
    tier: 2,
    poster: "/growth_3.png",
  },
  {
    name: "Uttej Santani",
    role: "Growth Officer",
    dept: "",
    initials: "US",
    tier: 2,
    poster: "/growth_4.png",
  },
  {
    name: "Zeeshan Ahmad",
    role: "Events Officer",
    dept: "",
    initials: "ZA",
    tier: 2,
    poster: "/event_1.png",
  },
  {
    name: "Vaishnavi Dosapati",
    role: "Events Officer",
    dept: "",
    initials: "VD",
    tier: 2,
    poster: "/event_2.png",
  },
  {
    name: "Harsha Vardhini",
    role: "Events Officer",
    dept: "",
    initials: "HV",
    tier: 2,
    poster: "/event_3.png",
  },
  {
    name: "Hikmatyar Khan",
    role: "Events Officer",
    dept: "",
    initials: "HK",
    tier: 2,
    poster: "/event_4.png",
  },
  {
    name: "Tara Canugovi",
    role: "Corporate Relations Lead",
    dept: "MS BA & AI",
    initials: "TC",
    tier: 2,
    poster: "/relation_1.png",
  },
  {
    name: "Vipul Suresh Sonje",
    role: "CR Officer",
    dept: "MS ITM",
    initials: "VS",
    tier: 2,
    poster: "/cr_1.png",
  },
  {
    name: "Haseeb Ahmed",
    role: "CR Officer",
    dept: "",
    initials: "HA",
    tier: 2,
    poster: "/cr_2.png",
  },
  {
    name: "Omar Keyser",
    role: "CR Officer",
    dept: "",
    initials: "OK",
    tier: 2,
    poster: "/cr_3.png",
  },
  {
    name: "Projalata Bhavsar",
    role: "Social Media Lead",
    dept: "",
    initials: "PB",
    tier: 3,
    poster: "/sm_1.png",
  },
  {
    name: "Qurrat Ul Ain",
    role: "Social Media Officer",
    dept: "",
    initials: "QA",
    tier: 3,
    poster: "/sm_2.png",
  },
  {
    name: "Sakshi Sonawane",
    role: "Social Media Officer",
    dept: "",
    initials: "SS",
    tier: 3,
    poster: "/sm_3.png",
  },
  {
    name: "Rajshree Rajan",
    role: "Social Media Officer",
    dept: "",
    initials: "RR",
    tier: 3,
    poster: "/sm_4.png",
  },
  {
    name: "Muattar Fatima",
    role: "Social Media Officer",
    dept: "",
    initials: "MF",
    tier: 3,
    poster: "/sm_5.png",
  },
  {
    name: "Akshay Badgujar",
    role: "Website Officer",
    dept: "",
    initials: "AB",
    tier: 3,
    poster: "/wd_1.png",
  },
  {
    name: "Arnav Kumar",
    role: "Website Officer",
    dept: "",
    initials: "AK",
    tier: 3,
    poster: "/wd_2.png",
  },
];

export const ROLE_COLORS: Record<string, string> = {
  President: "#52b788",
  "Vice President": "#40916c",
  "General Secretary": "#74c69d",
  "Strategy Lead": "#95d5b2",
  "SOC & Treasurer": "#d4a017",
  "Growth Officer": "#52b788",
  "Events Officer": "#4895ef",
  "Corporate Relations Lead": "#f77f00",
  "CR Officer": "#f77f00",
  "Social Media Lead": "#c77dff",
  "Social Media Officer": "#c77dff",
  "Website Officer": "#48cae4",
  "Faculty Advisor": "#d4a017",
};

export const AVATAR_GRADIENTS = [
  ["#1b4332", "#2d6a4f"],
  ["#0d2b1d", "#1b6b45"],
  ["#1a2840", "#2d4a6a"],
  ["#2b1a40", "#5a2d6a"],
  ["#402b1a", "#6a4a2d"],
  ["#1a3040", "#2d5a6a"],
  ["#301a2b", "#6a2d5a"],
] as const;

export const EVENT_DETAILS = [
  {
    id: "Fall25kickoff",
    club: "THE PROJECT MANAGEMENT CLUB",
    title: "The Fall 2025 Kickoff!",
    date: "12th September 2025 at 6:00 PM CST",
    tag: "Kickoff",
    images: ["/F25Kickoff_main.jpg", "/F25Kickoff_1.jpg", "/F25Kickoff_2.jpg"],
    description: (
      <p>
        Welcome to the 2025 Fall Kickoff of the Project Management Club! Joining
        us were{" "}
        <strong>
          Tejasvi Sagi, Kumari Chetna, Sana Hadqani, David E. Santosh
        </strong>
        . Over the course of the kickoff they shared their experiences at the
        internships they completed over the summer and answered questions asked
        by members of the PMC and other attendees
      </p>
    ),
  },
  {
    id: "CharteringAdventure",
    club: "THE PROJECT MANAGEMENT CLUB",
    title: "Chartering the PM Adventure!",
    date: "25th March 2025 6:30 PM CST",
    tag: "Speaker",
    images: [
      "/Chartering_Advent_main.jpeg",
      "/Chartering_Advent_1.jpeg",
      "/Chartering_Advent_2.jpeg",
    ],
    description: <p></p>,
  },
  {
    id: "Spring25kickoff",
    club: "THE PROJECT MANAGEMENT CLUB",
    title: "Spring 2025 Kickoff!",
    date: "27th February 2025 4:30 PM to 6:30 PM CST",
    tag: "Kickoff",
    images: [
      "/Chartering_Advent_main.jpeg",
      "/S25Kickoff_1.jpeg",
      "/S25Kickoff_2.png",
    ],
    description: <p></p>,
  },
  {
    id: "Convergence360",
    club: "THE PROJECT MANAGEMENT CLUB and ITM SLC",
    title: "Convergence 360",
    date: "3rd April 2024 at 6:30 PM CST",
    tag: "Conference",
    images: [
      "/convergence360_main.png",
      "/convergence360_1.png",
      "/convergence360_2.png",
    ],
    description: (
      <p>
        🚀 Dive into the world of project management with Convergence 360! 📆
        Join us on April 3rd for an inspiring day filled with insights from four
        distinguished speakers. Don’t miss out on this incredible opportunity to
        learn and grow!
      </p>
    ),
  },
  {
    id: "ProjectManagement101",
    club: "THE PROJECT MANAGEMENT CLUB",
    title: "Project Management 101",
    date: "1st February 2024 at 5 PM CST",
    tag: "Speaker",
    images: [
      "/ProjectManagement101_main.png",
      "/ProjectManagement101_1.png",
      "/ProjectManagement101_2.png",
    ],
    description: (
      <p>
        Students discovered the fundamentals of Project Management, explored
        Soft Skills & Career Paths for Project Managers, learnt Strategies to
        excel in IT Project Management, and delved into everything you need to
        know about Project Management.
      </p>
    ),
  },
  {
    id: "ProjectManagementAndBeyond",
    club: "THE PROJECT MANAGEMENT CLUB",
    title: "PROJECT MANAGEMENT AND BEYOND",
    date: "14th September 2023 at 4:30 PM CST",
    tag: "Conference",
    images: [
      "/ProjectManagementAndBeyond_main.png",
      "/ProjectManagementAndBeyond_1.png",
      "/ProjectManagementAndBeyond_2.png",
    ],
    description: (
      <>
        <p>
          We were delighted to have over 80 attendees join us for our Fall Kick
          Off event - Project Management and Beyond!
        </p>
        <p>
          Thank you to our speakers Iram A, Neel Sharma and Sameer Ahmed for
          sharing some insights about the evolution of project management, the
          best practices and advanced methodologies to deal with obstacles
          encountered by Projects Managers and evolution of effective approaches
          embraced in project management leveraging AI
        </p>
      </>
    ),
  },
];
