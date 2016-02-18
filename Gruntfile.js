module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    /* Watch packages */
    watch: {
      less: {
        files: [ './src/*' ],
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
          './theme/assets/js/vendor.min.js': [
            'bower_components/modernizr/modernizr.js',
          ],

          /* THIS SHOULD BE DELETED BEFORE COMMITTING */
          '../datyayu.xyz/content/themes/yayul/assets/js/vendor.js':  [
            'bower_components/modernizr/modernizr.js',
          ],
        }
      }
    },

    /* Compile less */
    less: {
      components: {
        files: {
          './build/compiled_styles.css': [
            './src/entry.less',
          ]
        }
      },

      options: {
        expand: true,
        paths: [
          'bower_components/lesshat',
          './src',
        ]
      }
    },

    /* Minify styles */
    cssmin: {
      combine: {
        files: {
          './theme/assets/css/style.css': [
            'bower_components/normalize-css/normalize.css',
            './build/compiled_styles.css',
          ],

          /* THIS SHOULD BE DELETED BEFORE COMMITTING */
          '../datyayu.xyz/content/themes/yayul/assets/css/style.css':  [
            'bower_components/normalize-css/normalize.css',
            './build/compiled_styles.css',
          ],
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
