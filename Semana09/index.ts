const server = Bun.serve({
	port: 3000,
	routes: {
		"/": () => new Response("Seja muito bem vindo ao blog!\n"),
		"/api/status": () => Response.json({
			ok: true,
			runtime: "bun",
			hora: new Date().toISOString(),
		}),
	},
});
console.log(`Ouvindo em ${server.url}`);
