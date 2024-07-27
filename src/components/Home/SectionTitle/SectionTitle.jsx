const SectionTitle = ({title, subtitle}) => {
    return (
       <section className="mt-10">
         <div className="text-center border-b-4 border-orange-500 rounded-sm w-[700px] mx-auto pb-5">
            <h2 className="text-4xl pb-5">{title}</h2>
            <p>{subtitle}</p>
        </div>
       </section>
    );
};

export default SectionTitle;