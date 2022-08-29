/* eslint-disable no-restricted-globals */
import React, { createRef, useEffect } from 'react'
import { gsap } from 'gsap'

import imgs from '../../assets/data/images/track'

import Track from '../Track/Track'

import styles from './Presentation.module.scss'
import Fixed from './Fixed/Fixed'

export default function Presentation() {
  const section = createRef<HTMLDivElement>()
  const progress = createRef<HTMLDivElement>()
  const fixed = createRef<HTMLDivElement>()

  const handleProgress = (value: string) => {
    if (progress.current) {
      const valueNumber = Number(value)
      if (valueNumber <= 10) {
        progress.current.textContent = `${value}% 🥲`
      } else if (valueNumber >= 90) {
        progress.current.textContent = `${value}% 😵‍💫`
      } else {
        progress.current.textContent = `${value}%`
      }
    }
  }

  useEffect(() => {
    const mm = gsap.matchMedia()

    mm.add('(min-width: 800px)', () => {
      gsap.to(section.current, {
        xPercent: -100,
        x: () => innerWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: section.current,
          start: 'top top',
          end: () => innerWidth * 5,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            const percent = self.progress * 100
            handleProgress(percent.toFixed(0))
          },

          toggleClass: {
            targets: fixed.current,
            className: 'active',
          },
        },
      })
    })
  }, [section])

  return (
    <>
      <Fixed refFixed={fixed} refProgress={progress} />
      <div ref={section} className={styles.section}>
        <div className={styles.tracks}>
          {imgs.map((img, i) => (
            <Track key={img.title}>
              <img loading="lazy" data-img={i} src={img.src} alt={img.title} />
            </Track>
          ))}
        </div>
      </div>
    </>
  )
}
