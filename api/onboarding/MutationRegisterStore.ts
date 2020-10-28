import gql from "graphql-tag";

export const MutationRegisterStore = gql`
  mutation RegisterStore($input: RegisterStoreInput!) {
    registerStore(input: $input)
  }
`;
