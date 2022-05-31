import React, { useLayoutEffect, useState } from 'react';

const bp: any = [734, 1112, 1440, 1441000];
const breakpoints: any = bp.map((x: number) => `${x}px`);

const [sm, md, lg, xl] = bp;

const mq: any = [
  `@media screen and (max-width: ${sm}px) and (min-width: 0px)`,
  `@media screen and (max-width: ${md}px) and (min-width: ${sm + 1}px)`,
  `@media screen and (max-width: ${lg}px) and (min-width: ${md + 1}px)`,
  `@media screen and (max-width: ${xl}px) and (min-width: ${lg + 1}px)`,
];

breakpoints.sm = `${sm}px`;
bp.sm = sm;
mq.sm = mq[0];

breakpoints.md = `${md}px`;
bp.md = md;
mq.md = mq[1];

breakpoints.lg = `${lg}px`;
bp.lg = lg;
mq.lg = mq[2];

breakpoints.xl = `${xl}px`;
bp.xl = xl;
mq.xl = mq[3];

export { mq, bp };
export default breakpoints;

export const useBreakpoint = (bp: 'sm' | 'md' | 'lg' | 'xl') => {
  const mql = window.matchMedia(mq[bp].replace('@media ', ''));
  const [matches, setMatches] = React.useState(mql.matches);
  React.useEffect(() => {
    mql.addEventListener('change', (e) => {
      if (e.matches) {
        setMatches(true);
      } else {
        setMatches(false);
      }
    });
  }, [mql]);
  return matches;
};

export const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
};
