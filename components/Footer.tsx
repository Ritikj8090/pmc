import { navbarLists, socialMediaList } from "@/constant";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="pb-2 pt-6 mt-2 px-[5%] border-t border-green-500/30 flex justify-between items-center flex-wrap gap-6">
      <Image src="/logo.png" alt="PMC Logo" width={250} height={250} className="md:w-auto md:h-10 w-45" />
      <ul className="flex md:gap-6 gap-2 list-none flex-wrap">
        {navbarLists.map((navbar) => (
          <Link
            key={navbar.href}
            href={navbar.href}
            className="transition-colors duration-300 hover:text-green-600 text-sm"
          >
            {navbar.name}
          </Link>
        ))}
      </ul>
      <div className="flex gap-4">
        {socialMediaList.map((media) => (
          <a
            key={media.name}
            href={media.href}
            className="text-2xl transition-all duration-300 hover:text-green-600"
          >
            {<media.icon />}
          </a>
        ))}
      </div>
      <div className="w-full border-t border-green-500/30 pt-4 text-center font-mono text-muted-foreground text-xs">
        © 2024 Project Management Club at UT Dallas. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
