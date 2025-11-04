import Link from "next/link";

export const navLinks = [
  {
    title: "Next.js",
    href: "/",
  },
  {
    title: "Users",
    href: "/users",
  },
];

const NavBar = () => {
  return (
    <div className="flex bg-slate-200 p-5">
      {navLinks.map((navLink, index) => (
        <Link key={`navlink-${index}`} href={navLink.href} className="mr-5">
          {navLink.title}
        </Link>
      ))}
    </div>
  );
};

export default NavBar;
