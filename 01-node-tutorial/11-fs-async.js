const {readFile, writeFile} = require('fs');

console.log("Start")
readFile('./content/first.txt','utf8',(err,result)=>{
  if(err){
    console.log(error)
    return
  }
  const first = result;
  readFile('./content/second.txt','utf8',(err,result)=>{
    if(err){
      console.log(error)
      return
    }
    const second = result;
    writeFile('./content/result-async.txt',`${first},${second}`,(err,result)=>{
      if(err){
        console.log(error)
        return
      }
      console.log("done")
    })
  })
})
console.log("starting next")

//MESSY - alternative - promises and async await