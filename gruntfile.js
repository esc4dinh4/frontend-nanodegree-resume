module.exports = function(grunt) {

    // 1. All configuration goes here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),


            watch: {
                  scripts: {
                      files: ['js/*.js'],
                      tasks: ['uglify'],
                      options: {
                          spawn: false,
                      },
                  }
              },

            uglify: {
              options: {
                manage: false
              },
                  my_target: {
                    files: [{
                      expand: true,
                      cwd: 'js/',
                      src: '**/*.js',
                      dest: 'js/build/'
                    }]
                }
            },

            imagemin: {
              dynamic: {
                  files: [{
                      expand: true,
                      cwd: 'images/',
                      src: ['**/*.{png,jpg,gif}'],
                      dest: 'images/build/'
                  }]
              }
          }


    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.

};
