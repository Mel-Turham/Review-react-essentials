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
			<img
				src='../src/assets/images/Mega-Menu-Vehicles-Model-S.png'
				alt='tesla images'
			/>
			<h2>Tesla Model X</h2>
			<h4>Author Car</h4>
		</article>
	);
};
