import {KafkaOptions, Transport} from "@nestjs/microservices";

export const microserviceConfig: KafkaOptions = {
    transport: Transport.KAFKA,
    options: {
        client: {
            brokers: [
                'localhost:9092'
            ],
            clientId: 'nestjs-producer-server'
        },
        consumer: {
            groupId: 'message'
        }
    }
};
