import React from 'react';
import {Text, View, SafeAreaView, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Profile = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  
  return (
    <SafeAreaView style={backgroundStyle}>
      <View>
        <Text>Profile Works!</Text>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
