import styles from "../styles/Videos.module.css"
import Image from "next/image"
import { useState } from "react"

// Google API and PlayList ID
const YT_PL_API = "https://www.googleapis.com/youtube/v3/playlistItems"
const PL_ID = "PLvn_3InFKYdzxh5lcuDU80Iy0_PSrDKfk"
const statisticsURL = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${process.env.YT_CID}&key=${process.env.YT_API}`
const uploadsURL = `https://youtube.googleapis.com/youtube/v3/search?part=id%2Csnippet&channelId=${process.env.YT_CID}&type=video&maxResults=100&key=${process.env.YT_API}`

// Get static Props
export async function getStaticProps() {
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
      videos: data.items,
      channelInfo: channelInfo.items,
      videosInfo: videosInfo,
    },
    revalidate: 1,
  }
}

export default function videos({ videos, channelInfo, videosInfo }) {
  // console.log(videosInfo)
  const [searchValue, setSearchValue] = useState("")
  const sortedVids = videosInfo.items
    .sort((a, b) =>
      Number(
        new Date(b.snippet.publishedAt) -
          Number(new Date(a.snippet.publishedAt))
      )
    )
    .filter((vid) =>
      vid.snippet.title.toLowerCase().includes(searchValue.toLowerCase())
    )

  // console.log(sortedVids)
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Youtube Videos</h2>
      <form className={styles.inputContainer}>
        <input
          className={styles.searchBox}
          type="text"
          placeholder="Search Videos..."
          name="search"
          id="search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button
          className={styles.searchBtn}
          onClick={(e) => e.preventDefault()}>
          Search
        </button>
      </form>
      {sortedVids.length == 0 && (
        <div>
          <p>No videos found matching that search term</p>
          <button
            className={styles.clearSearchBtn}
            onClick={() => setSearchValue("")}>
            Clear Search
          </button>
        </div>
      )}
      <ul className={styles.grid}>
        {sortedVids &&
          sortedVids.map((video) => {
            return (
              <li key={video.id.videoId} className={styles.card}>
                <a
                  className={styles.link}
                  href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                  target="_blank">
                  <Image
                    className={styles.img}
                    src={video.snippet.thumbnails.medium.url}
                    width={video.snippet.thumbnails.medium.width}
                    height={video.snippet.thumbnails.medium.height}
                    alt=""
                    // layout="responsive"
                  />

                  <h3 className={styles.videoTitle}>{video.snippet.title}</h3>
                </a>
              </li>
            )
          })}
      </ul>
    </div>
  )
}
