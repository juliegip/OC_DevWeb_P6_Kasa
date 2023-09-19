import styles from './Banner.module.scss'

function Banner({ title, imgURL }) {
  return (
    <div className={styles.bannerContainer}>
      <h1 className={styles.bannerTitle}>{title}</h1>
      <img src={imgURL} alt="Kasa banner" className={styles.bannerImg} />
    </div>
  )
}

export default Banner
