const http = require('http');
const os = require("os");

var growing_value = 0;

function buildReply()
{
	// grow by a random value on each call
	// reset_value is reset to zero each time anf
	// growing_value just grows by the same amount.
	let reset_value = 10 + (Math.random() * 100);
	growing_value += reset_value;
	let v =
	'# HELP growing_value A value that always grow\n' +
	'# TYPE growing_value counter\n' +
	'# test1\n' +
	`growing_value_total   ${growing_value}\n` +
	'\n' +
	'# HELP reset_value A value that reset\n' +
	'# TYPE reset_value counter\n' +
	'# test1\n' +
	`reset_value_total   ${reset_value}\n`;
	return v;
}

const server = http.createServer();
server.on('request', (req, res) => {
  
  const route = `${req.method}:${req.url}`;
  console.log(`route: ${route}`);

  res.setHeader("Content-Type", "text/plain");

  res.writeHead(200);
  res.end(buildReply());
});

console.log(`server is listening`);
server.listen(9100);
