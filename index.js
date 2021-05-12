const fs = require('fs')
const allWords = require('./words')
try {

  const data = fs.readFileSync('./subtitle.srt', 'utf8')

  const myWords = allWords.filter(item => data.indexOf(item) !== -1).map(item => item + '\n')

  const myWordsText = myWords.reduce((prev,current) => {
    prev = prev + current
    return prev
  }, '')
  
  fs.writeFileSync('helloworld.txt', myWordsText);
  console.log('count: ', myWords.length);


} catch (err) {
  console.error(err)
}