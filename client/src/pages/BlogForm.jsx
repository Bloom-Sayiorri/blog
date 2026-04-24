export default function BlogForm() {
	return (
		<div className="text-center">
			<h3 className="text-bold text-2xl">Add New Blog</h3>
			<form className="flex flex-col">
				<label className="sr-only" htmlFor="title">
					Title
				</label>
				<input
					type="text"
					id="title"
					name="title"
					placeholder="Title"
					className=""
				/>
				<label className="sr-only" htmlFor="imageUrl">
					Image
				</label>
				<input
					type="text"
					id="imageUrl"
					name="imageUrl"
					placeholder="Image"
					className=""
				/>
				<label className="sr-only" htmlFor="rating">
					Rating
				</label>
				<input
					type="text"
					id="rating"
					name="rating"
					placeholder="Rating"
					className=""
				/>
				<label className="sr-only" htmlFor="content">
					Content
				</label>
				<input
					type="text"
					id="content"
					name="content"
					placeholder="Content"
					className=""
				/>
				<label className="sr-only" htmlFor="userId">
					UserId
				</label>
				<input
					type="text"
					id="userId"
					name="userId"
					placeholder="UserId"
					className=""
				/>
				<label className="sr-only" htmlFor="categoryId">
					CategoryId
				</label>
				<input
					type="text"
					id="categoryId"
					name="categoryId"
					placeholder="CategoryId"
					className=""
				/>
                <button type="submit" className="submit">Submit</button>
			</form>
		</div>
	);
}