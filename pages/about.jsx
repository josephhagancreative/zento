import styles from "../styles/About.module.css"
import SocialIcons from "../comps/SocialIcons"
function about() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>About</h2>
      <h3>こんにちは</h3>
      <p>
        I&#39;m Joe and this is Zento. I chose the name Zento 前途 (ぜんと)
        because it has the meaning of a journey, looking into the future, to a
        certain place or level we&#39;re not at yet, but where we&#39;re aiming
        for.
      </p>
      <p>
        I know it sounds a bit over the top. But I really think language
        learning is a journey, not a sprint, or even a marathon, because
        it&#39;s not a race. But like all good journeys, I am sure it&#39;s
        better with others! So I want to make this site, and all my other
        platforms to be a place for sharing our motivations and helping one
        another to learn Japanese!
      </p>
      <p>
        I&#39;m still on a journey through Japanese myself. Having passed the
        JLPT N2 and constantly looking to improve, I&#39;ve tried a whole load
        of textbooks, apps, websites, books, games, teachers, lessons, etc. Some
        good, some not so good. But here I hope to highlight pros and cons of
        various materials. Also I&#39;d like to make this a sort of record of
        where I&#39;m at and where I want to be. It&#39;s good to have goals!
      </p>
      <p>
        So welcome anyone looking to learn Japanese, or with an interest in it.
        Please say hello and let&#39;s look to the future together!
      </p>

      <p>Please follow me on the social media accounts below to connect!</p>
      <SocialIcons />
      <h4>フォローしてください</h4>
      <br />
      <p>
        Finally I created this website myself, if you have any feedback on how
        to improve, or have any webdesign queries please get in touch with me
        via{" "}
        <a
          href="https://twitter.com/ImJoee"
          className={styles.link}
          target="_blank"
          rel="noreferrer">
          twitter
        </a>{" "}
        or my{" "}
        <a
          className={styles.link}
          href="https://github.com/josephhagancreative"
          target="_blank"
          rel="noreferrer">
          github
        </a>
      </p>
    </div>
  )
}

export default about
