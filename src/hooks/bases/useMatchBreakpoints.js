import useMediaQuery from "./useMediaQuery";

export default function useBreakPoint() {
  const isXs = useMediaQuery('(max-width: 639px)');
  const isSm = useMediaQuery('(min-width: 640px) and (max-width: 767px)');
  const isMd = useMediaQuery('(min-width: 768px) and (max-width: 1023px)');
  const isLg = useMediaQuery('(min-width: 1024px) and (max-width: 1279px)');
  const isXl = useMediaQuery('(min-width: 1280px) and (max-width: 1535px)');
  const isXxl = useMediaQuery('(min-width: 1536px)');
  const is2k = useMediaQuery('(min-width: 1921px)');
  const isMobileRef = useRef(false);
  const isTabletRef = useRef(false);
  const isDesktopRef = useRef(false);

  useEffect(() => {
    isMobileRef.current = isXs || isSm;
    isTabletRef.current = isMd || isLg;
    isDesktopRef.current = isXl || isXxl;
  }, [isSm, isMd, isLg]);

  return {
    isSm,
    isMd,
    isLg,
    isXl,
    isXxl,
    is2k,
    isMobile: isMobileRef.current,
    isTablet: isTabletRef.current,
    isDesktop: isDesktopRef.current,
  };
}
