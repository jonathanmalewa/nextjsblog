import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/hero.png";
import Button from "@/components/button/Button";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.items}>
          <h1 className={styles.title}>
            {" "}
            Beter Desain For Your Digital Product
          </h1>
          <p className={styles.desc}>
            Turning Your Idea Into Reality. We bring together the teams from
            global tech industry
          </p>
          <Button url="/portofolio" text="See our Works" />
        </div>
        <div className={styles.items}>
          <Image src={Hero} className={styles.img} />
        </div>
      </div>
    </>
  );
}
