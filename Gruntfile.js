module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    /* Watch packages */
    watch: {
      less: {
        files: [ './src/**/*' ],
        tasks: ['less']
      },

      css: {
        files: [ './build/*' ],
        tasks: ['cssmin']
      }
    },

    /* Uglify js */
    uglify: {
      options: {
        mangle: false
      },
      combinejs: {
        files: {
          './theme/assets/js/vendor.js': [
            './bower_components/modernizr/modernizr.js',
            './bower_components/prism/prism.js',
          ],

          // /* THIS ONLY FOR DEV PURPOSES */
          // '../datyayu.xyz/content/themes/yayul/assets/js/vendor.js':  [
          //   './bower_components/modernizr/modernizr.js',
          //   './bower_components/prism/prism.js',
          //   './bower_components/prism/components/prism-javascript.js',
          //   './bower_components/prism/components/prism-markup.js',
          //   './src/scripts/jsx-support.js'
          // ],
        }
      }
    },

    /* Compile less */
    less: {
      components: {
        files: {
          './build/compiled_styles.css': [
            './bower_components/font-awesome/css/font-awesome.min.css',
            './src/entry.less',
          ]
        }
      },

      options: {
        expand: true,
        paths: [
          './src',
        ]
      }
    },

    /* Minify styles */
    cssmin: {
      combine: {
        files: {
          './theme/assets/css/style.css': [
            './bower_components/normalize-css/normalize.css',
            './bower_components/prism/themes/prism-okaidia.css',
            './build/compiled_styles.css',
          ],

          // /* THIS ONLY FOR DEV PURPOSES */
          // '../ghost/content/themes/yayul/assets/css/style.css':  [
          //   './bower_components/normalize-css/normalize.css',
          //   './bower_components/prism/themes/prism-okaidia.css',
          //   './build/compiled_styles.css',
          // ],
        }
      }
    },

  });


  // Load grunt plugins.
  grunt.loadNpmTasks('assemble-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

};
