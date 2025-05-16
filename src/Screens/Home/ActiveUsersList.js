import React from 'react';
import { View, Text, FlatList } from 'react-native';
import BottomNav from '../../Components/BottomNav';

const ActiveUsersList = () => {
  const users = [
    { id: 1, name: 'John Doe', phone: '555-123-4567' },
    { id: 2, name: 'Jane Smith', phone: '555-987-6543' },
    { id: 3, name: 'Bob Wilson', phone: '555-246-8135' },
  ];

  const renderItem = ({ item }) => (
  <View
    activeOpacity={0.7}
    style={{
      width: '100%',
      backgroundColor: '#1e1f1f',
      borderRadius: 10,
      paddingVertical: 16,
      paddingHorizontal: 18,
      marginVertical: 10,
    }}
    onPress={() => handleActiveUsers(item)} // make sure this function exists
  >
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Text style={{ fontSize: 16, color: '#fff', fontWeight: '600' }}>
        {item.name}
      </Text>
      <Text style={{ fontSize: 14, color: '#bbb' }}>{item.phone}</Text>
    </View>
  </View>
);


  return (
    <View style={{
          flex:1,
          backgroundColor:'#121212',
          padding: 16,
        }}>
      <Text style={{
                      fontWeight: '600',
                      color: 'white',
                      fontSize: 25,
                  }}>
        Active Users
      </Text>
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
      <BottomNav routeName={'Home'} />
    </View>
  );
};

export default ActiveUsersList;
