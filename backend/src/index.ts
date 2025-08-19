import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";

const PORT = process.env.PORT || 5000;

// Connections and Listeners
connectToDatabase().then(() => {
    app.listen(PORT, () => 
        console.log(`Server is running on port ${PORT} and Connected to Database`));
}).catch((error) => {
    console.error("Error connecting to the database", error);
});