import styles from "../styles/Contact.module.css"
import SocialIcons from "../comps/SocialIcons"

function contact() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Contact</h2>
      <p>
        I&#39;m working on implementing a contact form for this website, but in
        the meantime please feel free to contact me below on social media.
        <p>
          I use Twitter the most! I'd love to talk there about games, anime,
          manga and Japanese!
        </p>
        <p>
          If you have a question or suggestion, you could also leave me a
          comment on youtube. I try my best to read and reply to every one!
        </p>
        <p>
          Finally I have started to live stream over on Twitch when I have time,
          so if you could follow me there and give me someone to talk to when I
          stream (usually games in Japanese) that would really make my day!
        </p>
      </p>
      <p>Here are all my social media accounts!</p>
      <SocialIcons />
    </div>
  )
}

export default contact
