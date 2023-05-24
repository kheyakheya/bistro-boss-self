import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import saladImg from '../../../assets/home/slide1.jpg'

const Recomend = () => {
    return (
        <section>
            <SectionTitle subHeading={'Should Try'} heading={'chef recommends'}></SectionTitle>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 place-items-center'>
                <div className="card w-80  bg-base-100 shadow-xl">
                     <img className='h-64'  src={saladImg} alt="salad" />
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                            <button className="myButton">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card w-80  bg-base-100 shadow-xl">
                     <img className='h-64'  src={saladImg} alt="Shoes" />
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                            <button className="myButton">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card w-80  bg-base-100 shadow-xl">
                     <img className='h-64'  src={saladImg} alt="Shoes" />
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                            <button className="myButton">Buy Now</button>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    );
};

export default Recomend;