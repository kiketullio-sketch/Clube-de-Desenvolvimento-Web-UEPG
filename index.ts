const server = Bun.serve({
	port: 3000,
	routes: {
		"/": () => new Response("Blog no ar!\n"),
		"/api/status": () => new Response.json({
			ok: true,
			runtime: "bun",
			hora: new Date().toISOString(),
		}),
	},
});
console.log(`Ouvindo em ${server.url}`);
