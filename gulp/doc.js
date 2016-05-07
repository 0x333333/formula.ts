'use strict';
//
// Generate documentation from TypeScript sources
//

var typedoc = require("gulp-typedoc"),
	path = require('path');

module.exports = function (gulp) {

	var cfg = gulp.cfg;

	gulp.task("typedoc", function () {
		return gulp
			.src([cfg.fileset.ts])
			.pipe(typedoc({
				// TypeScript options (see typescript docs)
				module: "commonjs",
				target: "es5",
				includeDeclarations: true,

				// Output options (see typedoc docs)
				out: cfg.dir.doc,
				json: path.join(cfg.dir.doc, cfg.pkg.name + '.json'),

				// TypeDoc options (see typedoc docs)
				name: cfg.pkg.name,
				ignoreCompilerErrors: false,
				version: true
			}));
	});
};


