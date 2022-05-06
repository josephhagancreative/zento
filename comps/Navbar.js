import Link from "next/link"
import styles from "../styles/Navbar.module.css"
import { IoMenu, IoClose } from "react-icons/io5"
import { useState } from "react"

import NavLinks from "./NavLinks"

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false)

  const hamburgerIcon = (
    <IoMenu className={styles.icon} onClick={() => setShowMenu(!showMenu)} />
  )
  const closeIcon = (
    <IoClose className={styles.icon} onClick={() => setShowMenu(!showMenu)} />
  )
  return (
    <nav className={styles.navContainer}>
      <div className={styles.navContent}>
        <div className={styles.logoContainer} id="logo">
          <Link href="/">
            <a>
              <p className={styles.logo}>ZENTO</p>
            </a>
          </Link>
        </div>
        <div className={styles.hamburger}>
          {showMenu ? closeIcon : hamburgerIcon}
        </div>

        <div className={styles.linksContainer}>
          <NavLinks setShowMenu={setShowMenu} />
        </div>
        {showMenu && (
          <div className={styles.linksDropdown}>
            <NavLinks setShowMenu={setShowMenu} />
          </div>
        )}
      </div>
    </nav>
  )
}
