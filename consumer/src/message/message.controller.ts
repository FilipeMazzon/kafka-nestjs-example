import {Controller} from '@nestjs/common';
import {MessagePattern, Payload} from "@nestjs/microservices";
import {MessageService} from "./message.service";
import {HistoryMessage} from "../entities/message.entity";

@Controller('message')
export class MessageController {
    constructor(private readonly messageService: MessageService) {
    }

    @MessagePattern('send-message')
    async insertMessage(@Payload() payload: string): Promise<HistoryMessage> {
        return this.messageService.saveMessage(payload);
    }
}
