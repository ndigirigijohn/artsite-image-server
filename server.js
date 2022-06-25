import express from 'express'
import { generateUploadURL } from './s3.js';
import cors from 'cors';


const app = express()

app.use(cors({
  origin:(origin , callback) =>{
    console.log(origin);
    callback(null , true );
  }
}));

// 
app.use(express.static('src'))

app.get('/s3Url', async (req, res) => {
  const url = await generateUploadURL()
  res.json({url})
})

app.listen(5001, () => console.log("listening on port 5001"))