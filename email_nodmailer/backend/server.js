const express = require('express')
const bodyParser = require("body-parser")
const cors = require("cors")
const nodemailer = require("nodemailer")
const reader = require('xlsx')
const app = express()
let usermodel = require('./models/user.model.js')
const multer = require('multer')
const router = require('express').Router()
const fileupload = require('express-fileupload')



app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// const mongoose = require('mongoose')
const fileUpload = require('express-fileupload')
// // const user = require('./routes/user.js')

require('dotenv').config()
const port = process.env.PORT || 5000

// const uri = process.env.ATLAS_URI
// mongoose.connect(uri,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology: true})

// const connection = mongoose.connection
// connection.once('open',()=>{
//     console.log('mongoDB connection succesfully');
// })
// connection.on('error', console.error.bind(console, 'connection error:'));


app.use(cors())
app.use(express.json())

// NODEMAILER
const upload = multer()


// app.get('/',(req,res)=>{
//     usermodel.find()
//     .then(data => {res.json(data)
//     // console.log('data',data)
//     })
//     .catch(e => res.status(401).json('Error  ',e))
// })





app.use(fileUpload())

app.post("/mail/da/:name", cors(), async (req, res) => {
	console.log(req.body);
	// console.log(__dirname+"\\upload"+`\\${req.params.name}`)
	console.log('name---', req.params.name);
	let { subject, content, img, see, send, datae, file } = req.body
	console.log(send);
	// let { subject, content, img, see, send, datae, file } = req.body
	console.log('1---', req.files);
	// if (subject) {
	console.log('2---', req.files);
	console.log('send=--', send.split(",").length)
	// const arrya = new Array;
	var arr = send.split(",");
	console.log(arr)
	console.log([send])

	// if(req.files){

	// console.log(req.files.file.name);

	// let filena = req.files.file
	// filena.mv(`${__dirname}/upload/` + filena.name, function (er, resu) {
	// 	if (er) {
	// 		throw er
	// 	}
	// 	console.log('file upload');
	// 	res.send({
	// 		mess: 'file upload'
	// 	})
	// })
	// }


	// -----start divide mail

	// function divima(a){
	// 	console.log('ho rha hai fxn')
	// 	console.log('a------',a)
	// 	console.log('a------',a)


	// 	let mailTransporter = nodemailer.createTransport({
	// 		service: 'gmail',
	// 		auth: {
	// 			user: 'tempdose33@gmail.com',
	// 			pass: 'dosetemp33@'
	// 		},
	// 		pool:true,
	// 		maxConnections:500,
	// 		maxMessages:500,
	// 	});

	// 	let mailDetails = {
	// 		from: 'tempdose33@gmail.com',
	// 		bcc: `${a}`,
	// 		// bcc:`${see}`,
	// 		subject: `${subject}`,
	// 		html: `<div className="email" style="

	// 			padding: 20px;
	// 			font-family: sans-serif;
	// 			font-size: 20px; 
	// 			">

	// 			<span>${content}</span>

	// 			<img style="display:block;width:100%;height:65vh" src="cid:imag">


	// 			</div>`,
	// 	// 	// <img ${src=__dirname+"\\upload"+`\\${req.params.name}`}>
	// 		attachments: [{
	// 			filename: `Document.png`,
	// 			path: `${__dirname + "/upload" + `/${req.params.name}`}`,
	// 			cid: `imag` //same cid value as in the html img src
	// 		}]
	// 	};
	// 	mailTransporter.sendMail(mailDetails, function (err, data) {
	// 		if (err) {
	// 			console.log(err);

	// 		} else {
	// 			console.log('Email sent successfully');
	// 		}
	// 	});
	// }

	// }

	// if(arr.length%500 == 0){
	// 	const num = arr.length / 500
	// 	console.log('ho rha hai')
	// 	console.log(num);
	// 	console.log(num2);
	// 	for(var i=0 ; i<num;i++){
	// 		if (arr.lenght<=500){
	// 			divima(arr)
	// 			break

	// 		}
	// 		console.log('arr------',arr)
	// 		divima(arr.slice(0,501))
	// 		console.log('arr------',arr)

	// 		arr.splice(0,501)
	// 		console.log('arr------',arr)

	// 	}
	// }
	// else if(arr.length%500 != 0){
	// 	var num = arr.length / 500 >>0
	// 	var num2 = num+1
	// 	console.log('ho rha hai 2')
	// 	console.log(num);
	// 	console.log(num2);
	// 	for(var i=0 ; i<num2;i++){
	// 		if (arr.lenght<=500){
	// 			divima(arr)
	// 			break

	// 		}
	// 		console.log('arr------',arr)

	// 		divima(arr.slice(0,501))
	// 		console.log('arr------',arr)

	// 		arr.splice(0,501)
	// 	}
	// }



	// --=----end divide mail





	for (var i = 0; i < arr.length; i++) {
		console.log(arr[i])


		let mailTransporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: 'tempdose33@gmail.com',
				pass: 'dosetemp33@'
			},
			tls: {
				// rejectUnauthorized: false,
				secureProtocol: "TLSv1_method"
			},
			pool: true,
			maxConnections: 1500,
			maxMessages: 1500,
		});
		let mailDetails = {
			from: 'tempdose33@gmail.com',
			to: `${arr[i]}`,
			// bcc:`${arr[i]}`,
			subject: `${subject}`,
			html: `<div className="email" style="

					padding: 20px;
					font-family: sans-serif;
					font-size: 20px; 
					">

					<span>${content}</span>

					<img style="display:block;width:100%;height:65vh" src="cid:imag">


					</div>`,
			// <img ${src=__dirname+"\\upload"+`\\${req.params.name}`}>
			attachments: [{
				filename: `Document.png`,
				path: `${__dirname + "/upload" + `/${req.params.name}`}`,
				cid: `imag` //same cid value as in the html img src
			}]
		};
		mailTransporter.sendMail(mailDetails, function (err, data) {
			if (err) {
				console.log(err);

			} else {
				console.log('Email sent successfully');
			}
		});
		// mailTransporter.close();



	}


	// ----original strat


	// let mailTransporter = nodemailer.createTransport({
	// 	service: 'gmail',
	// 	auth: {
	// 		user: 'as6000305@gmail.com ',
	// 		pass: 'ankusaini00'
	// 	},
	// 	secureConnection: true,
		// tls: {
		// 	// rejectUnauthorized: false,
		// 	secureProtocol: "TLSv1_method"
		// },
	// 	pool: true,
	// 	// maxConnections: 1500,
	// 	maxMessages: 1500,
	// });

	// arr.forEach(function (to,index) {
	// 	// setTimeout(() => {
	// 	// 	sendmail();            
	// 	// }, 1000 * index);
	// 	let mailDetails = {
	// 		from: 'tempdose33@gmail.com',
	// 		to: `${to}`,
	// 		// bcc:`${see}`,
	// 		subject: `${subject}`,
	// 		html: `<div className="email" style="
	
	// 				padding: 20px;
	// 				font-family: sans-serif;
	// 				font-size: 20px; 
	// 				">
	
	// 				<span>${content}</span>
	
	// 				<img style="display:block;width:100%;height:65vh" src="cid:imag">
	
	
	// 				</div>`,
	// 		// 	// <img ${src=__dirname+"\\upload"+`\\${req.params.name}`}>
	// 		attachments: [{
	// 			filename: `Document.png`,
	// 			path: `${__dirname + "/upload" + `/${req.params.name}`}`,
	// 			cid: `imag` //same cid value as in the html img src
	// 		}]
	// 	};


	// 	// function sendmail(){
	// 	// 	mailTransporter.sendMail(mailDetails, function (err, data) {
	// 	// 		if (err) {
	// 	// 			console.log(err);
	
	// 	// 		} else {
	// 	// 			console.log('Email sent successfully');
	// 	// 		}
	// 	// 	});
	// 	// }

	// 	mailTransporter.sendMail(mailDetails, function (err, data) {
	// 		if (err) {
	// 			console.log(err);

	// 		} else {
	// 			console.log('Email sent successfully');
	// 		}
	// 	});
		// mailTransporter.close();

	// })

	// strat maildeta


	// let mailDetails = {
	// 	from: 'tempdose33@gmail.com',
	// 	to: `${arr}`,
	// 	// bcc:`${see}`,
	// 	subject: `${subject}`,
	// 	html: `<div className="email" style="

	// 			padding: 20px;
	// 			font-family: sans-serif;
	// 			font-size: 20px; 
	// 			">

	// 			<span>${content}</span>

	// 			<img style="display:block;width:100%;height:65vh" src="cid:imag">


	// 			</div>`,
	// 	// 	// <img ${src=__dirname+"\\upload"+`\\${req.params.name}`}>
	// 	attachments: [{
	// 		filename: `Document.png`,
	// 		path: `${__dirname + "/upload" + `/${req.params.name}`}`,
	// 		cid: `imag` //same cid value as in the html img src
	// 	}]
	// };




	// mailTransporter.sendMail(mailDetails, function (err, data) {
	// 	if (err) {
	// 		console.log(err);

	// 	} else {
	// 		console.log('Email sent successfully');
	// 	}
	// });
	// mailTransporter.close();


	// end maildata
}


	//  original end


	// if (see == 'Only Golf Users') {
	// 	let mailDetails = {
	// 		from: process.env.MAIL_FROM,
	// 		to: `${datae.map(e=>e.email)}`,
	// 		subject: `${subject}`,
	// 		html: `<div className="email" style="

	// 	padding: 20px;
	// 	font-family: sans-serif;
	// 	font-size: 20px; 
	// 	">

	// 	<p>${content}</p>



	// 	 </div>`,
	// 		attachments: [{
	// 			filename: `Document.png`,
	// 			path: `${img}`,
	// 			cid: `${img}` //same cid value as in the html img src
	// 		}]
	// 	};

	// 	mailTransporter.sendMail(mailDetails, function (err, data) {
	// 		if (err) {
	// 			console.log(err);
	// 		} else {
	// 			console.log('Email sent successfully');
	// 		}
	// 	});

	// }
	// if (see == 'Without Golf Users') {
	// 	let mailDetails = {
	// 		from: process.env.MAIL_FROM,
	// 		to: `${datae.map(e=>e.email)}`,
	// 		subject: `${subject}`,
	// 		html: `<div className="email" style="

	// 	padding: 20px;
	// 	font-family: sans-serif;
	// 	font-size: 20px; 
	// 	">

	// 	<p>${content}</p>



	// 	 </div>`,
	// 		attachments: [{
	// 			filename: `Document.png`,
	// 			path: `${img}`,
	// 			cid: `${img}` //same cid value as in the html img src
	// 		}]
	// 	};

	// 	mailTransporter.sendMail(mailDetails, function (err, data) {
	// 		if (err) {
	// 			console.log(err);
	// 		} else {
	// 			console.log('Email sent successfully');
	// 		}
	// 	});

	// }





	// }
)

app.post('/mail/img', (req, res) => {
	console.log('ha 2nd wala post--', req.files.file.name);

	let filena = req.files.file
	filena.mv(`${__dirname}/upload/` + filena.name, function (er, resu) {
		if (er) {
			throw er
		}
		console.log('file upload');
		res.send({
			mess: 'file upload'
		})
	})

})

// END

// app.use('/user',user)

app.listen(port, () => {
	console.log(`listing on port ${port}`);
})