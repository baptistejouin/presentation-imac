import { useEffect, useState } from 'react'

type DateProps = string | number | Date

type TimeLeft = {
  days: string
  hours: string
  minutes: string
  seconds: string
}

const calculateTimeLeft = (date: DateProps) => {
  const difference = +new Date(date) - +new Date()

  let timeLeft = {
    days: '0',
    hours: '0',
    minutes: '0',
    seconds: '0',
  }

  if (difference > 0) {
    timeLeft = {
      days: `${Math.floor(difference / (1000 * 60 * 60 * 24))}`.padStart(
        2,
        '0'
      ),
      hours: `${Math.floor((difference / (1000 * 60 * 60)) % 24)}`.padStart(
        2,
        '0'
      ),
      minutes: `${Math.floor((difference / 1000 / 60) % 60)}`.padStart(2, '0'),
      seconds: `${Math.floor((difference / 1000) % 60)}`.padStart(2, '0'),
    }
  }

  return timeLeft
}

// eslint-disable-next-line import/prefer-default-export
export const useCountdown = (date: DateProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>()

  useEffect(() => {
    const timer = setTimeout(() => setTimeLeft(calculateTimeLeft(date)), 1000)

    return () => clearTimeout(timer)
  }, [date, timeLeft])

  return timeLeft
}
