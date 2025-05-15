import React from 'react';
import {
  ScrollView,
  StatusBar,
  Text,
  View,
  SafeAreaView,
  Platform,
  Image,
  TouchableOpacity
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Header = () => {


    return(
        <View style={{
            backgroundColor:'#1a1a1a',
            height:80,
            width:'100%',
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-between',
            paddingHorizontal:10
        }}>
            <Image 
            style={{
                height:40,
                width:65,
                resizeMode:'contain'
            }}
            
                source={require('../Assets/Logo.png')}/>
                <TouchableOpacity style={{
                      backgroundColor: '#4caf50',
                    height: 35,
                    width: 50,
                    borderRadius: 20,
                    justifyContent: 'center',
                    alignItems: 'center'

                }}>
                    <MaterialIcons name='person' size={25} color="white" />
                </TouchableOpacity>
        </View>

        
    )
}


export default Header;
