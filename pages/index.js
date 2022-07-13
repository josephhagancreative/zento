import Head from "next/head"
import styles from "../styles/Home.module.css"
import { createClient } from "contentful"
import Hero from "../comps/Hero"
import Stats from "../comps/Stats"
import NewestVideo from "../comps/NewestVideo"
import NewestBlogPosts from "../comps/NewestBlogPosts"
import { statistics, videos } from "../data/statistics.js"

// Set Test Mode for Dev
// let test = true
// if (test) {
//   console.log(statistics, videos)
// }

// Google API and PlayList ID
const statisticsURL = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${process.env.YT_CID}&key=${process.env.YT_API}`
const uploadsURL = `https://youtube.googleapis.com/youtube/v3/search?part=id%2Csnippet&channelId=${process.env.YT_CID}&type=video&maxResults=100&key=${process.env.YT_API}`

// Get static Props
export async function getStaticProps() {
  // Contentful fetch
  const client = createClient({
    space: process.env.C_SID,
    accessToken: process.env.C_CDAPI,
  })

  const res = await client.getEntries({ content_type: "post" })

  // Google fetch
  const channelRes = await fetch(statisticsURL)
  const channelInfo = await channelRes.json()
  const videosRes = await fetch(uploadsURL)
  const videosInfo = await videosRes.json()

  return {
    props: {
      posts: res.items,
      channelInfo: channelInfo.items,
      videosInfo: videosInfo,
    },
    revalidate: 43200,
  }
}

export default function Home({ posts, channelInfo, videosInfo }) {
  const { statistics } = channelInfo[0]
  console.log(posts, videosInfo)
  const sortedVideos = videosInfo.items.sort((a, b) =>
    Number(
      new Date(b.snippet.publishedAt) - Number(new Date(a.snippet.publishedAt))
    )
  )
  const sortedPosts = posts.sort((a, b) =>
    Number(new Date(b.sys.createdAt) - Number(new Date(a.sys.createdAt)))
  )
  return (
    <div>
      <Head>
        <title>Zento | Learn Japanese</title>
        <meta name="description" content="Learning Japanese is a journey" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Hero />
        <Stats statistics={statistics} />
        <NewestVideo videoData={sortedVideos[0]} />
        <NewestBlogPosts
          posts={[sortedPosts[0], sortedPosts[1], sortedPosts[2]]}
        />
      </main>

      <style jsx>{`
        .postList {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        .py-1 {
          padding: 1rem 0;
        }
      `}</style>
    </div>
  )
}
