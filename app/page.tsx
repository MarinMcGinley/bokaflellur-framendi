import { Book, BookList } from './types/zod';
import { get } from './lib/fetch';

const baseUrl = process.env.SERVER_URL;

const colors = [
  'red-100',
  'green-100',
  'amber-200',
  'blue-100',
  'cyan-400',
  'lime-200',
  'yellow-100',
  'fuchsia-400',
];

const randomColor = () => colors[Math.floor(Math.random() * colors.length)];

export default async function Home() {
  let bookSeries: (BookList & { books: Book[] })[] = [];
  try {
    bookSeries = await get<(BookList & { books: Book[] })[]>(
      `${baseUrl}/booklists`
    );
  } catch (error) {
    console.error(error);
  }
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h1 className='text-xl mb-10'>Bókaflellur og fleiri lúðar</h1>
      {bookSeries.map((bookList) => (
        <section key={bookList.id} className='flex flex-col items-center '>
          <h2 className='text-base'>{bookList.name}</h2>
          <p className='text-xs'>{bookList.description}</p>
          <ul className='flex flex-wrap justify-center my-4'>
            {bookList.books.map((book) => (
              <li
                key={book.id}
                className={`flex flex-1 flex-col items-center border border-2 border-${randomColor()} rounded-sm p-4 gap-2 m-2 min-w-52`}
              >
                <h3 className='text-base'>{book.title}</h3>
                <p className='text-xs'>{book.author}</p>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </main>
  );
}
