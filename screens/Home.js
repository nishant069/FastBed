import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, Animated } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import {
  Button, Card, Title, Paragraph, TextInput, Avatar, IconButton, Colors, Searchbar
} from 'react-native-paper';


import { useNavigation } from '@react-navigation/native';

const Home = () => {

  const navigation = useNavigation();
  const categories = [
    {
      name: 'Dentist',
      icon: 'tooth',
      color: '#B0C4DE',
    },
    {
      name: 'Cardiologist',
      icon: 'heart',
      color: '#B0C4DE',
    },
    {
      name: 'Dermatologist',
      icon: 'user-md',
      color: '#B0C4DE',
    },
    {
      name: 'Gynecologist',
      icon: 'female',
      color: '#B0C4DE',
    },
    {
      name: 'Neurologist',
      icon: 'brain',
      color: '#B0C4DE',
    },
    {
      name: 'Ophthalmologist',
      icon: 'eye',
      color: '#B0C4DE',
    },
  ];


  const doctors = [
    {
      name: 'John Smith',
      icon: 'user-md',
      color: '#5dbe74',
      speciality: 'Cardiologist',
      location: 'Apollo Hospital',
      about: 'Dr. John Smith is a Cardiologist in Apollo Hospital, Chennai and has an experience of 10 years in this field. Dr. John Smith practices at Apollo Hospital in Chennai. He completed MBBS from Madras Medical College, Chennai in 2008,MD - General Medicine from Madras Medical College, Chennai in 2012 and DM - Cardiology from Madras Medical College, Chennai in 2016.',
      rating: 4.8,
      // Add the profile image URL from Unsplash or other sources
      profile: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    },
    {
      name: 'Johnson',
      icon: 'user-md',
      color: '#5dbe74',
      speciality: 'Dermatologist',
      location: 'Apollo Hospital',
      about: 'Dr. Johnson is a Dermatologist in Apollo Hospital, Chennai and has an experience of 10 years in this field. Dr. Johnson practices at Apollo Hospital in Chennai. He completed MBBS from Madras Medical College, Chennai in 2008,MD - General Medicine from Madras Medical College, Chennai in 2012 and DM - Cardiology from Madras Medical College, Chennai in 2016.',
      rating: 4.7,
      profile: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGRvY3RvcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      name: 'Johnson',
      icon: 'user-md',
      color: '#5dbe74',
      speciality: 'Dentist',
      location: 'Apollo Hospital',
      about: 'Dr. Johnson is a Dermatologist in Apollo Hospital, Chennai and has an experience of 10 years in this field. Dr. Johnson practices at Apollo Hospital in Chennai. He completed MBBS from Madras Medical College, Chennai in 2008,MD - General Medicine from Madras Medical College, Chennai in 2012 and DM - Cardiology from Madras Medical College, Chennai in 2016.',
      rating: 4.7,
      profile: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGRvY3RvcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      name: 'Samuel',
      icon: 'user-md',
      color: '#5dbe74',
      speciality: 'Dentist',
      location: 'Apollo Hospital',
      rating: 4.7,
      about: 'Dr. Samuel is a Dentist in Apollo Hospital, Chennai and has an experience of 10 years in this field. Dr. Johnson practices at Apollo Hospital in Chennai. He completed MBBS from Madras Medical College, Chennai in 2008,MD - General Medicine from Madras Medical College, Chennai in 2012 and DM - Cardiology from Madras Medical College, Chennai in 2016.',
      // Add the profile image URL from Unsplash or other sources
      profile: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      name: 'Johnson',
      icon: 'user-md',
      color: '#5dbe74',
      speciality: 'Dermatologist',
      rating: 4.7,
      // Add the profile image URL from Unsplash or other sources
      profile: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGRvY3RvcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      name: 'Johnson',
      icon: 'user-md',
      color: '#5dbe74',
      speciality: 'Dermatologist',
      rating: 4.7,
      // Add the profile image URL from Unsplash or other sources
      profile: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGRvY3RvcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      name: 'Johnson',
      icon: 'user-md',
      color: '#5dbe74',
      speciality: 'Dermatologist',
      rating: 4.7,
      // Add the profile image URL from Unsplash or other sources
      profile: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGRvY3RvcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    },

  ]

  const hospitals = [
    {
      name: 'Apollo Hospital',
      icon: 'hospital',
      color: '#5dbe74',
      speciality: 'Cardiologist',
      rating: 4.8,
      // Add the profile image URL from Unsplash or other sources
      profile: 'https://images.unsplash.com/photo-1512677859289-868722942457?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGFwb2xsbyUyMGhvc3BpdGFsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    },

    {
      name: 'Fortis Hospital',
      icon: 'hospital',
      color: '#5dbe74',
      speciality: ['Cardiologist', 'Dermatologist',],
      rating: 4.7,
      // Add the profile image URL from Unsplash or other sources
      profile: 'https://images.unsplash.com/photo-1599700403969-f77b3aa74837?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGFwb2xsbyUyMGhvc3BpdGFsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    },

    {
      name: 'Max Hospital',
      icon: 'hospital',
      color: '#5dbe74',
      speciality: 'Multi-speciality',
      rating: 4.7,
      // Add the profile image URL from Unsplash or other sources
      profile: 'https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG9zcGl0YWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    },

    {
      name: 'AIIMS',
      icon: 'hospital',
      color: '#5dbe74',
      speciality: 'Dermatologist',
      rating: 4.7,
      // Add the profile image URL from Unsplash or other sources
      profile: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG9zcGl0YWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    },
  ]

  const [scrollY, setScrollY] = useState(0);
  const [activeCategory, setActiveCategory] = useState('Dentist');

  const handleScroll = (event) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    setScrollY(offsetY);
  };

  const filterDoctorsByCategory = (categoryName, doctors) => doctors.filter((doctor) => doctor.speciality === categoryName);

  const filterHospitalsByCategory = (categoryName, hospitals) => hospitals.filter((hospital) => hospital.speciality === categoryName);

  const renderCategories = () => (
    <View style={styles.categories}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.categoryItem,
              activeCategory === category.name && { backgroundColor: '#5dbe74' },
            ]}
            onPress={() => setActiveCategory(category.name)}
          >
            <FontAwesome name={category.icon} size={22} color={activeCategory === category.name ? '#fff' : "#6c757d"} solid />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );

  const renderDoctorsList = () => {
    const filteredDoctors = filterDoctorsByCategory(activeCategory, doctors);

    return (
      <View style={styles.doctorsList}>
        {filteredDoctors.map((doctor, index) => (
          <TouchableOpacity
            key={index}
            style={styles.doctorCard}
            onPress={() => {
              const selectedDoctorName = doctor;
              console.log('Selected Doctor Name:', selectedDoctorName);
              navigation.navigate('DocProfile', { doctor: selectedDoctorName });
            }}>


            <View style={styles.doctorImageContainer}>
              <Image source={{ uri: doctor.profile }} style={styles.doctorImage} />
            </View>
            <View style={styles.doctorInfo}>
              <Text style={styles.doctorName}>{doctor.name}</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={styles.doctorSpeciality}>{doctor.speciality}</Text>
              </View>
              <View style={styles.doctorRating}>
                <FontAwesome name="star" size={16} color="#5dbe74" solid />
                <Text style={styles.ratingText}>{doctor.rating}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))
        }
      </View>
    );
  };

  const renderHospitalsList = () => {
    const filteredHospitals = filterHospitalsByCategory(activeCategory, hospitals);

    return (
      <View style={styles.doctorsList}>
        {filteredHospitals.map((hospital, index) => (
          <TouchableOpacity
            key={index}
            style={styles.doctorCard}
            onPress={() => {
              const selectedHospitalName = hospital;
              console.log('Selected Hospital Name:', selectedHospitalName);
              navigation.navigate('HospitalProfile', { hospital: selectedHospitalName });
            }}>
            <View style={styles.doctorImageContainer}>
              <Image source={{ uri: hospital.profile }} style={styles.doctorImage} />
            </View>
            <View style={styles.doctorInfo}>
              <Text style={styles.doctorName}>{hospital.name}</Text>
              <View style={styles.doctorRating}>
                <FontAwesome name="star" size={16} color="#5dbe74" solid />
                <Text style={styles.ratingText}>{hospital.rating}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))
        }
      </View>
    );
  };

  const [selectedRender, setSelectedRender] = useState('doctors');

  const handlePressIn = () => {
    if (selectedRender === 'doctors') {
      setSelectedRender('hospitals');
    } else {
      setSelectedRender('doctors');
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        onScroll={handleScroll}
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[1, 4]}>

        <View style={{ backgroundColor: '#5dbe74' }} />

        <View style={styles.nameContainer}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Text style={styles.headerText}>
              Hi, <Text style={styles.headerName}>Mahi</Text>
            </Text>
            <View style={styles.userIcon}>
              <FontAwesome name="user" size={20} color="#fff" solid />
            </View>
          </View>
        </View>

        <View style={styles.header}>
          <Text style={styles.headerTitle}>Connecting you</Text>
          <Text style={styles.headerTitle}>with trusted care</Text>
          <TouchableOpacity style={{
            marginTop: 20,
            backgroundColor: '#fff',
            padding: 10,
            borderRadius: 20,
            width: '95%',
            alignSelf: 'center',

          }}>
          <Text style={{ 
            fontSize: 20, 
            fontFamily: 'Urbanist-ExtraBold', 
            color: '#222222',
            alignSelf: 'center',
            justifyContent: 'center',
             }}>
          Book Now
          </Text>
          </TouchableOpacity>
        </View>

        <View style={{ paddingHorizontal: 20 }}>
          <Text style={styles.categoriesTitle}>Categories</Text>
        </View>

        {renderCategories()}

        <View style={{
          paddingHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between',
          alignItems: 'center', height: 50, backgroundColor: '#eee'
        }}>
          <Text
            style={{ fontSize: 25, fontFamily: 'Urbanist-ExtraBold', color: '#222222' }}
          >Top {selectedRender === 'doctors' ? 'Doctors' : 'Hospitals'}</Text>
          <TouchableOpacity
            onPress={() => handlePressIn()}
            style={{ height: 40, width: 40, borderRadius: 20, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' }}
          >
            {selectedRender === 'doctors' ? (
              <FontAwesome name="chevron-right" size={20} color="#000" solid />
            ) : (
              <FontAwesome name="chevron-left" size={20} color="#000" solid />
            )}

          </TouchableOpacity>
        </View>

        {selectedRender === 'doctors' ? renderDoctorsList() : renderHospitalsList()}

      </ScrollView>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
  header: {
    marginBottom: 10,
    backgroundColor: '#5dbe74',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#5dbe74',
    padding: 20,
  },
  headerText: {
    fontSize: 20,
    color: "#eee",
  },
  headerName: {
    fontWeight: 'bold',
    fontSize: 22,
    color: "#fff",
  },
  userIcon: {
    backgroundColor: '#5dbe95',
    height: 40,
    width: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 30,
    color: "#eee",
    fontFamily: 'Urbanist-Bold',
  },
  searchBar: {
    marginTop: 20,
    borderRadius: 20,
    backgroundColor: '#fff',
    height: 50,
    width: '100%',
  },
  categories: {
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#eee',
  },
  categoriesTitle: {
    fontSize: 23,
    color: '#131313',
    marginBottom: 10,
    fontFamily: 'Urbanist-ExtraBold',
  },
  categoryItem: {
    backgroundColor: '#fff',
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
  doctorsList: {
    marginHorizontal: 10,
    padding: 10,
  },
  doctorCard: {
    backgroundColor: '#fff',
    borderRadius: 20,
    flexDirection: 'row',
    marginBottom: 20,
    elevation: 3,
    borderColor: '#eee',
  },
  doctorImageContainer: {
    backgroundColor: "transparent",
  },
  doctorImage: {
    height: 100,
    width: 100,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  doctorInfo: {
    marginLeft: 10,
    marginTop: 10,
  },
  doctorName: {
    fontSize: 15,
    fontFamily: 'Urbanist-Bold',
    color: '#000',
    marginTop: 5,
  },
  doctorSpeciality: {
    fontSize: 12,
    color: '#222',
  },
  doctorRating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,

  },
  ratingText: {
    fontSize: 14,
    color: '#000',
    marginLeft: 5,
  },
});

export default Home;
