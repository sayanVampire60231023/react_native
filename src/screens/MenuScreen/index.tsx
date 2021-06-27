/* eslint-disable prettier/prettier */
import React from 'react';
import { SafeAreaView } from 'react-native';
import Button from '../../components/Button';
import {Auth} from 'aws-amplify';

// import { Container } from './styles';

const MenuScreen = () => {
    const Logout = () => {
        Auth.signOut();
    }
  return(
   <SafeAreaView>
         <Button text="Logout" onPress={Logout}/>
   </SafeAreaView>
  )
  }
export default MenuScreen;