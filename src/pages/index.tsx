import dynamic from "next/dynamic";
import Layout from "@/components/Layout/Layout";
import Hero from "@/components/Hero/Hero";
import Products from "@/components/Products/Products";
import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";

const Activity = dynamic(
  () => import("@/components/Activity/Activity"),
  { ssr: false }
);

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Products />
      <About />
      <Activity />
      <Contact />
    </Layout>
  );
}
