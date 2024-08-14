//Requirements:

/*Allow up to 5 requests per client within a 60-second window.
If the limit is exceeded, the client should be put on a 120-second cooldown.
Implement this rate limiter in JavaScript for a Node.js environment.
Your Task: Write the JavaScript code to implement this rate limiter. Consider using middleware for an Express.js application to intercept incoming requests and apply the rate limiting logic.*/


const express = require('express');
const app = express();
const port = 3000;

// In-memory store for request timestamps and cooldowns
const requestStore = new Map();

const rateLimiter = (req, res, next) => {
    const clientIP = req.ip;
    const currentTime = Date.now();

    if (!requestStore.has(clientIP)) {
        requestStore.set(clientIP, { timestamps: [], cooldown: null });
    }

    const clientData = requestStore.get(clientIP);

    if (clientData.cooldown && currentTime < clientData.cooldown) {
        const cooldownRemaining = ((clientData.cooldown - currentTime) / 1000).toFixed(2);
        return res.status(429).send(`Too many requests. Please try again in ${cooldownRemaining} seconds.`);
    }

    // Filter out timestamps that are older than 60 seconds
    clientData.timestamps = clientData.timestamps.filter(timestamp => currentTime - timestamp < 60000);

    if (clientData.timestamps.length >= 5) {
        clientData.cooldown = currentTime + 120000; // Set cooldown for 120 seconds
        return res.status(429).send('Too many requests. You are on a 120-second cooldown.');
    }

    // Add the current timestamp and proceed
    clientData.timestamps.push(currentTime);
    requestStore.set(clientIP, clientData);
    console.log(requestStore)
    next();
};

app.use(rateLimiter);

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});