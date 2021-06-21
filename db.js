const { DynamoDBClient } = required("@aws-sdk/client-dynamodb");
const client = new DynamoDBClient({});

module.exports = clients;
