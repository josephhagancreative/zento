import styles from "../styles/Hero.module.css"
import Image from "next/image"

import Link from "next/link"
import SocialIcons from "./SocialIcons"

export default function Hero() {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.cta}>
          <div className={styles.title}>Let's Learn Japanese</div>
          <p className={styles.description}>
            Zento is a community for learning Japanese through video games.
            Won't you join us on our journey?
          </p>
          <button className={styles.btn}>
            <Link href="/blog">READ BLOG</Link>
          </button>
          <SocialIcons />
        </div>
        <div className={styles.imageContainer}>
          <Image src={`/undraw_gaming_re_cma2.svg`} width={500} height={500} />
        </div>
      </div>
    </>
  )
}
