import { cn } from "cn";
import STYLES from "./style-04.style";

export default function page() {
    return (
        <>
            {/* <p className={`animate-wiggle ${STYLES.a}`}>사용자 정의 애니메이션</p> */}
            <p className={cn("animate-wiggle", STYLES.a)}>사용자 정의 애니메이션</p>
        </>
    );
}