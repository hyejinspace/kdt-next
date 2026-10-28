interface Student {
    id: number,
    name: string,
    isPresent: boolean;
}

interface StudentProps {
    student: Student
}

export default function student({student}: StudentProps) {
    const {id, name, isPresent} = student;
    return (
        <li className="test-[20px]">
            <p>번호: {id}</p>
            <p className="text-blue-500">이름: {name}</p>
            <p>출석 여부: {isPresent && "출석"}</p>
        </li>
    );
}