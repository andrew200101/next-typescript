import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import type { AppProps } from 'next/app';
import WestlandLogo from '../asset/westlandLogo.svg';
import { Content } from '../components/layout/Content';
import Footer from '../components/layout/Footer';
import Layout from '../components/layout/Layout';
config.autoAddCss = false;

export default function MyApp({ Component, pageProps }: AppProps) {
  const navbarHeight = 100;
  const routes = [
    { title: 'Projects', targetRoute: '/company/project' },
    { title: 'About', targetRoute: '/company/about' },
    { title: 'Team', targetRoute: '/company/team' },
  ];
  return (
    <Layout navbarHeight={navbarHeight} routes={routes}>
      <Content navbarHeight={navbarHeight}>
        <Component {...pageProps} />
      </Content>
      <Footer height={400} logo={WestlandLogo} logoWidth={150} />
    </Layout>
  );
}
