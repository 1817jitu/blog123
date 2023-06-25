const mongoose = require('mongoose')
// const url = 'mongodb+srv://jitendra:1817jitu@cluster0.4ajl3na.mongodb.net/blogproject?retryWrites=true&w=majority'
// const url2 = 'mongodb+srv://jituSoni:Jitu@cluster0.dio8rus.mongodb.net/blogproject?retryWrites=true&w=majority'
const url3 = 'mongodb+srv://jitendra:1817jitu@cluster0.4ajl3na.mongodb.net/blogProject?retryWrites=true&w=majority'
// const connectDB = () => {
//     return mongoose.connect('mongodb://localhost:27017/blogWebsite')
//   //  return mongoose.connect(url3)
//     .then(() => {
//       console.log('connection successfully !')  
//     })
//     .catch((err) => {
//         console.log(err)
//     })
// }

// module.exports = connectDB
const url = 'mongodb+srv://Nikhil910:Nikhil1234@cluster0.dvxk3u4.mongodb.net/blogwebsiteDB?retryWrites=true&w=majority'
const connectDB = () =>{
    return mongoose.connect('mongodb://0.0.0.0:27017/blogWebsite')
    // return mongoose.connect(url)
    .then(()=>{
        console.log('connected successfully !')
      })
      .catch((err)=>{
        console.log(err)
    })
}

module.exports = connectDB