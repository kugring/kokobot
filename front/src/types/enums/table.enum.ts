// 포맷터 유형 enum
export enum FormatterType {
  Default = 'default',        // 기본값(변환 없음)
  Number = 'number',          // 숫자 포맷(천 단위 구분자)
  Percentage = 'percentage',  // 백분율
  Currency = 'currency',      // 통화
  Date = 'date',              // 날짜
  DateTime = 'dateTime',      // 날짜 및 시간
  Week = 'week',              // 주령(일령)
  Temperature = 'temperature', // 온도
  Weight = 'weight',          // 무게
}

// 단위 유형 enum
export enum UnitType {
  None = '',             // 단위 없음
  Percentage = '%',      // 퍼센트
  Won = '원',            // 원화
  Dollar = '$',          // 달러
  Celsius = '℃',         // 섭씨
  Gram = 'g',            // 그램
  Kilogram = 'kg',       // 킬로그램
  Day = '일령',           // 일령
  Count = '수',           // 수량
  Humidity = '%',        // 습도
  Egg = '알',           // 알
}

// 표시 위치 enum
export enum UnitPosition {
  Prefix = 'prefix',     // 앞에 표시 (예: $100)
  Suffix = 'suffix',     // 뒤에 표시 (예: 100원)
}

// 날짜 포맷 enum
export enum DateFormatType {
  YY_MM_DD = 'YY-MM-DD',                   // 25-04-11
  YYYY_MM_DD = 'YYYY-MM-DD',               // 2025-04-11
  YYYY_MM_DD_HH_MM = 'YYYY-MM-DD HH:mm',   // 2025-04-11 13:30
  MM_DD = 'MM-DD',                         // 01-01
  HH_MM = 'HH:mm',                         // 13:30
}

