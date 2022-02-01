import { gql } from '@apollo/client';

export default gql`
    query OneProduct ($slug: String) {
        products (slug: $slug) {
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
