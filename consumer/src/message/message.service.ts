import {Injectable, Logger} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from "typeorm";
import {HistoryMessage} from "../entities/message.entity";
import * as uuid from 'uuid';

@Injectable()
export class MessageService {
    constructor(
        @InjectRepository(HistoryMessage)
        private historyMessageRepository: Repository<HistoryMessage>
    ) {
    }

    async saveMessage(payload: string): Promise<HistoryMessage> {
        const history = await this.historyMessageRepository.create({
            message: payload,
            id: uuid()
        })
        Logger.log(`message receive ${payload}`);
        return history;
    }
}
