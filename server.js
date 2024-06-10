const jsonServer = require('json-server');
const auth = require('json-server-auth');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const rules = auth.rewriter({
  users: 640,
  blogs: 660,
});

server.db = router.db;

server.use(middlewares);
server.use(rules);
server.use(auth);
server.use(router);
server.listen(7500, () => {
  console.log('JSON Server is running');
});
