import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <div style={{maxWidth:'1280px', margin: 'auto'}}>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;