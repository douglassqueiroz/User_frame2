import { Colmun, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User{
    @PrimaryGeneratedColumn('uuid')
    id:string;
    @Colmun()
    name:string;
    @Colmun()
    age:number;
}