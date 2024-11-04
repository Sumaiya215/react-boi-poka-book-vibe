import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList } from '../../Utility/addToDb';
import Book from '../Book/Book';

const ListedBooks = () => {
    const [readList, setReadList] = useState([]);
    const [sort, setSort] = useState('');
    const allBooks = useLoaderData();

    useEffect(() => {
        const storedReadList = getStoredReadList();
        const storedReadListInt = storedReadList.map(id => parseInt(id));
        console.log(storedReadList, storedReadListInt, allBooks);

        const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId));

        setReadList(readBookList);

    }, []);

    const handleSort = sortType => {
        setSort(sortType);
        // no of pages
    if(sortType === 'No of pages'){
        const sortedReadList = [...readList].sort((a,b) =>
            b.totalPages - a.totalPages);
        setReadList(sortedReadList);
    }

    if(sortType === 'Ratings'){
        const sortedReadList = [...readList].sort((a,b)=>
        a.rating -b.rating);
        setReadList(sortedReadList);
    }


    }

    return (
        <div className='max-w-6xl mx-auto mb-8'>
            <h3 className="text-3xl my-8 ">Listed Books: {readList.length}</h3>

            <div className="dropdown flex justify-center items-center mb-8">
                <div tabIndex={0} role="button" className="btn m-1 bg-lime-500 text-white">
                   {
                    sort ? `Sort by: ${sort}` : 'Sort by'
                   }
                    
                    </div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li onClick={() => handleSort('Ratings')}><a>Rating</a></li>
                    <li onClick={() => handleSort('No of pages')}><a>Number of pages</a></li>
                    <li><a>Publisher year</a></li>
                </ul>
            </div>

            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <h2 className='text-2xl'>Books I read</h2>
                </TabPanel>
                <TabPanel>
                    <h2 className='text-2xl'>My wish list</h2>
                </TabPanel>
            </Tabs>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    readList.map(book => <Book key={book.bookId} book={book}></Book>)
                }
            </div>


        </div>
    );
};

export default ListedBooks;