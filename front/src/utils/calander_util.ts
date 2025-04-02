import { CalendarTodo } from "../types/calander_type";
import { WEEKDAYS, TodoType, TODO_INFO } from "../constants/calander_constants";

// 타입별 할일 제목 매핑
export const getTodoTypeTitle = (type: string) => {
  return TODO_INFO[type as TodoType]?.title;
};

// 특정 날짜에 할일이 있는지 확인하는 함수
export const getTodosForDate = (todos: CalendarTodo[], date: Date) => {
  return todos.filter(
    todo => 
      todo.date.getDate() === date.getDate() &&
      todo.date.getMonth() === date.getMonth() &&
      todo.date.getFullYear() === date.getFullYear()
  );
};

// 할일 타입 중복 제거 함수
export const getUniqueTodoTypes = (todos: CalendarTodo[]) => {
  const todoTypes = new Set<string>();
  todos.forEach((todo) => {
    const type = todo.type || "normal";
    todoTypes.add(type);
  });
  return Array.from(todoTypes);
};

// 요일 포맷팅 함수
export const formatShortWeekday = (_: any, date: Date) => {
  return WEEKDAYS[date.getDay()];
};

// 날짜 포맷팅 함수
export const formatDay = (_: any, date: Date) => {
  return date.getDate().toString();
};

// 년월 포맷팅 함수
export const formatMonthYear = (_: any, date: Date) => {
  return `${date.getFullYear()}년 ${date.getMonth() + 1}월`;
};