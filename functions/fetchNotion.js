const { Client } = require('@notionhq/client');

const { NOTIONKEY, NOTIONDB } = process.env;

// Initializing a client
const notion = new Client({
    auth: NOTIONKEY,
});

exports.handler = async function (event, context) {
    try {
        const response = await notion.databases.query({
            database_id: NOTIONDB,
            filter: {
                property: 'Status',
                select: {
                    equals: 'Live',
                },
            },
        });
        return {
            statusCode: 200,
            body: JSON.stringify(response),
        };
    } catch (e) {
        console.error(e);
        return {
            statusCode: 500,
            body: e.toString(),
        };
    }
};