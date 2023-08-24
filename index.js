const express = require('express');

const app = express();
let server;
const health = {
    readiness: true,
    liveness: true,
    startup: true,
}

// middleware
app.use(express.json({ limit: "50mb" })); // limit is 1 mb
app.use(express.urlencoded({ extended: false }));

// health enpoints
app.get(
    '/health',
    (req, res, next) => {
        console.info(`\health ${[health.readiness, health.liveness, health.startup]}`);
        res.status(200).json(health);
    }
);

app.get(
    '/health/readiness',
    (req, res, next) => {
        let statusCode = 500;
        let resMessage = 'Not Ready';
        if (health.readiness) {
            statusCode = 200;
            resMessage = 'Ready';
        }
        console.info(`readiness ${statusCode} ${resMessage}`);
        res.status(statusCode).json({ message: resMessage });
    }
);

app.get(
    '/health/liveness',
    (req, res, next) => {
        let statusCode = 500;
        let resMessage = 'Not Alive';
        if (health.liveness) {
            statusCode = 200;
            resMessage = 'Alive';
        }
        console.info(`liveness ${statusCode} ${resMessage}`);
        res.status(statusCode).json({ message: resMessage });
    }
);
app.get(
    '/health/startup',
    (req, res, next) => {
        let statusCode = 500;
        let resMessage = 'Not Ready';
        if (health.liveness) {
            statusCode = 200;
            resMessage = 'Ready';
        }
        console.info(`startup ${statusCode} ${resMessage}`);
        res.status(statusCode).json({ message: resMessage });
    }
);

app.put(
    '/health',
    (req, res, next) => {
        const reqBody = req.body;
        Object.assign(health, reqBody);
        console.log(health, reqBody);
        console.info(`update health ${[health.readiness, health.liveness, health.startup]}`);
        res.status(200).json({ message: "DONE" });
    }
)

server = app.listen(3000, () => {
    console.log('Server started on port 3000');
})

process.on('SIGTERM', () => {
    console.log('Terminating the processs');
    server.close(() => {
        console.log('Server closed as expected');
    });
    process.exit(1);
});

process.on('SIGINT', () => {
    console.log('terminating the process for signint');
    server.close(() => {
        console.log('Server closed as expected');
    });
    process.exit(1);
})

process.on('uncaughtException', () => {
    console.log('unhandled exception');
})

process.on('unhandledRejection', () => {
    console.log('unhandled rejection');
})