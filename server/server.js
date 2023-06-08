require('dotenv').config();
const app = require('./app')
const PORT = process.env.PORT
console.log(`Port: ${PORT}`)
app.listen(PORT, () => console.log('listening on port'))