import { Link } from "react-router-dom";


const Book = ({ book }) => {
    const { bookId, image, bookName, author, tags, category, rating, totalPages } = book;
    return (
        <Link to={`/books/${bookId}`}>
            <div className="card bg-base-100 w-96 shadow-xl p-6">
                <figure className="bg-gray-200 py-6 rounded-2xl">
                    <img
                        src={image}
                        className="h-[166px]"
                        alt={bookName} />
                </figure>
                <div className="card-body">
                    <div className="flex flex-start gap-6">
                        {
                            tags.map((tag, index) => <button 
                            key={index}
                            className="btn btn-xs
                             bg-green-100 text-green-500">{tag}</button>)
                        }
                    </div>
                    <h2 className="card-title">
                        {bookName} </h2>
                    <p>By: {author}</p>
                    <div className="border-t-2 border-dashed my-2"></div>
                    <div className="card-actions justify-between">
                        <div className="badge badge-outline">{category}</div>
                        <div>{rating}</div>
                        <div>{totalPages}</div>
                        <div className="rating">
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" defaultChecked />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                        </div>
                    </div>
                </div>
            </div>

        </Link>
    );
};

export default Book;