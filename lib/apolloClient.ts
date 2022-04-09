import { ApolloClient,HttpLink, InMemoryCache,NormalizedCacheObject} from '@apollo/client'

export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__'

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined 

const createApolloClient = () => {
  return new ApolloClient({
    ssrMode: typeof window ="undefined",
    link: new HttpLink({
      uri:''
    })

    cache: new InMemoryCache()
  })
}