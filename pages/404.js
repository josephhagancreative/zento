import styles from "../styles/NotFound.module.css"
import Link from "next/link"
import { useEffect } from "react"
import { useRouter } from "next/router"

export default function NotFound() {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push("/")
    }, 4000)
  }, [])

  return (
    <div className={styles.notFound}>
      <h1>404</h1>
      <h2>{`That page cannot be found :(`}</h2>
      <p>
        Redirecting to{" "}
        <Link href="/">
          <span className={styles.link}>Homepage</span>
        </Link>{" "}
      </p>
    </div>
  )
}
