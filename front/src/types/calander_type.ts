
// 할일 타입 정의
export interface CalendarTodo {
    date: Date;
    title: string;
    type?: 'normal' | 'important' | 'memo';
  }