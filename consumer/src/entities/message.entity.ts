import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity('history_message')
export class HistoryMessage extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar', { length: 250 })
    message: string;
}
