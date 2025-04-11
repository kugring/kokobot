import React from 'react';
import styled from 'styled-components';
import Header from './Header/Header';

interface BaseLayoutProps {
  children: React.ReactNode;
}

const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <LayoutContainer>
      <Header />
      <MainContent>
        {children}
      </MainContent>
      {/* <Footer /> */}
    </LayoutContainer>
  );
};

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
  display: flex;
  justify-content: center;  
  align-items: center;
  width: 100dvw;
  margin: 0 auto;
  padding: 20px 0;
`;

export default BaseLayout; 