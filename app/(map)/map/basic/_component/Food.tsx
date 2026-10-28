//쌤 풀이
interface FoodProps {
    food: {
        name: string;
        price: number;
    }
}

export default function food({food}: FoodProps) {
    const {name, price} = food 
    return (
        <li className="active:text-blue-500">{name}: {price.toLocaleString()}원</li>
    );
}