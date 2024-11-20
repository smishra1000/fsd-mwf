const http = require("http");

http.createServer(function (req, res) {
    // You can also set using the following method
    res.setHeader('Access-Control-Allow-Origin', '*'); /* @dev First, read about security */
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
    res.setHeader('Access-Control-Max-Age', 2592000); // 30 days
    res.setHeader('Access-Control-Allow-Headers', 'content-type'); // Might be helpful
    // res.writeHead(200, {'Content-Type': 'Application/json'});
    res.write(JSON.stringify(["test1", "test2", "test3", "test4","test5","test6"])); //write a response to the client
    res.end(); //end the response
}).listen(5000)


//cors-- issue--cross origin resource sharing
// 

