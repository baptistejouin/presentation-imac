import React from 'react'

import styles from './Container.module.scss'

import { Children } from '../../types/reactChildren'

export default function Container({ children }: Children) {
  return <div className={styles.container}>{children}</div>
}
