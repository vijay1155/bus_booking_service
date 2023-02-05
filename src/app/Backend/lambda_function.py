import boto3
import json

def lambda_handler(event, context):
    dynamodb = boto3.resource('dynamodb')
    table = dynamodb.Table('BusTable')
   
    with open('BusTableRecords.json') as json_file:
        buses = json.load(json_file)
        for bus in buses:
            item = {
                'bus_id': bus['bus_id'],
                'route_number': bus['route_number'],
                'destination': bus['destination']
            }
            table.put_item(Item=item)
   
    return {
        'statusCode': 200,
        'body': 'Items added to BusTable'
    }
