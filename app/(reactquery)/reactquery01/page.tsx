import TodoQueryContainer from "./_component/TodoQueryContainer";
import TodoQueryContainer02 from "./_component/TodoQueryContainer02";

export default function page() {
    return (
        <>
            {/* SSR */}
            <h1 className="text-4xl">투두목록</h1>
            {/* CSR */}
            <TodoQueryContainer02/>
        </>
    );
}