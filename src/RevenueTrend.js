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

const RevenueTrend = () => {


    const [firstClick, setfirstClick] = useState(true)
    const [selectedPeriod, setSelectedPeriod] = useState({
        num: 1,
        period: 'MONTH'
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
        {
            num: 1,
            period: 'MONTH'
        }
    ]

    const handlPeriod = (item) => {
        setSelectedPeriod(item)
        setfirstClick(false)
    }


    return (
        <View style={{ paddingHorizontal: 10, marginVertical: 20 }}>
            <Text style={{
                fontWeight: '500',
                color: 'white',
                fontSize: 25,
            }}>
                Revenue Trend
            </Text>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                {
                    allTimePeriod.map((item, index) => {
                        const isSelected =
                            item.num === selectedPeriod.num &&
                            item.period === selectedPeriod.period;

                        return (
                            <TouchableOpacity
                                key={index}
                                style={{
                                    backgroundColor: firstClick && isSelected ? '#4caf50' : isSelected ? '#1d311e' : '#1e1f1f', // green or default dark
                                    borderRadius: 12,
                                    paddingHorizontal: 16,
                                    paddingVertical: 8,
                                    marginVertical: 8,
                                    marginHorizontal: 4,
                                    flex: 1,
                                }}
                                onPress={() => handlPeriod(item)}
                            >
                                <Text style={{ fontSize: 22, fontWeight: '400', color: 'white', marginBottom: 6, textAlign: 'center' }}>
                                    {item.num.toLocaleString()}
                                </Text>
                                <Text style={{ fontSize: 15, color: 'white', textAlign: 'center' }}>{item.period}</Text>
                            </TouchableOpacity>
                        );
                    })
                }
            </ScrollView>
            <RevenueChart selectedPeriod={selectedPeriod} />



        </View>
    )
}


export default RevenueTrend;
