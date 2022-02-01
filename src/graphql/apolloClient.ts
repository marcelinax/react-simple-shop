import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const apolloClient = new ApolloClient({
    uri: process.env.REACT_APP_GRAPHQL_ROOT,
    cache: new InMemoryCache()
});

export default apolloClient;
