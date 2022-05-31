import { useRouter } from 'next/router';
import styled from 'styled-components';
import { theme } from '../../style-guide/Theme';

interface LinkProps {
  currentRoute?: string;
  targetRoute?: string;
  fontSize: string;
}

const defaultLinkProps: LinkProps = {
  fontSize: theme.fontSizes.base,
};

interface ActiveLinkProps {
  targetRoute: string;
  children: React.ReactNode;
  fontSize?: string;
}

const Link = styled.a<LinkProps>`
  color: ${(props) => props.theme.colors.white};
  text-decoration: none;
  margin: auto 0 auto 0;
  font-size: ${(props) => props.fontSize};
`;

const ActiveLink = ({ targetRoute, children, fontSize }: ActiveLinkProps) => {
  const router = useRouter();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    router.push({ pathname: targetRoute });
  };

  return (
    <Link
      currentRoute={router.asPath}
      targetRoute={targetRoute}
      onClick={handleClick}
      fontSize={fontSize!}
    >
      {children}
    </Link>
  );
};

Link.defaultProps = defaultLinkProps;

export default ActiveLink;
