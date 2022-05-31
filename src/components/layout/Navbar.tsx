import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';
import { theme } from '../../style-guide/Theme';
import ActiveLink from '../route/Link';

interface NavbarProps {
  height: number;
  logo?: string;
  logoWidth: number;
  routes?: RouteInterface[];
}

interface RouteInterface {
  title: string;
  targetRoute: string;
}

interface StyledNavbarContainerProps {
  height: number;
}

const NavbarContainer = styled.div<StyledNavbarContainerProps>`
  position: fixed;
  display: flex;
  justify-content: center;
  width: 100%;
  height: ${(props) => (props.height ? props.height : 100)}px;
  background-color: ${(props) => props.theme.colors.darkCharcoal};
  z-index: 999;
`;

const LinkContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 40px;
`;

const NavbarContent = styled.div`
  width: 100%;
  max-width: 1100px;
  display: flex;
  justify-content: space-between;
  padding: 0 20px 0 20px;
`;

const AutoMargin = styled(({ component, ...props }) =>
  React.cloneElement(component, props)
)`
  margin: auto 0 auto 0;
`;

const Navbar = ({ height, logo, logoWidth, routes }: NavbarProps) => {
  const router = useRouter();
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    router.replace({ pathname: '/' });
  };
  return (
    <NavbarContainer height={height}>
      <NavbarContent>
        <AutoMargin
          component={
            <Image
              src={logo!}
              alt="Logo"
              width={`${logoWidth}px`}
              onClick={handleClick}
            />
          }
        />
        <LinkContainer>
          {routes?.map((objects) => (
            <ActiveLink
              targetRoute={objects.targetRoute}
              key={null}
              fontSize={theme.fontSizes.lg}
            >
              {objects.title}
            </ActiveLink>
          ))}
        </LinkContainer>
      </NavbarContent>
    </NavbarContainer>
  );
};

const DefaultNavbarProps: NavbarProps = {
  height: 100,
  logoWidth: 130,
};

Navbar.defaultProps = DefaultNavbarProps;

export default Navbar;
