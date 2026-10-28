// flex 스타일 구성하기
// w-:width
// h-:height

export default function page() {
  return (
    <>
      <div className="w-125 h-125 border border-green-500 flex justify-center items-center">
        <div className="w-[101px] h-100 bg-amber-300"></div>
        <div className="w-25.25 h-100 bg-amber-300"></div>
        <div className="w-25.25 h-100 bg-amber-300"></div>
      </div>
    </>
  );
}