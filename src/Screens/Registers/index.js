import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import BottomNav from '../../Components/BottomNav';
import { theme } from '../../Styles/themes';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
  registersDataToday,
  registersDataTommorow,
  registersDataApril_1,
} from './utils';

const RegistersScreen = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [searchText, setSearchText] = useState('');

  const filterData = (data) => {
    const lowerText = searchText.toLowerCase();
    return data.filter((item) =>
      item.name.toLowerCase().includes(lowerText) ||
      item.phNo.toLowerCase().includes(lowerText) ||
      item.gameName.toLowerCase().includes(lowerText)
    );
  };

  const todayData = searchText ? filterData(registersDataToday) : registersDataToday;
  const tomorrowData = searchText ? filterData(registersDataTommorow) : registersDataTommorow;
  const aprilData = searchText ? filterData(registersDataApril_1) : registersDataApril_1;

  const getStatusStyle = (status) => {
    switch (status) {
      case 1:
        return {
          bgColor: '#1f3b2d',
          icon: 'check-circle',
          iconColor: '#4ade80',
          text: 'Paid',
          textColor: '#bbf7d0',
        };
      case 0:
        return {
          bgColor: '#483a1d',
          icon: 'schedule',
          iconColor: '#facc15',
          text: 'Pending',
          textColor: '#fde68a',
        };
      default:
        return {
          bgColor: '#4b232c',
          icon: 'error',
          iconColor: '#f87171',
          text: 'Cancelled',
          textColor: '#fecaca',
        };
    }
  };

  const RegisterCard = ({ item }) => {
    const { bgColor, icon, iconColor, text, textColor } = getStatusStyle(item.paidStatus);
    return (
      <View
        style={{
          width: '100%',
          backgroundColor: theme.primaryColor,
          borderRadius: 12,
          paddingVertical: 16,
          paddingHorizontal: 18,
          marginVertical: 10,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white', width: '60%' }}>
            {item.name}
          </Text>
          <View
            style={{
              paddingVertical: 6,
              paddingHorizontal: 10,
              backgroundColor: bgColor,
              borderRadius: 20,
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <MaterialIcons name={icon} size={16} color={iconColor} style={{ marginRight: 6 }} />
            <Text style={{ color: textColor }}>{text}</Text>
          </View>
        </View>

        <Text style={{ color: '#e0e0e0', marginTop: 4, fontSize: 15 }}>
          {item.gameName} with {item.playersCount} players
        </Text>

        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 6 }}>
          <FontAwesome name="calendar-o" size={16} color={theme.secondaryColor} style={{ marginRight: 6 }} />
          <Text style={{ color: 'white', fontSize: 15, fontWeight: '500' }}>{item.time}</Text>

          <Ionicons name="location-outline" size={18} color={theme.secondaryColor} style={{ marginLeft: 15, marginRight: 6 }} />
          <Text style={{ color: 'white', fontWeight: '500', fontSize: 15 }}>{item.feild}</Text>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 4 }}>
          <Ionicons name="call-outline" size={16} color={theme.secondaryColor} style={{ marginRight: 6 }} />
          <Text style={{ color: 'white', fontWeight: '500', fontSize: 15 }}>{item.phNo}</Text>
        </View>

        <View style={{ flexDirection: 'row', marginVertical: 10 }}>
          <Text style={{ color: 'white', marginTop: 6, fontWeight: '500', fontSize: 20 }}>
            {item.amount}
          </Text>
          <TouchableOpacity
            style={{
              paddingVertical: 8,
              paddingHorizontal: 12,
              borderRadius: 6,
              marginHorizontal: 20,
              borderWidth: 1,
              borderColor: '#666',
            }}
          >
            <Text style={{ color: 'white', fontSize: 16, fontWeight: '600' }}>View Details</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const renderSection = (title, data) => {
    if (data.length === 0) return null;
    return (
      <View style={{ marginBottom: 10 }}>
        <Text
          style={{
            fontWeight: '600',
            color: 'white',
            fontSize: 20,
            marginTop: 15,
          }}
        >
          {title}
        </Text>
        {data.map((item, index) => (
          <RegisterCard key={index} item={item} />
        ))}
      </View>
    );
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{ flex: 1, backgroundColor: theme.themeColor, paddingHorizontal: 10 }}>
        <Text style={{ fontWeight: '600', color: 'white', fontSize: 25, width: '65%' }}>
          Registers
        </Text>
        <Text style={{ color: '#ccc', fontSize: 15, width: '65%', marginVertical: 5 }}>
          Manage your venue bookings
        </Text>

        {/* Search Input */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: theme.primaryColor,
            borderRadius: 10,
            paddingHorizontal: 10,
            marginTop: 15,
            height: 45,
            borderWidth: 1,
            borderColor: isFocused ? theme.secondaryColor : '#666',
          }}
        >
          <Ionicons name="search" size={20} color="#ccc" style={{ marginRight: 8 }} />
          <TextInput
            placeholder="Search by team, type or contact number"
            placeholderTextColor="#aaa"
            value={searchText}
            onChangeText={setSearchText}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            returnKeyType="search"
            style={{ flex: 1, color: 'white', fontSize: 14 }}
          />
        </View>

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
          {todayData.length === 0 && tomorrowData.length === 0 && aprilData.length === 0 ? (
            <View
              style={{
                width: '100%',
                backgroundColor: theme.primaryColor,
                borderRadius: 12,
                paddingVertical: 30,
                paddingHorizontal: 18,
                marginVertical: 20,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Text style={{ color: '#ccc', fontSize: 18, fontWeight: '500' }}>No booking found</Text>
            </View>
          ) : (
            <>
              {renderSection('Today', todayData)}
              {renderSection('Tomorrow', tomorrowData)}
              {renderSection('April 15', aprilData)}
            </>
          )}
        </ScrollView>


        <BottomNav routeName={'Registers'} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RegistersScreen;
