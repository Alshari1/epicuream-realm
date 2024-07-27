import { useNavigate } from "react-router-dom";
import { removeFromLS } from "../../Utilities/FakeDb";

const ViewDetails = ({ items }) => {
    const { _code, name, img, country, workPlace, bestRecipe, my_recipe, details } = items;
    const navigate = useNavigate()
    const handleGoBack = () => {
            navigate('/');
            removeFromLS(_code)
    }
    return (
        <div className="flex text-white">
            <div className="bg-gray-700 flex p-32 w-[45%] h-[550px]">
                <img className="mx-auto rounded-lg" src={img} alt="" />
            </div>
            <div className="w-[50%] ps-12 py-8">
                <h1 className="text-5xl">{name}</h1>
                <p>From: {country}</p>
                <p>Work_place: {workPlace}</p>
                <p>Best_recipe: {bestRecipe}</p>
                <div className="flex mt-5">
                    <ul className="border-r-2 w-[50%]">
                        My_recipe:
                        {
                            my_recipe.map(pd => <li className="ps-16">{pd}</li>)
                        }
                    </ul>
                    <p className="mt-5 w-[55%] px-5 text-justify">_{details}</p>
                </div>
                <button onClick={handleGoBack} style={{ borderBottom: '2px solid white' }} className=" mt-4 btn btn-outline text-orange-500 border-none">Go back</button>
            </div>
        </div>
    );
};

export default ViewDetails;