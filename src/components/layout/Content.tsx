import styled from 'styled-components';

type ContentContainerProps = React.PropsWithChildren<{
  navbarHeight: number;
}>;
const ContentContainer = styled.div<ContentContainerProps>`
  margin-top: ${(props) => props.navbarHeight}px;
  width: 100%;
  position: relative;
  min-height: 200vh;
`;

export const Content = ({ navbarHeight, children }: ContentContainerProps) => {
  return (
    <ContentContainer navbarHeight={navbarHeight}>{children}</ContentContainer>
  );
};
