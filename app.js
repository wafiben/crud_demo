const {User,createTable}=require('./api/user/models/User')
const connectDatabase=require('./config');
const userRouter=require('./api/user/routes/route');
const express=require('express');
const app=express()
const PORT=5000;
connectDatabase();
app.use(express.json())
app.listen(PORT,(e) => e? console.log(e):console.log(`serever is running on port ${PORT}`));
app.use('/api',userRouter);















