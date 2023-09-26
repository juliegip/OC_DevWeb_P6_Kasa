import styles from './Banner.module.scss'

function Banner({ title, imgURL }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <img src={imgURL} alt="Kasa banner" className={styles.picture} />
    </div>
  )
}

export default Banner
