import { AppProps } from 'next/app'
import { Session } from "next-auth"
import { Header } from '../components/Header'
import { SessionProvider as NextAuthProvider } from 'next-auth/react';

import '../styles/global.scss'

//Tudo que está aqui dentro é renderizado / recarregado sempre que o usuario navega entre rotas.

function MyApp(
  { Component, pageProps } : AppProps<{
    session: Session;
  }>) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <Header />
      <Component {...pageProps} />
    </NextAuthProvider>
  )
}

export default MyApp
