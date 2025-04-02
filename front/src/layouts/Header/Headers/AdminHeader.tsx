import Logo from '../../../components/Logo/Logo';
import Styles from './style';

// 관리자용 헤더
const AdminHeader = () => {
    const { HeaderContainer,  Nav, UserSection, AdminBadge, LogoutButton } = Styles;
    
    return (
      <HeaderContainer>
        <Logo/>
        <Nav>

        </Nav>
        <UserSection>
          <AdminBadge>관리자</AdminBadge>
          <LogoutButton>로그아웃</LogoutButton>
        </UserSection>
      </HeaderContainer>
    );
  };

  export default AdminHeader;

