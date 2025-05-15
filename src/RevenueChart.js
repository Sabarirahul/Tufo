import React, { useEffect, useState } from 'react';
import {
  ScrollView,
  Dimensions,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('screen').width;

const RevenueChart = ({ selectedPeriod }) => {

  useEffect(() => {

  }, [selectedPeriod])
  const [selectedData, setSelectedData] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  

  // Two weeks data
  const twoWeeksData = [12000, 15000];
  const twoWeeksLabels = ['Week 1', 'Week 2'];
  const twoWeeksSegments = 7;

  // one weeks data
  const oneWeeksData = [12000, 15000];
  const oneWeeksLabels = ['Mon', 'Tue','Wed','Thu','Fri','Sat','Sun'];
  const oneWeeksSegments = 9;

  // Three days data
  const threeDaysData = [12000, 15000];
  const threeDaysLabels = ['Mon', 'Tue','Wed','Thu','Fri','Sat','Sun'];
  const threeDaysSegments = 9;

  // one days data
  const oneDaysData = [12000, 15000];
  const oneDaysLabels = ['Mon', 'Tue','Wed','Thu','Fri','Sat','Sun'];
  const oneDaysSegments = 9;


  const data = {
    labels: twoWeeksLabels,
    datasets: [
      {
        data:  twoWeeksData,
        strokeWidth: 3,
        color: (opacity = 1) => `#3498db`,
      },
    ],
  };

  const chartConfig = {
    backgroundGradientFrom: '#1e1e1e',
    backgroundGradientTo: '#1e1e1e',
    color: (opacity = 1) => `#3698d9`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    decimalPlaces: 0,
    yAxisLabel: "$",
    propsForBackgroundLines: {
      stroke: "rgba(255, 255, 255, 0.2)",
      strokeDasharray: "",
      strokeWidth: 0.5,
    },
    propsForDots: {
      r: "5",
      strokeWidth: "2.5",
      stroke: "white",
      fill: "#3498db",
    },
    formatYLabel: (yValue) => {
  return Number(yValue).toLocaleString(); // Adds commas
},
    propsForVerticalLabels: {
      fontSize: 12,
    },
    segments: 10,
  };

  const handleDataPointClick = ({ index }) => {
    setSelectedIndex(index);
    const revenue = twoWeeksData[index];
    setSelectedData(`Revenue: ${revenue.toLocaleString()}`);

  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#1e1e1e',
        paddingHorizontal: 20,
        paddingVertical: 15,
        justifyContent: 'center',
        borderRadius:10
      }}
    >

      {selectedData && (
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
          <Text
            style={{
              color: 'white',
              fontSize: 13,
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
            {selectedData}
          </Text>
        </View>
      )}

      <ScrollView horizontal contentContainerStyle={{ alignItems: 'center' }}>
        <LineChart
          data={data}
          width={screenWidth}
          height={280}
          chartConfig={chartConfig}
          bezier
          onDataPointClick={handleDataPointClick}
          withInnerLines
          withOuterLines
          segments={7}
          formatYLabel={value => Number(value).toLocaleString()}
          renderDotContent={({ x, y, index }) => {
            if (index === selectedIndex) {
              return (
                <View
                  key={`dot-${index}`}
                  style={{
                    position: 'absolute',
                    top: y - 8,
                    left: x - 8,
                    width: 16,
                    height: 16,
                    borderRadius: 8,
                    backgroundColor: '#0092f5',
                    borderWidth: 2,
                    borderColor: '#fff',
                  }}
                />
              );
            }
            return null;
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default RevenueChart;
