const Book = (props) => {
	const { id, img, title, alt, author, children, getBook } = props;
	// const { img, title, alt, author, children } = props.book;

	return (
		<article className='book'>
			<img src={img} alt={alt} />
			<h2>{title}</h2>
			<h4>{author.toUpperCase()}</h4>
			{children}
		</article>
	);
};

export default Book;
