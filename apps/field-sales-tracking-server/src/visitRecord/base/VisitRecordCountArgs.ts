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
import { VisitRecordWhereInput } from "./VisitRecordWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class VisitRecordCountArgs {
  @ApiProperty({
    required: false,
    type: () => VisitRecordWhereInput,
  })
  @Field(() => VisitRecordWhereInput, { nullable: true })
  @Type(() => VisitRecordWhereInput)
  where?: VisitRecordWhereInput;
}

export { VisitRecordCountArgs as VisitRecordCountArgs };