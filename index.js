const MarkovChain = require('markovchain').MarkovChain;

const quotes = new MarkovChain({
	files: `./data.txt`
});

for (let i = 0; i < 5; i++) {
	quotes
		.start('The')
		.end(12)
		.process((err, string) => console.log(string));
}