const fs = require('fs')
const allWords = require('./words')
try {

  
  const data = fs.readFileSync('./subtitle.srt', 'utf8')

  const myWords = allWords.filter(item => data.indexOf(item) !== -1)

  

  console.log('words: ', myWords.length);


} catch (err) {
  console.error(err)
}