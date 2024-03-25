import styles from './Hero.module.css'
import { getImageUrl } from '../../utils'

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I am Ishraq</h1>
        <p className={styles.description}>
          I am a full-stack developer with 3 years of experience using React and
          NodeJS. Have a strong knowledge of Next js and Django framework. Reach
          out if you would like to learn more!
        </p>
        <a
          href="mailto:ishraqulalam123@gmail.com"
          className={styles.contactBtn}
        >
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl('hero/heroImage.png')}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  )
}
