const itemsList = [
    ["겨울용 보온 및 힐링 아이템", " 담요", "코코아", "전기장판", "바디보습"],
    ["홈 인테리어 및 장식", "크리스마스 트리", "크리스마스 넛 크래커", "크리스마스 스노우글로브", "홈파티 장식"],
    ["선물 및 포장 관련", "선물 포장 세트", "초콜릿", "향수", "캔들용품"],
    ["취미 및 여가 활동", "보드게임", "간단한 스낵", "블루투스 스피커", "무드등"],
    ["건강 및 라이프스타일", "영양제", "공기청정기", "피트니스 장비 (덤벨)", "홈웨어"]
  ];
  
  export default function SubCateMenu() {
    return (
      <div className="h top-[135px] bg-gray-300 bg-opacity-50 w-full flex justify-center z-20">
        <div className="grid grid-cols-5 bg-white border-x border-[#184E40] w-full h-[230px] overflow-hidden ml-[150px] mr-[150px]">
          {itemsList.map((items, colIndex) => (
            <div
              key={colIndex}
              className={`flex flex-col ${colIndex < itemsList.length - 1 ? 'border-r border-[#184E40]' : ''}`} // 마지막 열을 제외한 모든 열에 오른쪽 보더 추가
            >
              {items.map((item, index) => (
                <div
                  key={index}
                  className={`flex justify-center items-center text-center cursor-pointer hover:shadow-lg transition-shadow h-full
                    text-[16px] h-[46px] border-b border-[#184E40] ${
                    index === 0 ? 'font-bold text-[17px] bg-white' : 'bg-white hover:bg-gray-200'
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }