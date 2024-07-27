import { useEffect, useState } from "react";
import { getChefCart } from "./../../Utilities/FakeDb";
import ViewDetails from "../ViewDetails/ViewDetails";

const ChefDetails = () => {
    const [items, setItems] = useState([])
    console.log(items)
    useEffect(() => {
        fetch('Chefs_Name.json')
            .then(res => res.json())
            .then(data => {
                processData(data); // Process the fetched data
            })
    }, [])
    const processData = (data) => {
        const storredCart = getChefCart('chef-cart');
        const matchedItems = data.filter(pd => storredCart[pd._code]);
        console.log(matchedItems)
        setItems(matchedItems);
    }
    return (
        <div>
            {
                items.map(item => (
                    <ViewDetails 
                    key={item._code} 
                    items={item}
                    ></ViewDetails>
                ))
            }
        </div>
    );
};

export default ChefDetails;
