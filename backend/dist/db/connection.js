import { connect, disconnect } from 'mongoose';
async function connectToDatabase() {
    try {
        const mongoUrl = process.env.MONGODB_URL;
        if (!mongoUrl) {
            console.error('MONGODB_URL environment variable is not defined.');
            throw new Error('MONGODB_URL environment variable is not defined.');
        }
        await connect(mongoUrl);
    }
    catch (error) {
        console.error('Database connection error:', error);
        throw error;
    }
}
async function disconnectFromDatabase() {
    try {
        await disconnect();
    }
    catch (error) {
        console.error('Database disconnection error:', error);
        throw error;
    }
}
export { connectToDatabase, disconnectFromDatabase };
//# sourceMappingURL=connection.js.map