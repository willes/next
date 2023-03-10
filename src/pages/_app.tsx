import '@/styles/globals.css'

import "tailwindcss/tailwind.css"
import type { AppProps } from 'next/app'
import Head from 'next/head'
import PageHeader from '@/components/Header'
export default function App({ Component, pageProps }: AppProps) {
  return <>
  
  <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
  <PageHeader/>
  <Component {...pageProps} />
  <footer className='bg-white py-2 text-center mt-5'>
    Copyright © 2009-2022 随时随地发现新鲜事
  </footer>
  </>
}
