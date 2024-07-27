import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import IconSection from "../IconSection/IconSection";
import Legend from "../Legend/Legend";
import Navbar from "../Navbar/Navbar";
import SectionTitle from "../SectionTitle/SectionTitle";
import ChefCart from "../ChefCart/ChefCart";
import Extra from "../../Extra/Extra";
import Subscibe from "../../Subscribe/Subscibe";
import Footer from "../../Footer/Footer";


const Home = () => {
    const data = useLoaderData()
    const handleView = () => {
        const cart = document.querySelector('.cart-container');
        cart.classList.remove('h-[450px]')
        document.getElementById('viewAll-btn').classList = 'hidden'
    }
    console.log(data)
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <IconSection></IconSection>
            <SectionTitle title='Meet Our Legendes' subtitle='Legends are not born; they are forged through the fire of passion, dedication, and a relentless pursuit of excellence.'></SectionTitle>
            <Legend></Legend>
            <SectionTitle title='Our Honorable Chefs' subtitle='Legends are not born; they are forged through the fire of passion, dedication, and a relentless pursuit of excellence.'></SectionTitle>
            <section>
                <div className='cart-container grid grid-cols-3 overflow-hidden h-[450px] mt-52'>
                    {
                        data.map(details => <ChefCart key={details._code} data={details}></ChefCart>)
                    }

                </div>
                <div className='text-center'>
                    <button id='viewAll-btn' onClick={handleView} style={{ borderBottom: '2px solid white' }} className="btn btn-outline text-orange-500 border-none px-10 mt-10">View All Chefs</button>
                </div>
            </section>
            <Extra></Extra>
            <Subscibe></Subscibe>
            <Footer></Footer>
        </div>
    );
};

export default Home;