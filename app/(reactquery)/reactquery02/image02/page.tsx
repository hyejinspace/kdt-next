
//쌤코드
// "https://jsonplaceholder.typicode.com/photos"에서 데이터를 패칭하고
// 20개만 잘라서 화면에 이미지 태그를 활용해서
// 카카오 프렌즈샵처럼 좌우 배치로 10행 2열 출력하기
// ex) Image태그 title

import { Suspense } from "react";
import PhotoContainer from "./_component/PhotoContainer";
import Loading from "@/components/common/Loading";
import ImageContainer from "./_component/ImageContainer";

export default function page() {
    return (
        <Suspense fallback={<Loading />}>
            <PhotoContainer />
            {/* <ImageContainer /> */}
        </Suspense>
    );
}
