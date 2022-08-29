import React from 'react'

import styles from './Track.module.scss'

import { Children } from '../../types/reactChildren'

export default function Track({ children }: Children) {
  return <div className={styles.track}>{children}</div>
}
