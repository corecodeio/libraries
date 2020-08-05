import gql from "graphql-tag";

export const QueryVerifyPhoneNumberCode = gql`
  query VerifyPhoneNumberCode($input: VerifyPhoneNumberCodeInput!) {
    verifyPhoneNumberCode(input: $input)
  }
`;
