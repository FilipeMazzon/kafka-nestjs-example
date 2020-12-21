import {Injectable, Logger} from '@nestjs/common';
import {Client, ClientKafka} from "@nestjs/microservices";
import {microserviceConfig} from "./config/microservice.config";

@Injectable()
export class AppService {
    @Client(microserviceConfig)
    private readonly client: ClientKafka;
    private readonly numberOfMessages: number = parseInt(process.env.NUMBER_OF_MESSAGES) || 50000;

    sendMessages() {
        const pattern = 'send-message';
        for (let i = 0; i < this.numberOfMessages; i++) {
            this.client.emit<string>(pattern, `messagem numero: ${i}`);
        }
        Logger.log(`send all ${this.numberOfMessages} messages`);
    }
}
