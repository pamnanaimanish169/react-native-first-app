import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  useColorScheme,
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
} from 'react-native';
import Slider from 'react-native-slider';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const BookDetails = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <View>
        <View>
          {/* Header */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingLeft: 10,
              paddingRight: 10,
              paddingTop: 20,
            }}>
            <Image source={require('./assets/backIcon.png')}></Image>

            <Image source={require('./assets/bookMarkIcon.png')}></Image>
          </View>

          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image source={require('./assets/sampleImage.png')}></Image>

            <View>
              <Text
                style={{
                  fontWeight: '600',
                  fontSize: 18,
                  lineHeight: 18,
                  color: '#19191B',
                }}>
                Catcher in the Rye
              </Text>

              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: '#9D9D9D',
                  }}>
                  J.D. Salinger
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              paddingTop: 20,
              paddingLeft: 10,
              paddingRight: 10,
              paddingBottom: 0,
            }}>
            <View>
              <Text
                style={{
                  color: '#19191B',
                  fontWeight: '600',
                  fontSize: 18,
                  lineHeight: 27,
                  paddingBottom: 5,
                }}>
                About the author
              </Text>

              <Text
                style={{
                  color: '#9D9D9D',
                  fontWeight: '400',
                  fontSize: 14,
                }}>
                J.D. Salinger was an American writer, best known for his 1951
                novel The Catcher in the Rye. Before its publi cation, Salinger
                published several short stories in Story magazine
              </Text>
            </View>
          </View>

          <View
            style={{
              paddingTop: 20,
              paddingLeft: 10,
              paddingRight: 10,
            }}>
            <View>
              <Text
                style={{
                  color: '#19191B',
                  fontWeight: '600',
                  fontSize: 18,
                  lineHeight: 27,
                  paddingBottom: 5,
                }}>
                Overview
              </Text>

              <Text
                style={{
                  color: '#9D9D9D',
                  fontWeight: '400',
                  fontSize: 14,
                }}>
                The Catcher in the Rye is a novel by J. D. Salinger, partially
                published in serial form in 1945–1946 and as a novel in 1951. It
                was originally intended for adu lts but is often read by
                adolescents for its theme of angst, alienation and as a
                critique......{' '}
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            position: 'absolute',
            // top : 0,
            left: 0,
            bottom: -16,
            right: 0,
            backgroundColor: 'white',
            // minHeight : 60,
            // borderBottomLeftRadius: 20,
            // borderBottomRightRadius: 20,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            height: 70,
            paddingLeft: 8,
            paddingRight: 8,
            shadowColor: '#000',
            shadowOffset: {width: 0, height: -10},
            shadowRadius: 20,
            elevation: 4,
            display: 'flex',
            flexDirection: 'row',
          }}>
          <Pressable
            style={{
              backgroundColor: '#d45555',
              margin: 10,
              padding: 15,
              borderRadius: 10,
              width: 150,
            }}>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
              }}>
              Read Previews
            </Text>
          </Pressable>

          <Pressable
            style={{
              backgroundColor: '#000',
              margin: 10,
              padding: 15,
              borderRadius: 10,
              width: 150,
            }}>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
              }}>
              Buy for $14.05
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default BookDetails;
