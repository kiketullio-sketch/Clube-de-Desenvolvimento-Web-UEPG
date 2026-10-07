import { expect, test } from "bun:test";
import { criarPost } from "./post";
test("cria um usuario com id e criadoEm", () => {
	const post = criarPost("Meu primeiro post", "Ola mundo!");

	expect(post.titulo).toBe("Meu primeiro post");
	expect(post.id).toBeTruthy();
	expect(post.criadoEm).toBeTruthy();
});
