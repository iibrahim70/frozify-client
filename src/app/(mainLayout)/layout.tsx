import { ReactNode } from "react";
import Navbar from "@/components/shared/Navbar";

const mainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
};

export default mainLayout;
