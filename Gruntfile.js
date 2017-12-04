module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      all_custom_scripts: {
        src: ['js/ng-tax-app.js']
      },
    },

    jslibscopy: {
      jslibs: {
        options: {
          srcPrefix: 'bower_components',
          destPrefix: 'build/lib/js'
        },
        files: {
          'jquery.js': 'jquery/dist/jquery.js',
          'angular/angular.min.js': 'angular/angular.min.js',
          'angular/angular.min.js.map': 'angular/angular.min.js.map',
          'angular/angular-route.min.js': 'angular-route/angular-route.min.js',
          'angular/angular-route.min.js.map': 'angular-route/angular-route.min.js.map',
          'angular/angular-locale_no.js': 'angular-i18n/angular-locale_no.js',
          'angular/angular-spinner.js': 'bower_components/angular-spinner/angular-spinner.js',
          'responsive-nav.min.js': 'responsive-nav/responsive-nav.min.js',
          'bootstrap.min.js': 'bower_components/bootstrap/dist/js/bootstrap.min.js',
          'bootstrap3-typeahead.min.js': 'bower_components/bootstrap3-typeahead/bootstrap3-typeahead.min.js',
          'spin.js': 'bower_components/spin.js/spin.js',
        }
      },
      partials: {
        options: {
          srcPrefix: 'partials',
          destPrefix: 'build/partials'
        },
        files: {
          'home.html': 'home.html'
        }
      },
      icons: {
        options: {
          srcPrefix: 'icons',
          destPrefix: 'build/icons'
        },
        files: {
          'responsivenav.eot': 'responsivenav.eot',
          'responsivenav.svg': 'responsivenav.svg',
          'responsivenav.ttf': 'responsivenav.ttf',
          'responsivenav.woff': 'responsivenav.woff',
        }
      },
      indexhtml: {
        options: {
          srcPrefix: '',
          destPrefix: 'build'
        },
        files: {
          'index.html': 'index-prod.html',
        }
      }
    },

    concat: {
      ngTaxApp: {
        src: ['js/angular/app.js',
        'js/angular/controllers/homeController.js',
        'js/angular/services/storageService.js',
        'js/angular/services/taxService.js',
        'js/angular/services/configService.js',
        'js/angular/directives.js',
        'js/angular/app.bootstrap.js'],
        dest: 'js/ng-tax-app.js',
      }
    },

    cssmin: {
      combine: {
        options: {
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd HH:mm:ss") %> */\n'
        },
        files: {
          'build/css/site.min.css': ['css/site.css', 'css/nav.css'],
          'build/lib/css/responsive-nav.min.css': ['bower_components/responsive-nav/responsive-nav.css'],
          'build/lib/bootstrap.min.css': ['bower_components/bootstrap/dist/css/bootstrap.min.css']
        }
      }
    },

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd HH:mm:ss") %> */\n'
      },
      build: {
        src: 'js/ng-tax-app.js',
        dest: 'build/js/ng-tax-app.min.js'
      }
    },

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-jslibscopy');

  grunt.registerTask('default', ['concat', 'cssmin', 'uglify']);
  grunt.registerTask('build', ['bowercopy', 'concat', 'cssmin', 'uglify']);
  grunt.registerTask('hint', ['concat', 'jshint']);

};
