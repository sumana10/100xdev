import { Client } from 'pg';

export async function getClient() {
     const client = new Client("postgres://zmnuycey:7fOrykQMdkCFGBDLZ1n7klsM8qzLKYwS@john.db.elephantsql.com/zmnuycey");
    // const client = new Client({
    //     connectionString: "postgres://wzsxsnxg:LHZ9Cv4QoZ1zctxapk0q2ch672-09UQe@trumpet.db.elephantsql.com/wzsxsnxg"
    //   });
    await client.connect();
    return client;
}