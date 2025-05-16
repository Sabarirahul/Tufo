import React from 'react';
import {
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const DashboardOverView = () => {

    const navigation = useNavigation();

    const cardData = [
        {
            title: 'NO OF BOOKINGS',
            value: 3695,
            percentage: 12.5,
            icon: 'calendar-o',
        },
        {
            title: 'ACTIVE USERS',
            value: 1240,
            percentage: 8.3,
            icon: 'users',
        },
        {
            title: 'TOTAL REVENUE',
            value: 528750,
            percentage: -2.4,
            icon: 'credit-card',
        },
    ];

    const handleActiveUsers = (item) => {
        if(item.title === 'ACTIVE USERS'){
          navigation.navigate('ActiveUsersList');
        }
    };

    const Card = ({ item }) => (
        <TouchableOpacity
        activeOpacity={0.5}
            style={{
                width: '100%',
                backgroundColor: '#1e1f1f',
                borderRadius: 12,
                paddingVertical: 16,
                paddingHorizontal: 18,
                marginVertical: 10,
            }}
            onPress={() => handleActiveUsers(item)}
        >
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <Text style={{ fontSize: 15, color: '#e0e0e0', marginTop: 10 }}>{item.title}</Text>
                <View style={{
                    backgroundColor: '#202b33',
                    height: 40,
                    width: 40,
                    borderRadius: 20,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <FontAwesome name={item.icon} size={20} color="#3498db" />
                </View>
            </View>

            <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white', marginTop: 6 }}>
                {item.value.toLocaleString()}
            </Text>


            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
                <MaterialIcons
                    name={item.percentage > 0 ? 'trending-up' : 'trending-down'}
                    color={item.percentage > 0 ? '#4ade80' : '#f87171'}
                    size={20}
                />
                <Text style={{
                    fontSize: 15,
                    color: item.percentage > 0 ? '#4ade80' : '#f87171',
                    marginHorizontal: 5
                }}>
                    {item.percentage} %
                </Text>
                <Text style={{ fontSize: 15, color: '#9ca3af' }}>
                    vs last period
                </Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={{ paddingHorizontal: 10, marginVertical: 20 }}>
            <Text style={{
                fontWeight: '600',
                color: 'white',
                fontSize: 25,
            }}>
                Dashboard Overview
            </Text>

            {cardData.map((item, index) => (
                <Card key={index} item={item} />
            ))}
        </View>
    );
};

export default DashboardOverView;
