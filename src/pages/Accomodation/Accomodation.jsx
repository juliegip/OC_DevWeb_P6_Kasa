import { useParams } from 'react-router-dom'
import styles from './Accomodation.module.scss'
import Slider from '../../components/Slider/Slider'
import Dropdown from '../../components/Dropdown/Dropdown'
import Tag from '../../components/Tag/Tag'
import RateStars from '../../components/RateStars/RateStars'
import Host from '../../components/Host/Host'
import properties from '../../data/listofaccomodations'
import texts from '../../data/app_texts'

function Accomodation(props) {
  let { id } = useParams()

  const listofproperties = properties.find((product) => product.id === id)
  if (!listofproperties) return ''

  return (
    <div className={styles.container}>
      <Slider pictures={listofproperties.pictures} />
      <div className={styles.wrapperDetails}>
        <div className={styles.wrapperTitlesTags}>
          <p className={styles.title}>{listofproperties.title}</p>
          <p className={styles.subtitle}>{listofproperties.location}</p>
          <Tag tags={listofproperties.tags}></Tag>
        </div>
        <div></div>
        <div className={styles.wrapperHostRates}>
          <RateStars rating={listofproperties.rating} />
          <Host
            name={listofproperties.host.name}
            profilepic={listofproperties.host.picture}
          />
        </div>
      </div>
      <div className={styles.collapses}>
        <Dropdown
          title={texts.description}
          descr={listofproperties.description}
        />

        <Dropdown
          title={texts.equipements}
          descr={listofproperties.equipments}
        />
      </div>
    </div>
  )
}

export default Accomodation
