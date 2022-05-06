import styles from "../../styles/Blog.module.css"
import { createClient } from "contentful"
import BlogList from "../../comps/BlogList"

// Get static Props
export async function getStaticProps() {
  // Contentful fetch
  const client = createClient({
    space: process.env.C_SID,
    accessToken: process.env.C_CDAPI,
  })

  const res = await client.getEntries({ content_type: "post" })

  return {
    props: {
      posts: res.items,
    },
    revalidate: 60,
  }
}
export default function index({ posts }) {
  // console.log(posts)
  return (
    <div>
      <div className={styles.container}>
        <h1 className={styles.title}>Blog Posts</h1>
      </div>
      <BlogList posts={posts} />
    </div>
  )
}
