import React from 'react'

import styles from './Header.module.scss'

export default function Header() {
    return (
        <div className={styles.header}>
            <h1>
                Salut à toi jeune <span className={styles.wrong}>entrepr</span>{' '}
                Bab&apos;IMAC 👋
            </h1>
            <p>
                On va faire simple, j&apos;ai 20 ans, ex DUT MMI à Blois,
                originaire de Nantes. J&apos;aime bien la bière, les copains et
                me donner à fond sur toutes sortes de projets créatifs. La
                rédaction c&apos;est pas trop mon truc, mais j&apos;aime bien le
                développement web et tester de nouvelle choses, en voici un
                exemple.
            </p>
            <p>
                Je t&apos;invite à scroller pour la suite, c&apos;est pas plus
                complexe que ça...
            </p>
            <p className={styles.whisper}>
                (c&apos;est mieux si tu es sur ordinateur)
            </p>
        </div>
    )
}
