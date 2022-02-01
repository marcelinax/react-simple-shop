import { gql } from '@apollo/client';

export default gql`
    query AllCategories {
        categories {
            id
            name 
            slug
        }
    }
`;
