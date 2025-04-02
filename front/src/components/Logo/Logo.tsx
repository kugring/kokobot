import { Link } from "react-router-dom"
import styled from "styled-components"
const logoPath = "/assets/img/logo.png"

const Logo = () => {
    return (
        <LogoContainer to="/">
            <LogoImage src={logoPath} alt="KokoBot" />
            <Right>
                <Title>KOKOBOT</Title>
                <SubTitle>양계농장통합관리시스템</SubTitle>
            </Right>
        </LogoContainer>
    )
}

export default Logo

const LogoContainer = styled(Link)`
    display: flex;
    align-items: center;
    gap: 12px;
    text-decoration: none;
    color: inherit;
`

const LogoImage = styled.img`
    width: 36px;
    height: 36px;
`

const Right = styled.div`
    margin-top: -4px;
    display: flex;
    flex-direction: column;
`

const Title = styled.div`
    font-size: 24px;
    font-weight: 700;
    color: #333;
`

const SubTitle = styled.div`
    margin-top: -4px;
    font-size: 11px;
    color: #666;
`
