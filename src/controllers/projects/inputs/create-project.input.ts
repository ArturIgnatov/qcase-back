import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateProjectInput {
  @Field({ nullable: false })
  organizationId: string;

  @Field({ nullable: false })
  name: string;

  @Field({ nullable: true })
  description: string;
}
