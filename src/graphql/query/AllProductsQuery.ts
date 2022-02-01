import { gql } from '@apollo/client';

export default gql`
    query AllProducts {
        products {
        id,
        name,
        slug,
        image,
        price,
        categories {
            id,
            slug,
            name
        },
        description
        }
    }
`;