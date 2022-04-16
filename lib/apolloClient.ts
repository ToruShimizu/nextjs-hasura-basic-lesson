import { ApolloClient,HttpLink, InMemoryCache,NormalizedCacheObject} from '@apollo/client'

export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__'

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined 

const createApolloClient = () => {
  return new ApolloClient({
    // ブラウザではない場合、サーバーサイドで処理されている場合
    ssrMode: typeof window ="undefined",
    link: new HttpLink({
      uri:'https://t-lesson-hasura.hasura.app/v1/graphql'
    })
    cache: new InMemoryCache()
  })
}

export const initializeApollo = (initialState = null) => {
  // 左辺がnullまたはundefinedの場合は
  const _apolloClient = apolloClient ?? createApolloClient()
  
  // SSG、SSRなどのサーバーサイドでレンダリングされる場合は新規で生成したclientを返す
  if(typeof window === 'undefined')return _apolloClient
// クライアントサイドの場合
  if(!apolloClient) apolloClient = _apolloClient
  return _apolloClient
}