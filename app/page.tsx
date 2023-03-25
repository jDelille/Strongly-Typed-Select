'use client'
import { Book, GenericSelect, Movie } from './Select';

export default function Home() {
	const books = [
		{
			id: 'bookId',
			title: 'book1',
			author: 'author',
		},
    {
			id: 'bookId',
			title: 'book2',
			author: 'author',
		},
    {
			id: 'bookId',
			title: 'book3',
			author: 'author',
		},
	];

	const movies = [
		{
			id: 'movieId',
			title: 'movie1',
			releaseDate: 'release date',
		},
    {
			id: 'movieId',
			title: 'movie2',
			releaseDate: 'release date',
		},
    {
			id: 'movieId',
			title: 'movie3',
			releaseDate: 'release date',
		},
	];

	return (
		<main>
			<GenericSelect<Book>
				onChange={(value) => console.log(value.author)}
				values={books}
			/>

			<GenericSelect<Movie>
				onChange={(value) => console.log(value.releaseDate)}
				values={movies}
			/>
		</main>
	);
}
