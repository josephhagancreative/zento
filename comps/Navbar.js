import Link from "next/link"

export default function Navbar() {
  return (
    <nav>
      <Link href="/">
        <a>
          <h1 className={"logo"}>Zento | Learn Japanese</h1>
        </a>
      </Link>
    </nav>
  )
}
