const mysql=require('mysql');
const con=mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "wafibenjeddou"
});
const connectDatabase=() => {
	con.connect(function(err) {
		if(err) throw err;
		console.log("Connected!");
	})
}



module.exports=connectDatabase


