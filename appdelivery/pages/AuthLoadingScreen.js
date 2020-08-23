import React,{Component} from 'react';
import {ActivityIndicator,StatusBar,View} from 'react-native';
import User from '../User';
import AsyncStorage from '@react-native-community/async-storage';

import firebase from 'firebase';

export default class AuthLoading extends React.Component{
    constructor(props){
        super(props);
        this._bootstrapAsync();
    }
    componentWillMount(){
        var firebaseConfig = {
            apiKey: "AIzaSyCV3usHVsgIWeo2JMLAaFJR71bWpMhQCug",
    authDomain: "delivery-605cb.firebaseapp.com",
    databaseURL: "https://delivery-605cb.firebaseio.com",
    projectId: "delivery-605cb",
    storageBucket: "delivery-605cb.appspot.com",
    messagingSenderId: "349104586147",
    appId: "1:349104586147:web:7d01b97ded65e87c4e2e16",
    measurementId: "G-6P80KRNZZW"
          };
          // Initialize Firebase
          firebase.initializeApp(firebaseConfig);
        }

    _bootstrapAsync = async () => {
        User.phone  = await AsyncStorage.getItem('userPhone');
        this.props.navigation.navigate(User.phone ? 'App': 'Auth');
    };

    render(){
        return(
            <View>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        );
    }
}
