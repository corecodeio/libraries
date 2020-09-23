import gql from 'graphql-tag';

export const MutationVerifyPhoneNumberCode = gql`
	mutation VerifyPhoneNumberCode($input: VerifyPhoneNumberCodeInput!) {
		verifyPhoneNumberCode(input: $input) {
			token
		}
	}
`;
