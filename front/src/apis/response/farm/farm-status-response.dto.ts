import { FarmStatus } from "types";
import ResponseDto from "../response.dto";

export default interface FarmStatusResponseDto extends ResponseDto {
    farmStatusList: FarmStatus[];
}
