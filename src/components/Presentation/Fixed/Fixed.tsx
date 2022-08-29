import React from 'react'

import styles from './Fixed.module.scss'

type Props = {
  refFixed: React.RefObject<HTMLDivElement>
  refProgress: React.RefObject<HTMLDivElement>
}

export default function Fixed({ refFixed, refProgress }: Props) {
  return (
    <div ref={refFixed} className={styles.fixed}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Moi c&apos;est Batou</h1>
        <h2 className={styles.subtitle}>Ravi de te rencontrer</h2>
      </div>
      <div className={styles.progress}>
        On se connaît à <span ref={refProgress}>0%</span>
      </div>
    </div>
  )
}
