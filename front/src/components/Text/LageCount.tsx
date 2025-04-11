import styled from 'styled-components'

interface LageCountProps {
    value   : number
    color?: string  
    unit?: string
    size?: number
}

const LageCount = ({ value, color = '#333', unit, size = 32 }: LageCountProps) => {

    const formattedValue = value.toLocaleString()
    return (
        <Container color={color}>
            <Text size={size}>{formattedValue}</Text>
            <Unit>{unit}</Unit>
        </Container>
    )
}

export default LageCount


const Container = styled.div<{ color?: string }>`
    display: flex;
    align-items: end;
    gap: 4px;
    color: ${(props) => props.color};
    font-weight: 600;
`

const Text = styled.div<{ size?: number }>`    
    font-size: ${(props) => props.size}px;
    font-weight: 600;
`

const Unit = styled.span`
    font-size: 14px;
    margin-bottom: 2px;
`


