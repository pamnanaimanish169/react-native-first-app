/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

import {
  Button,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {Formik} from 'formik';
import * as yup from 'yup';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const loginFormValidation = yup.object().shape({
  email : yup
  .string()
  .email("Please enter valid email")
  .required("Email Adress is required"),

  password : yup
  .string()
  .min(8, ({ min }) => `Password must be atleast ${min} characters`)
  .required("Password is required")
});

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      {/* Main Div Start */}
      {/* justifyContent : 'center' */}
      <View style={{height: '100%', paddingTop: 10}}>
        <Formik 
        initialValues={{email: '', password: ''}}
        onSubmit={(values) => console.log('values inside Formik ' , values)}
        validationSchema={loginFormValidation}
        >
          {({handleChange, handleBlur, handleSubmit, values, errors, isValid}) => (
            <>
              <View style={styles.email}>
                <Text
                  style={{
                    marginTop: 5,
                    marginBottom: 5,
                    marginLeft: 3,
                    fontWeight: 'bold',
                  }}
                  >
                  Email
                </Text>
                <TextInput 
                style={styles.inputStyle}
                onBlur={handleBlur('email')}
                value={values.email}
                keyboardType={'email-address'}
                onChangeText={handleChange('email')}
                ></TextInput>
                {
                  errors.email && 
                  <Text style={{ fontSize : 10, color : 'red'}}>{errors.email}</Text>
                }
              </View>

              <View style={styles.password}>
                <Text
                  style={{
                    marginTop: 5,
                    marginBottom: 5,
                    marginLeft: 3,
                    fontWeight: 'bold',
                  }}>
                  Password
                </Text>
                <TextInput
                  style={styles.inputStyle}
                  secureTextEntry={true}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  onChangeText={handleChange('password')}
                  >
                  </TextInput>
                  {
                    errors.password && 
                    <Text style={{ fontSize : 10, color : 'red' }}>
                      {errors.password}
                    </Text>
                  }
              </View>

              {/* <BouncyCheckbox style={{marginTop : 5, marginBottom : 5, marginLeft :3, fontWeight : 'bold'}} text="Remember Me" onPress={(isChecked) => {}} ></BouncyCheckbox> */}

              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  margin: 5,
                }}>
                <Pressable
                  style={{
                    backgroundColor: '#24a0ed',
                    alignItems: 'center',
                    paddingVertical: 10,
                    paddingHorizontal: 30,
                    elevation: 3,
                    borderRadius: 5,
                    marginRight: 2,
                  }}
                  onPress={handleSubmit}>
                  <Text style={{color: 'white'}}>Submit</Text>
                </Pressable>

                <Pressable
                  style={{
                    backgroundColor: '#d9534f',
                    alignItems: 'center',
                    paddingVertical: 10,
                    paddingHorizontal: 30,
                    elevation: 3,
                    borderRadius: 5,
                  }}
                  disabled={!isValid}
                  onPress={() => {}}>
                  <Text style={{color: 'white'}}>Cancel</Text>
                </Pressable>
              </View>
            </>
          )}
        </Formik>
      </View>
      {/* Main Div End */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  inputStyle: {
    borderWidth: 1,
    borderRadius: 5,
  },
  email: {
    margin: 5,
    fontWeight: '900',
  },
  password: {
    margin: 5,
  },
});

export default App;
