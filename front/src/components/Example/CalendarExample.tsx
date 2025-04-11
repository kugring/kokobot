import { useState } from 'react';
import styled from 'styled-components';
import CalendarComponent from '../Calander';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

// 할일 타입 정의
interface CalendarTodo {
  date: Date;
  title: string;
  type?: 'normal' | 'important' | 'memo';
}

const CalendarExample = () => {
  const [date, setDate] = useState<Value>(new Date());
  const [dateRange, setDateRange] = useState<Value>([new Date(), new Date()]);

  // 현재 날짜 정보 가져오기
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const currentDay = currentDate.getDate();

  // 예시 할일 데이터 생성
  const sampleTodos: CalendarTodo[] = [
    // 현재 날짜 기준 할일
    {
      date: new Date(currentYear, currentMonth, currentDay),
      title: '오늘의 할일',
      type: 'important'
    },
    {
      date: new Date(currentYear, currentMonth, currentDay + 2),
      title: '미팅',
      type: 'normal'
    },
    {
      date: new Date(currentYear, currentMonth, currentDay + 5),
      title: '프로젝트 마감일',
      type: 'important'
    },
    {
      date: new Date(currentYear, currentMonth, currentDay - 2),
      title: '보고서 제출',
      type: 'normal'
    },
    // 공휴일 예시
    {
      date: new Date(currentYear, currentMonth, 15),
      title: '휴일',
      type: 'memo'
    },
    // 같은 날 여러 할일 예시
    {
      date: new Date(currentYear, currentMonth, 20),
      title: '오전 미팅',
      type: 'normal'
    },
    {
      date: new Date(currentYear, currentMonth, 20),
      title: '오후 발표',
      type: 'important'
    },
    {
      date: new Date(currentYear, currentMonth, 20),
      title: '저녁 식사',
      type: 'normal'
    }
  ];

  const handleDateChange = (newDate: Value) => {
    setDate(newDate);
  };

  const handleDateRangeChange = (newDateRange: Value) => {
    setDateRange(newDateRange);
  };

  const formatDate = (date: Date | null): string => {
    if (!date) return '';
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <ExampleContainer>
      <Section>
        <h2>기본 캘린더 (할일 표시)</h2>
        <CalendarComponent 
          onChange={handleDateChange} 
          value={date} 
          todos={sampleTodos}
        />
        <p>선택된 날짜: {date instanceof Date ? formatDate(date) : '날짜를 선택해주세요'}</p>
        <TodoLegend>
          <LegendItem>
            <DotSample type="normal" />
            <span>일반 할일</span>
          </LegendItem>
          <LegendItem>
            <DotSample type="important" />
            <span>중요 할일</span>
          </LegendItem>
          <LegendItem>
            <DotSample type="memo" />
            <span>메모</span>
          </LegendItem>
        </TodoLegend>
      </Section>

      <Section>
        <h2>날짜 범위 선택 (할일 표시)</h2>
        <CalendarComponent 
          onChange={handleDateRangeChange} 
          value={dateRange} 
          className="range-calendar"
          selectRange={true}
          todos={sampleTodos}
        />
        <p>
          {Array.isArray(dateRange) ? (
            <>
              시작일: {formatDate(dateRange[0])}<br />
              종료일: {formatDate(dateRange[1])}
            </>
          ) : (
            '날짜 범위를 선택해주세요'
          )}
        </p>
        <TodoTip>※ 각 타입별 할일이 하나 이상 있는 경우 해당 타입의 점이 표시됩니다.</TodoTip>
      </Section>
    </ExampleContainer>
  );
};

// 할일 범례용 스타일 컴포넌트
const TodoLegend = styled.div`
  display: flex;
  margin-top: 12px;
  gap: 16px;
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: #555;
`;

const DotSample = styled.div<{ type: string }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({ type }) => 
    type === 'important' ? '#ff5c5c' :
    type === 'memo' ? '#6495ed' : '#57BD84'
  };
`;

const TodoTip = styled.div`
  margin-top: 12px;
  font-size: 13px;
  color: #777;
  font-style: italic;
`;

const ExampleContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  padding: 20px;
`;

const Section = styled.div`
  flex: 1;
  min-width: 300px;
  
  h2 {
    margin-bottom: 15px;
    font-size: 18px;
    color: #333;
  }
  
  p {
    margin-top: 15px;
    font-size: 14px;
    color: #666;
  }
  
  .range-calendar .react-calendar {
    border-color: #b0c4de;
  }
`;

export default CalendarExample; 