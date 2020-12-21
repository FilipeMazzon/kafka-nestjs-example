import {Module} from '@nestjs/common';
import {MessageModule} from './message/message.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import {typeOrmConfig} from "./config/postgres.config";

@Module({
    imports: [
        TypeOrmModule.forRoot(typeOrmConfig),
        MessageModule
    ],
})
export class AppModule {
}
