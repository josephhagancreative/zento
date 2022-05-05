import styles from "../styles/Hero.module.css"
import { SiTwitter, SiTwitch, SiInstagram, SiYoutube } from "react-icons/si"
export default function SocialIcons() {
  return (
    <div className={styles.iconContainer}>
      <a
        target="_blank"
        className={`${styles.icon} ${styles.youtube}`}
        href="https://www.youtube.com/channel/UCyIHCTZcHkZHxuFaSNfRilA">
        <SiYoutube />
      </a>
      <a
        target="_blank"
        className={`${styles.icon} ${styles.twitch}`}
        href="https://www.twitch.tv/zentojpn">
        <SiTwitch />
      </a>
      <a
        target="_blank"
        className={`${styles.icon} ${styles.twitter}`}
        href="https://twitter.com/zentojpn">
        <SiTwitter />
      </a>
      <a
        target="_blank"
        className={`${styles.icon} ${styles.instagram}`}
        href="https://www.instagram.com/zentojpn">
        <SiInstagram />
      </a>
    </div>
  )
}
