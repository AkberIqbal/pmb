module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {                                 // Task
            dist: {     
              files: {
                'app/app.css':'app/app.scss'
              }
         
            }
        },
        cssmin: {
            minify: {
                options: {
                    banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
                },
                expand: true,
                src: ['app/*.css', 'src/!*.min.css'],
                dest: 'dist/',
                ext: '.css'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'app/app.js',
                dest: 'dist/src/script.js'
            }
        },
        processhtml: {
            dist: {
                options: {
                    process: true,
                    data: {
                        title: 'Akber Iqbal',
                        message: 'This is production distribution'
                    }
                },
                files: {
                    'dist/index.html': ['app/index.html']
                }
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'dist/index.html': 'app/index.html',
                    'dist/bar.html': ['app/bar.html']
                }
            }
        },

        clean: ['dist*//*.min.*']
    });

    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-processhtml');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.registerTask('default', ['sass', 'cssmin', 'uglify', 'processhtml', 'htmlmin', 'clean']);
    grunt.registerTask('build', ['sass', 'cssmin', 'uglify', 'htmlmin', 'processhtml']);
};