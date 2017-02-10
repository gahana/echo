'use strict';

module.exports = function(grunt) {
    grunt.initConfig({
        cucumberjs: {
            src: 'features',
            options: {
                // tags: '@current',
                format: 'pretty',
                steps: 'features/step_definitions'
            }
        }
    });

    grunt.loadNpmTasks('grunt-cucumber');
    grunt.registerTask('tests', ['cucumberjs']);
}