var nodePandoc = require('node-pandoc');
var src, args, callback;

src = './sample.tex';

args = ['-f', 'tex', '--standalone', '-t', 'html', '-o', './document.html'];

// Set your callback function
callback = function (err, result) {

  if (err) {
    console.error('Oh Nos: ', err);
  }
  return result;
};

// Call pandoc
nodePandoc(src, args, callback);
