import styles from '../styles/layout.less'
import React, { useState, useEffect } from "react"
import {  Link, withTranslation } from '../i18n'
import Wallet from '../components/wallet'
import Locales from '../components/locales'
import classNames from "classnames/bind"
const cx = classNames.bind(styles)

const Header = (props) => {
    const { activeIndex } = props
    return ( 
        <header className={styles.header}>
            <div className={styles.inner}>
                <Wallet />
            </div>
            {props.children}
        </header>
    )
}


export default withTranslation('header')(Header)
