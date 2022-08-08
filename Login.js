import React from 'react';
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

import {Link} from '@react-navigation/native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import {Formik} from 'formik';
import * as yup from 'yup';
import {useNavigation} from '@react-navigation/native';

const loginFormValidation = yup.object().shape({
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email Adress is required'),

  password: yup
    .string()
    .min(8, ({min}) => `Password must be atleast ${min} characters`)
    .required('Password is required'),
});

const Login = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const navigate = useNavigation();

  function onSubmit(e) {
    navigate.navigate('profile');
  }

  return (
    <SafeAreaView style={backgroundStyle}>
            {navigate.navigate('readBook')}

      {/* Comment after profile page is complete */}
      {/* {navigate.navigate('home')} */}

      {/* Main Div Start */}
      {/* justifyContent : 'center' */}
      <View
        style={{
          height: '100%',
          paddingTop: 10,
          backgroundColor: '#E5E5E5',
        }}>
        <Formik
          initialValues={{email: '', password: ''}}
          onSubmit={onSubmit}
          validationSchema={loginFormValidation}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            isValid,
          }) => (
            <>
              <View
                style={{
                  paddingTop: 110,
                  // for vertical center a div
                  // flex : 1,
                  // justifyContent : 'center',
                }}>
                <View>
                  <Text
                    style={{
                      // textAlign : 'center',
                      color: '#312E49',
                      fontWeight: '400',
                      paddingLeft: 10,
                      fontSize: 34,
                    }}>
                    Login
                  </Text>
                </View>
                <View style={styles.email}>
                  <TextInput
                    style={{
                      backgroundColor: 'white',
                      borderRadius: 5,
                      paddingLeft: 12,
                      fontWeight: '400',
                    }}
                    placeholder="What's your email?"
                    onBlur={handleBlur('email')}
                    value={values.email}
                    keyboardType={'email-address'}
                    onChangeText={handleChange('email')}></TextInput>
                  {errors.email && (
                    <Text style={{fontSize: 10, color: 'red'}}>
                      {errors.email}
                    </Text>
                  )}
                </View>

                <View style={styles.password}>
                  <TextInput
                    style={{
                      backgroundColor: 'white',
                      borderRadius: 5,
                      paddingLeft: 12,
                      fontWeight: '400',
                    }}
                    placeholder="Mind to type your password?"
                    secureTextEntry={true}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    onChangeText={handleChange('password')}></TextInput>
                  {errors.password && (
                    <Text style={{fontSize: 10, color: 'red'}}>
                      {errors.password}
                    </Text>
                  )}
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
                      backgroundColor: '#0601B4',
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

                  {/* <Pressable
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
                  </Pressable> */}
                </View>
              </View>
              {/* Footer */}
            </>
          )}
        </Formik>
        <View style ={{
          position : 'absolute',
          bottom : 30,
          left : 0,
          right : 0
        }}>
          <Text style={{
            textAlign : 'center'
          }}>
            <Text
            style={{
              color : '#747980'
            }}
            >
              Don't have an account?{' '}
            </Text>
            <Link
            style={{
              color:'#2805FF'
            }}
            to={{screen: 'home'}}>Register Now.</Link>
          </Text>
        </View>
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
    // margin: 5,
    fontWeight: '900',
    padding: 10,
  },
  password: {
    // margin: 5,
    padding: 10,
  },
});

export default Login;
