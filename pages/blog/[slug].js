import { createClient } from "contentful"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS, INLINES } from "@contentful/rich-text-types"
import Image from "next/image"
import Head from "next/head"
import styles from "../../styles/Slug.module.css"
import Link from "next/link"
import Skeleton from "../../comps/Skeleton"

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
        destination: "/blog",
        permanent: false,
      },
    }
  }

  return {
    props: { post: items[0] },
    revalidate: 60,
  }
}

const renderOptions = {
  renderNode: {
    [INLINES.EMBEDDED_ENTRY]: (node, children) => {
      // target the contentType of the EMBEDDED_ENTRY to display as you need
      if (node.data.target.sys.contentType.sys.id === "blogPost") {
        return (
          <a href={`/blog/${node.data.target.fields.slug}`}>
            {" "}
            {node.data.target.fields.title}
          </a>
        )
      }
    },
    [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
      // target the contentType of the EMBEDDED_ENTRY to display as you need
      if (node.data.target.sys.contentType.sys.id === "codeBlock") {
        return (
          <pre>
            <code>{node.data.target.fields.code}</code>
          </pre>
        )
      }

      if (node.data.target.sys.contentType.sys.id === "videoEmbed") {
        return (
          <iframe
            src={node.data.target.fields.embedUrl}
            height="100%"
            width="100%"
            frameBorder="0"
            scrolling="no"
            title={node.data.target.fields.title}
            allowFullScreen={true}
          />
        )
      }
    },

    [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
      // render the EMBEDDED_ASSET as you need
      return (
        <img
          src={`https://${node.data.target.fields.file.url}`}
          height={node.data.target.fields.file.details.image.height}
          width={node.data.target.fields.file.details.image.width}
          alt={node.data.target.fields.description}
          className={styles.embeddedImg}
        />
      )
    },
  },
}

export default function BlogPost({ post }) {
  if (!post) return <Skeleton />

  const { featuredImage, title, content, createdAt, snippet } = post.fields
  // console.log(post)
  const createdDate = new Date(createdAt).toDateString()

  return (
    <>
      <Head>
        <title>Zento | {title}</title>
        <meta name="description" content={snippet} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.slugContainer}>
        <div className={styles.banner}>
          <div className={styles.slugTitle}>{title}</div>
          <Image
            className={styles.blogImage}
            src={"https:" + featuredImage.fields.file.url}
            width={featuredImage.fields.file.details.image.width}
            height={featuredImage.fields.file.details.image.height}
            alt={title}
          />
        </div>
        <p className={styles.createdAt}>Created On: {createdDate}</p>
        <div className={styles.blogContent}>
          {documentToReactComponents(content, renderOptions)}
        </div>
        <Link href={`/blog/`} passHref>
          <button className={styles.btn}>Back to Blog posts</button>
        </Link>
      </div>
    </>
  )
}
