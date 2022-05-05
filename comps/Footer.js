import styles from "../styles/Footer.module.css"
import { BsArrowUpSquareFill } from "react-icons/bs"
BsArrowUpSquareFill

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <p>Copyright 2022 | Zento</p>
        <a href="#logo" className={styles.link}>
          Top of Page <BsArrowUpSquareFill className={styles.icon} />
        </a>
      </div>
    </footer>
  )
}
