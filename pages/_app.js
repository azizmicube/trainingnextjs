import { Layout } from '@/components/Layout'
import '@/styles/globals.css'
import '@/styles/bootstrap.min.css'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

const client = new ApolloClient({
  uri: 'https://swift-sprint.testingnow.me/graphql',
  cache: new InMemoryCache()
});

function MyApp({ Component, pageProps }) {
  // return <Component {...pageProps} />

  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  )
}

export default MyApp
