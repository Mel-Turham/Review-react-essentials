const books = [
	{
		id: 1,
		author: 'Mel turham',
		title: 'Tesla Model X',
		img: '../src/assets/images/Mega-Menu-Vehicles-Model-X.png',
		alt: 'tesla image model X',
	},
	{
		id: 2,
		author: 'Houthou william',
		title: 'Tesla Model S',
		img: '../src/assets/images/Mega-Menu-Vehicles-Model-S.png',
		alt: 'tesla image model S',
	},
];

// const firstBook = {
// 	author: 'Mel turham',
// 	title: 'Tesla Model X',
// 	img: '../src/assets/images/Mega-Menu-Vehicles-Model-X.png',
// 	alt: 'tesla image model X',
// };

// const secondBook = {
// 	title: 'Tesla Model S',
// 	author: 'Houthou william',
// 	img: '../src/assets/images/Mega-Menu-Vehicles-Model-S.png',
// 	alt: 'tesla image model S',
// };
const App = () => {
	const getBook = (id) => {
		const book = books.find((book) => book.id === id);

		console.log(book);
	};
	return (
		<section className='booklist'>
			{/* <ExempleEvent /> */}
			{books.map((book, index) => (
				<Book
					key={index + 1}
					// img={book.img}
					// title={book.title}
					// alt={book.alt}
					// author={book.author}
					// book={book}
					{...book}
					getBook={() => getBook(book.id)}
				/>
			))}
		</section>
	);
};
// Exemple event in react js (onChange and Onclick)
// const ExempleEvent = () => {
// 	const handleFormInput = (e) => {
// 		e.preventDefault();
// 		console.log(e);
// 	};
// 	const handleInputChange = (e) => {
// 		console.log('Input form change!');
// 		console.log(`Input name, ${e.target.name}`);
// 		console.log(`Input name, ${e.target.value}`);
// 	};

// 	const handleButtonOnclick = () => {
// 		alert('Button has been clicked!');
// 	};
// 	return (
// 		<section>
// 			<form onSubmit={handleFormInput}>
// 				<h1>Typical Form</h1>
// 				<input
// 					type='text'
// 					name='exemple'
// 					// onchange event in the input form
// 					onChange={handleInputChange}
// 					style={{ margin: '1rem 0' }}
// 				/>
// 			</form>
// 			{/* click event in the button */}
// 			<button onClick={handleButtonOnclick}>Click me</button>
// 		</section>
// 	);
// };

const Book = (props) => {
	const { id, img, title, alt, author, children, getBook } = props;
	// const { img, title, alt, author, children } = props.book;

	return (
		<article className='book'>
			<img src={img} alt={alt} />
			<h2>{title}</h2>
			<h4>{author.toUpperCase()}</h4>
			<button onClick={getBook}>Display Book</button>
			{children}
		</article>
	);
};

export default App;
