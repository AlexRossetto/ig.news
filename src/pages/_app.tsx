import { AppProps } from 'next/app'
import { Header } from '../components/Header'

import '../styles/global.scss'

//Tudo que está aqui dentro é renderizado / recarregado sempre que o usuario navega entre rotas.

function MyApp({ Component, pageProps } : AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
