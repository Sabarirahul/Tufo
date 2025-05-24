import React,{useContext} from 'react';
import { View, Text, FlatList } from 'react-native';
import BottomNav from '../../Components/BottomNav';
import { theme } from '../../Styles/themes';
import { useRoute } from '@react-navigation/native';
import { AppDataContext } from '../../AppDataContext/AppDataContext';

const BookingList = () => {

  const { selectedRange } = useContext(AppDataContext);

  const users = [
    { id: 1, name: 'Arkesh', phone: '+91 XXXXXXXXXX', slot: '8:00 PM to 9:00 PM' },
    { id: 2, name: 'Saravanan', phone: '+91 XXXXXXXXXX', slot: '9:00 PM to 10:00 PM' },
    { id: 3, name: 'Vignesh', phone: '+91 XXXXXXXXXX', slot: '10:00 PM to 11:00 PM' },
    { id: 4, name: 'Karthik', phone: '+91 XXXXXXXXXX', slot: '11:00 PM to 12:00 AM' },
    { id: 5, name: 'Sundar', phone: '+91 XXXXXXXXXX', slot: '12:00 AM to 1:00 AM' },
    { id: 6, name: 'Arun', phone: '+91 XXXXXXXXXX', slot: '1:00 AM to 2:00 AM' },
    { id: 7, name: 'Gokul', phone: '+91 XXXXXXXXXX', slot: '2:00 AM to 3:00 AM' },
    { id: 8, name: 'Dinesh', phone: '+91 XXXXXXXXXX', slot: '3:00 AM to 4:00 AM' }
  ];





  const renderItem = ({ item }) => (
    <View
      style={{
        width: '100%',
        backgroundColor: '#1e1e1e',
        borderRadius: 10,
        paddingVertical: 16,
        paddingHorizontal: 18,
        marginVertical: 10,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 8,
        }}
      >
        <Text style={{ fontSize: 16, color: '#fff', fontWeight: '600' }}>
          {item.name}
        </Text>


      </View>
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <Text style={{ fontSize: 14, color: '#bbb' }}>{item.phone}</Text>
        <Text style={{ fontSize: 13, color: '#bbb', fontWeight: '400' }}>
          Slot: {item.slot}
        </Text>
      </View>

    </View>
  );



  return (
    <View style={{
      flex: 1,
      backgroundColor: '#121212',
      padding: 16,
      paddingBottom: 85
    }}>
      <Text style={{
        fontWeight: '600',
        color: theme.secondaryColor,
        fontSize: 25,
      }}>
        {selectedRange} Users
      </Text>
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
      <BottomNav routeName={'Dashboard'} />
    </View>
  );
};

export default BookingList;
