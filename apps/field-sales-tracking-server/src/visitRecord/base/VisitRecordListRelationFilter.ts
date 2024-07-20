/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { VisitRecordWhereInput } from "./VisitRecordWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class VisitRecordListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => VisitRecordWhereInput,
  })
  @ValidateNested()
  @Type(() => VisitRecordWhereInput)
  @IsOptional()
  @Field(() => VisitRecordWhereInput, {
    nullable: true,
  })
  every?: VisitRecordWhereInput;

  @ApiProperty({
    required: false,
    type: () => VisitRecordWhereInput,
  })
  @ValidateNested()
  @Type(() => VisitRecordWhereInput)
  @IsOptional()
  @Field(() => VisitRecordWhereInput, {
    nullable: true,
  })
  some?: VisitRecordWhereInput;

  @ApiProperty({
    required: false,
    type: () => VisitRecordWhereInput,
  })
  @ValidateNested()
  @Type(() => VisitRecordWhereInput)
  @IsOptional()
  @Field(() => VisitRecordWhereInput, {
    nullable: true,
  })
  none?: VisitRecordWhereInput;
}
export { VisitRecordListRelationFilter as VisitRecordListRelationFilter };
