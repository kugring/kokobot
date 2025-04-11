import Caption from "components/Text/Caption"
import LageCount from "components/Text/LageCount"
import styled from "styled-components"
import TrendCount from "components/Text/TrendCount"

interface TotalCardProps {
    img: string
    count: number
    caption: string
    tendCount?: number
}

const TotalHouseCard = ({ img, count, caption, tendCount }: TotalCardProps) => {
    return (
        <Container>
            <Left>
                <IconBox src={img} />
                <Text>
                    <Caption text={caption} />
                    <LageCount value={count} />
                </Text>
            </Left>
            <Right>
                <TrendCount tendCount={tendCount} />
            </Right>
        </Container>
    )
}

export default TotalHouseCard

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: end;
    width: 100%;
`

const Left = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
`

const IconBox = styled.img`
    width: 42px;
    height: 42px;
    object-fit: contain;
`

const Text = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    > div:first-child {
        margin-bottom: -2px;
    }
`

const Right = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
`
