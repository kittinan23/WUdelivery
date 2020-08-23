import React from 'react';
import { Text, View, StyleSheet, Image, ActivityIndicator, AsyncStorage } from 'react-native';
import User from '../User';
import Mybutton from './components/Mybutton'

export default class HomeScreen extends React.Component {
  constructor() {
    super()
    this.state = {
      showME: true
    }
  }

  componentWillMount() {
    setTimeout(() => {
      this.setState({
        showME: false
      })
    }, 100)
  }

  state = {
    users: []
  }

  render() {

    

    return (

      <View style={{ flex: 1}}>
        {
          this.state.showME ?
            <ActivityIndicator size="large" color="#ff0000" />

            :

            <View>
              <Text style={{ marginTop: 50, fontSize: 25, textAlign: 'center' }}>WU Delivery</Text>
              <Text style={{ fontSize: 20, textAlign: 'center', paddingBottom: 20 }}>สวัสดีคุณ {User.phone}</Text>


              
              <View
                style={{ justifyContent: 'center', alignItems: 'center' }}>

                
       

             
              </View>

            </View>
        }
      </View>

    );
  }
}
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 300,
    marginTop: 16,
  },
});

/*
let pic = {
  uri: 'https://www.img.in.th/images/f8e5ebe9cded5c57c7de4cc8b4bacc86.png'
};

<Image source={pic} style={{ width: 250, height: 250, justifyContent: 'center' }} />

            <Mybutton
             title="ฟังเพลง"
            customClick={() => this.props.navigation.navigate('Web')}
            />

*/
//<Image source={pic} style={{width: 300, height: 300}}/>