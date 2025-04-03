import styled from "styled-components"
import { CalendarTodo } from "../../types/components/calander_type"
import { TODO_INFO, TodoType } from "../../constants/calander_constants"
import { getTodosForDate, getUniqueTodoTypes, getTodoTypeTitle } from "../../utils"

interface TodoTileContentProps {
    date: Date
    todos: CalendarTodo[]
}

export const TodoTileContent = ({ date, todos }: TodoTileContentProps) => {
    const dateTodos = getTodosForDate(todos, date)
    if (dateTodos.length === 0) return null

    const todoTypes = getUniqueTodoTypes(dateTodos)

    return (
        <TileContent className="tile-content">
            {todoTypes.map((type) => (
                <TodoDot 
                    key={`${type}-${date.toISOString()}`} 
                    type={type} 
                    title={`${getTodoTypeTitle(type)} 할일`} 
                />
            ))}
        </TileContent>
    )
}

// 타일 내 할일 표시용 스타일 컴포넌트
const TileContent = styled.div`
    display: flex;
    justify-content: center;
    gap: 2px;
`

// 할일 표시용 점 컴포넌트
const TodoDot = styled.div<{ type: string; title: string }>`
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: ${({ type }) => TODO_INFO[type as TodoType]?.color};
    border: 0.01px solid white;
    z-index: 101;

    &:hover::before {
        content: "${(props) => props.title}";
        position: absolute;
        top: -20px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 2px 4px;
        border-radius: 3px;
        font-size: 10px;
        white-space: nowrap;
        z-index: 10;
    }
`
