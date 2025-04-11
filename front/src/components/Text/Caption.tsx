import styled from 'styled-components'

interface CaptionProps {
    text: string
}

const Caption = ({ text }: CaptionProps) => {
    return (
        <Text>{text}</Text>
    )
}

export default Caption

const Text = styled.div`
    font-size: 14px;
    font-weight: 600;
    color: #aaa; /* 희미하고 연한 회색 */
`
