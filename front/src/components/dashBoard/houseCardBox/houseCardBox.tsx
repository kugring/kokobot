import styled from "styled-components"
import houseStatusData from "mocks/house-status.json"
import HouseCard from "./houseCard"

const houseCardBox = () => {
    const houseData = houseStatusData

    return (
        <HouseCardBox>
            {houseData.map((house) => (
                <HouseCard key={house.id} id={house.id} name={house.name} status={house.status} stats={house.stats} />
            ))}
        </HouseCardBox>
    )
}

export default houseCardBox

const HouseCardBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: fit-content;
    gap: 16px;
`
