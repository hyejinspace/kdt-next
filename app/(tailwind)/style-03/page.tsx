// hover: 마우스를 올렸을 때
// 스타일 분리
// 역할 객체이름을 지정(권장)
import { STYLE_03_CLASS } from "./style-03.style";

export default function page() {
  return (
    <>
      <a href="#" className={STYLE_03_CLASS.a}>Hover시 스타일 변경</a>
      {/* button이 눌리면 배경 컬러를 그린, 글자 색을 흰색으로 변경 */}
      <button className={STYLE_03_CLASS.button}>스타일 변경</button>
    </>
  );
}