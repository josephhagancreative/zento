import styles from "../styles/NewestBlogPosts.module.css"
import Image from "next/image"
import Link from "next/link"

export default function NewestBlogPosts({ posts }) {
  // console.log(posts)
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Blog Posts</h2>
      <div className={styles.cardContainer}>
        {posts &&
          posts.map((post) => (
            <div key={post.sys.id} className={styles.card}>
              <Link href={`/blog/${post.fields.slug}`}>
                <a>
                  <div className={styles.imageContainer}>
                    <Image
                      src={`http://${post.fields.thumbnail.fields.file.url}`}
                      width={1920}
                      height={1080}
                      layout="responsive"
                    />
                  </div>
                  <p className={styles.blogTitle}>{post.fields.title}</p>
                </a>
              </Link>
            </div>
          ))}
      </div>
      <div className={styles.btn}>
        <Link href="/blog">
          <a>View More</a>
        </Link>
      </div>
    </div>
  )
}
