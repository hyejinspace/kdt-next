import Food from "./Food";

export default function FoodContainer() {

    const foods = [
        {
            name: "샐러드 파스타",
            price: 15000
        },
        {
            name: "소고기",
            price: 50000
        },
        {
            name: "샌드위치",
            price: 5000
        },
        {
            name: "어제먹은 김치찌개",
            price: 100000
        },
        {
            name: "차돌박이 파스타",
            price: 20000
        },
    ]

    // ※DOM에 직접 접근하지 마라!※
    // foods.forEach((food) => {
    //     const li = document.createElement("li")
    //     li.innerText = food.name
    //     document.querySelector("ul")?.appendChild(li)
    // })

    // map
    // Food컴포넌트로 리스트 Props로 분리하기<<<<<<<<모르겠어어어어어어어어어어어어어어어어어어어

    // function Food(props: { name: string }) {
    //     return <li>{props.name}</li>
    // }

    // const foodList = foods.map((food, i) => (
    //     <Food key={i} name={food.name} />
    // ))

    // return (
    //     <> 
    //         <ul>{foodList}</ul>
    //     </>
    // );



    //쌤풀이
    return (
        <ul>
            {foods.map((food, i) => (
                <Food key={i} food={food} />
            ))}
        </ul>
    );
}
