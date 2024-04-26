const App = () => {
	return (
		<section className='booklist'>
			<Book />
			<Book />
			<Book />
		</section>
	);
};

export default App;

const Book = () => {
	return (
		<article className='book'>
			<Image />
			<Title />
			<Author />
		</article>
	);
};

const Image = () => (
	<>
		<img
			src='../src/assets/images/Mega-Menu-Vehicles-Model-S.png'
			alt='tesla images'
		/>
	</>
);

const Title = () => <h2>Tesla Model X</h2>;

const Author = () => {
	return <p>Author Car</p>;
};
