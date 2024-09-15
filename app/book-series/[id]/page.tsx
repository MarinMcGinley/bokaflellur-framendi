import { get } from '@/app/lib/fetch';
import { Book, BookList } from '@/app/types/zod';

const colors = [
  'border-red-100',
  'border-green-100',
  'border-amber-200',
  'border-blue-100',
  'border-cyan-400',
  'border-lime-200',
  'border-yellow-100',
  'border-fuchsia-400',
];

const randomColor = () => colors[Math.floor(Math.random() * colors.length)];

const BookSeries = async ({ params }: { params: { id: string } }) => {
  let bookSeries: BookList & { books: Book[] } = {} as BookList & {
    books: Book[];
  };
  try {
    bookSeries = await get<BookList & { books: Book[] }>(
      `booklists/${params.id}`
    );
  } catch (error) {
    console.error(error);
  }
  return (
    <div className='flex flex-col items-center mt-20 mx-20'>
      <h2 className='text-base'>{bookSeries.name}</h2>
      <p className='text-xs'>{bookSeries.description}</p>
      <ul className='flex flex-wrap justify-center my-20'>
        {bookSeries.books.map((book) => (
          <li
            key={book.id}
            className={`flex flex-1 flex-col items-center justify-center ${randomColor()} border-2  rounded-sm p-4 gap-2 m-2 min-w-80 min-h-40 text-center`}
          >
            <h3 className='text-base'>{book.title}</h3>
            <p className='text-xs'>{book.author}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookSeries;
