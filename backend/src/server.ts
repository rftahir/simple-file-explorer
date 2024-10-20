import express from 'express'; 
const server = express(); 
import cors from 'cors';


server.use(
  cors({
    origin: [
      'http://localhost:3000',
    ],
  }),
);


server.use(express.json()); 

export default server