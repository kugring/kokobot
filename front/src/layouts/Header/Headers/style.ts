import styled from 'styled-components';

const Styles = {
  HeaderContainer: styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    height: 60px;
    background-color: #EBF2FF;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
  `,

  Logo: styled.div`
    font-size: 24px;
    font-weight: 700;
    color: #2D3748;
    letter-spacing: -0.5px;
  `,

  Nav: styled.nav`
    display: flex;
    gap: 20px;
    margin: 0 20px;
  `,

  NavItem: styled.div`
    position: relative;
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 8px 12px;
    color: #4A5568;
    text-decoration: none;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: -0.3px;
    border-radius: 4px;
    transition: all 0.2s;
    cursor: pointer;

    &:hover {
      background-color: rgba(255, 255, 255, 0.8);
      color: #2D3748;
    }
  `,

  DropdownMenu: styled.div`
    position: absolute;
    top: 100%;
    left: 0;
    min-width: 200px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 8px 0;
    opacity: 0;
    visibility: hidden;
    transform: translateY(10px);
    transition: all 0.2s;
    z-index: 1000;

    &:hover {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }
  `,

  DropdownItem: styled.a`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    color: #4A5568;
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    transition: all 0.2s;

    &:hover {
      background-color: #F7FAFC;
      color: #2D3748;
    }
  `,

  UserSection: styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
  `,

  UserProfile: styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
  `,

  UserAvatar: styled.div`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: #f0f0f0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
  `,

  UserName: styled.span`
    font-size: 14px;
    color: #2D3748;
    font-weight: 500;
    letter-spacing: -0.3px;
  `,

  AdminBadge: styled.span`
    padding: 4px 8px;
    background-color: #e6f3ff;
    color: #0066cc;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: -0.3px;
  `,

  LoginButton: styled.button`
    padding: 6px 12px;
    background-color: #f5f5f5;
    border: none;
    border-radius: 4px;
    color: #4A5568;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: -0.3px;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      background-color: #e0e0e0;
      color: #2D3748;
    }
  `,

  SignupButton: styled.button`
    padding: 6px 12px;
    background-color: #0066cc;
    border: none;
    border-radius: 4px;
    color: white;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: -0.3px;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      background-color: #0052a3;
    }
  `,

  LogoutButton: styled.button`
    padding: 6px 12px;
    background-color: #f5f5f5;
    border: none;
    border-radius: 4px;
    color: #4A5568;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: -0.3px;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      background-color: #e0e0e0;
      color: #2D3748;
    }
  `
};

export default Styles; 