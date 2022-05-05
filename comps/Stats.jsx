import styles from "../styles/Stats.module.css"
import { IoPersonCircle, IoVideocam, IoEye } from "react-icons/io5"

export default function Stats({ statistics }) {
  return (
    <>
      <div className={styles.statsContainer}>
        <div className={styles.statsItem}>
          <p className={styles.subheading}>Subscribers:</p>
          <h3 className={styles.number}>
            <IoPersonCircle className={styles.icon} />
            {statistics.subscriberCount}
          </h3>
        </div>
        <div className={styles.statsItem}>
          <p className={styles.subheading}>Number of Videos:</p>
          <h3 className={styles.number}>
            <IoVideocam className={styles.icon} />
            {statistics.videoCount}
          </h3>
        </div>
        <div className={styles.statsItem}>
          <p className={styles.subheading}>Total Views:</p>
          <h3 className={styles.number}>
            <IoEye className={styles.icon} />
            {statistics.viewCount}
          </h3>
        </div>
      </div>
    </>
  )
}
