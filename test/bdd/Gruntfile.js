'use strict';

module.exports = function(grunt) {
    grunt.initConfig({
        cucumberjs: {
            src: 'features',
            options: {
                // tags: '@current',
                format: 'json',
                // steps: 'features/step_definitions'
            }
        }
    });

    grunt.loadNpmTasks('grunt-cucumber');
    grunt.registerTask('default', ['cucumberjs']);
}