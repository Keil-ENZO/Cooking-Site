import Card from "../components/Card.jsx";


import axios from "axios";
import {useEffect, useState} from "react";
import strRandom from "string-random";
const Main = () => {

    const [data, setData] = useState([]);
    const letter = strRandom(1, {
        letters: 'abcdefghijklmnopqrstuvwxyz',
        includeUpperCase: true,
    });


    useEffect(() => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
            .then((res) => {
                console.log(res.data);
                setData(res.data);
            })
    }, []);

    return (
        <div className={"flex flex-wrap items-center justify-center mt-12"}>
            {
                data.meals?.map((meal) => {
                    return <Card meal={meal} key={meal.idMeal}/>
                })
            }

        </div>
    );
};

export default Main;