import Input from "../components/Input";

const Header = () => {
    return (
        <div>
            <h1 className={"text-[8vw] m-5 font-title"}>Cooking-Site</h1>
            <div className={"flex justify-center items-center"}>
                <Input/>
            </div>


        </div>
    );
};

export default Header;