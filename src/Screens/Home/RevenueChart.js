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
import { theme } from '../../Styles/themes';

const screenWidth = Dimensions.get('screen').width;

const RevenueChart = ({ selectedPeriod }) => {


  const [selectedDataRevenue, setSelectedDataRevenue] = useState(null);
  const [selectedDataPeriod, setSelectedDataPeriod] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);


  // Two weeks data
  const twoWeeksData = [12000, 15000];
  const twoWeeksLabels = ['Week 1', 'Week 2'];
  const twoWeeksSegments = 7;

  // one weeks data
  const oneWeeksData = [12000, 14000, 13000, 16000, 17000, 15000, 18000]; // 7 values
  const oneWeeksLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']; // 7 labels
  const oneWeeksSegments = 5; 


  // Three days data
  const threeDaysData = [12000, 15000, 18000];
  const threeDaysLabels = ['Day 1', 'Day 2', 'Day 3'];
  const threeDaysSegments = 7; // You can adjust this as needed


  // one days data
  const oneDaysData = [1200, 3400, 4200, 5100, 3900, 3000];
  const oneDaysLabels = ['12AM', '4AM', '8AM', '12PM', '4PM', '8PM'];
  const oneDaysSegments = 7;

  const [chartLabels, setChartLabels] = useState(twoWeeksLabels);
  const [chartData, setChartData] = useState(twoWeeksData);
  const [chartSegment, setChartSegment] = useState(twoWeeksSegments);

  useEffect(() => {

    setSelectedDataPeriod(null);
    setSelectedDataRevenue(null);
    setSelectedIndex(null);
    if (selectedPeriod.num === 1 && selectedPeriod.period === 'DAY') {
      setChartLabels(oneDaysLabels);
      setChartData(oneDaysData);
      setChartSegment(oneDaysSegments)
    }
    else if (selectedPeriod.num === 3 && selectedPeriod.period === 'DAYS') {
      setChartLabels(threeDaysLabels);
      setChartData(threeDaysData);
      setChartSegment(threeDaysSegments)
    }
    else if (selectedPeriod.num === 1 && selectedPeriod.period === 'WEEK') {
      setChartLabels(oneWeeksLabels);
      setChartData(oneWeeksData);
      setChartSegment(oneWeeksSegments);
    }
    else if (selectedPeriod.num === 2 && selectedPeriod.period === 'WEEKS') {
      setChartLabels(twoWeeksLabels);
      setChartData(twoWeeksData);
      setChartSegment(twoWeeksSegments);
    }
  }, [selectedPeriod])


  const data = {
    labels: chartLabels,
    datasets: [
      {
        data: chartData,
        strokeWidth: 3,
        color: (opacity = 1) => `#3498db`,
      },
    ],
  };

  const chartConfig = {
    backgroundGradientFrom: '#1e1e1e',
    backgroundGradientTo: '#1e1e1e',
    color: (opacity = 1) => `#3698d9`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255,0.6)`,
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
    const revenue = chartData[index];
    const period = chartLabels[index];
    setSelectedDataRevenue(`Revenue: ${revenue?.toLocaleString?.() || 'N/A'}`);
    setSelectedDataPeriod(period)

  };

  const formatYLabel = (value) => {
    try {
      return Number(value).toLocaleString()
    } catch (error) {
      console.log('error', error)
    }
  }



  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#1e1e1e',
        paddingHorizontal: 20,
        paddingVertical: 15,
        justifyContent: 'center',
        borderRadius: 10
      }}
    >

      {(selectedDataRevenue && selectedDataPeriod) && (
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
            {selectedDataPeriod}
          </Text>
          <Text
            style={{
              color: 'white',
              fontSize: 13,
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
            {selectedDataRevenue}
          </Text>
        </View>
      )}

      <ScrollView horizontal contentContainerStyle={{ alignItems: 'center' }}>
        <LineChart
          data={data}
          width={screenWidth-30}
          height={280}
          chartConfig={chartConfig}
          bezier
          onDataPointClick={handleDataPointClick}
          withInnerLines
          withOuterLines
          segments={chartSegment}
          formatYLabel={value => formatYLabel(value)}
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
