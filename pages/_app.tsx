import { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  const client = initializeApollo()

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
