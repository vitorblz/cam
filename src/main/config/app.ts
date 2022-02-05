import express from 'express';
import importRoutes from './routes';


const app =  express();
importRoutes(app);

export default app;