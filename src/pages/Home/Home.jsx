import Banner from '../../components/Banner/Banner'
import texts from '../../data/app_texts'
import data from '../../data/listofaccomodations'
import bg from '../../assets/images/home_banner.png'
import Gallery from '../../components/Gallery/Gallery'
import styles from './Home.module.scss'
import Loading from '../../components/Loading/Loading'

function Home() {
  return (
    <section className={styles.homepage}>
      <Banner
        title={texts.main_title}
        imgURL={bg}
      />
      <Gallery data={data} />
    </section>
  )
}

export default Home
