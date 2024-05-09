import { ReactNode } from "react";
import Navbar from "@/components/shared/Navbar";

const mainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default mainLayout;
