// 요일 배열 상수
export const WEEKDAYS = ["일", "월", "화", "수", "목", "금", "토"];

// 할일 타입 정의
export type TodoType = "important" | "memo" | "normal";

// 할일 타입별 정보
export const TODO_INFO = {
    important: {
        title: "중요",
        color: "#ff5c5c"
    },
    memo: {
        title: "메모",
        color: "#6495ed"
    },
    normal: {
        title: "일반",
        color: "#57BD84"
    }
} as const;