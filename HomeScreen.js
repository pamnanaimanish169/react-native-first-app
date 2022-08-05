import {
  SafeAreaView,
  StyleSheet,
  useColorScheme,
  Text,
  View,
  Image,
  TextInput,
  useWindowDimensions,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

const Tab = createMaterialTopTabNavigator();

const novelRoute = () => <View style={{flex: 1, backgroundColor: '#ff4081'}} />;

const selfLoveRoute = () => (
  <View style={{flex: 1, backgroundColor: '#673ab7'}} />
);

const scienceRoute = () => (
  <View style={{flex: 1, backgroundColor: '#fff'}} />
);
const romanceRoute = () => (
  <View style={{flex: 1, backgroundColor: '#673ab7'}} />
);
const childrenRoute = () => (
  <View style={{flex: 1, backgroundColor: '#ff4081'}} />
);
const sampleRoute = () => (
    <View style={{flex: 1, backgroundColor: '#fff'}} />
  );

const renderScene = SceneMap({
  novel: novelRoute,
  selfLove: selfLoveRoute,
  science: scienceRoute,
  romance: romanceRoute,
  children: childrenRoute,
  sample : sampleRoute
});

const HomeScreen = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    {
      key: 'novel',
      title: 'Novel',
    },
    {
      key: 'selfLove',
      title: 'Self Love',
    },
    {
      key: 'science',
      title: 'Science',
    },
    {
      key: 'romance',
      title: 'Romance',
    },
    {
      key: 'children',
      title: 'Children',
    },
    {
        key : 'sample',
        title : 'sample'
    }
  ]);
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const renderTabBar = (props) => {
    return (
        <TabBar
        
        {...props}
        scrollEnabled
        style={styles.tabbar    }
        tabStyle={{  minHeight : 30,width: 'auto' }}
        indicatorStyle={styles.indicator}
        renderLabel={({ route, focused, color }) => (
            <Text style={{ color : '#9D9D9D' , margin : 2 , flexWrap : 'wrap-reverse'}}>
                {route.title}
            </Text>
        )}
        >

        </TabBar>
    )
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      {/* Main Container Start */}
      <View>
        {/* Header */}
        <View
          style={{
            marginTop: 20,
            paddingLeft: 30,
            paddingRight: 30,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View>
            <Image
              source={require('./assets/drawreIcon.png')}
              style={{
                width: 20,
                height: 20,
              }}></Image>
          </View>

          <View>
            <Image source={require('./assets/defaultProfile.png')}></Image>
          </View>
        </View>
        {/* Header */}

        <View
          style={{
            paddingTop: 20,
            paddingLeft: 30,
            paddingRight: 30,
          }}>
          <View>
            <Text
              style={{
                color: '#9D9D9D',
                fontSize: 16,
                lineHeight: 24,
              }}>
              Welcome back, Bunny!
            </Text>
          </View>
          <View>
            <Text
              style={{
                color: '#19191B',
                fontWeight: '400',
                fontSize: 26,
                lineHeight: 36,
                fontStyle: 'normal',
              }}>
              What do you want to do today?
            </Text>
          </View>
        </View>

        {/* https://snack.expo.dev/embedded/@aboutreact/-image-inside-textinput-example?platform=web */}
        {/* <View 
                style={{
                    paddingTop : 34,
                    paddingLeft : 30,
                    paddingRight : 30,
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#fff',
                }}
                >
                    <TextInput
                    style={{
                        borderWidth : 1,
                        borderColor : '#C4C4C4',
                        backgroundColor : 'rgba(196, 196, 196, 0.15)',
                        borderRadius : 10,
                    }}
                    placeholder='Search'
                    ></TextInput>
                    <Icon style={styles.searchIcon} name="ios-search" size={20} color="#000"/>
                    <Image 
                    source={require('./assets/magnifyingglass.png')}
                    style={{
                        padding: 10,    
                    }}
                    >

                    </Image>
                    <TextInput
                        style={
                            {
                                // borderWidth : 1,
                                // borderColor : '#C4C4C4',
                                // backgroundColor : 'rgba(196, 196, 196, 0.15)',
                                // borderRadius : 10,
                                flex: 1,
                                paddingTop: 10,
                                paddingRight: 10,
                                paddingBottom: 10,
                                paddingLeft: 0,
                                backgroundColor: '#fff',
                                color: '#424242',
                            }
                        }
                        placeholder="User Nickname"
                        // onChangeText={(searchString) => {this.setState({searchString})}}
                        underlineColorAndroid="transparent"
                    />
                </View> */}

        {/* Multiple tabs */}
        {/* https://reactnavigation.org/docs/material-top-tab-navigator/ */}
        {/* https://github.com/satya164/react-native-tab-view/issues/1087#issuecomment-707961741 */}
        <View style={{
            height: '100%',
            paddingLeft : 30,
            paddingRight : 30
        }}>
          <TabView
            navigationState={{
              index,
              routes,
            }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            renderTabBar={renderTabBar}
            initialLayout={{
              width: layout.width,
            }}></TabView>
        </View>
        {/* Multipe tabs */}
      </View>
      {/* Main Container Emd */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    tabbar: {
        backgroundColor: 'white',
      },
    indicator : {
        backgroundColor: '#D45555',
    }
});

export default HomeScreen;
