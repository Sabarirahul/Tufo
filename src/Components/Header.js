import React from 'react';
import {
    ScrollView,
    StatusBar,
    Text,
    View,
    SafeAreaView,
    Platform,
    // Image,
    TouchableOpacity
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { LOGOSVG } from '../Assets';
import { theme } from '../Styles/themes';
import { useNavigation } from '@react-navigation/native';

const Header = () => {


    const navigation = useNavigation();

    return (
        <View style={{
            backgroundColor: theme.primaryColor,
            height: 80,
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 20
        }}>

            <View style={{
                height: 40,
                width: 65,
                justifyContent: 'center',
                alignItems: 'center',
                
            }}>
                <LOGOSVG height='100%' width='100%' preserveAspectRatio="xMidYMid meet" />
            </View>
            <TouchableOpacity style={{
                // backgroundColor: 'rgba(128, 128, 128, 0.2)',
                height: 35,
                width: 35,
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center'

            }}
            onPress={() => navigation.navigate('Notifications')}
            >

                <View style={{
                    width:8,
                    height:8,
                    borderRadius:5,
                    backgroundColor:theme.secondaryColor,
                    position:'absolute',
                    right:9,
                    top:5,
                    zIndex:10
                }}/>

                <Ionicons name='notifications-outline' size={25} color="white" />
            </TouchableOpacity>
        </View>
    )
}

export default Header;
