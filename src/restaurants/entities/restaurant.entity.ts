import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsBoolean, IsString, Length } from 'class-validator';

@ObjectType()
@Entity()
export class Restaurant {
  @Field(() => Number)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String)
  @Column()
  @Length(5, 10)
  @IsString()
  name: string;

  @Field(() => Boolean)
  @Column()
  @IsBoolean()
  isVegan: boolean;

  @Field(() => String)
  @Column()
  @IsString()
  address: string;
}
