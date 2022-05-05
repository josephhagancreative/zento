import styles from "../styles/BlogList.module.css"
import Link from "next/link"
import Image from "next/image"

export default function BlogList({ posts }) {
  // console.log(posts)
  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        {posts &&
          posts.map((post) => (
            <Link href={`/blog/${post.fields.slug}`} key={post.sys.id}>
              <a>
                <div className={styles.card}>
                  <div className={styles.imageContainer}>
                    <Image
                      src={`http://${post.fields.thumbnail.fields.file.url}`}
                      width={1920}
                      height={1080}
                      layout="responsive"
                    />
                  </div>
                  <div className="">
                    <p className={styles.blogTitle}>{post.fields.title}</p>
                    <p className={styles.desc}>{post.fields.snippet}</p>
                  </div>
                </div>
              </a>
            </Link>
          ))}
      </div>
    </div>
  )
}
