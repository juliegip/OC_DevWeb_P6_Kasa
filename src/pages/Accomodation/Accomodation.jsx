import { useParams } from 'react-router-dom'
import styles from './Accomodation.module.scss'
import Slider from '../../components/Slider/Slider'
import Collapse from '../../components/Collapse/Collapse'
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
      <div>
        <Slider pictures={listofproperties.pictures} />
        <p className={styles.title}>{listofproperties.title}</p>
        <p className={styles.subtitle}>{listofproperties.location}</p>
        <Tag tags={listofproperties.tags}></Tag>
      </div>
      <div className={styles.containerHR}>
        <RateStars rating={listofproperties.rating} />
        <Host
          name={listofproperties.host.name}
          profilepic={listofproperties.host.picture}
        />
      </div>
      <Collapse
        title={texts.description}
        descr={listofproperties.description}
      />
      <Collapse title={texts.equipements} descr={listofproperties.equipments} />
    </div>
  )
}

export default Accomodation
