const http = require('http');
// eta sei module jeta network er sathe communicate korte pare

// server create kora
const server = http.createServer((req, res) => {
    if (req.url === '/'){
        res.write('Hello programmers! ');
        res.write('what are you doing?');
        res.end();
    }

    else if (req.url === '/about'){
         res.write('this is about us page');
         res.end();
    }

    else {
        res.write('Not found');
        res.end();
    }
});

// koto number port e amader server ta run korbo seta bole dite hoye
server.listen(3000); // Node.js server-কে port 3000-এ চালু করে দাও, যাতে client/browser সেখানে request পাঠাতে পারে।

/*
server → তোমার তৈরি করা server object
.listen() → server-কে নির্দিষ্ট port-এ শুনতে/অপেক্ষা করতে বলে
3000 → port number
*/