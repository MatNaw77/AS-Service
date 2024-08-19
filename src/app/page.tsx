import styles from "./page.module.css";
import Navbar from "@/Components/Navbar/Navbar";
import About from "@/Components/About/About";
import BrandsBanner from "@/Components/BrandsBanner/BrandsBanner";
import Services from "@/Components/Services/Services";
import Contact from "@/Components/Contact/Contact";
import CheckUs from "@/Components/CheckUs/CheckUs";
import Footer from "@/Components/Footer/Footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <div className={styles.content}>
        <About />
        <BrandsBanner />
        <Services />
        <div className={styles.divider} />
        <Contact />
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" fill='none' viewBox="0 0 1440 24" preserveAspectRatio="none">
          <path d="M0 1L709 1L1183 1L1213 23L1243 1L1440.01 1" stroke="#D9D9D9" />
        </svg>
        <CheckUs />
        <Footer />
      </div>

    </main>
  );
}