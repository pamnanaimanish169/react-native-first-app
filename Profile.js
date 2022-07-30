import {Formik} from 'formik';
import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  useColorScheme,
  StyleSheet,
  Image,
  TextInput,
} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import * as yup from 'yup';

const onPress = () => {
  console.log('onPress');
};

const onSubmit = values => {
  console.log('values', values);
};

const profileFormValidation = yup.object().shape({
  name: yup.string().required('Name is required'),
});

const Profile = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <Formik
        initialValues={{name: ''}}
        onSubmit={values => onSubmit(values)}
        validationSchema={profileFormValidation}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          isValid,
        }) => (
          <View style={styles.profileContainer}>
            <View>
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  color: 'black',
                }}>
                Bio-Data
              </Text>
            </View>

            <View
              style={{
                // horizontal center
                justifyContent: 'center',
                // vertical center
                alignItems: 'center',
                paddingTop: 50,
              }}>
              <Image
                style={{
                  width: 72,
                  height: 72,
                }}
                source={require('./assets/User_image.png')}></Image>
            </View>

            <View
              style={{
                alignItems: 'center',
                paddingTop: 20,
              }}>
              {/* textShadowColor: 'rgba(0, 0, 0, 0.75)',
  textShadowOffset: {width: -1, height: 1},
  textShadowRadius: 10 */}

              <Text
                style={{
                  fontWeight: '700',
                  color: '#181D27',
                  textShadowColor: 'rgba(0, 0, 0, 0.25)',
                  textShadowOffset: {width: 0, height: 4},
                  textShadowRadius: 4,
                }}>
                Itunuoluwa Abidoye
              </Text>

              <Text
                style={{
                  color: '#ABABAB',
                }}>
                Itunuoluwa@petra.africa
              </Text>
            </View>

            {/* Input fields */}
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                paddingTop: 20,
              }}>
              <View
                style={{
                  padding: 10,
                }}>
                <TextInput
                  style={{
                    backgroundColor: 'white',
                    borderRadius: 5,
                    paddingLeft: 12,
                    fontWeight: '400',
                  }}
                  placeholder="What's your name?"
                  onBlur={handleBlur('name')}
                  value={values.name}
                  onChangeText={handleChange('name')}
                  ></TextInput>

                  {
                    errors.name && (
                      <Text style={{fontSize : 10, color : 'red'}}>
                        {errors.name}
                      </Text>
                    )
                  }
              </View>

              {/* Extra views for future use */}
              {/* <View style={{
            padding : 10
          }}>
            <TextInput
            style={{
              backgroundColor : 'white',
              borderRadius : 5,
              paddingLeft : 12,
              fontWeight : '400'
            }}
            placeholder="What's your name?"
            ></TextInput>
          </View>

          <View style={{
            padding : 10
          }}>
            <TextInput
            style={{
              backgroundColor : 'white',
              borderRadius : 5,
              paddingLeft : 12,
              fontWeight : '400'
            }}
            placeholder="What's your name?"
            ></TextInput>
          </View>

          <View style={{
            padding : 10
          }}>
            <TextInput
            style={{
              backgroundColor : 'white',
              borderRadius : 5,
              paddingLeft : 12,
              fontWeight : '400'
            }}
            placeholder="What's your name?"
            ></TextInput>
          </View> */}

              <View
                style={{
                  padding: 10,
                }}>
                <Pressable onPress={handleSubmit}>
                  <Text
                    style={{
                      textAlign: 'center',
                      backgroundColor: '#0601B4',
                      padding: 20,
                      borderRadius: 15,
                      color: 'white',
                    }}>
                    Update Profile
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    backgroundColor: '#E5E5E5',
    height: '100%',
    paddingTop: 20,
    textAlign: 'center',
  },
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

export default Profile;
