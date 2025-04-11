import Logo from "./../../../components/Logo/Logo"
import styled from "styled-components"
import { useState } from "react"
import { MENU_STRUCTURE, MenuItem } from "../../../constants/route_constatns"

// 로그인한 사용자용 헤더
const UserHeader = () => {
    const [hoveredItem, setHoveredItem] = useState<string | null>(null)
    const [isClosed, setIsClosed] = useState(true)

    const handleMouseEnter = (itemName: string) => {
        setHoveredItem(itemName)
        setIsClosed(false)
    }

    const handleMouseLeave = () => {
        setIsClosed(true)
    }

    const getCurrentDescription = () => {
        const currentSection = MENU_STRUCTURE.find((section) => section.title === hoveredItem)
        return currentSection?.description || ""
    }

    const renderDropdownItems = (items: MenuItem[]) => {
        const columns = []
        for (let i = 0; i < items.length; i += 3) {
            columns.push(items.slice(i, i + 3))
        }

        return columns.map((column, columnIndex) => (
            <DropdownColumn key={columnIndex}>
                {column.map((item) => (
                    <DropdownItem key={item.path} href={item.path}>
                        {item.icon} {item.title}
                    </DropdownItem>
                ))}
            </DropdownColumn>
        ))
    }

    return (
        <HeaderContainer onMouseLeave={handleMouseLeave} $isClosed={isClosed}>
            <Right>
                <Logo />
                <MenuDescription $isClosed={isClosed}>
                    <Title>{hoveredItem}</Title>
                    {getCurrentDescription()}
                </MenuDescription>
            </Right>
            <Nav>
                {MENU_STRUCTURE.map((section) => (
                    <NavItem key={section.title} onMouseEnter={() => handleMouseEnter(section.title)} $hovered={hoveredItem === section.title && !isClosed}>
                        {section.title}
                        <DropdownMenu $isVisible={hoveredItem === section.title && !isClosed}>{renderDropdownItems(section.items)}</DropdownMenu>
                    </NavItem>
                ))}
            </Nav>
            <UserSection>
                <UserProfile>
                    <UserAvatar>👤</UserAvatar>
                    <UserName>사용자님</UserName>
                </UserProfile>
                <LogoutButton>로그아웃</LogoutButton>
            </UserSection>
        </HeaderContainer>
    )
}

export default UserHeader

const HeaderContainer = styled.header<{ $isClosed: boolean }>`
    display: flex;
    align-items: start;
    justify-content: space-evenly;
    padding: 12px 20px;
    height: ${(props) => (props.$isClosed ? "32px" : "190px")};
    background-color: #ebf2ff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    box-sizing: content-box;
    font-family: "Pretendard", -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic",
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    transition: all 0.3s ease;
    transition-delay: ${(props) => (props.$isClosed ? "0.2s" : "0s")};
`

const Right = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

const Title = styled.div`
    font-size: 24px;
    font-weight: 600;
    letter-spacing: -0.3px;
`

const MenuDescription = styled.div<{ $isClosed: boolean }>`
    width: 200px;
    padding: 6px 0;
    color: #4a5568;
    font-size: 13px;
    line-height: 1.5;
    word-wrap: break-word;
    word-break: keep-all;
    white-space: pre-wrap;
    opacity: ${(props) => (props.$isClosed ? 0 : 1)};
    transition: all 0.3s ease;
`

const Nav = styled.nav`
    display: flex;
    gap: 8px;
    margin: 0 20px;
    position: relative;
`

const DropdownMenu = styled.div<{ $isVisible: boolean }>`
    position: absolute;
    top: calc(100% + 16px);
    left: 0;
    display: flex;
    flex-direction: row;
    opacity: ${(props) => (props.$isVisible ? 1 : 0)};
    visibility: ${(props) => (props.$isVisible ? "visible" : "hidden")};
    transform: translateY(${(props) => (props.$isVisible ? "0" : "10px")});
    transition: all 0.3s ease;
    z-index: 1000;
`

const DropdownColumn = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 180px;
`

const NavItem = styled.div<{ $hovered: boolean }>`
    position: relative;
    display: flex;
    align-items: center;
    padding: 8px 12px;
    gap: 4px;
    color: #637ca8;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: -0.3px;
    transition: all 0.2s;
    text-decoration: none;
    border-radius: 4px;
    cursor: pointer;
    color: ${(props) => (props.$hovered ? "#2d3748" : "#637ca8")};
    background-color: ${(props) => (props.$hovered ? "#f7fafc" : "transparent")};
`

const DropdownItem = styled.a`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px;
    color: #4a5568;
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    transition: all 0.2s;
    white-space: nowrap;
    border-radius: 4px;

    &:hover {
        background-color: #f7fafc;
        color: #2d3748;
    }
`

const UserSection = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`

const UserProfile = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`

const UserAvatar = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: #f0f0f0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
`

const UserName = styled.span`
    font-size: 14px;
    color: #2d3748;
    font-weight: 500;
    letter-spacing: -0.3px;
`

const LogoutButton = styled.button`
    padding: 6px 12px;
    background-color: #f5f5f5;
    border: none;
    border-radius: 4px;
    color: #4a5568;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: -0.3px;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
        background-color: #e0e0e0;
        color: #2d3748;
    }
`
