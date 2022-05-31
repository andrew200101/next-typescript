import { ThemeProvider } from 'styled-components';
import WestlandLogo from '../../asset/westlandLogo.svg';
import { GlobalStyle, theme } from '../../style-guide/Theme';
import Navbar from './Navbar';

type LayoutProps = React.PropsWithChildren<{ navbarHeight: number }>;

const Layout = ({ navbarHeight, children }: LayoutProps) => {
  var routes = [{ title: 'Projects', targetRoute: '/company/project' }];

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar
        height={navbarHeight}
        logo={WestlandLogo}
        logoWidth={150}
        routes={routes}
      ></Navbar>
      {children}
    </ThemeProvider>
  );
};

export default Layout;
