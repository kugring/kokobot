import { useLocation } from "react-router-dom"
import { useAuthStore } from "../../stores/authStore"
import { AdminHeader, UserHeader } from "./Headers"

/**
 * 사용자 권한에 따라 적절한 헤더를 렌더링하는 컴포넌트
 * - 관리자: AdminHeader
 * - 로그인 사용자: UserHeader
 * - 비로그인 사용자: PublicHeader
 * - 인증 페이지에서는 헤더를 표시하지 않음
 */
const Header = () => {
    
    const location = useLocation()
    const { isAuthenticated, user } = useAuthStore()
    
    // 인증 페이지에서는 헤더를 표시하지 않음
    if (location.pathname === "/auth") return null
    
    // 사용자 상태에 따른 헤더 표시
    // if (!isAuthenticated) return <PublicHeader />
    if (!isAuthenticated) return <UserHeader />
    
    // 사용자 권한에 따른 헤더 분기
    const userRole = user?.role || ""
    
    switch (userRole) {
        case "admin":
            return <AdminHeader />
        case "user":
            return <UserHeader />
        default:
            return null
    }
}

export default Header
