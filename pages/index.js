import Head from "next/head"
import Image from "next/image"
import Script from "next/script"
import styles from "../styles/Home.module.css"
import { createClient } from "contentful"
import Card from "../comps/Card"
import Hero from "../comps/Hero"
import Stats from "../comps/Stats"
import NewestVideo from "../comps/NewestVideo"
import NewestBlogPosts from "../comps/NewestBlogPosts"

// Google API and PlayList ID
const YT_PL_API = "https://www.googleapis.com/youtube/v3/playlistItems"
const PL_ID = "PLvn_3InFKYdzxh5lcuDU80Iy0_PSrDKfk"
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
  const response = await fetch(
    `${YT_PL_API}?part=snippet&playlistId=${PL_ID}&maxResults=50&key=${process.env.YT_API}`
  )
  const data = await response.json()

  const channelRes = await fetch(statisticsURL)
  const channelInfo = await channelRes.json()
  const videosRes = await fetch(uploadsURL)
  const videosInfo = await videosRes.json()

  return {
    props: {
      posts: res.items,
      videos: data.items,
      channelInfo: channelInfo.items,
      videosInfo: videosInfo,
    },
    revalidate: 1,
  }
}

export default function Home({ posts, videos, channelInfo, videosInfo }) {
  // console.log(videos)
  const { statistics } = channelInfo[0]
  // console.log(statistics)
  // console.log(channelInfo)
  // console.log(videosInfo)
  const latest = videosInfo.items.length - 1
  // console.log(videosInfo.items[latest])
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
        <NewestVideo videoData={videosInfo.items[latest]} />
        <NewestBlogPosts posts={[posts[0], posts[1], posts[2]]} />
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
