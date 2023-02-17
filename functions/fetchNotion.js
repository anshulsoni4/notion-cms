const { Client } = require("@notionhq/client")

const { NOTIONKEY, NOTIONDB } = process.env;

// Initializing a client
const notion = new Client({
    auth: NOTIONKEY,
  })

exports.handler = async function (event, context) {
    const response = await notion.databases.query({
        database_id: NOTIONDB,
    });
    return {
      statusCode: 200,
      body: JSON.stringify(response),
    };
  };
  