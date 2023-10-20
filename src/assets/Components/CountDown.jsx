import { useEffect, useState } from "react";

const Countdown = () => {
  const [time, setTime] = useState("");
  useEffect(() => {
      let x = setInterval(() => {
          
      let countDownDate = new Date("October 20, 2024, 12:54").getTime();
      let now = new Date().getTime();
      let distance = countDownDate - now;
      
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      setTime(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");
    
        if(distance < 1000){
            clearInterval(x);
            alert("FINISHED COUNTDOWN")
            return
        }

    }, 1000);
  }, []);
  return <div>{time}</div>;
};

export default Countdown;
