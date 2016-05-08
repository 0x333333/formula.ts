'use strict';

var path = require('path');

var cfg = {
	dir: {
		src: 'src',
		dist: 'dist',
		test: 'test',
		doc: 'doc'
	},
	file: {},
	fileset: {}
};

cfg.fileset.ts = path.join(cfg.dir.src, '**', '*.ts');
cfg.fileset.tsTest = path.join(cfg.dir.test, '**', '*.ts');

// files watched during the build
cfg.fileset.watch = [
];


// The test specs; override this locally to run a single test suite
cfg.fileset.test = [
	path.join(cfg.dir.test, '**', '*.js')
];

cfg.jshint = {
	rcfile: '.jshintrc',
	reporter: 'default'
};

cfg.tsConfig = {
	sortOutput: true,
	module: "commonjs",
	removeComments: true,
	target: 'ES5'
};

module.exports = cfg;

