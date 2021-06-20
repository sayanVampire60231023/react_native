/* eslint-disable prettier/prettier */
import { Picker } from '@react-native-picker/picker';
import React, { useState} from 'react';
import { View ,Text, TextInput,Alert,ScrollView,Platform,KeyboardAvoidingView} from 'react-native';
import styles from './styles';
import countryList from 'country-list';
import Button from '../../components/Button';




// import { Container } from './styles';
const countries = countryList.getData();
const AddressScreen= () => {
     const [country ,setCountry]=useState(countries[0].code);
    const [fullname, setFullname] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [addressError, setAddressError] = useState('Invalid Address');

    
    const onCheckout = () => {
        if (addressError) {
            Alert.alert('Fix all field errors before submiting');
            return;
        }

        if (!fullname) {
            Alert.alert('Please fill in the fullname field');
            return;
        }

        if (!phone) {
            Alert.alert('Please fill in the phone number field');
            return;
        }
    }

    const validateAddress=()=>{
        if(address.length<3)
        {
            console.warn("its too small");

        }
        
    }




    const [city, setCity] = useState('');
    
  return (
      <KeyboardAvoidingView  
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : 0}>
         
          <ScrollView style={styles.root}>
              <View style={styles.row}>
                  <Picker selectedValue={country}
                      onValueChange={setCountry}>
                      {countries.map(country => (<Picker.Item value={country.id} label={country.name} />))}

                  </Picker>
              </View>
              {/*  full  name */}
              <View style={styles.row}>
                  <Text style={styles.label}>Full name(first and last name)</Text>

                  <TextInput style={styles.input} placeholder="Full name"
                      value={fullname}
                      onChangeText={setFullname} />
              </View>

              {/*  phn */}

              <View style={styles.row}>
                  <Text style={styles.label}>Phone number</Text>

                  <TextInput style={styles.input} placeholder="phone"
                      value={phone}
                      onChangeText={setPhone}
                      keyboardType={'phone-pad'} />
              </View>


              {/*  addr */}

              <View style={styles.row}>
                  <Text style={styles.label}>Address</Text>

                  <TextInput style={styles.input} placeholder="Address"
                      value={address}
                      onEndEditing={validateAddress}
                      onChangeText={text => {
                          setAddress(text);
                          setAddressError('')
                      }} />
                  {!!addressError && (<Text style={styles.errorLabel}>{addressError}</Text>)}
              </View>
              <View style={styles.row}>
                  <Text style={styles.label}>City</Text>

                  <TextInput style={styles.input} placeholder="city"
                      value={city}
                      onChangeText={setCity} />

              </View>
              <View>
                  <Button text="ChackOut" onPress={onCheckout} />
              </View>
          </ScrollView>
      </KeyboardAvoidingView>
      
      
  )
}

export default AddressScreen;