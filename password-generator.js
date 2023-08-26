var generator = require('generate-password');

var password = generator.generate({
	numbers: true,
    symbols: true,
});


console.log(password);