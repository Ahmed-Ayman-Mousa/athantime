/**
 * to get the time different between now and pray time
 * @param {String} praytime
 */
const timeDiff = (praytime) => {
  const now = new Date(
    `08/06/2015 ${new Date().getHours()}:${new Date().getMinutes()}:00`
  ).getTime();

  const diff = Math.abs(praytime - now);

  let msec = diff;
  const hh = Math.floor(msec / 1000 / 60 / 60);
  msec -= hh * 1000 * 60 * 60;
  const mm = Math.floor(msec / 1000 / 60);
  msec -= mm * 1000 * 60;

  return `${hh} H ${mm} M`;
};

export default timeDiff;
