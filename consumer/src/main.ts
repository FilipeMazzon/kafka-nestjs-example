import {NestFactory} from '@nestjs/core';
import {MicroserviceOptions} from '@nestjs/microservices';
import {AppModule} from './app.module';
import {microserviceConfig} from "./config/microservice.config";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.connectMicroservice<MicroserviceOptions>(microserviceConfig);
    await app.startAllMicroservicesAsync();
    await app.listen(3000);
}

bootstrap().then();
