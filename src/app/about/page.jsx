import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/36372/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Siberian Husky</h1>
          <h2 className={styles.imgDesc}>
            {" "}
            The cuties and dramatic dog its husky
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>what is husky</h1>
          <p className={styles.desc}>
            Termasuk dalam jenis anjing ras berukuran sedang dan berbulu tebal.
            Anjing ras ini termasuk jinak dan ramah kepada siapapun. Husky
            siberia sekilas mirip serigala, yang mungkin terjadi karena hasil
            persilangan alam. Aslinya ras ini dikembangkan oleh masyarakat
            Chukchi di daerah Asia Timur Laut sebagai anjing penarik kereta
            untuk membawa beban di atas salju. Anjing ini dapat melolong seperti
            layaknya serigala. Tahun 1909, untuk pertama kalinya anjing jenis
            ini dibawa ke Alaska untuk bertanding dalam pertandingan jarak jauh
            seluruh Alaska. Semenjak pertandingan tersebut, ketahanan tubuh dan
            kecepatan lari anjing dari Siberia mulai dikenal. [1]
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, fuga
            quas natus in fugiat eveniet incidunt ullam harum odio ut aliquam
            corporis voluptatibus, odit iusto veniam. Ullam velit eos saepe.
          </p>
        </div>
        <div className={styles.item}></div>
        <h1 className={styles.title}>whats husky Do ?</h1>
        <p className={styles.desc}>
          The Siberian Husky, or the Sibirsky for short, is a breed of
          small-toothed, hardy Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Rerum, fuga quas natus in fugiat eveniet incidunt
          ullam harum odio ut aliquam corporis voluptatibus, odit iusto veniam.
          Ullam velit eos saepe.
          <br />
          <br /> - Dynamic Websites
          <br />
          <br /> - Fast and Handy
          <br />
          <br /> - Mobile Apps
        </p>
        <Button url="/contact" text="Contact" />
      </div>
    </div>
  );
};

export default About;
