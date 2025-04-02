import Logo from "../../../components/Logo/Logo"
import Styles from "./style"
// 공개 헤더 (비로그인 사용자용)
const PublicHeader = () => {
    const { HeaderContainer, Nav, UserSection, LoginButton, SignupButton } = Styles

    return (
        <HeaderContainer>
            <Logo />
            <Nav>

            </Nav>
            <UserSection>
                <LoginButton>로그인</LoginButton>
                <SignupButton>회원가입</SignupButton>
            </UserSection>
        </HeaderContainer>
    )
}

export default PublicHeader
