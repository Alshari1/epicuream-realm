import chef from './../../assets/images/banner/3d-male-chef-cartoon-character-passionate-about-food-generative-ai_911330-1993-removebg-preview.png'
// import food1 from './../../assets/images/food/food-1.png'
const Extra = () => {
    return (
        <div className="bg-slate-800 px-28 py-5 mx-auto mt-64 " style={{display:'grid', gridTemplateColumns:'3fr 4fr'}}>
            <div className="flex flex-col items-center justify-center">
                <h2 className='text-3xl text-center mb-10'>A chef is a culinary artist who crafts flavors, textures, and <br /> experiences into delicious works of edible art.</h2>
                <h2 className="mb-10 text-justify">_Chef is more than a title; it's a calling, a passion, and a way of life. Behind every delectable dish, there's a chef's unwavering dedication, creativity, and commitment to the art of cooking. A chef is not just a cook; they are the architects of flavor, the maestros of the kitchen, and the storytellers of taste.</h2>
                <h2 className='text-justify'>
                In essence, a chef is a guardian of tradition, an explorer of innovation, and a guardian of the culinary heritage. They embody the spirit of craftsmanship, transforming raw ingredients into edible poetry that resonates with the soul. So, the next time you savor a beautifully plated dish, remember that it's a testament to the artistry and dedication of the chef who made it possible.
                </h2>
            </div>
            <div className='flex justify-end'>
                <img className='' src={chef} alt="" />
                {/* <img src={food1} alt="" /> */}
            </div>
        </div>
    );
};

export default Extra;