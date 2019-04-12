"use strict";

module.exports = function (grunt) {
    // Time how long tasks take. Can help when optimizing build times.
    require("time-grunt")(grunt);

    // Automatically load required Grunt tasks
    require("jit-grunt")(grunt, {
        useminPrepare: "grunt-usemin"
    });
    
    // Define the config for all the tasks
    grunt.initConfig({
        sass: {
            dist: {
                files: {
                    "css/styles.css": "css/styles.scss"
                }
            }
        },
        watch: {
           files: "css/*.scss",
           tasks: ["sass"] 
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        "css/*.css",
                        "*.html",
                        "js/*.js"
                    ]
                },
                options: {
                    watchTask: true,
                    server: {
                        baseDir: "./"
                    }
                }
            }
        },
        copy: {
            html: {
                files: [{
                    //for html
                    expand: true,
                    dot: true,
                    cwd: "./",
                    src: ["*.html"],
                    dest: "dist"
                }]
            },
            fonts: {
                files: [
                    {
                        //for font-awesome
                        expand: true,
                        dot: true,
                        cwd: "node_modules/font-awesome",
                        src: ["fonts/*.*"],
                        dest: "dist"
                    }
                ]
            }
        },
        clean: {
            build: {
                src: ["dist/"]
            }
        },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,                   // Enable dynamic expansion
                    cwd: "./",                      // Src matches are relative to this path
                    src: ["img/*.{png,jpg,gif}"],   // Actual pattersn to match
                    dest: "dist/"                   // Destination path prefix
                }]
            }
        },
        useminPrepare: {
            foo: {
                dest: "dist",
                src: ["contactus.html", "aboutus.html", "index.html"]
            },
            options: {
                flow: {
                    steps: {
                        css: ["cssmin"],
                        js: ["uglify"]
                    },
                    post: {
                        css: [{
                            name: "cssmin",
                            createConfig: function (context, block) {
                                let generated = context.options.generated;
                                    generated.options = {
                                        keepSpecialComments: 0, rebase: false
                                    };
                            }
                        }]
                    }
                }
            }
        }, 
        concat: {
            options: {
                separator: ";"
            },
            
            // dist config. is provided by useminPrepare
            dist: {}
        }, 
        uglify: {
            // dist config is provided by useminPrepare
            dist: {}
        },
        cssmin: {
            // dist config is provided by useminPrepare
            dist: {}
        },
        filerev: {
            options: {
                encoding: "utf8",
                algorithm: "md5",
                length: 20
            },
            release: {
                // fileref:realease hashes(md5) all assets (images, js and css)
                // in dist directory
                files: [{
                    src: [
                        "dist/js/*.js",
                        "dist/css/*.css",
                    ]
                }]
            }
        },
        // Usemin
        // Replaces all assets with their revved version in html and css files.
        // options.assetDirs contains the directories for finding the assets
        // according to thier relative paths
        usemin: {
            html: ["dist/contactus.html","dist/aboutus.html","dist/index.html"],
            options: {
                assetsDirs: ["dist", "dist/css", "dist/js"]
            }
        },
        htmlmin: {                              // Task
            dist: {                             // Target
                options: {                      // Target options
                    collapseWhitespace: true
                },
                files: {                                    // Dictionary of files
                    "dist/index.html": "dist/index.html",   // "destination": "source"
                    "dist/contactus.html": "dist/contactus.html",
                    "dist/aboutus.html": "dist/aboutus.html",
                }
            }
        }

    });

    grunt.registerTask("css", ["sass"]);
    grunt.registerTask("default", ["browserSync", "watch"]);
    grunt.registerTask("build", [
        "clean",
        "copy",
        "imagemin",
        "useminPrepare",
        "concat",
        "cssmin",
        "uglify",
        "filerev",
        "usemin",
        "htmlmin"
    ]);
};