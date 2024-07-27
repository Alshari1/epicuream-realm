import foodIcon from './../../../assets/images/icons/chef1.png'
import chefIcon from './../../../assets/images/icons/chef.png'
import dishIcon from './../../../assets/images/icons/dish-removebg-preview.png'
import healthIcon from './../../../assets/images/icons/medi.webp' 
const IconSection = () => {
    return (
        <section className='flex gap-5 mt-48 mb-36'>
            <div className="card w-80 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={foodIcon} alt="Shoes" className="rounded-xl h-[80px]" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Fresh Food</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                </div>
            </div>
            <div className="card w-80 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={chefIcon} alt="Shoes" className="rounded-xl h-[80px]" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Experienced Chef</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                </div>
            </div>
            <div className="card w-80 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={dishIcon} alt="Shoes" className="rounded-xl h-[80px]" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">A varity of Dishes</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                </div>
            </div>
            <div className="card w-80 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={healthIcon} alt="Shoes" className="rounded-xl h-[80px]" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Health Vigilant</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                </div>
            </div>
        </section>
    );
};

export default IconSection;