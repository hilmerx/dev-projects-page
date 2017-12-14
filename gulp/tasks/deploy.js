let gulp = require('gulp');
let GulpSSHDeploy = require('gulp-ssh-deploy');


var options = {
  "host": "50.87.144.72",
  "port": 2222,
  "package_json_file_path": "package.json",
  "source_files": "./app",
  "remote_directory": "/public_html/test-of-ssh-deployment",
  "username": "martinz",
  "ssh_key_file": "",
  "releases_to_keep": null,
  "group": null,
  "permissions": "ugo+rwX",
  "package_task": ""
};
 

gulp.task('deploy', () => {
    console.log(GulpSSHDeploy);

    // new GulpSSHDeploy(options, gulp);
})
