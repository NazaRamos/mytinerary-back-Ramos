import {connect} from "mongoose";

connect(process.env.DB)
	.then(()=> console.log('base de datos conectada'))
	.catch(() => console.log('error al conectarse a la base de datos'))