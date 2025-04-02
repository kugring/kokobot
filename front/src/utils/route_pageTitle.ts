import { DEFAULT_TITLE, ROUTE_INFO } from "../constants/route_constatns";

/**
 * 현재 경로에 따른 페이지 타이틀을 반환하는 함수
 * @param pathname 현재 경로
 * @returns 페이지 타이틀
 */
export const getPageTitle = (pathname: string): string => {
    const routeInfo = Object.values(ROUTE_INFO).find(
        (route) => pathname.startsWith(route.path)
    );
    
    return routeInfo?.title ?? DEFAULT_TITLE;
}; 