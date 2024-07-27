import legend1 from '../../../assets/images/chefs/clemens.webp'
import legend2 from '../../../assets/images/chefs/julia.jpeg'
const Legend = () => {
    return (
        <section>
            <div>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src={legend1} className="max-w-sm rounded-lg shadow-2xl w-[340px]" />
                        <div className='text-end'>
                            <h1 className="text-5xl font-bold">Clemens Wilmenrod</h1>
                            <p className="py-6"> _ Clemens Wilmenrod (July 24, 1906 - April 12, 1967) was the first German television cook. His pseudonym was derived from the municipality Willmenrod in the Westerwald region, where he was born as Carl Clemens Hahn.[1] Wilmenrod is considered the inventor of Toast Hawaii, "Arabian Horseman's Delight" (mincemeat with onions) and "stuffed strawberry" (strawberry stuffed with an almond)</p>
                           
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="hero min-h-screen bg-base-200 relative -top-20">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src={legend2} className="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-5xl font-bold">pioneer julia child</h1>
                            <p className="py-6"> _ Julia Child Julia Child was a beloved American icon who pioneered an entire genre of cooking shows and taught a generation of food lovers that cooking can be easy and enjoyable In the 1970s and 1980s, she was the star of numerous television programs, including Julia Child & Company, Julia Child & More Company and Dinner at Julia's. For the 1979 book Julia Child and More Company, she won a National Book Award in category Current Interest.[33] In 1980, Child started appearing regularly on ABC's Good Morning America.[34]</p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Legend;