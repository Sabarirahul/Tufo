import React, { useState } from 'react';
import {
    ScrollView,
    StatusBar,
    Text,
    View,
    SafeAreaView,
    Platform,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import RevenueChart from './RevenueChart';
import { theme } from '../../Styles/themes';

const RevenueTrend = () => {

    const [selectedPeriod, setSelectedPeriod] = useState({
        num: 2,
        period: 'WEEKS'
    });



    const allTimePeriod = [
        {
            num: 1,
            period: 'DAY'
        },
        {
            num: 3,
            period: 'DAYS'
        },
        {
            num: 1,
            period: 'WEEK'
        },
        {
            num: 2,
            period: 'WEEKS'
        },
        // {
        //     num: 1,
        //     period: 'MONTH'
        // }
    ]

    const handlPeriod = (item) => {
        setSelectedPeriod(item)
    }


    return (
        <View style={{ marginVertical: 20 }}>
            <Text style={{
                fontWeight: '500',
                color: 'white',
                fontSize: 25,
            }}>
                Revenue Trend
            </Text>

            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                gap:8
            }}>
                {
                    allTimePeriod.map((item, index) => {
                        const isSelected =
                            item.num === selectedPeriod.num &&
                            item.period === selectedPeriod.period;

                        return (
                            <TouchableOpacity
                                key={index}
                                style={{
                                    backgroundColor:  isSelected ? theme.secondaryColor :  theme.primaryColor, // green or default dark
                                    borderRadius: 12,
                                    paddingHorizontal: 0,
                                    paddingVertical: 8,
                                    marginVertical: 8,
                                    flex: 1,
                                }}
                                onPress={() => handlPeriod(item)}
                            >
                                <Text style={{ fontSize: 22, fontWeight: '400', color: 'white', marginBottom: 2, textAlign: 'center' }}>
                                    {item.num.toLocaleString()}
                                </Text>
                                <Text style={{ fontSize: 15, color: 'white', textAlign: 'center' }}>{item.period}</Text>
                            </TouchableOpacity>
                        );
                    })
                }
            </View>
            <RevenueChart selectedPeriod={selectedPeriod} />



        </View>
    )
}


export default RevenueTrend;
