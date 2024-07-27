import { useNavigate } from "react-router-dom";
import { addToLS } from "../../../Utilities/FakeDb";

const ChefCart = ({data}) => {
  const navigate = useNavigate()
    const {_code,name, img, country, workPlace, bestRecipe} = data;
    const handleDetails = (code) => {
        // console.log('clicked')
        addToLS(code)
        navigate('/details')
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl  mx-auto">
            <figure><img className="img img-fluid" src='./../../../../../public/chefs/Pierre Gagnaire.jpeg' alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>From: {country}</p>
                <p>Work_place: {workPlace}</p>
                <p>Best_recipe: {bestRecipe}</p>
                <div className="card-actions mt-5">
                <button onClick={()=> handleDetails(_code)} style={{borderBottom:'2px solid white'}} className="btn btn-outline text-orange-500 border-none">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default ChefCart;