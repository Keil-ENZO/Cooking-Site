import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card.jsx";

const Main = () => {
    const [data, setData] = useState([]);
    const letter = "a"; // Vous pouvez remplacer ceci par votre génération aléatoire

    useEffect(() => {
        axios
            .get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
            .then((res) => {
                console.log(res.data);
                setData(res.data);
            })
            .catch((error) => {
                console.error("Erreur lors de la récupération des données :", error);
                // Vous pouvez ajouter une gestion des erreurs ici
            });
    }, [letter]);

    return (
        <div className={"flex flex-wrap items-center justify-center mt-12"}>
            {data.meals?.map((meal) => (
                <Card meal={meal} key={meal.idMeal} />
            ))}
        </div>
    );
};

export default Main;
