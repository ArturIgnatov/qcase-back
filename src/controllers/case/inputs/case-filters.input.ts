import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class CaseFiltersInput {
  @Field(() => ID)
  templateId: string;
}
