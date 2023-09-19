import PropTypes from 'prop-types';

const Card = ({ meal }) => {
    const title = meal.strMeal;
    const newTitle = title.slice(0, 10) + "...";

    const Instructions = meal.strInstructions;
    const newInstructions = Instructions.slice(0, 100) + "...";


    return (
        <div className={" w-[350px] bg-secondary m-5 border border-text rounded-3xl"}>
            <div>
                <img className={"h-[350px] rounded-t-3xl"} src={meal.strMealThumb} alt={meal.idMeal} />
                <h1 className={"text-[2vw] font-title m-5"}>{newTitle}</h1>
            </div>

            <div>
                <p className={'m-5'}>{newInstructions}</p>
            </div>

        </div>
    );
};

Card.propTypes = {
    meal: PropTypes.shape({
        strMeal: PropTypes.string.isRequired,
        strMealThumb: PropTypes.string.isRequired,
        idMeal: PropTypes.string.isRequired,
        strInstructions: PropTypes.string.isRequired,
        // Ajoutez d'autres propriétés et types si nécessaire
    }).isRequired,
};

export default Card;
