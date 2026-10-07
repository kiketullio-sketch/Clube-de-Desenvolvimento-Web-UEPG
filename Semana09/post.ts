import type { Post } from "./types";
const posts: Post[] = [];

export function criarPost(titulo: String, conteudo: String): Post {
	const novo = {
		id: posts.length + 1, titulo, conteudo,
		criadoEm: new Date().toISOString()
	};
	posts.push(novo);
	return novo;
};

export function getPosts(): Post[] {
	return posts;
}

export function getById(id: number): Post | undefined {
	return posts.find((p) => p.id === id);
};
