import { RouteInfo } from "../types/route_info";

// 메뉴 항목 인터페이스
export interface MenuItem {
    path: string;
    title: string;
    icon: string;
}

// 메뉴 구조 인터페이스
export interface MenuSection {
    title: string;
    description: string;
    items: MenuItem[];
}

// 메뉴 구조 상수
export const MENU_STRUCTURE: MenuSection[] = [
    {
        title: "사육 관리",
        description: "닭의 입추부터 성장까지 전 과정을 관리합니다. 개체 이력, 부화, 동별 관리, 건강 상태, 환경 관리, 백신/약품 투여 등을 포함합니다.",
        items: [
            { path: "/breeding/status", title: "농장 현황", icon: "📊" },
            { path: "/breeding/chick", title: "입추 관리", icon: "🐣" },
            { path: "/breeding/history", title: "개체 이력 관리", icon: "📋" },
            { path: "/breeding/hatching", title: "부화 관리", icon: "📦" },
            { path: "/breeding/building", title: "동별 관리", icon: "🐓" },
            { path: "/breeding/environment", title: "환경 관리", icon: "🌡" },
            { path: "/breeding/vaccine", title: "백신/약품 투여 관리", icon: "💊" }
        ]
    },
    {
        title: "생산 관리",
        description: "산란량, 사료, 계란 입출고, 반품/폐기물, 부자재/재고 등을 관리합니다. 생산성과 품질을 최적화하는데 필요한 모든 기능을 제공합니다.",
        items: [
            { path: "/production/analysis", title: "산란량 분석", icon: "📈" },
            { path: "/production/feed", title: "사료 관리", icon: "🧂" },
            { path: "/production/eggs", title: "계란 입출고 관리", icon: "🥚" },
            { path: "/production/returns", title: "반품/폐기물 관리", icon: "🚚" },
            { path: "/production/inventory", title: "부자재/재고 관리", icon: "📦" }
        ]
    },
    {
        title: "방역 및 품질",
        description: "HACCP, 검사 성적, 검교정, 인증 등을 관리합니다. 식품 안전과 품질 관리를 위한 종합적인 시스템을 제공합니다.",
        items: [
            { path: "/quality/haccp", title: "HACCP 관리", icon: "🏠" },
            { path: "/quality/inspection", title: "검사 성적 관리", icon: "🧬" },
            { path: "/quality/calibration", title: "검교정 관리", icon: "🔧" },
            { path: "/quality/certification", title: "인증 관리", icon: "🥇" }
        ]
    },
    {
        title: "출입 보안 & 시설",
        description: "출입 관리, 출입 분석, 부화동/사육동 시설 관리를 통해 농장의 보안과 시설 유지보수를 관리합니다.",
        items: [
            { path: "/security/access", title: "출입 관리", icon: "🔐" },
            { path: "/security/analysis", title: "출입 분석", icon: "📊" },
            { path: "/security/facilities", title: "부화동/사육동 시설 관리", icon: "🏠" }
        ]
    },
    {
        title: "경영/행정",
        description: "경영 분석, 업무 보고, 교육/회의 일정, 거래 내역, 정부 연계/보고 등을 통해 농장의 경영과 행정을 효율적으로 관리합니다.",
        items: [
            { path: "/management/analysis", title: "경영 분석", icon: "💼" },
            { path: "/management/reports", title: "업무 보고", icon: "📑" },
            { path: "/management/schedule", title: "교육/회의 일정 관리", icon: "🗓" },
            { path: "/management/transactions", title: "거래 내역 관리", icon: "🤝" },
            { path: "/management/government", title: "정부 연계/보고", icon: "🔄" }
        ]
    },
    {
        title: "시스템 설정",
        description: "사용자 관리, 품목 코드/품종 관리, 프로그램 설정을 통해 시스템을 맞춤형으로 구성할 수 있습니다.",
        items: [
            { path: "/settings/users", title: "사용자 관리", icon: "👥" },
            { path: "/settings/codes", title: "품목 코드/품종 관리", icon: "🧾" },
            { path: "/settings/program", title: "프로그램 설정", icon: "🧩" }
        ]
    }
];

// 라우트 경로 상수
export const ROUTE_INFO: Record<string, RouteInfo> = {
    TODO: {
        path: '/todo',
        title: 'KokoBot-Todo'
    },
    AUTH: {
        path: '/auth',
        title: '회원가입 및 로그인'
    },
    MAIN: {
        path: '/dashboard',
        title: '대시보드'        
    }
};

export const DEFAULT_TITLE = 'KokoBot'; 