import React, { useState } from 'react';
import {
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import DropDownPicker from 'react-native-dropdown-picker';
import { theme } from '../../Styles/themes';

const DashboardOverView = () => {

    const navigation = useNavigation();

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('today');
    const [items, setItems] = useState([
        { label: 'Today', value: 'today' },
        { label: 'Last Week', value: 'last_week' },
        { label: 'Last Month', value: 'last_month' }
    ]);

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
        if (item.title === 'ACTIVE USERS') {
            navigation.navigate('ActiveUsersList');
        }
    };

    const Card = ({ item }) => (
        <TouchableOpacity
            activeOpacity={0.5}
            style={{
                width: '100%',
                backgroundColor: theme.primaryColor,
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
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    zIndex: 10,
                    marginBottom:10
                }}
            >
                <Text
                    style={{
                        fontWeight: '600',
                        color: 'white',
                        fontSize: 25,
                        width:'65%'
                    }}
                >
                    Dashboard
                     Overview
                </Text>

                <View style={{ width: '35%' }}>
                    <DropDownPicker
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                        placeholder="Select Range"
                        style={{
                            backgroundColor: theme.primaryColor,
                            borderColor: open ? theme.secondaryColor : '#3a3a3a',
                            height: 40,
                            borderRadius: 10,
                            paddingHorizontal: 10,
                        }}
                        dropDownContainerStyle={{
                            backgroundColor: theme.primaryColor,
                            borderColor: '#3a3a3a',
                            borderRadius: 10,
                            paddingVertical: 10,
                            marginTop:2
                        }}
                        textStyle={{
                            color: '#e0e0e0',
                            fontSize: 14,
                            fontWeight: '500',
                        }}
                        labelStyle={{
                            color: '#e0e0e0',
                            fontWeight: '500',
                            fontSize: 14,
                        }}
                        selectedItemLabelStyle={{
                            color: theme.secondaryColor,
                            fontWeight: '600',
                        }}
                        listItemContainerStyle={{
                            borderBottomColor: '#2a2a2a',
                            borderBottomWidth: 0.5,
                        }}
                        arrowIconStyle={{
                            tintColor: '#e0e0e0',
                        }}
                        tickIconStyle={{
                            tintColor: theme.secondaryColor,
                        }}
                        zIndex={1000}
                    />

                </View>
            </View>

            {cardData.map((item, index) => (
                <Card key={index} item={item} />
            ))}
        </View>
    );
};

export default DashboardOverView;
