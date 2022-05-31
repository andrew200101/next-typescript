import styled, { ThemeProvider } from 'styled-components';
import WestlandLogo from '../../asset/westlandLogo.svg';
import { GlobalStyle, theme } from '../../style-guide/Theme';
import Navbar from './Navbar';

type RouteType = {
  title: string;
  targetRoute: string;
};
type LayoutProps = React.PropsWithChildren<{
  navbarHeight: number;
  routes: RouteType[];
}>;

const LayoutContainer = styled.div`
  position: absolute;
  width: 100%;
`;

const Layout = ({ navbarHeight, children, routes }: LayoutProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <LayoutContainer>
        <Navbar
          height={navbarHeight}
          logo={WestlandLogo}
          logoWidth={150}
          routes={routes}
        ></Navbar>
        {children}
      </LayoutContainer>
    </ThemeProvider>
  );
};

export default Layout;
