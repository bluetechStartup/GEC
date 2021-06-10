
const mysql=require('mysql')

 const con = {
  host: process.env.DB_HOST,
  user: "root",
  password: "",
  database: "Gestion_courriers",
 
};


const dbConnect=mysql.createConnection(con)
dbConnect.connect((err)=>{
  if(err)throw err
  console.log("database connected..!!!")
})

module.exports = dbConnect



// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.MONGO_URI, {
//       useUnifiedTopology: true,
//       useNewUrlParser: true,
//       useCreateIndex: true,
//     });
//     console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
//   } catch (error) {
//     console.error(`Error: ${error.message}`.red.underline.bold);
//     process.exit(1);
//   }
// };
// module.exports = connectDB;
