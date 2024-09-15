import { Book, BookList } from './types/zod';
import { get } from './lib/fetch';
import Link from 'next/link';

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

export default async function Home() {
  let bookSeries: (BookList & { books: Book[] })[] = [];
  try {
    bookSeries = await get<(BookList & { books: Book[] })[]>(`booklists`);
  } catch (error) {
    console.error(error);
  }

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h1 className='text-xl mb-10'>Bókaflellur og fleiri lúðar</h1>
      {bookSeries.map((bookList) => (
        <section key={bookList.id} className='flex flex-col items-center '>
          <Link href={`/book-series/${bookList.id}`}>
            <h2 className='text-base'>{bookList.name}</h2>
            <p className='text-xs'>{bookList.description}</p>
          </Link>
          <ul className='flex flex-wrap justify-center my-4'>
            {bookList.books.map((book) => (
              <li
                key={book.id}
                className={`flex flex-1 flex-col items-center ${randomColor()} border-2  rounded-sm p-4 gap-2 m-2 min-w-52 text-center`}
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
