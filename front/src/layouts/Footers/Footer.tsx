import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { useAuthStore } from '../../stores/authStore';

const Footer: React.FC = () => {
  const location = useLocation();
  const { isAuthenticated } = useAuthStore();

  // 관리자 페이지인 경우 다른 푸터 표시
  if (location.pathname.startsWith('/admin')) {
    return <AdminFooter />;
  }

  // 로그인한 사용자용 푸터
  if (isAuthenticated) {
    return <UserFooter />;
  }

  // 기본 푸터
  return <PublicFooter />;
};

// 공개 푸터 (비로그인 사용자용)
const PublicFooter: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>KokoBot</FooterTitle>
          <FooterText>
            최고의 챗봇 서비스를 제공합니다.
          </FooterText>
        </FooterSection>
        <FooterSection>
          <FooterTitle>링크</FooterTitle>
          <FooterLink href="/about">회사 소개</FooterLink>
          <FooterLink href="/privacy">개인정보처리방침</FooterLink>
          <FooterLink href="/terms">이용약관</FooterLink>
        </FooterSection>
        <FooterSection>
          <FooterTitle>연락처</FooterTitle>
          <FooterText>이메일: contact@kokobot.com</FooterText>
          <FooterText>전화: 02-1234-5678</FooterText>
        </FooterSection>
      </FooterContent>
      <FooterBottom>
        <Copyright>© 2024 KokoBot. All rights reserved.</Copyright>
      </FooterBottom>
    </FooterContainer>
  );
};

// 로그인한 사용자용 푸터
const UserFooter: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>KokoBot</FooterTitle>
          <FooterText>
            고객님의 챗봇 서비스 이용을 환영합니다.
          </FooterText>
        </FooterSection>
        <FooterSection>
          <FooterTitle>고객지원</FooterTitle>
          <FooterLink href="/support">고객센터</FooterLink>
          <FooterLink href="/faq">자주 묻는 질문</FooterLink>
          <FooterLink href="/tutorial">이용 가이드</FooterLink>
        </FooterSection>
        <FooterSection>
          <FooterTitle>계정</FooterTitle>
          <FooterLink href="/profile">프로필 관리</FooterLink>
          <FooterLink href="/settings">설정</FooterLink>
          <FooterLink href="/billing">결제 내역</FooterLink>
        </FooterSection>
      </FooterContent>
      <FooterBottom>
        <Copyright>© 2024 KokoBot. All rights reserved.</Copyright>
      </FooterBottom>
    </FooterContainer>
  );
};

// 관리자용 푸터
const AdminFooter: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>KokoBot Admin</FooterTitle>
          <FooterText>
            관리자 페이지입니다.
          </FooterText>
        </FooterSection>
        <FooterSection>
          <FooterTitle>시스템</FooterTitle>
          <FooterLink href="/admin/logs">시스템 로그</FooterLink>
          <FooterLink href="/admin/backup">백업 관리</FooterLink>
          <FooterLink href="/admin/security">보안 설정</FooterLink>
        </FooterSection>
        <FooterSection>
          <FooterTitle>관리자</FooterTitle>
          <FooterText>관리자 전용 연락처</FooterText>
          <FooterText>admin@kokobot.com</FooterText>
        </FooterSection>
      </FooterContent>
      <FooterBottom>
        <Copyright>© 2024 KokoBot Admin Panel</Copyright>
      </FooterBottom>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background-color: #f8f9fa;
  padding: 2rem 0;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  padding: 0 2rem;
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FooterTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 0.5rem;
`;

const FooterText = styled.p`
  color: #666;
  line-height: 1.5;
`;

const FooterLink = styled.a`
  color: #666;
  text-decoration: none;
  line-height: 1.5;
  &:hover {
    color: #333;
  }
`;

const FooterBottom = styled.div`
  max-width: 1200px;
  margin: 2rem auto 0;
  padding: 1rem 2rem;
  border-top: 1px solid #ddd;
`;

const Copyright = styled.p`
  color: #666;
  text-align: center;
`;

export default Footer; 