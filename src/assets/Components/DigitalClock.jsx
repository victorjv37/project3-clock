import { useState, useEffect } from "react"

const DigitalClock = () => {
  
    const [clock, setClock] = useState()

    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            setClock(date.toLocaleTimeString())
          }, 1000)
    }, [])
    

    return (
    <h2 id="clock">{clock}</h2>
  )
}

export default DigitalClock