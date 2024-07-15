import { useEffect, useState } from "react";

const useCountDown = (targetDate) => {
  const countDownDate = new Date(targetDate).getTime()

  const [countDown, setCountDown] = useState(countDownDate - new Date().getTime())

  useEffect(() => {
    if (countDownDate > 0) {
      const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime())
    })

      return () => clearInterval(interval);
    }
  }, [countDownDate])

  return getCoutDown(countDown);
}

const getCoutDown = (countDown) => {
  const days = Math.floor(countDown / (1000 * 60 * 60 *24))
  const hours = Math.floor((countDown % (1000 * 60 * 60 *24)) / (1000 * 60 * 60))
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return [days, hours, minutes, seconds];
}

export { useCountDown }