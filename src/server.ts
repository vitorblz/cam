import express from 'express';

const app =  express();

app.get('/',(req,res)=> {
    res.json({message: 'Hello'});
});

app.listen(5021, ()=>console.log('Server running at 5021'));

