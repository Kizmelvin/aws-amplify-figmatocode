import Head from "next/head";
import styles from "../styles/Home.module.css";
import {
  NavBar,
  HeroLayout3,
  MarketingPricing,
  ContactUs,
} from "../ui-components";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Figma-to-code</title>
      </Head>

      <NavBar />
      <HeroLayout3 />
      <MarketingPricing />
      <ContactUs />
    </div>
  );
}
