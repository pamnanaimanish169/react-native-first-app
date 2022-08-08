import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  useColorScheme,
  View,
  Text,
  Image,
  ScrollView,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const BookDetails = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <View style={{display : 'flex'}}>
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default BookDetails;
