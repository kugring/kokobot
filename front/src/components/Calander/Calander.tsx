import "react-calendar/dist/Calendar.css"
import styled from "styled-components"
import Calendar from "react-calendar"
import { useState } from "react"
import { CalendarTodo } from "../../types/components/calander_type"
import { TodoTileContent } from "./TodoTileContent"
import { formatShortWeekday, formatDay, formatMonthYear } from "../../utils/calander_util"

// Google Fonts import
import "@fontsource/ibm-plex-mono/400.css"
import "@fontsource/ibm-plex-mono/500.css"

type ValuePiece = Date | null
type Value = ValuePiece | [ValuePiece, ValuePiece]

interface CalendarProps {
    onChange?: (date: Value) => void
    value?: Value
    className?: string
    selectRange?: boolean
    todos?: CalendarTodo[]
}

/**
 * 리액트 캘린더 컴포넌트
 * - 날짜 선택, 범위 선택 기능
 * - 할일 표시 기능 추가
 * 신경쓸 값 : 일자 width, 헤더 width, 일자 헤더 말고 viewConainer의 margin-bottom값
 */
const CalendarComponent = ({
    onChange,
    value: externalValue,
    className,
    selectRange = false,
    todos = [], // 기본값 빈 배열
}: CalendarProps) => {
    const [value, setValue] = useState<Value>(externalValue || new Date())

    const handleChange = (newValue: Value) => {
        setValue(newValue)
        onChange?.(newValue)
    }

    // 타일 콘텐츠 렌더링 함수
    const renderTileContent = ({ date }: { date: Date }) => {
        return <TodoTileContent date={date} todos={todos} />
    }

    return (
        <CalendarContainer className={className}>
            <Calendar
                onChange={handleChange}
                value={value}
                locale="ko-KR"
                calendarType="gregory"
                selectRange={selectRange}
                formatShortWeekday={formatShortWeekday}
                formatDay={formatDay}
                formatMonthYear={formatMonthYear}
                showNeighboringMonth={true}
                tileContent={renderTileContent}
                tileClassName="calendar-tile"
            />
        </CalendarContainer>
    )
}

// 캘린더 컨테이너 스타일
const CalendarContainer = styled.div`
    /* 기본 캘린더 컨테이너 스타일 */
    .react-calendar {
        width: 100%;
        max-width: 280px;
        background: white;
        border: 1px solid #e6e6e6;
        border-radius: 8px;
        font-family: "Noto Sans KR", sans-serif;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    /* 네비게이션 영역 스타일 */
    .react-calendar__navigation {
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 40px;
        padding-top: 10px;
        margin-bottom: 2px;
    }

    /* 년도 이동 버튼 숨김 */
    .react-calendar__navigation__prev2-button,
    .react-calendar__navigation__next2-button {
        display: none;
    }

    /* 년월 헤더 스타일 */
    .react-calendar__navigation__label {
        font-weight: 600;
        font-size: 14px;
        color: #333;
        background: none;
        border: none;
        flex-grow: 0 !important;
        width: 50%; /* 년도 선택 영역 제한 */
        height: 40px;
        border-radius: 6px;
    }

    /* 년월 헤더 내부 텍스트 스타일링 */
    .react-calendar__navigation__label__labelText {
        font-family: "Noto Sans KR", sans-serif;
        font-weight: 600;
    }

    /* 월 이동 버튼 공통 스타일 */
    .react-calendar__navigation__prev-button,
    .react-calendar__navigation__next-button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px; /* 버튼 너비 증가 */
        height: 40px; /* 버튼 높이 증가 */
        margin: 0; /* 마진 제거 */
        padding: 0;
        border: none;
        border-radius: 8px;
        font-size: 24px;
        color: #666;
        background: none;
        transition: all 0.2s;
        cursor: pointer;

        &:hover {
            background-color: #f0f0f0;
            color: #333;
        }
    }

    .react-calendar__navigation__prev-button {
        padding-right: 2px;
    }

    .react-calendar__navigation__next-button {
        padding-left: 2px;
    }

    /* 요일 헤더 스타일 */
    .react-calendar__month-view__weekdays__weekday {
        padding: 12px 0 6px;
        font-weight: bold;

        abbr {
            text-decoration: none;
            font-size: 12px;
        }
    }

    /* 요일 색상 */
    .react-calendar__month-view__weekdays__weekday:nth-child(1) abbr {
        color: #ff5c5c;
    }
    .react-calendar__month-view__weekdays__weekday:nth-child(7) abbr {
        color: #6495ed;
    }

    /* 날짜 타일 기본 스타일 */
    .react-calendar__tile {
        flex: 0 0 14.2857%;
        overflow: visible !important;
        padding: 0;
        background: none;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        margin: 0;
        aspect-ratio: 1;

        abbr {
            position: relative;
            z-index: 1;
            font-size: 12px;
        }
    }

    /* 날짜 텍스트 스타일 */
    .react-calendar__month-view__days__day {
        font-family: "IBM Plex Mono", monospace;
        font-weight: 500;
        color: #333;
    }

    /* 이전/다음 달 날짜 스타일 */
    .react-calendar__month-view__days__day--neighboringMonth {
        opacity: 0.4;
        color: #999 !important;
    }

    /* 주말 날짜 색상 */
    .react-calendar__month-view__days__day--weekend:nth-child(7n + 1) {
        color: #ff5c5c;
    }

    .react-calendar__month-view__days__day--weekend:nth-child(7n) {
        color: #6495ed;
    }

    /* 날짜 원형 배경 공통 스타일 */
    .react-calendar__tile::before {
        content: "";
        position: absolute;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 0;
        transition: background-color 0.2s;
    }

    /* 년도 선택 뷰에서는 원형 배경 제거 */
    .react-calendar__decade-view__years__year::before {
        display: none;
    }


    /* 오늘 날짜 스타일 */
    .react-calendar__tile--now::before {
        width: 36px;
        height: 36px;
        background: #ebebff;
        z-index: 0;
    }

    /* 선택된 날짜 스타일 */
    .react-calendar__tile--active {
        color: white !important;

        &::after {
            content: "";
            position: absolute;
            width: 32px;
            height: 32px;
            border-radius: 50%;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 0;
            background: #007bff;
        }
    }

    /* 호버 효과 */
    .react-calendar__tile:enabled:hover,
    .react-calendar__tile:enabled:focus {
        background-color: transparent;

        &::before {
            background-color: #e6e6e6;
        }
    }

    .react-calendar__viewContainer{
        margin-bottom: 6px;
    }
`

export default CalendarComponent
