import { useEffect, useState } from 'react';
import axios from "axios";
import Card from "./Card.jsx";

const Input = () => {
    const [search, setSearch] = useState('');
    const [data, setData] = useState([]);

    const searchMeal = (query) => {
        axios
            .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
            .then((res) => {
                console.log(res.data);
                setData(res.data);
            })
    }

    useEffect(() => {
        if (search === '') {
            setData([]); // Réinitialisez les données si la recherche est vide
        } else {
            searchMeal(search);
        }
    }, [search]); // Utilisez la dépendance 'search'

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearch('');
    }

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)} className={'flex items-center justify-center'}>
                <input
                    className={"h-10 rounded-lg text-center placeholder-text font-text border border-text bg-secondary focus:border-primary outline-none"}
                    onChange={(e) => setSearch(e.target.value)}
                    type="search"
                    placeholder={"Search (in English)"}
                    value={search}
                />

            </form>
            <div className={"flex flex-wrap items-center justify-center mt-12"}>
                {
                    data.meals?.map((meal) => {
                        return <Card meal={meal} key={meal.idMeal}/>
                    })
                }
            </div>

        </div>
    );
};

export default Input;
