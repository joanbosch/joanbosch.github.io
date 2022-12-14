import L from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Header from './Header';
import { useTranslation } from './../utils/locales';
import Footer from './Footer';

export default function PageLayout({ children, title = 'Joan Bosch'}) {
  const { header, footer } = useTranslation();
  return (
    <>
      <Head>
        <script async src="https://cdn.splitbee.io/sb.js"></script>
        <link
          rel='preload'
          href='/fonts/PlusJakartaSans-Regular.woff2'
          as='font'
          crossOrigin=''
        />
        <link
          rel='preload'
          href='/fonts/PlusJakartaSans-Bold.woff2'
          as='font'
          crossOrigin=''
        />
        <title>{title}</title>
        <meta name="description" content="Joan Bosch Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header locales={header}></Header>
      <main>
        {children}
      </main>
      <Footer locales={footer}></Footer>
    </>
  )
}