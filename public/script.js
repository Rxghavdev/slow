// // script.js

// document.addEventListener("DOMContentLoaded", function() {
//     // Function to handle speed test
//     async function performSpeedTest() {
//         try {
//             const response = await fetch('/'); // Send a GET request to '/speedtest' route
//             const data = await response.json();
//             const downloadSpeed = data.downloadSpeed;
//             const uploadSpeed = data.uploadSpeed;
//             const speedResultElement = document.getElementById('speedResult');
//             speedResultElement.innerHTML = `
//                 <h2>Download Speed: ${downloadSpeed} Mbps</h2>
//                 <h2>Upload Speed: ${uploadSpeed} Mbps</h2>
//             `;
//         } catch (error) {
//             console.error("Speed test failed:", error.message);
//             speedResultElement.innerHTML = "Speed test failed";
//         }
//     }

//     // Add event listener to the button
//     const startTestButton = document.getElementById('startTest');
//     startTestButton.addEventListener('click', performSpeedTest);
// });


document.addEventListener("DOMContentLoaded", function() {
    // Function to handle speed test
    async function performSpeedTest() {
        try {
            const response = await fetch('/speedtest'); // Send a GET request to '/speedtest' route
            const data = await response.json();
            const downloadSpeed = data.downloadSpeed;
            const uploadSpeed = data.uploadSpeed;
            const speedResultElement = document.getElementById('speedResult');
            speedResultElement.innerHTML = `
                <h2>Download Speed: ${downloadSpeed} Mbps</h2>
                <h2>Upload Speed: ${uploadSpeed} Mbps</h2>
            `;
        } catch (error) {
            console.error("Speed test failed:", error.message);
            speedResultElement.innerHTML = "Speed test failed";
        }
    }

    // Add event listener to the button
    const startTestButton = document.getElementById('startTest');
    startTestButton.addEventListener('click', performSpeedTest);
});
