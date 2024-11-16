import iconData from '../../data/commonIcon.json';
import footerBottom from './footerBottom.svg';

export default function Footer() {

  const footerLogo = iconData['footerLogo'];

  return (
    <footer className="flex w-full h-[260px] items-center">

      <div className="flex w-full h-full items-center bg-[#0F1C5A]">
        {/* Footer 이미지 박스 */}
        <div className="flex flex-none justify-center items-center ml-[80px]">
        <img
              src={footerLogo.image} />
        </div>

        {/* Footer 텍스트 박스 */}
        <div className="flex flex-col justify-center items-start h-full ml-[28px] text-[15px]">
          <span className="font-bold text-white">
            개인정보처리방침 <span className="text-white"> | </span> 이용약관
          </span>
          <span span className="font-bold text-white">
            (주)더포터마켓 대표 : 손예지 <span className="text-[#C8C6C6]"> | </span>
            TEL: 02-0929-1234<span className="text-white"> | </span> hoiljoil@kw.ac.kr
          </span>
          <span span className="font-bold text-white">
            서울특별시 노원구 광운로 20<span className="text-[#C8C6C6]"> | </span>
            통신판매업 신고 : 2024-서울노원-0001호<span className="text-[#C8C6C6]"> | </span>
            사업자 등록번호 : 111-11-11111
          </span>
          <span className="text-[#C8C6C6]">
            Copyright ⓒ 2024 Theportermarket. All rights reserved.
          </span>
        </div>
      </div>

      {/* 하단 이미지 */}
      <div className="absolute bottom-0 w-full">
        <img src={footerBottom} alt="Footer Bottom" className="w-full" />
      </div>

    </footer>
  );
}