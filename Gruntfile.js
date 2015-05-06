module.exports = function(grunt){
	
	require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // Grunt express - our webserver
		// https://github.com/blai/grunt-express
		express: {
		    all: {
		        options: {
		            bases: ['./demoProject'],
		            port: 80,
		            hostname: "localhost",
		            livereload: true,
					server: './server/main'
		        }
		    }
		},
		
		// grunt-open will open your browser at the project's URL
		// https://www.npmjs.org/package/grunt-open
		open: {
		    all: {
		        path: 'http://localhost/index.html'
		    	}
		},
		//https://github.com/yaniswang/HTMLHint/wiki/Rules
		//http://jshint.com/docs/#options
		//https://github.com/CSSLint/csslint/wiki/Rules		
		htmlhint: {
		    build: {
		        options: {
		           
		            "tagname-lowercase": true,
					"attr-lowercase": true,
					"attr-value-double-quotes": true,
					"attr-value-not-empty": true,
					"attr-no-duplication": true,
					"doctype-first": true,
					"tag-pair": true,
					"tag-self-close": false,
					"spec-char-escape": true,
					"id-unique": true,
					"src-not-empty": true,
					"head-script-disabled": false,
					"img-alt-require": true,
					"doctype-html5": true,
					"id-class-value": "dash",
					"style-disabled": true,
					"space-tab-mixed-disabled": true,
					"id-class-ad-disabled": true,
					"href-abs-or-rel": true,
					"attr-unsafe-chars": true

		        },
		        src: 'demoProject/html/*.html'
		    }
		},

			
		// grunt-watch will monitor the projects files
		// https://github.com/gruntjs/grunt-contrib-watch
		watch: {
		    html: {
		        files: 'demoProject/html/*.html',
		        options: {
                livereload: true
        		},
		        tasks: ['htmlhint']
		    	},

		//    	js: {
		//        files: ['demoProject/js/*.js'],
		//        tasks: ['uglify']
	    //	}

	   		},
			
			bower_concat: {
				all: {
					dest: 'demoProject/js/bower.js',
					cssDest: 'demoProject/css/bower.css',

					mainFiles: {
						'base': 'demoProject/js/base.js',
						'plugins': 'demoProject/js/plugins.js',
						'css': ['demoProject/css/normalize.css','demoProject/css/main.css','demoProject/css/base.css']
								}
					}
			},
			
			uglify: {
				   bower: {
					options: {
					  mangle: true,
					  compress: true
					},
					files: {
					  'demoProject/js/bower.min.js': 'demoProject/js/bower.js',
					  'demoProject/css/bower.min.css': 'demoProject/css/bower.css'
					}
				  }
				}

	   		
		



    });

 //   grunt.registerTask('default', ['htmlhint', 'bower_concat', 'uglify', 'express',  'open',  'watch']);
	grunt.registerTask('default', ['htmlhint', 'express',  'open',  'watch']);
};
