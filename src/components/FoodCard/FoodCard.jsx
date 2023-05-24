
const FoodCard = ({item}) => {
    const {name,image, recipe, price}= item;

    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure><img src={image} alt="food" /></figure>
            <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">${price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-outline bg-gray-200 border-0  border-b-4 border-yellow-600 text-yellow-600 mt-4">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;