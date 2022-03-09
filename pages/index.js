import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import { createClient } from "contentful"
import Card from "../comps/Card"

export async function getStaticProps() {
  const client = createClient({
    space: process.env.C_SID,
    accessToken: process.env.C_CDAPI,
  })

  const res = await client.getEntries({ content_type: "post" })

  return {
    props: {
      posts: res.items,
    },
    revalidate: 1,
  }
}

export default function Home({ posts }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Zento | Learn Japanese</title>
        <meta name="description" content="Learning Japanese is a journey" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <p className={styles.description}>
          Learning Japanese through video games and other media sources.
        </p>

        <div className="postList content">
          {posts.map((post) => (
            <Card post={post} key={post.sys.id} />
          ))}
        </div>
      </main>

      <style jsx>{`
        .postList {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
      `}</style>
    </div>
  )
}
