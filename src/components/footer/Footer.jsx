import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>&copy;2023 Jonathan Malewa</div>
      <div className={styles.socialMedia}>
        <Image
          src="/1.png"
          width={15}
          height={15}
          className={styles.icon}
          alt="imagedev Facebook"
        />
        <Image
          src="/2.png"
          width={15}
          height={15}
          className={styles.icon}
          alt="imagedev Instagram"
        />
        <Image
          src="/3.png"
          width={15}
          height={15}
          className={styles.icon}
          alt="imagedev Twitter"
        />
        <Image
          src="/4.png"
          width={15}
          height={15}
          className={styles.icon}
          alt="imagedev Youtuber"
        />
      </div>
    </div>
  );
};

export default Footer;
