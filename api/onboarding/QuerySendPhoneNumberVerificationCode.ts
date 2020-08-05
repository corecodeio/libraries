import gql from "graphql-tag";

export const schema = gql`
  query SendPhoneNumberVerificationCode(
    $input: SendPhoneNumberVerificatioCodeInput!
  ) {
    sendPhoneNumberVerificationCode(input: $input)
  }
`;
