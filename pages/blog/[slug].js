import { createClient } from "contentful"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Image from "next/image"
import styles from "../../styles/Slug.module.css"
import Link from "next/link"
// import Skeleton from "../../components/Skeleton"

const client = createClient({
  space: process.env.C_SID,
  accessToken: process.env.C_CDAPI,
})

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "post",
  })

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    }
  })

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: "post",
    "fields.slug": params.slug,
  })

  if (!items.length) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    }
  }

  return {
    props: { post: items[0] },
    revalidate: 1,
  }
}

export default function RecipeDetails({ post }) {
  if (!post) return <Skeleton />

  const { featuredImage, title, content, createdAt } = post.fields
  console.log(post)
  const createdDate = new Date(createdAt).toDateString()

  return (
    <div className={styles.slugContainer}>
      <div className={styles.banner}>
        <div className={styles.slugTitle}>{title}</div>
        <Image
          className={styles.blogImage}
          src={"https:" + featuredImage.fields.file.url}
          width={featuredImage.fields.file.details.image.width}
          height={featuredImage.fields.file.details.image.height}
        />
      </div>
      <p className={styles.createdAt}>Created On: {createdDate}</p>
      <p className={styles.blogContent}>{documentToReactComponents(content)}</p>
      <Link href={`/blog/`}>
        <button className={styles.btn}>Back to Blog posts</button>
      </Link>
    </div>
  )
}
