import { ReactNode } from "react";
import Link from "next/link";

const navItems = [
  {
    key: "1",
    href: "/",
    label: "Home",
  },
  {
    key: "2",
    href: "/dashboard/all-products",
    label: "All Products",
  },
];

const dashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="min-h-dvh flex justify-between gap-10">
      <aside className="w-[15%] p-5 bg-jet-gray text-white">
        <Link
          href="/"
          className="inline-block w-full font-bold text-xl text-center"
        >
          Frozify
        </Link>

        <hr className="w-[90%] mx-auto my-5" />

        <div className="flex flex-col items-start w-full">
          {navItems?.map((item) => (
            <Link
              key={item?.key}
              href={item?.href}
              className="w-full py-2 px-3 rounded-md duration-150 ease-in-out bg-transparent hover:bg-black/85"
            >
              {item?.label}
            </Link>
          ))}
        </div>
      </aside>

      <section className="w-[85%]">{children}</section>
    </main>
  );
};

export default dashboardLayout;
