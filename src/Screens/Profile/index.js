import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import BottomNav from '../../Components/BottomNav';
import { theme } from '../../Styles/themes';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ProfileScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.themeColor,
        paddingHorizontal: 10,
      }}>
        <View style={{
          marginBottom:20
        }}>
      <Text
        style={{
          fontWeight: '600',
          color: 'white',
          fontSize: 25,
        }}>
        Profile
      </Text>
      <Text
        style={{
          color: '#ccc',
          fontSize: 15,
          marginVertical: 5,
        }}>
        Manage your account and venue details
      </Text>

      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 80 }}>

      {/* Profile Card */}
      <View
        style={{
          backgroundColor: theme.primaryColor,
          borderRadius: 12,
          padding: 15,
        }}>

        {/* Profile Header */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: theme.themeColor,
            padding: 20,
          }}>
          <Icon name="account-circle" size={60} color={theme.secondaryColor} />
          <View style={{ marginLeft: 15 }}>
            <Text
              style={{
                color: 'white',
                fontSize: 18,
                fontWeight: '600',
              }}>
              Raj Sharma
            </Text>
            <Text
              style={{
                color: '#aaa',
                fontSize: 14,
              }}>
              Venue Owner
            </Text>
          </View>
        </View>

        {/* User Info Section */}
        <View style={{ backgroundColor: '#1f1f1f', borderRadius: 12, paddingVertical: 15,paddingHorizontal:25 }}>

          {/* Info Sections with Icons */}
          <View style={{ marginBottom: 15 }}>
            <Text style={{ color: '#888', fontSize: 14 }}>Email Address</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 2 }}>
              <Icon name="email" size={18} color={theme.secondaryColor} />
              <Text style={{ color: '#ddd', fontSize: 16, marginLeft: 8 }}>
                rajsharma@example.com
              </Text>
            </View>
          </View>

          <View style={{ marginBottom: 15 }}>
            <Text style={{ color: '#888', fontSize: 14 }}>Phone Number</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 2 }}>
              <Icon name="phone" size={18} color={theme.secondaryColor} />
              <Text style={{ color: '#ddd', fontSize: 16, marginLeft: 8 }}>
                +91 9876543210
              </Text>
            </View>
          </View>

          <View style={{ marginBottom: 15 }}>
            <Text style={{ color: '#888', fontSize: 14 }}>Venue Name</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 2 }}>
              <Icon name="store" size={18} color={theme.secondaryColor} />
              <Text style={{ color: '#ddd', fontSize: 16, marginLeft: 8 }}>
                Echo Banquet Hall
              </Text>
            </View>
          </View>

          <View style={{ marginBottom: 15 }}>
            <Text style={{ color: '#888', fontSize: 14 }}>Location</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 2 }}>
              <Icon name="location-on" size={18} color={theme.secondaryColor} />
              <Text style={{ color: '#ddd', fontSize: 16, marginLeft: 8 }}>
                Madurai, Tamil Nadu
              </Text>
            </View>
          </View>

           <TouchableOpacity
          style={{
            paddingVertical: 12,
            paddingHorizontal: 8,
            borderRadius: 6,
            borderWidth: 1,
            borderColor: '#666',
            marginVertical:10,
            width:'40%'
          }}

        >
          <Text style={{ color: 'white', fontSize: 16, fontWeight: '600', textAlign:'center' }}>Edit Profile</Text>
        </TouchableOpacity>
        </View>
       
      </View>

       <View
        style={{
          backgroundColor: theme.primaryColor,
          borderRadius: 12,
          padding: 15,
          marginTop: 20,
        }}>
          <Text
              style={{
                color: 'white',
                fontSize: 18,
                fontWeight: '500',
              }}>
              Support
            </Text>

            <View
  style={{
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.themeColor,
    padding: 20,
    marginVertical: 10,
    borderWidth: 0.2,
    borderColor: '#666',
    borderRadius: 10,
  }}
>
  <View>
    <Text style={{ color: 'white', fontSize: 16, fontWeight: '600' }}>
      Need help?
    </Text>
    <Text style={{ color: '#ccc', fontSize: 14, marginTop: 4 }}>
      Contact our support team for any questions or issues.
    </Text>

    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 8 }}>
      <Icon name="email" size={18} color={theme.secondaryColor} />
      <Text style={{ color: theme.secondaryColor, fontSize: 14, marginLeft: 6 }}>
        support@turfo.com
      </Text>
    </View>

    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 8 }}>
      <Icon name="phone" size={18} color={theme.secondaryColor} />
      <Text style={{ color: theme.secondaryColor, fontSize: 14, marginLeft: 6 }}>
        +91 800-TURFO-HELP
      </Text>
    </View>
  </View>
</View>

           <TouchableOpacity
          style={{
            paddingVertical: 12,
            paddingHorizontal: 8,
            borderRadius: 6,
            marginVertical:10,
            backgroundColor:theme.secondaryColor
          }}

        >
          <Text style={{ color: 'white', fontSize: 16, fontWeight: '600', textAlign:'center' }}>Contact Support</Text>
        </TouchableOpacity>


        </View>

        

<View
  style={{
    padding: 15,
    backgroundColor: '#222',
    borderWidth: 0.5,
    borderColor: '#555',
    alignItems: 'center',
    marginVertical:10,
    borderRadius:5
  }}>
  
  <Text style={{ color: '#aaa', fontSize: 14, textAlign: 'center' }}>
    © 2025 <Text style={{
     fontStyle:'italic'
    }}>TURF<Text style={{
      color:theme.secondaryColor
    }}>O</Text></Text>. All rights reserved.
  </Text>

  <View style={{ flexDirection: 'row', marginTop: 10 }}>
  <FontAwesome name="external-link" size={18} color="#aaa" style={{ marginHorizontal: 10 }} />
  <FontAwesome name="twitter" size={20} color="#aaa" style={{ marginHorizontal: 10 }} />
  <FontAwesome name="youtube-play" size={20} color="#aaa" style={{ marginHorizontal: 10 }} />
</View>


  <View style={{ flexDirection: 'row', marginTop: 12 }}>
    <Text style={{ color: '#aaa', fontSize: 12, textDecorationLine: 'underline' }}>
      Privacy Policy
    </Text>
    <Text style={{ color: '#aaa', fontSize: 12, marginHorizontal: 6 }}>|</Text>
    <Text style={{ color: '#aaa', fontSize: 12, textDecorationLine: 'underline' }}>
      Terms & Conditions
    </Text>
  </View>
</View>



        </ScrollView>

      <BottomNav routeName={'Profile'} />
    </View>
  );
};

export default ProfileScreen;
