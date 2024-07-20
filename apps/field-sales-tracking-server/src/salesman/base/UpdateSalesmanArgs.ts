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
import { SalesmanWhereUniqueInput } from "./SalesmanWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { SalesmanUpdateInput } from "./SalesmanUpdateInput";

@ArgsType()
class UpdateSalesmanArgs {
  @ApiProperty({
    required: true,
    type: () => SalesmanWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SalesmanWhereUniqueInput)
  @Field(() => SalesmanWhereUniqueInput, { nullable: false })
  where!: SalesmanWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => SalesmanUpdateInput,
  })
  @ValidateNested()
  @Type(() => SalesmanUpdateInput)
  @Field(() => SalesmanUpdateInput, { nullable: false })
  data!: SalesmanUpdateInput;
}

export { UpdateSalesmanArgs as UpdateSalesmanArgs };
