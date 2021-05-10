import Head from "next/head";
import React, { useState, useEffect } from "react";
import { render } from 'react-dom';
import useWallet from "use-wallet";
import { Link, withTranslation } from "../i18n";
import HeaderFooter from "../layout/HeaderFooter";
import classNames from "classnames/bind";
import styles from "../styles/home.less";
const cx = classNames.bind(styles);
import Web3 from 'web3';
 
const Home = ({ t }) => {

  return (
      <HeaderFooter activeIndex={1}>
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
