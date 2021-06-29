import type { AppProps } from 'next/app'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client'

import SEO from '../next-seo.config'
import 'tailwindcss/tailwind.css'

const isDev = process.env.NODE_ENV === 'development'

const App = ({ Component, pageProps }: AppProps) => {
  const httpLink = createHttpLink({
    uri: isDev ? 'http://localhost:4000/graphql' : '',
  })

  const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  })

  return (
    <ApolloProvider client={client}>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <DefaultSeo {...SEO} />
      <style global jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap');
        body {
          font-family: 'Noto Sans JP', sans-serif;
          background-color: #fafafa;
          color: #111827;
        }
      `}</style>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
export default App
