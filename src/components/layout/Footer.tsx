import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';

interface FooterProps {
  height: number;
  logo?: string;
  logoWidth: number;
  routes?: RouteInterface[];
}

interface RouteInterface {
  title: string;
  targetRoute: string;
}

interface StyledFooterContainerProps {
  height: number;
}

const StyledFooter = styled.div<StyledFooterContainerProps>`
  position: relative;
  width: 100%;
  background-color: ${(props) => props.theme.colors.darkCharcoal};
  padding: 100px 0px 100px 0px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, max-content));
  grid-gap: 16px;
  justify-content: center;

  @media only screen and (max-width: ${(props) => props.theme.size.tablet}) {
    padding: 100px 50px 100px 50px;
  }
`;

const StyledFooterColumn = styled.div`
  display: block;
  min-height: 500px;
  background-color: ${(props) => props.theme.colors.desaturatedOrange};
  list-style-type: none;
  border: 1px solid gray;
  width: 250px;
`;

const Footer = ({ height, logo, logoWidth }: FooterProps) => {
  const router = useRouter();
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    router.replace({ pathname: '/' });
  };
  return (
    <StyledFooter height={height}>
      <StyledFooterColumn>
        <Image
          src={logo!}
          alt="Logo"
          width={`${logoWidth}px`}
          onClick={handleClick}
        />
        <FontAwesomeIcon icon={faLocationArrow} color={'white'} />
        <div>adas</div>
      </StyledFooterColumn>
      <StyledFooterColumn></StyledFooterColumn>
      <StyledFooterColumn></StyledFooterColumn>
      <StyledFooterColumn></StyledFooterColumn>
      {/* <AutoMargin
          component={
            
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
        </LinkContainer> */}
    </StyledFooter>
  );
};

const DefaultFooterProps: FooterProps = {
  height: 100,
  logoWidth: 130,
};

Footer.defaultProps = DefaultFooterProps;

export default Footer;
