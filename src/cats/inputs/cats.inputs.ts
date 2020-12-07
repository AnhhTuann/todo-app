import { InputType } from '@nestjs/graphql';
import { from } from 'rxjs';

import { Field, Int } from '@nestjs/graphql';

@InputType()
export class CatInput {
  @Field()
  readonly name: string;
  @Field(() => Int)
  readonly age: number;
  @Field()
  readonly bleed: string;
}
