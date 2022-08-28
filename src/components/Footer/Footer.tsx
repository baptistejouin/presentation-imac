import React from 'react'
import { useCountdown } from '../../hooks/useCountdown'
import Container from '../Container/Container'

import styles from './Footer.module.scss'

export default function Footer() {
    const countdown = useCountdown('2022-09-19')

    return (
        <footer className={styles.footer}>
            <Container>
                {countdown && (
                    <div className={styles.countdownContainer}>
                        <div className={styles.countdownTitle}>
                            À très (très) vite 👀
                        </div>
                        <div className={styles.countdown}>
                            <span>{countdown.days}J</span>
                            <span>{countdown.hours}H</span>
                            <span>{countdown.minutes}M</span>
                            <span>{countdown.seconds}S</span>
                        </div>
                    </div>
                )}
                <div className={styles.links}>
                    <h2>Quelques liens pour les curieux :</h2>
                    <ul>
                        <li>
                            <a
                                href="https://www.instagram.com/baptistejouin/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                J&apos;ai pas Tiktok
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://open.spotify.com/user/_forex_?si=09e244a288bb4b54"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Mon univers musical
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/baptistejouin"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Ça dev un peu ?
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.linkedin.com/in/baptiste-jouin/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Si il y a des RH par ici
                            </a>
                        </li>
                    </ul>
                </div>
            </Container>
            <div className={styles.egg}>
                <a href="https://youtu.be/Ru87JgnJ9Sk?t=144">😏</a>
            </div>
        </footer>
    )
}
