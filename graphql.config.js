module.exports = {
    projects: {
        app: {
            schema: ['./schema.graphql'], 
            documents: ['**/*.{graphql,js,ts,jsx,tsx}'],
            extensions: {
                endpoints: {
                    default: {
                        url: 'https://reasonapps-gql-api.vercel.app/api/graphql',
                    },
                },
            },
        }
    }
};