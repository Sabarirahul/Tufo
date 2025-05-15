import React, { useState } from 'react';
import {
    ScrollView,
    Text,
    View,
    Dimensions
} from 'react-native';
import { BarChart } from 'react-native-gifted-charts';

const screenWidth = Dimensions.get('window').width;

const Analytics = () => {
    // Sample data
    const [selectedIndex, setSelectedIndex] = useState(null);
    const barData = [
        { value: 2, label: 'Cricket', frontColor: '#3498db' },
        { value: 3, label: 'Football', frontColor: '#e74c3c' },
        { value: 1.5, label: 'Tennis', frontColor: '#f1c40f' },
        { value: 2.5, label: 'Basketball', frontColor: '#9b59b6' },
        { value: 1, label: 'Badminton', frontColor: '#2ecc71' },
    ];

    return (
        <ScrollView style={{ paddingHorizontal: 10, marginTop: 20 }}>
            <Text style={{
                fontWeight: '600',
                color: 'white',
                fontSize: 24,
                marginBottom: 20,
            }}>
                Sports Analytics (Playing Hours)
            </Text>

            <View style={{
                flex: 1,
                backgroundColor: '#1e1e1e',
                paddingHorizontal: 20,
                paddingVertical: 15,
                justifyContent: 'center',
                borderRadius: 10
            }}>
                <BarChart
                    barWidth={40}
                    noOfSections={4}
                    maxValue={4}
                    width={300}
                    data={barData.map((item, index) => ({
                        ...item,
                        onPress: () => setSelectedIndex(index),
                    }))}
                    yAxisThickness={1}
                    xAxisThickness={1}
                    yAxisColor={'rgba(255, 255, 255, 0.2)'}
                    xAxisColor={'rgba(255, 255, 255, 0.2)'}
                    yAxisTextStyle={{ color: 'rgba(255, 255, 255, 0.6)' }}
                    xAxisLabelTextStyle={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: 12 }}
                    yAxisLabelPrefix=""
                    yAxisLabelSuffix=" hrs"
                    isAnimated
                    barBorderRadius={6}
                    // hideRules
                    rulesType="solid"
                    rulesColor="gray"
                    rulesThickness={1}
                    frontColor="skyblue"
                    renderTooltip={() =>
                        selectedIndex !== null ? (
                            <View
                                style={{
                                    padding: 6,
                                    backgroundColor: '#333',
                                    borderRadius: 8,
                                }}
                            >
                                <Text style={{ color: 'white', fontSize: 12 }}>
                                    {barData[selectedIndex].label}:{' '}
                                    {barData[selectedIndex].value} hrs
                                </Text>
                            </View>
                        ) : null
                    }
                />
            </View>
        </ScrollView>
    );
};

export default Analytics;
