import Card from "../components/Card.jsx";

import axios from "axios";
import {useEffect} from "react";
const Main = () => {
    useEffect(() => {
        axios.get("https://www.themealdb.com/api/json/v1/1/search.php?f=a\n")
            .then((res) => {
                console.log(res.data)
            })
    }, []);

    return (
        <div>
            <Card/>
        </div>
    );
};

export default Main;