import texts from '../../data/app_texts'
import { Link } from 'react-router-dom'
import styles from './Error.module.scss'

function Error() {
  return (
    <div className={styles.errorpage}>
      <span className={styles.error}>404</span>
      <p>{texts.error_404}</p>
      <Link to="/">{texts.back_homepage}</Link>
    </div>
  )
}

export default Error
