import { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

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
      <div className="w-[15%] p-5 bg-jet-gray">
        <Link
          href="/"
          className="inline-block w-full font-bold text-xl text-center text-white"
        >
          Frozify
        </Link>

        <hr className="w-[90%] mx-auto my-5" />

        <div className="flex flex-col items-start w-full">
          {navItems?.map((item) => (
            <Link
              key={item?.key}
              href={item?.href}
              className="w-full py-2 px-3 rounded-md duration-300 ease-in-out bg-transparent hover:bg-black/85"
            >
              {item?.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="w-[85%] bg-green-500">{children}</div>
    </main>
  );
};

export default dashboardLayout;
