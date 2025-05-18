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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { LOGO } from '../Assets';
import { LOGOSVG } from '../Assets';
import Svg, {
  Use,
  Image,
} from 'react-native-svg';
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
            paddingHorizontal: 10
        }}>

            <View style={{
                height: 40,
                width: 65,
                justifyContent: 'center',
                alignItems: 'center',
                
            }}>
                <LOGOSVG height='100%' width='100%' preserveAspectRatio="xMidYMid meet" />
            </View>
            <View>
  <Svg width="80" height="80">
     <Image href={LOGOSVG} />
  </Svg>
</View>
            <TouchableOpacity style={{
                backgroundColor: theme.secondaryColor,
                height: 30,
                width: 30,
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center'

            }}
            onPress={() => navigation.navigate('Notifications')}
            >
                <FontAwesome name='bell' size={18} color="white" />
            </TouchableOpacity>
        </View>
    )
}

export default Header;
