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

const ReadBook = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
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

          <View>
            <Text
              style={{
                color: '#19191B',
                fontWeight: '600',
                fontSize: 18,
              }}>
              Catcher in the Rye
            </Text>

            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{}}>J.D. Salinger</Text>
            </View>
          </View>

          <Image source={require('./assets/threeDots.png')}></Image>
        </View>

        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>

          <ScrollView
          style={{
            marginTop : 20,
            paddingLeft : 10,
            paddingRight : 10
          }}
          >
            <Text style={{
                fontWeight : '400',
                fontSize : 15,
                lineHeight : 25
            }}>
              Pencey is Holden’s fourth school; he has already failed out of
              three others.At Pencey, he has failed four out of five of his
              classes and has received notice that he is being expelled, but he
              is not scheduled to return home to Manhattan until Wedne-sday. He
              visits his elderly history teacher, Spencer, to say goodbye, but
              when Spencer tries to reprimand him for his poor academic perfo rm
              ance, Holden becomes annoyed. Back in the dorm itory, Holden is
              further irritated by his unhygienic neighbor, Ackley, and by his
              own roommate, Strad later. Stradlater spends the evening on a date
              with Jane Gallagher, a girl whom Holden used to date and whom he
              still admires. During the course of the evening, Holden grows
              increasingly nervous about Stradlater ’s taking Jane out, and when
              Stradlater returns, Holden questions him insist ently about
              whether he tried to have sex with her. Stradlater teases Holden,
              who flies into a rage and attacks Stradlater. Stradlater pins
              Holden down and bloodies his nose. Holden decides that he’s enough
              of Pencey and will goand bloodies his nose.Holden decides that
              he’s enough of Pencey and will go and bloodies his nose. Holden
              decides that he’s enough of Pencey and will go

              Pencey is Holden’s fourth school; he has already failed out of
              three others.At Pencey, he has failed four out of five of his
              classes and has received notice that he is being expelled, but he
              is not scheduled to return home to Manhattan until Wedne-sday. He
              visits his elderly history teacher, Spencer, to say goodbye, but
              when Spencer tries to reprimand him for his poor academic perfo rm
              ance, Holden becomes annoyed. Back in the dorm itory, Holden is
              further irritated by his unhygienic neighbor, Ackley, and by his
              own roommate, Strad later. Stradlater spends the evening on a date
              with Jane Gallagher, a girl whom Holden used to date and whom he
              still admires. During the course of the evening, Holden grows
              increasingly nervous about Stradlater ’s taking Jane out, and when
              Stradlater returns, Holden questions him insist ently about
              whether he tried to have sex with her. Stradlater teases Holden,
              who flies into a rage and attacks Stradlater. Stradlater pins
              Holden down and bloodies his nose. Holden decides that he’s enough
              of Pencey and will goand bloodies his nose.Holden decides that
              he’s enough of Pencey and will go and bloodies his nose. Holden
              decides that he’s enough of Pencey and will go
            </Text>
          </ScrollView>
        </View>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default ReadBook;
