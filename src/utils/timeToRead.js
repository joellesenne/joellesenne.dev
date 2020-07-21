const words = require('lodash/words')

const timeToRead = (content) => {
  let timeRead = null
  const totalWords = words(content).length
  const timeInterval = 240
  timeRead = Math.round(totalWords / timeInterval)

  if (timeRead === 0) {
    timeRead = 1
  }
  return timeRead
}

module.exports = timeToRead
