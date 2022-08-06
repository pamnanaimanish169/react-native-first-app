import {
  SafeAreaView,
  StyleSheet,
  useColorScheme,
  Text,
  View,
  Image,
  TextInput,
  useWindowDimensions,
  Dimensions,
  ScrollView,
  FlatList,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import CarouselItem from './CarouselItem';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';

const Tab = createMaterialTopTabNavigator();

const novelRoute = () => <View style={{flex: 1, backgroundColor: '#ff4081'}} />;
const {width} = Dimensions.get('window');

const data = [
  // {
  //   title: 'Coral Reef',
  //   description: 'Location: Red Sea',
  //   source:
  //     'https://images.unsplash.com/photo-1633205719979-e47958ff6d93?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80',
  // },
  // {
  //   title: 'Phone',
  //   description: 'iPhone 6 on the table',
  //   source:
  //     'https://images.unsplash.com/photo-1535303311164-664fc9ec6532?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80',
  // },

  // {
  //   title: 'Old building',
  //   description: 'Location: Germany',
  //   source:
  //     'https://images.unsplash.com/photo-1623345805780-8f01f714e65f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80',
  // },
  {
    title: 'Home Page',
    text: 'Welcome to My Application',
    image:
      'https://images.unsplash.com/photo-1623345805780-8f01f714e65f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80',
  },
  {
    title: 'Chats',
    text: 'All chats will appear here',
    image:
      'https://images.unsplash.com/photo-1623345805780-8f01f714e65f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80',
  },
  {
    title: 'Calls',
    text: 'All calls will appear here',
    image:
      'https://images.unsplash.com/photo-1623345805780-8f01f714e65f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80',
  },
  {
    title: 'Gallery',
    text: 'Your Photos',
    image:
      'https://images.unsplash.com/photo-1623345805780-8f01f714e65f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80',
  },
  {
    title: 'Settings',
    text: 'This a settings window',
    image:
      'https://images.unsplash.com/photo-1623345805780-8f01f714e65f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80',
  },
];

function imgCarousel({item, index}, parallaxProps) {
  return (
    <Pressable onPress={() => alert(item.description)}>
      <SafeAreaView
        style={{
          width: '100%',
          height: width - 200,
          paddingTop: 20,
        }}>
        <ParallaxImage
          source={{
            uri: item.source,
          }}
          containerStyle={{
            flex: 1,
            // borderRadius: 5,
            marginBottom: Platform.select({ios: 0, android: 1}),
          }}
          style={{
            ...StyleSheet.absoluteFillObject,
            resizeMode: 'contain',
          }}
          {...parallaxProps}></ParallaxImage>
      </SafeAreaView>
    </Pressable>
  );
}

const settings = {
  sliderWidth: width,
  sliderHeight: width,
  itemWidth: width - 80,
  data: data,
  hasParallaxImages: true,
};

function _renderItem({item, index}) {
  return (
    <ScrollView>
      {/* borderRadius : 6,
      height : 251,
      width : '100%',
      // padding : 51,
      // marginLeft : 26,
      marginRight : 26 */}

      <View
        style={{
          borderRadius: 6,
          height: 251,
          width: '100%',
          // padding : 51,
          // marginLeft : 26,
          marginRight: 26,
        }}>
        <Text
          style={{
            fontSize: 31,
          }}>
          {item.title}
        </Text>

        <Image
          source={{
            uri: item.image,
          }}
          style={{
            width: '100%',
            height: '100%',
          }}></Image>
      </View>
    </ScrollView>
  );
}
const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: 64,
};

const logo2 = {
  uri: 'https://i.picsum.photos/id/68/200/200.jpg?hmac=CPg7ZGK1PBwt6DmjjPRApX_t-mOiYxt0pel50VH4Gwk',
  width: 64,
  height: 64,
};
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d71',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d73',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d74',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d75',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d76',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d77',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d78',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d79',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d80',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d81',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d82',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d83',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d84',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d85',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d86',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d87',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d88',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d89',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d90',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d91',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d92',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d93',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d94',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d95',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d96',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d97',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d98',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d99',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29e00',
    title: 'Third Item',
  },
];

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const renderItem = ({item}) => <Item title={item.title} />;
const selfLoveRoute = () => (
  // <View style={{flex: 1, backgroundColor: '#673ab7'}} />
  // <SafeAreaView
  //   style={{
  //     flex: 1,
  //     paddingTop: 51,
  //   }}>
  //   <Carousel
  //     layout={'default'}
  //     // ref={ref => this.carousel = ref}
  //     data={data}
  //     sliderWidth={301}
  //     itemWidth={301}
  //     renderItem={_renderItem}
  //     onSnapToItem={index =>
  //       symbolicateStackTrace({activeIndex: index})
  //     }></Carousel>
  // </SafeAreaView>
  // <View
  // style={{
  //   flex: 1,
  // }}
  // >
  //   <Carousel
  //   {...settings}
  //   ></Carousel>
  // </View>
  <>
    <ScrollView
      style={{
        backgroundColor: 'pink',
        // marginHorizontal: 20,
        height: 900,
      }}
      nestedScrollEnabled={true}>
        <ScrollView
        style={{
          height : 300
        }}
        nestedScrollEnabled={true}
        >
          <View>
            <Text>Abcd</Text>
          </View>
        </ScrollView>


        <ScrollView
        style={{
          height : 300
        }}
        nestedScrollEnabled={true}
        >
          <View>
            <Text>Abcd</Text>
          </View>
        </ScrollView>

        <ScrollView
        style={{
          height : 300
        }}
        nestedScrollEnabled={true}
        >
          <View>
            <Text>Abcd</Text>
          </View>
        </ScrollView>
      </ScrollView>
  </>
);

const scienceRoute = () => <View style={{flex: 1, backgroundColor: '#fff'}} />;
const romanceRoute = () => (
  <View style={{flex: 1, backgroundColor: '#673ab7'}} />
);
const childrenRoute = () => (
  <View style={{flex: 1, backgroundColor: '#ff4081'}} />
);
const sampleRoute = () => <View style={{flex: 1, backgroundColor: '#fff'}} />;

const renderScene = SceneMap({
  novel: novelRoute,
  selfLove: selfLoveRoute,
  science: scienceRoute,
  romance: romanceRoute,
  children: childrenRoute,
  sample: sampleRoute,
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
      key: 'sample',
      title: 'sample',
    },
  ]);
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const renderTabBar = props => {
    return (
      <TabBar
        {...props}
        scrollEnabled
        style={styles.tabbar}
        tabStyle={{minHeight: 30, width: 'auto'}}
        indicatorStyle={styles.indicator}
        renderLabel={({route, focused, color}) => (
          <Text style={{color: '#9D9D9D', margin: 2, flexWrap: 'wrap-reverse'}}>
            {route.title}
          </Text>
        )}></TabBar>
    );
  };

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
        <View
          style={{
            height: '100%',
            paddingLeft: 30,
            paddingRight: 30,
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
  indicator: {
    backgroundColor: '#D45555',
  },
});

export default HomeScreen;
