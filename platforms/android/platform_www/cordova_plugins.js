cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-actionsheet.ActionSheet",
    "file": "plugins/cordova-plugin-actionsheet/www/ActionSheet.js",
    "pluginId": "cordova-plugin-actionsheet",
    "clobbers": [
      "window.plugins.actionsheet"
    ]
  },
  {
    "id": "cordova-plugin-camera.Camera",
    "file": "plugins/cordova-plugin-camera/www/CameraConstants.js",
    "pluginId": "cordova-plugin-camera",
    "clobbers": [
      "Camera"
    ]
  },
  {
    "id": "cordova-plugin-camera.CameraPopoverOptions",
    "file": "plugins/cordova-plugin-camera/www/CameraPopoverOptions.js",
    "pluginId": "cordova-plugin-camera",
    "clobbers": [
      "CameraPopoverOptions"
    ]
  },
  {
    "id": "cordova-plugin-camera.camera",
    "file": "plugins/cordova-plugin-camera/www/Camera.js",
    "pluginId": "cordova-plugin-camera",
    "clobbers": [
      "navigator.camera"
    ]
  },
  {
    "id": "cordova-plugin-camera.CameraPopoverHandle",
    "file": "plugins/cordova-plugin-camera/www/CameraPopoverHandle.js",
    "pluginId": "cordova-plugin-camera",
    "clobbers": [
      "CameraPopoverHandle"
    ]
  },
  {
    "id": "cordova-plugin-device.device",
    "file": "plugins/cordova-plugin-device/www/device.js",
    "pluginId": "cordova-plugin-device",
    "clobbers": [
      "device"
    ]
  },
  {
    "id": "cordova-plugin-dialogs.notification",
    "file": "plugins/cordova-plugin-dialogs/www/notification.js",
    "pluginId": "cordova-plugin-dialogs",
    "merges": [
      "navigator.notification"
    ]
  },
  {
    "id": "cordova-plugin-dialogs.notification_android",
    "file": "plugins/cordova-plugin-dialogs/www/android/notification.js",
    "pluginId": "cordova-plugin-dialogs",
    "merges": [
      "navigator.notification"
    ]
  },
  {
    "id": "cordova-plugin-facebook4.FacebookConnectPlugin",
    "file": "plugins/cordova-plugin-facebook4/www/facebook-native.js",
    "pluginId": "cordova-plugin-facebook4",
    "clobbers": [
      "facebookConnectPlugin"
    ]
  },
  {
    "id": "cordova-plugin-geolocation.geolocation",
    "file": "plugins/cordova-plugin-geolocation/www/android/geolocation.js",
    "pluginId": "cordova-plugin-geolocation",
    "clobbers": [
      "navigator.geolocation"
    ]
  },
  {
    "id": "cordova-plugin-geolocation.PositionError",
    "file": "plugins/cordova-plugin-geolocation/www/PositionError.js",
    "pluginId": "cordova-plugin-geolocation",
    "runs": true
  },
  {
    "id": "cordova-plugin-inappbrowser.inappbrowser",
    "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
    "pluginId": "cordova-plugin-inappbrowser",
    "clobbers": [
      "cordova.InAppBrowser.open",
      "window.open"
    ]
  },
  {
    "id": "cordova-plugin-ionic-keyboard.keyboard",
    "file": "plugins/cordova-plugin-ionic-keyboard/www/android/keyboard.js",
    "pluginId": "cordova-plugin-ionic-keyboard",
    "clobbers": [
      "window.Keyboard"
    ]
  },
  {
    "id": "cordova-plugin-splashscreen.SplashScreen",
    "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
    "pluginId": "cordova-plugin-splashscreen",
    "clobbers": [
      "navigator.splashscreen"
    ]
  },
  {
    "id": "cordova-plugin-statusbar.statusbar",
    "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
    "pluginId": "cordova-plugin-statusbar",
    "clobbers": [
      "window.StatusBar"
    ]
  },
  {
    "id": "cordova-plugin-uniquedeviceid.UniqueDeviceID",
    "file": "plugins/cordova-plugin-uniquedeviceid/www/uniqueid.js",
    "pluginId": "cordova-plugin-uniquedeviceid",
    "merges": [
      "window.plugins.uniqueDeviceID"
    ]
  },
  {
    "id": "cordova-plugin-velda-devicefeedback.DeviceFeedback",
    "file": "plugins/cordova-plugin-velda-devicefeedback/DeviceFeedback.js",
    "pluginId": "cordova-plugin-velda-devicefeedback",
    "clobbers": [
      "window.plugins.deviceFeedback"
    ]
  },
  {
    "id": "cordova-sqlite-storage.SQLitePlugin",
    "file": "plugins/cordova-sqlite-storage/www/SQLitePlugin.js",
    "pluginId": "cordova-sqlite-storage",
    "clobbers": [
      "SQLitePlugin"
    ]
  },
  {
    "id": "mx.ferreyra.callnumber.CallNumber",
    "file": "plugins/mx.ferreyra.callnumber/www/CallNumber.js",
    "pluginId": "mx.ferreyra.callnumber",
    "clobbers": [
      "call"
    ]
  },
  {
    "id": "uk.co.workingedge.phonegap.plugin.launchnavigator.Common",
    "file": "plugins/uk.co.workingedge.phonegap.plugin.launchnavigator/www/common.js",
    "pluginId": "uk.co.workingedge.phonegap.plugin.launchnavigator",
    "clobbers": [
      "launchnavigator"
    ]
  },
  {
    "id": "uk.co.workingedge.phonegap.plugin.launchnavigator.LocalForage",
    "file": "plugins/uk.co.workingedge.phonegap.plugin.launchnavigator/www/localforage.v1.5.0.min.js",
    "pluginId": "uk.co.workingedge.phonegap.plugin.launchnavigator",
    "clobbers": [
      "localforage"
    ]
  },
  {
    "id": "uk.co.workingedge.phonegap.plugin.launchnavigator.LaunchNavigator",
    "file": "plugins/uk.co.workingedge.phonegap.plugin.launchnavigator/www/android/launchnavigator.js",
    "pluginId": "uk.co.workingedge.phonegap.plugin.launchnavigator",
    "merges": [
      "launchnavigator"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-actionsheet": "2.3.3",
  "cordova-plugin-camera": "4.0.2",
  "cordova-plugin-device": "1.1.7",
  "cordova-plugin-dialogs": "2.0.1",
  "cordova-plugin-facebook4": "2.2.0",
  "cordova-plugin-geolocation": "4.0.1",
  "cordova-plugin-inappbrowser": "1.7.2",
  "cordova-plugin-ionic-keyboard": "2.0.5",
  "cordova-plugin-ionic-webview": "1.1.16",
  "cordova-plugin-splashscreen": "4.1.0",
  "cordova-plugin-statusbar": "2.4.1",
  "cordova-plugin-uniquedeviceid": "1.3.2",
  "cordova-plugin-velda-devicefeedback": "0.0.2",
  "cordova-plugin-vibration": "3.1.0",
  "cordova-plugin-whitelist": "1.3.3",
  "cordova-sqlite-storage": "2.3.1",
  "mx.ferreyra.callnumber": "0.0.2",
  "uk.co.workingedge.phonegap.plugin.launchnavigator": "4.1.3"
};
// BOTTOM OF METADATA
});