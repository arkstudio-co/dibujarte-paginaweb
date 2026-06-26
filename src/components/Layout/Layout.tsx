import { ReactNode } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import styles from "./Layout.module.css";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
