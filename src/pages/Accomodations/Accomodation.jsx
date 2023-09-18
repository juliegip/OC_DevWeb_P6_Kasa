import React from 'react'
import { useParams } from 'react-router-dom'
import styles from './Accomodation.module.scss'
import Slider from '../../components/Slider/Slider'
import Collapse from '../../components/Collapse/Collapse'
import Tag from '../../components/Tag/Tag'
import RateStars from '../../components/RateStars/RateStars'
import Host from '../../components/Host/Host'
import data from '../../data/listofaccomodations'
import texts from '../../data/app_texts'

function Accomodation(props) {
  let { id } = useParams()

  const accomodationData = data.find((product) => product.id === id)
  if (!accomodationData) return ''

  return (
    <div className={styles.container}>
      <Slider pictures={accomodationData.pictures}>Slider</Slider>
      <p className={styles.titles}>{accomodationData.title}</p>
      <p className={styles.location}>{accomodationData.location}</p>
      <Tag tags={accomodationData.tags}></Tag>
      <div className={styles.containerHR}>
        <RateStars rating={accomodationData.rating} />
        <Host
          name={accomodationData.host.name}
          profilepic={accomodationData.host.picture}
        />
      </div>
      <Collapse
        title={texts.description}
        descr={accomodationData.description}
      />
      <Collapse title={texts.equipements} descr={accomodationData.equipments} />
    </div>
  )
}

export default Accomodation
