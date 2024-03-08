// const express = require('express');
// const app = express();
// const path = require('path');
// const FastSpeedtest = require("fast-speedtest-api");
// const fs = require('fs'); // Import the 'fs' module for file reading

// // Serve static files from the public directory
// // app.use(express.static(path.join(__dirname,'index.html')));
// app.use(express.static(path.join(__dirname, 'public')));
// // var path = require('path')
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'index.html'));
// });
// // Define a route to serve the HTML file
// app.get('/', async (req, res) => {
//     try {
//         const speedtest = new FastSpeedtest({
//             token: "YXNkZmFzZGxmbnNkYWZoYXNkZmhrYWxm",
//             verbose: false,
//             timeout: 10000,
//             https: true,
//             urlCount: 5,
//             bufferSize: 8,
//             unit: FastSpeedtest.UNITS.Mbps,
//             proxy: 'http://optional:auth@my-proxy:123'
//         });

//         const downloadSpeed = await speedtest.getSpeed();
//         console.log("Download Speed:", downloadSpeed, "Mbps");

//         const uploadSpeed = await speedtest.getSpeed({ bypass: true });
//         console.log("Upload Speed:", uploadSpeed, "Mbps");

//         // Read the HTML file
//         let htmlContent = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');

//         // Inject speed test results into the HTML content
//         htmlContent = htmlContent.replace('speed-test', `
//             <div class="speed-test">
//                 <h2>Download Speed: ${downloadSpeed} Mbps</h2>
//                 <h2>Upload Speed: ${uploadSpeed} Mbps</h2>
//             </div>
//         `);

//         // Send the modified HTML content with speed test results
//         res.send(htmlContent);
//     } catch (error) {
//         console.error("Speed test failed:", error.message);
//         res.status(500).send("Speed test failed");
//     }
// });

// // Start the server
// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });


// const express = require('express');
// const app = express();
// const path = require('path');
// const FastSpeedtest = require("fast-speedtest-api");
// const fs = require('fs'); // Import the 'fs' module for file reading

// // Serve static files from the public directory
// app.use(express.static(path.join(__dirname, 'public')));

// // Define a route to serve the HTML file and perform the speed test
// app.get('/', async (req, res) => {
//     try {
//         const speedtest = new FastSpeedtest({
//             token: "YXNkZmFzZGxmbnNkYWZoYXNkZmhrYWxm",
//             verbose: false,
//             timeout: 10000,
//             https: true,
//             urlCount: 5,
//             bufferSize: 8,
//             unit: FastSpeedtest.UNITS.Mbps,
//             proxy: 'http://optional:auth@my-proxy:123'
//         });

//         const downloadSpeed = await speedtest.getSpeed();
//         console.log("Download Speed:", downloadSpeed, "Mbps");

//         const uploadSpeed = await speedtest.getSpeed({ bypass: true });
//         console.log("Upload Speed:", uploadSpeed, "Mbps");

//         // Read the HTML file
//         let htmlContent = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');

//         // Inject speed test results into the HTML content
//         htmlContent = htmlContent.replace('speed-test', `
//             <div class="speed-test">
//                 <h2>Download Speed: ${downloadSpeed} Mbps</h2>
//                 <h2>Upload Speed: ${uploadSpeed} Mbps</h2>
//             </div>
//         `);

//         // Send the modified HTML content with speed test results
//         res.send(htmlContent);
//     } catch (error) {
//         console.error("Speed test failed:", error.message);
//         res.status(500).send("Speed test failed");
//     }
// });

// // Start the server
// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });


const express = require('express');
const app = express();
const path = require('path');
const FastSpeedtest = require("fast-speedtest-api");
const fs = require('fs');

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Define a route to serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Define a route to perform the speed test
app.get('/speedtest', async (req, res) => {
    try {
        const speedtest = new FastSpeedtest({
            token: "YXNkZmFzZGxmbnNkYWZoYXNkZmhrYWxm",
            verbose: false,
            timeout: 10000,
            https: true,
            urlCount: 2,
            bufferSize: 8,
            unit: FastSpeedtest.UNITS.Mbps,
            proxy: 'http://optional:auth@my-proxy:123'
        });

        const downloadSpeed = await speedtest.getSpeed();
        console.log("Download Speed:", downloadSpeed, "Mbps");

        const uploadSpeed = await speedtest.getSpeed({ bypass: true });
        console.log("Upload Speed:", uploadSpeed, "Mbps");

        res.json({ downloadSpeed, uploadSpeed });
    } catch (error) {
        console.error("Speed test failed:", error.message);
        res.status(500).json({ error: "Speed test failed" });
    }
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
