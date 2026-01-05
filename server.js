const mongoose = require('mongoose');
const { Mongodb_URI,PORT } = require('./utils/config');

const app = require('./app');

console.log("Connecting to MongoDB...")
mongoose.connect(Mongodb_URI)
.then(() => {
    console.log("Connected to MongoDB");

    app.listen(PORT, () => {
        console.log("Server is running on port 3002");
    });
}).catch((err) => {
    console.log("Error connecting to MongoDB:", err);
});