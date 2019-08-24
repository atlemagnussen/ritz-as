module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),

        copy: {
            angular: {
                files: [
                    {expand: true, flatten: true, src: ["node_modules/angular/angular.min.*"], dest: "app/lib/", filter: "isFile"},
                    {expand: true, flatten: true, src: ["node_modules/angular-route/angular-route.min.*"], dest: "app/lib/", filter: "isFile"},
                    {expand: true, flatten: true, src: ["node_modules/moment/min/moment.min.js"], dest: "app/lib/", filter: "isFile"},
                    {expand: true, flatten: true, src: ["node_modules/moment/locale/nb.js"], dest: "app/lib/", filter: "isFile"}
                ]
            }
        }

    });

    grunt.loadNpmTasks("grunt-contrib-copy");

    grunt.registerTask("default", ["copy"]);
    grunt.registerTask("build", ["copy"]);

};
