import gql from "graphql-tag";

export const QuerySendPhoneNumberVerificationCode = gql`
  query SendPhoneNumberVerificationCode(
    $input: SendPhoneNumberVerificatioCodeInput!
  ) {
    sendPhoneNumberVerificationCode(input: $input)
  }
`;
