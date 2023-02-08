const EventEmitter = require('events');
const customEmitter = new EventEmitter()

customEmitter.on('response', (name, id)=>{
  console.log(`received data from user ${name} id:${id}`)
})
customEmitter.on('response', ()=>{
  console.log(`data processed as well!`)
})

customEmitter.emit('response', 'john', 34)