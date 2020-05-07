module.exports = {
 src_folders: [],
  
    webdriver: {
      start_process: true,
      port: 4444,
      server_path: require('geckodriver').path,
      cli_args: [
        // very verbose geckodriver logs
        // '-vv'
      ]
    },
  
    test_settings: {
      default: {
        launch_url: 'https://github.com/thapel0',
        desiredCapabilities : {
          browserName : 'firefox',
          alwaysMatch: {
            // Enable this if you encounter unexpected SSL certificate errors in Firefox
            // acceptInsecureCerts: true,
            'moz:firefoxOptions': {
              args: [
                // '-headless',
                // '-verbose'
              ],
            }
          }
        },
      }
    }
  };
  