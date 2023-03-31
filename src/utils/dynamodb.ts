import {
    DataMapper,
} from '@aws/dynamodb-data-mapper';
import DynamoDB from 'aws-sdk/clients/dynamodb';

export const client = new DynamoDB({region: 'us-east-1'});
export const mapper = new DataMapper({client});

export default mapper;