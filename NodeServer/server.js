const express = require('express');
const cors = require('cors')

var corsOptions = {
    origin: 'http://localhost:4200',
    //domain được phép gọi request mà server chấp nhận (vd: request đến từ http://localhost:4200  được server cho phép), 
    //giả sử node server là http://localhost:8000
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
  };
  const app = express();
  app.use(cors(corsOptions));
  
  app.use(express.json());// express >4.16

  app.listen(8000, () => {
      console.log('Server started!');
    });
  app.route('/api/cpu').get((req, res) => {
    console.log('cpu');
      res.send([
        { id: '1', name:'I9-13900', sn:'332211', edate:'11/12/2022', price:'400',quantity:'30', status:'true'}, 
        { id: '2', name:'I7-13700', sn:'552211', edate:'10/12/2022', price:'300',quantity:'23', status:'true'},
        { id: '3', name:'I9-13900K', sn:'332211', edate:'11/12/2022', price:'666',quantity:'312', status:'true'},    
        { id: '4', name:'I9-13900F', sn:'332211', edate:'11/12/2022', price:'777',quantity:'21', status:'true'},
        { id: '5', name:'I9-13900KF', sn:'332211', edate:'11/12/2022', price:'200',quantity:'45', status:'true'},
        { id: '6', name:'I5-13500', sn:'332211', edate:'11/12/2022', price:'421',quantity:'64', status:'true'},
        { id: '7', name:'I3-13100', sn:'332211', edate:'11/12/2022', price:'421',quantity:'64', status:'true'},

    ]
      );
  });

  app.route('/api/cpu').post((req, res) => {
		 
		  console.log('insert item');
		  console.log('item info:'+ req.body);
      //console.log(req.body);
			//res.send(201, req.body);
		  res.status(201).send(req.body);
      //res.send(req.body);
  });
  // app.all("/*", function(req, res, next){
  //   res.header('Access-Control-Allow-Origin', '*');
  //   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  //   res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  //   next();
  // });


//   app.post('/api/cpu',(req, res) => {
		 
//     console.log('insert item');
//     console.log('item info:'+req.body);
//     //res.send(201, req.body);
//     res.status(201).send(req.body);
//     //res.send(req.body);
// });

