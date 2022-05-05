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
                    {/* <Image
                      src={`https://${post.fields.thumbnail.fields.file.url}`}
                      width={600}
                      height={338}
                      layout="responsive"
                      alt={post.fields.title}
                    /> */}
                    <Image
                      className={styles.blogImage}
                      src={"https:" + post.fields.thumbnail.fields.file.url}
                      width={
                        post.fields.thumbnail.fields.file.details.image.width
                      }
                      height={
                        post.fields.thumbnail.fields.file.details.image.height
                      }
                      alt={post.fields.title}
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
