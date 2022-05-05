import styles from "../styles/Contact.module.css"
import SocialIcons from "../comps/SocialIcons"

function contact() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Contact</h2>
      <p>
        I'm working on implementing a contact form for this website, but in the
        meantime please feel free to contact me below on social media. I use
        Twitter the most!
      </p>
      <p>Please follow me on the social media accounts below to connect!</p>
      <SocialIcons />
    </div>
  )
}

export default contact
