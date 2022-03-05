import App from './App.svelte';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
// var cors = require('cors')
import cors from 'cors'

// const corsOptions ={
//     origin:true, 
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200,
	
	
// }

var app = new App({
	target: document.body
});
// app.use(cors(corsOptions)) // Use this after the variable declaration


export default app;