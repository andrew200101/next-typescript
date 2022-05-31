import type { AppProps } from 'next/app';
import { Content } from '../components/layout/Content';
import Layout from '../components/layout/Layout';

export default function MyApp({ Component, pageProps }: AppProps) {
  const navbarHeight = 100;
  return (
    <Layout navbarHeight={navbarHeight}>
      <Content navbarHeight={navbarHeight}>
        <Component {...pageProps} />
      </Content>
    </Layout>
  );
}
