interface Post {
	title: String,
	subtitle: String,
	id: String,
	author: String,
	criadoEm: Date;		
	text: String,
};

export function criarPost(title: String, text: String) {
	let post = {
		titulo: title,
		texto: text,
		id: 1,
		criadoEm: new Date(),
	};
	return post;
};
