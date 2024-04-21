export const isToday = (targetDate) => {
  /*
       설명: 오늘의 날짜와 일치하는지 비교해주는 함수(시, 분, 초를 제외한 년, 월, 일만 비교)
       매개변수: targetDate(비교할 날짜)
       반환: true(오늘과 일치) or false(오늘이랑 불일치)
       작성자: 이유진(yj2.dev@gmail.co
       작성일: 2024.04.22 04:46
   **/
  const now = new Date();
  const nDate = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
  ).getTime();

  const _tDate = new Date(targetDate);
  const tDate = new Date(
    _tDate.getFullYear(),
    _tDate.getMonth(),
    _tDate.getDate(),
  ).getTime();

  return nDate === tDate;
};

export const mappedOneWeekList = (originList, day = 0) => {
  /*
     설명: 일주일간의 목록만 필터링 해주는 함수
     매개변수: originList(원본 목록),
              day(0이거나 매개변수가 없으면 오늘, 3이면 3일 이후의 데이터를 일주일치 가져옵니다.)
              EX. 오늘 날짜: 24.04.22 / day = 3, 04.25 ~ 05.01 의 데이터 제공
     작성자: 이유진(yj2.dev@gmail.com)
     작성일: 2024.04.21 18:42
   **/

  const now = new Date();

  const nowDate = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + day,
  );

  const after7Date = new Date(nowDate.getTime() + 1000 * 60 * 60 * 24 * 7);

  const filterList = originList.filter((item) => {
    let date = new Date(item.date);
    date = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    return nowDate <= date && date < after7Date;
  });

  return filterList;
};

export const getDayOfWeek = (date) => {
  /*
    설명: 해당 날짜의 요일을 한 글자로 반환합니다.
    매개변수: date(날짜)
    반환: 요일 한 글자("일", "월", "화", "수", "목", "금", "토")
         EX. "월"
    작성자: 이유진(yj2.dev@gmail.com)
    작성일: 2024.04.21 16:50
  **/
  const dayMap = ["일", "월", "화", "수", "목", "금", "토"];

  const day = new Date(date).getDay();
  return dayMap[day];
};

export const formatToMMDD = (date) => {
  /*
    설명: 해당 날짜의 표기 방식을 "3월 2일" 과 같은 형식으로 변경합니다.
    매개변수: date(날짜)
    반환: EX. "3월 2일"
    작성자: 이유진(yj2.dev@gmail.com)
    작성일: 2024.04.21 17:12
  **/
  let newDate = new Date(date);

  const format = `${newDate.getMonth() + 1}월 ${newDate.getDate()}일`;
  return format;
};
