import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList } from "../../Utility/addToDb";


const BookDetail = () => {
    const {bookId} =useParams();
   const data = useLoaderData();
   const id = parseInt (bookId);
//    console.log(typeof bookId , typeof id, typeof data[0].bookId);

    const book = data.find(book => book.bookId === id);
    // console.log(book);

    const {bookId: currentBookId, image} = book;

    const handleMarkAsRead = (id) => {
        addToStoredReadList(id);
    }

    return (
        <div className="max-w-6xl mx-auto my-12">
            <h2>Book Details: {bookId}</h2>
            <img className="w-36 my-3" src={image} alt="" />
            <button onClick={() => handleMarkAsRead(bookId)} className="btn btn-outline mr-4 btn-accent">Mark As Read</button>
            <button className="btn btn-accent">Add to Wish List</button>
        </div>
    );
};

export default BookDetail;