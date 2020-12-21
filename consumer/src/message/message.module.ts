import {Module} from '@nestjs/common';
import {MessageService} from './message.service';
import {MessageController} from './message.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {HistoryMessage} from "../entities/message.entity";

@Module({
    imports: [
        TypeOrmModule.forFeature([HistoryMessage]),
    ],
    providers: [MessageService],
    controllers: [MessageController]
})
export class MessageModule {
}
