import { withTranslation } from '../i18n'
import styles from '../styles/layout.less'

const Footer = ({ t }) => {
    return (
        <footer className={styles.footer}>
        </footer>
    )
}

export default withTranslation('header')(Footer)