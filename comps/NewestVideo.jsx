import styles from "../styles/NewestVideo.module.css"
import Link from "next/link"

function NewestVideo({ videoData }) {
  // console.log(videoData)
  return (
    <div className={styles.container}>
      <div className={styles.maxWidth}>
        <h2 className={styles.title}>Latest Youtube Video</h2>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.iframeContainer}>
              <iframe
                // width="560"
                // height="315"
                src={`https://www.youtube.com/embed/${videoData.id.videoId}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
            </div>
          </div>
          <div className={styles.right}>
            <h2 className={styles.videoTitle}>{videoData.snippet.title}</h2>
            <p className={styles.description}>
              {videoData.snippet.description}
            </p>
          </div>
        </div>
        <Link href="/videos">
          <div className={styles.btn}>
            <a>View All Videos</a>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default NewestVideo
