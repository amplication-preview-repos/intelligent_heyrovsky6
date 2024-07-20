/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { VisitRecordWhereUniqueInput } from "./VisitRecordWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { VisitRecordUpdateInput } from "./VisitRecordUpdateInput";

@ArgsType()
class UpdateVisitRecordArgs {
  @ApiProperty({
    required: true,
    type: () => VisitRecordWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => VisitRecordWhereUniqueInput)
  @Field(() => VisitRecordWhereUniqueInput, { nullable: false })
  where!: VisitRecordWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => VisitRecordUpdateInput,
  })
  @ValidateNested()
  @Type(() => VisitRecordUpdateInput)
  @Field(() => VisitRecordUpdateInput, { nullable: false })
  data!: VisitRecordUpdateInput;
}

export { UpdateVisitRecordArgs as UpdateVisitRecordArgs };