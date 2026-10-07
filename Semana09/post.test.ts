import { expect, test } from "bun:test";
import { criarPost, getPosts, getById } from "./post";
test("cria um usuario com id e criadoEm", () => {
	const post = criarPost("Meu primeiro post", "Ola mundo!");

	expect(post.titulo).toBe("Meu primeiro post");
	expect(post.id).toBeTruthy();
	expect(post.criadoEm).toBeTruthy();
});

test("Lista com todos os posts", () => {
	criarPost("Teste", "Esse é um teste de post");
	const posts = getPosts().length;

	expect(posts).toBe(2);
});

test("Busca por um ID", () => {
	criarPost("teste 1", "Lorem");
	criarPost("teste 2", "Lorem");
	criarPost("teste 3", "Lorem");

	const post = getById(4);

	expect(post.titulo).toBe("teste 2");
});
