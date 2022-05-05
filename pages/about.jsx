import styles from "../styles/About.module.css"
import SocialIcons from "../comps/SocialIcons"
function about() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>About</h2>
      <h3>こんにちは</h3>
      <p>
        I'm Joe and this is Zento. Yes I did choose that channel name because it
        rhymes with mine, but also because 前途 has the meaning of a journey,
        looking into the future, to a certain place or level we're not at yet.
        This is what I want the channel to be.
      </p>
      <p>
        I'm still on a journey through Japanese myself. Having passed the JLPT
        N2 and constantly looking to improve, I've tried a whole load of
        textbooks, apps, websites, books, games, teachers, lessons, etc. Some
        good, some not so good. But here I hope to highlight pros and cons of
        various materials. Also I'd like to make this a sort of record of where
        I'm at and where I want to be. It's good to have goals!
      </p>
      <p>
        So welcome anyone looking to learn Japanese, or with an interest in it.
        Please say hello and let's look to the future together!
      </p>
      <br />
      <p>Please follow me on the social media accounts below to connect!</p>
      <SocialIcons />
    </div>
  )
}

export default about