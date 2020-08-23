/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App'; //ถ้าเราตั้งเป็นAppจะไปขึ้นหน้าAppถ้าตั้งWebจะลิ้งค์ไปที่หน้าWeb
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
