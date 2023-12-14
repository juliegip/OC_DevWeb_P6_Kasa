import styles from './Banner.module.scss'

function Banner({ title, imgURL }) {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      <img src={imgURL} alt="Kasa banner" className={styles.picture} />
    </div>
  )
}

export default Banner
