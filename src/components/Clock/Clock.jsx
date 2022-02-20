import { useEffect, useState } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    let TimeId = setInterval(() => setTime(new Date()), 1000);
    return () => {
      clearInterval(TimeId);
    };
  });

  const timeString = time.toLocaleTimeString()
  const dateString = time.toLocaleDateString()
  return (
    <span> {`${dateString} ${timeString}`} </span>
  );
};

export default Clock;
