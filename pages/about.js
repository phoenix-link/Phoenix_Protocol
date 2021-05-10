import Head from "next/head"
import { useEffect } from "react"
import useWallet from "use-wallet"
import { Link, withTranslation } from "../i18n"
import HeaderFooter from "../layout/HeaderFooter"
import classNames from "classnames/bind"
import { confirmAlert } from 'react-confirm-alert'
import { ToastContainer, toast } from 'react-toastify'
import styles from "../styles/layout.less"

const Home = ({ t }) => {
  const { account, ethereum } = useWallet()

  return (
      <HeaderFooter activeIndex={4}>
          <ToastContainer />
          <Head>
              <title>{t("title")}</title>
          </Head>
          <div className={styles.wrapper}>
          </div>
      </HeaderFooter>
  )
};

Home.getInitialProps = async () => ({
  namespacesRequired: ["common", "header", "home"],
});

export default withTranslation("home")(Home);
