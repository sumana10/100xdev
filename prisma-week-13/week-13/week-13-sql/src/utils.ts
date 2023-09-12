import { Client } from 'pg';

export async function getClient() {
    const client = new Client("postgres://fnzcahvu:PDXv5liOjgRVjxMQ0zDCyqq7wc4HeCB4@rain.db.elephantsql.com/fnzcahvu");
    await client.connect();
    return client;
}