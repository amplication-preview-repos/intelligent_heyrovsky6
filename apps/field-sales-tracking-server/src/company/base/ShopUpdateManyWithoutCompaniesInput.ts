/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ShopWhereUniqueInput } from "../../shop/base/ShopWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class ShopUpdateManyWithoutCompaniesInput {
  @Field(() => [ShopWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ShopWhereUniqueInput],
  })
  connect?: Array<ShopWhereUniqueInput>;

  @Field(() => [ShopWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ShopWhereUniqueInput],
  })
  disconnect?: Array<ShopWhereUniqueInput>;

  @Field(() => [ShopWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ShopWhereUniqueInput],
  })
  set?: Array<ShopWhereUniqueInput>;
}

export { ShopUpdateManyWithoutCompaniesInput as ShopUpdateManyWithoutCompaniesInput };
