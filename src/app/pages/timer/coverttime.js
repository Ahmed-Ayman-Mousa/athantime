/**
 * to convert time from 24 hours to 12 hours
 * @param {string} t to get time to convert
 * @returns { String }
 */
const convertTime = (t) => {
  const newt = t.split(" ")[0];
  const h = parseInt(newt.split(":")[0]);
  const m = newt.split(":")[1];
  let newH;
  /**
   * if it's bigger than 12 it's PM
   * else it's smaller than 12 or 12 it's AM
   */
  if (h > 12) {
    newH = h - 12;
    return `${newH}:${m} PM`;
  } else {
    newH = h;
    return `${newH}:${m} AM`;
  }
};

export default convertTime;
