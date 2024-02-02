const { CosmosClient } = require('@azure/cosmos');

const endpoint = process.env.COSMOS_DB_ENDPOINT; // URL of our Cosmos DB
const key = process.env.COSMOS_DB_KEY; // Primary key of our Cosmos DB

const client = new CosmosClient({ endpoint, key });
const database = client.database('stayawaredb');
const container = database.container('userProfiles');

module.exports = {
    container
};
