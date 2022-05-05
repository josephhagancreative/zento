import styles from "../styles/NavLinks.module.css"
import Link from "next/link"

function NavLinks({ setShowMenu }) {
  return (
    <div className={styles.linksContainer}>
      <Link href="/">
        <a onClick={() => setShowMenu(false)}>
          <p className={styles.link}>Home</p>
        </a>
      </Link>
      <Link href="/blog">
        <a onClick={() => setShowMenu(false)}>
          <p className={styles.link}>Blog</p>
        </a>
      </Link>
      <Link href="/videos">
        <a onClick={() => setShowMenu(false)}>
          <p className={styles.link}>Videos</p>
        </a>
      </Link>
      <Link href="/about">
        <a onClick={() => setShowMenu(false)}>
          <p className={styles.link}>About</p>
        </a>
      </Link>
      <Link href="/contact">
        <a onClick={() => setShowMenu(false)}>
          <p className={styles.link}>Contact</p>
        </a>
      </Link>
    </div>
  )
}

export default NavLinks
