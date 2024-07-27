import { Outlet } from "react-router-dom";

const Details = () => {
    return (
        <div className="m-auto mt-20 bg-slate-800 rounded-xl" style={{height:'550px', width:'1240px'}}>
            <Outlet></Outlet>
        </div>
    );
};

export default Details;