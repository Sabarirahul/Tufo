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
    { value: 3, label: 'Football', frontColor: 'rgba(231,76,60,0.8)', barBorderColor: 'rgba(231,76,60,1)' },
    { value: 2.5, label: 'Basketball', frontColor: 'rgba(155,89,182,0.8)', barBorderColor: 'rgba(155,89,182,1)' },
    { value: 2, label: 'Cricket', frontColor: 'rgba(46,116,163,0.8)', barBorderColor: 'rgba(46,116,163,1)' },
    { value: 1.5, label: 'Tennis', frontColor: 'rgba(241,196,15,0.8)', barBorderColor: 'rgba(241,196,15,1)' },
    { value: 1, label: 'Badminton', frontColor: 'rgba(46,204,113,0.8)', barBorderColor: 'rgba(46,204,113,1)' },
];

const generateYAxisLabels = (barData, step = 0.5, max = 0) => {
  const highestValue = max || Math.max(...barData.map(item => item.value));
  const labels = [];

  for (let i = highestValue; i >= 0; i -= step) {
    labels.push(i.toFixed(1)+ ' hrs');
  }

  return labels.reverse();
};




    return (
        <ScrollView style={{ paddingHorizontal: 10, marginTop: 20 }}>
            <Text style={{
                fontWeight: '600',
                color: 'white',
                fontSize: 24,
                marginBottom: 20,
            }}>
                {/* Sports Analytics (Playing Hours) */}
            </Text>

            <View style={{
                flex: 1,
                backgroundColor: '#1e1e1e',
                paddingHorizontal: 20,
                paddingVertical: 20,
                justifyContent: 'center',
                borderRadius: 10
            }}>
                <BarChart
                    barWidth={40}
                    barBorderWidth={2}
                    noOfSections={generateYAxisLabels(barData, 0.5, 4).length - 1}
                    stepValue={0.5}
                    maxValue={4}
                    width={screenWidth-140}
                    data={barData.map((item, index) => ({
                        ...item,
                        onPress: () => setSelectedIndex(index),
                    }))}
                    yAxisLabelTexts={generateYAxisLabels(barData, 0.5, 4)}
                    yAxisThickness={1}
                    xAxisThickness={1}
                    yAxisColor={'rgba(255, 255, 255, 0.1)'}
                    xAxisColor={'rgba(255, 255, 255, 0.1)'}
                    yAxisTextStyle={{ color: 'rgba(255, 255, 255, 0.6)' }}
                    xAxisLabelTextStyle={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: 12 }}
                    yAxisLabelWidth={50}
                    yAxisLabelPrefix="dd"
                    yAxisLabelSuffix=" hrs"
                    isAnimated
                    barBorderRadius={6}
                    // hideRules
                    rulesType="solid"
                    rulesColor="'rgba(255, 255, 255, 0.1)'"
                    rulesThickness={1}
                    frontColor="skyblue"
                    renderTooltip={() =>
                        selectedIndex !== null ? (
                            <View
                                style={{
                                    backgroundColor: '#2c3e50',
                                    paddingVertical: 10,
                                    paddingHorizontal: 10,
                                    borderRadius: 12,
                                    alignSelf: 'flex-end',
                                    borderColor: '#3498db',
                                    borderWidth: 1,
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
