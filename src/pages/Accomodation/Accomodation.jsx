import { redirect, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import styles from './Accomodation.module.scss'
import Slider from '../../components/Slider/Slider'
import Dropdown from '../../components/Dropdown/Dropdown'
import Tag from '../../components/Tag/Tag'
import RateStars from '../../components/RateStars/RateStars'
import Host from '../../components/Host/Host'
import texts from '../../data/app_texts'
import properties from '../../data/listofaccomodations'
import Loading from '../../components/Loading/Loading'

function Accomodation() {
  const [accomodation, setAccomodation] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  let { id } = useParams()

  useEffect(() => {
    const selected = properties.filter((property) => property.id === id)
    if (selected.length > 0) {
      setAccomodation(selected[0])
      setIsLoading(false)
    } else {
      setIsError(true)
      setIsLoading(false)
    }
  }, [id])

  if (isLoading) {
    return <Loading />
  }

  if (isError) {
    return redirect('/404')
  }

  return (
    <>
      {accomodation && (
        <div className={styles.container}>
          <Slider pictures={accomodation.pictures} />
          <div className={styles.wrapperDetails}>
            <div className={styles.wrapperTitlesTags}>
              <p className={styles.title}>{accomodation.title}</p>
              <p className={styles.subtitle}>{accomodation.location}</p>
              <Tag tags={accomodation.tags}></Tag>
            </div>
            <div className={styles.wrapperHostRates}>
              <RateStars rating={accomodation.rating} />
              <Host
                name={accomodation.host.name}
                profilepic={accomodation.host.picture}
              />
            </div>
          </div>
          <div className={styles.collapses}>
            <Dropdown
              title={texts.description}
              descr={accomodation.description}
            />

            <Dropdown
              title={texts.equipements}
              descr={accomodation.equipments}
            />
          </div>
        </div>
      )}
    </>
  )
}

export default Accomodation
