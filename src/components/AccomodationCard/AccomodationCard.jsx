import React from 'react'
import { useParams } from 'react-router-dom'
import styles from './Accomodation.module.scss'
import Slider from '../Slider/Slider'
import Collapse from '../Collapse/Collapse'
import Tag from '../Tag/Tag'
import RateStars from '../RateStars/RateStars'
import Host from '../Host/Host'
import data from '../../data/listofaccomodations'

function AccomodationCard(props) {
  let { id } = useParams()

  const accomodationData = data.find((product) => product.id === id)
  if (!accomodationData) return ''

  return (
    <div>
      <Slider pictures={accomodationData.pictures}>Slider</Slider>
      <p className={styles.titles}>{accomodationData.title}</p>
      <p className={styles.location}>{accomodationData.location}</p>
      <Tag></Tag>
      <Host />
      <RateStars />
      <Collapse />
    </div>
  )
}

export default AccomodationCard
