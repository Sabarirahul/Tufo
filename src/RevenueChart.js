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
    setShowAllWeeks((prev) => !prev);
    setSelectedData(null);
    setSelectedIndex(null);
  }, [selectedPeriod])
  const [selectedData, setSelectedData] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [showAllWeeks, setShowAllWeeks] = useState(false);

  // Full data (4 weeks)
  const allWeeksData = [120000, 150000, 180000, 200000];
  const allWeeksLabels = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];

  // Two weeks data
  const twoWeeksData = [120000, 150000];
  const twoWeeksLabels = ['Week 1', 'Week 2'];

  const data = {
    labels: showAllWeeks ? allWeeksLabels : twoWeeksLabels,
    datasets: [
      {
        data: showAllWeeks ? allWeeksData : twoWeeksData,
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
    propsForVerticalLabels: {
      fontSize: 12,
    },
    segments: 10,
  };

  const handleDataPointClick = ({ index }) => {
    setSelectedIndex(index);
    const revenue = showAllWeeks ? allWeeksData[index] : twoWeeksData[index];
    setSelectedData(`Revenue: $${revenue}`);
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#1e1e1e',
        paddingHorizontal: 20,
        paddingVertical: 15,
        justifyContent: 'center',
      }}
    >

      {selectedData && (
        <View
          style={{
            backgroundColor: '#2c3e50',
            paddingVertical: 10,
            paddingHorizontal: 15,
            borderRadius: 12,
            alignSelf: 'flex-end',
          }}
        >
          <Text
            style={{
              color: '#00c6ff',
              fontSize: 15,
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
          yAxisLabel="$"
          chartConfig={chartConfig}
          bezier
          onDataPointClick={handleDataPointClick}
          withInnerLines
          withOuterLines
          segments={selectedPeriod.num === 1 ? 10 : 5}
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
