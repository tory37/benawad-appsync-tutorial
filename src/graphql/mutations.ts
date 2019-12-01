// tslint:disable
// this is an auto generated file. This will be overwritten

export const createAuction = `mutation CreateAuction(
  $input: CreateAuctionInput!
  $condition: ModelAuctionConditionInput
) {
  createAuction(input: $input, condition: $condition) {
    id
    name
    price
  }
}
`;
export const updateAuction = `mutation UpdateAuction(
  $input: UpdateAuctionInput!
  $condition: ModelAuctionConditionInput
) {
  updateAuction(input: $input, condition: $condition) {
    id
    name
    price
  }
}
`;
export const deleteAuction = `mutation DeleteAuction(
  $input: DeleteAuctionInput!
  $condition: ModelAuctionConditionInput
) {
  deleteAuction(input: $input, condition: $condition) {
    id
    name
    price
  }
}
`;
