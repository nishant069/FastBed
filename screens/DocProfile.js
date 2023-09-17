import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, ToastAndroid } from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const DocProfile = ({ route }) => {
  const { doctor } = route.params;
  const [showFullText, setShowFullText] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const timeSlots = [
    '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM',
    '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM', '10:00 PM',
  ];

  const navigation = useNavigation();

  const handlePressIn = (day) => {
    setSelectedDay(day);
  };

  const toggleShowFullText = () => {
    setShowFullText(!showFullText);
  };

  const getDayOfWeek = (year, month, day) => {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const date = new Date(year, month, day);
    return daysOfWeek[date.getDay()];
  };


  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const currentMonthName = months[currentMonth];

  const handleMonthChange = (change) => {
    if (change === -1) {
      if (currentMonth === 0) {
        setCurrentMonth(11);
        setCurrentYear(currentYear - 1);
      } else {
        setCurrentMonth(currentMonth - 1);
      }
    } else {
      if (currentMonth === 11) {
        setCurrentMonth(0);
        setCurrentYear(currentYear + 1);
      } else {
        setCurrentMonth(currentMonth + 1);
      }
    }
  };

  const renderTimeSlots = () => {
    return timeSlots.map((slot, index) => (
      <TouchableOpacity
        key={index}
        onPress={() => setSelectedDate(slot)}
        style={{
          backgroundColor: selectedDate === slot ? '#5dbe74' : '#fff',
          padding: 10,
          borderRadius: 10,
          marginRight: 10,
          marginTop: 10,
        }}>
        <Text style={{ fontSize: 15, fontFamily: 'Urbanist-Regular', color: selectedDate === slot ? '#fff' : '#222222' }}>{slot}</Text>
      </TouchableOpacity>
    ));
  };
  const isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  };

  const getDaysInMonth = (year, month) => {
    const daysInMonth = [
      31, 
      isLeapYear(year) ? 29 : 28, 
      31, 
      30,
      31, 
      30, 
      31, 
      31, 
      30, 
      31,
      30, 
      31, 
    ];
    return daysInMonth[month];
  };
  
  const daysInCurrentMonth = getDaysInMonth(currentYear, currentMonth);


  const renderDayButtons = () => {
    const daysInCurrentMonth = getDaysInMonth(currentYear, currentMonth);
    return Array.from({ length: daysInCurrentMonth }).map((_, day) => (
      <TouchableOpacity
        key={day}
        onPress={() => handlePressIn(day + 1)} // Add +1 to day to make it 1-based
        style={{
          backgroundColor: selectedDay === day + 1 ? '#5dbe74' : '#fff',
          padding: 10,
          borderRadius: 10,
          marginRight: 10,
          marginTop: 10,
          width: 50,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{ fontSize: 15, fontFamily: 'Urbanist-Bold', color: selectedDay === day + 1 ? '#fff' : '#222222' }}>{day + 1}</Text>
        <Text style={{ fontSize: 15, fontFamily: 'Urbanist-Regular', color: selectedDay === day + 1 ? '#fff' : '#222222' }}>
          {getDayOfWeek(currentYear, currentMonth, day + 1)}
        </Text>
      </TouchableOpacity>
    ));
  };

  


  return (
    <View style={{ flex: 1, backgroundColor: '#eee' }}>
      <View style={{ flexDirection: 'row', padding: 20, backgroundColor: '#eee', width: '100%', alignItems: 'center' }}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
         style={{ width: 50, height: 50, borderRadius: 15, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }}>
          <FontAwesome5Icon name="chevron-left" size={24} color="#111" />
        </TouchableOpacity>
        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#111', marginLeft: 70 }}>Detail Doctor</Text>
      </View>
      <View style={{ width: '100%', height: 'auto', backgroundColor: '#eee', flexDirection: 'row', padding: 20 }}>
        <Image source={{ uri: doctor.profile }} style={{ width: 100, height: 100, borderRadius: 15 }} />
        <View style={{ marginLeft: 20 }}>
          <Text style={{ fontSize: 20, fontFamily: 'Urbanist-Bold', color: '#111' }}>{doctor.name}</Text>
          <Text style={{ fontSize: 15, color: '#313131', marginTop: 5 }}>{doctor.speciality}</Text>
          <View style={{ flexDirection: 'row', marginTop: 25, alignItems: 'center' }}>
            <FontAwesome5Icon name="map-marker-alt" size={16} color="#111" />
            <Text style={{ fontSize: 15, color: '#313131', marginLeft: 5 }}>{doctor.location}</Text>
          </View>
        </View>
      </View>
      <View style={{ width: '100%', backgroundColor: '#eee', padding: 10 }}>
        <View style={{ marginLeft: 10 }}>
          <Text style={{ fontSize: 20, fontFamily: 'Urbanist-Bold', color: '#666666' }}>About</Text>
          <Text style={{ fontSize: 15, fontFamily: 'Urbanist-Regular', color: '#666666', overflow: 'hidden', marginTop: 10, height: showFullText ? 'auto' : 90 }}>{doctor.about}</Text>
          <TouchableOpacity onPress={toggleShowFullText}>
            <Text style={{ fontSize: 15, fontFamily: 'Urbanist-Regular', color: '#5dbe74', marginTop: 10 }}>{showFullText ? 'Read less' : 'Read more'}</Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginLeft: 10, marginTop: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 20, fontFamily: 'Urbanist-ExtraBold', color: '#222222' }}>Date</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity onPress={() => handleMonthChange(-1)}>
              <View style={{ backgroundColor: '#fff', padding: 10, borderRadius: 10, marginRight: 10 }}>
                <FontAwesome5Icon name="chevron-left" size={16} color="#111" />
              </View>
            </TouchableOpacity>
            <Text style={{ fontSize: 15, fontFamily: 'Urbanist-Regular', color: '#222222' }}>{currentMonthName}</Text>
            <Text style={{ fontSize: 15, fontFamily: 'Urbanist-Regular', color: '#222222', marginLeft: 5 }}>{currentYear}</Text>
            <TouchableOpacity onPress={() => handleMonthChange(1)}>
              <View style={{ backgroundColor: '#fff', padding: 10, borderRadius: 10, marginLeft: 10 }}>
                <FontAwesome5Icon name="chevron-right" size={16} color="#111" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {renderDayButtons()}
        </ScrollView>
        <View style={{ marginLeft: 10, marginTop: 20 }}>
          <Text style={{ fontSize: 20, fontFamily: 'Urbanist-ExtraBold', color: '#222222' }}>Time</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {renderTimeSlots()}
          </ScrollView>
        </View>
        <TouchableOpacity
          style={{
            width: '80%',
            height: 50,
            backgroundColor: '#5dbe74',
            borderRadius: 30,
            alignSelf: 'center',
            marginTop: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            if (selectedDate && selectedDay) {
              ToastAndroid.show('Appointment booked successfully for ' + selectedDay + ' ' + currentMonthName + ' ' + currentYear + ' at ' + selectedDate, ToastAndroid.SHORT);
            } else {
              ToastAndroid.show('Please select a date and time first.', ToastAndroid.SHORT);
            }
          }}>
          <Text style={{ fontSize: 16, fontFamily: 'Urbanist-Bold', color: '#fff' }}>Book Appointment</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};

export default DocProfile;
