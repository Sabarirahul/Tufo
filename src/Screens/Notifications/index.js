import React from 'react';
import { View, Text, FlatList } from 'react-native';
import BottomNav from '../../Components/BottomNav';
import { theme } from '../../Styles/themes';

const Notifications = () => {
  // Dummy notification data
  const notifications = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    title: `Notification ${i + 1}`,
    subtitle: 'This is a sample notification detail.'
  }));

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
          {item.title}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Text style={{ fontSize: 14, color: '#bbb' }}>{item.subtitle}</Text>
      </View>
    </View>
  );

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#121212',
        padding: 16,
        paddingBottom: 85,
      }}
    >
      <Text
        style={{
          fontWeight: '600',
          color: theme.secondaryColor,
          fontSize: 25,
        }}
      >
        Notifications
      </Text>
      <FlatList
        data={notifications}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
      <BottomNav routeName={'Dashboard'} />
    </View>
  );
};

export default Notifications;
