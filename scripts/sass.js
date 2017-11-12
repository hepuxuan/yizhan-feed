const sass = require('node-sass');
const fs = require('fs');
const mkdirp = require('mkdirp');
const getDirName = require('path').dirname;

function compileSass(options = {}) {
  // set default options
  options = Object.assign({
    style: 'expanded',
  }, options);

  // render the result
  const result = sass.renderSync({
    file: options.src,
    outputStyle: options.style,
  });

    // write the result to file
  mkdirp(getDirName(options.dest), (err) => {
    if (err) return cb(err);
    fs.writeFile(options.dest, result.css);
  });

  // log successful compilation to terminal
  console.log(` ${options.dest} built.`);
}

// Minified
compileSass({
  src: 'scss/index.scss',
  dest: 'public/stylesheets/index.css',
  style: 'compressed',
});
