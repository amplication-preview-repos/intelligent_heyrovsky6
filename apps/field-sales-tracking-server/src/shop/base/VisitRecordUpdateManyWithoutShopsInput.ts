/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { VisitRecordWhereUniqueInput } from "../../visitRecord/base/VisitRecordWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class VisitRecordUpdateManyWithoutShopsInput {
  @Field(() => [VisitRecordWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [VisitRecordWhereUniqueInput],
  })
  connect?: Array<VisitRecordWhereUniqueInput>;

  @Field(() => [VisitRecordWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [VisitRecordWhereUniqueInput],
  })
  disconnect?: Array<VisitRecordWhereUniqueInput>;

  @Field(() => [VisitRecordWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [VisitRecordWhereUniqueInput],
  })
  set?: Array<VisitRecordWhereUniqueInput>;
}

export { VisitRecordUpdateManyWithoutShopsInput as VisitRecordUpdateManyWithoutShopsInput };
