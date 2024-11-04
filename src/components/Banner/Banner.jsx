import BookImg from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-200 max-w-6xl mx-auto">
            <div className="hero-content flex-col lg:flex-row-reverse gap-24">
                <img
                    src={BookImg}
                    className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold my-8">Box Office News!</h1>
                   
                    <button className="btn bg-lime-500 text-white font-semibold">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;