const formatDate = (timeInSeconds) => {
  console.log(timeInSeconds);
  if (
    timeInSeconds === 0 ||
    timeInSeconds === null ||
    timeInSeconds === undefined
  ) {
    return `0s`;
  }
  if (timeInSeconds < 60) {
    return `${timeInSeconds}s`;
  } else {
      const minutesLeft = Math.floor(timeInSeconds / 60);
      const seconds = Math.floor(timeInSeconds % 60);
      if (minutesLeft >= 60) {
        const hours = Math.floor(timeInSeconds / 3600);
        const minutes = Math.floor((timeInSeconds % 3600) / 60);
        if (minutes === 0 && seconds === 0) {
          return `${hours}h`;
        } else if (seconds === 0) {
          return `${hours}h ${minutes}m`;
        } else if (minutes === 0) {
          return `${hours}h ${seconds}s`;
        } else {
          return `${hours}h ${minutes}m ${seconds}s`;
        }
      } else if (seconds === 0) {
        return `${minutesLeft}m`;
      } else {
        return `${minutesLeft}m ${seconds}s`;
      }
    }  
}

module.exports = formatDate;