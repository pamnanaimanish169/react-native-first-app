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
  Pressable,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import CarouselItem from './CarouselItem';
import {imageCarousel} from './imageCarousel';
import {data} from './CarouselData';
import {MyDrawer} from './Drawer';

const Tab = createMaterialTopTabNavigator();

const {width} = Dimensions.get('window');

const handleImageClick = () => {
  alert('image clicked');
};

const renderItem = ({item, index}) => {
  return (
    <Pressable
      style={{
        marginTop: 20,
      }}
      onPress={handleImageClick}>
      <Image
        source={{
          uri: item.illustration,
        }}
        style={{
          height: 200,
          borderRadius: 20,
        }}></Image>
    </Pressable>
  );
};

const novelRoute = () => {
  return (
    <>
      <ScrollView>
        <View>
          <Carousel
            layout="default"
            data={data}
            itemWidth={120}
            itemHeight={150}
            sliderWidth={500}
            renderItem={renderItem}></Carousel>
        </View>

        <View>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 15,
              lineHeight: 36,
              color: 'black',
            }}>
            Random Category
          </Text>
          <Carousel
            layout="default"
            data={data}
            itemWidth={120}
            itemHeight={150}
            sliderWidth={500}
            renderItem={renderItem}></Carousel>
        </View>

        <View>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 15,
              lineHeight: 36,
              color: 'black',
            }}>
            Random Category
          </Text>
          <Carousel
            layout="default"
            data={data}
            itemWidth={120}
            itemHeight={150}
            sliderWidth={500}
            renderItem={renderItem}></Carousel>
        </View>
      </ScrollView>
    </>
  );
};

const selfLoveRoute = () => (
  <>
    <ScrollView>
      <View>
        <Carousel
          layout="default"
          data={data}
          itemWidth={120}
          itemHeight={150}
          sliderWidth={500}
          renderItem={renderItem}></Carousel>
      </View>

      <View>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 15,
            lineHeight: 36,
            color: 'black',
          }}>
          Random Category
        </Text>
        <Carousel
          layout="default"
          data={data}
          itemWidth={120}
          itemHeight={150}
          sliderWidth={500}
          renderItem={renderItem}></Carousel>
      </View>

      <View>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 15,
            lineHeight: 36,
            color: 'black',
          }}>
          Random Category
        </Text>
        <Carousel
          layout="default"
          data={data}
          itemWidth={120}
          itemHeight={150}
          sliderWidth={500}
          renderItem={renderItem}></Carousel>
      </View>
    </ScrollView>
  </>
);
const scienceRoute = () => (
  <>
    <ScrollView>
      <View>
        <Carousel
          layout="default"
          data={data}
          itemWidth={120}
          itemHeight={150}
          sliderWidth={500}
          renderItem={renderItem}></Carousel>
      </View>

      <View>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 15,
            lineHeight: 36,
            color: 'black',
          }}>
          Random Category
        </Text>
        <Carousel
          layout="default"
          data={data}
          itemWidth={120}
          itemHeight={150}
          sliderWidth={500}
          renderItem={renderItem}></Carousel>
      </View>

      <View>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 15,
            lineHeight: 36,
            color: 'black',
          }}>
          Random Category
        </Text>
        <Carousel
          layout="default"
          data={data}
          itemWidth={120}
          itemHeight={150}
          sliderWidth={500}
          renderItem={renderItem}></Carousel>
      </View>
    </ScrollView>
  </>
);
const romanceRoute = () => (
  <>
    <ScrollView>
      <View>
        <Carousel
          layout="default"
          data={data}
          itemWidth={120}
          itemHeight={150}
          sliderWidth={500}
          renderItem={renderItem}></Carousel>
      </View>

      <View>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 15,
            lineHeight: 36,
            color: 'black',
          }}>
          Random Category
        </Text>
        <Carousel
          layout="default"
          data={data}
          itemWidth={120}
          itemHeight={150}
          sliderWidth={500}
          renderItem={renderItem}></Carousel>
      </View>

      <View>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 15,
            lineHeight: 36,
            color: 'black',
          }}>
          Random Category
        </Text>
        <Carousel
          layout="default"
          data={data}
          itemWidth={120}
          itemHeight={150}
          sliderWidth={500}
          renderItem={renderItem}></Carousel>
      </View>
    </ScrollView>
  </>
);
const childrenRoute = () => (
  <>
    <ScrollView>
      <View>
        <Carousel
          layout="default"
          data={data}
          itemWidth={120}
          itemHeight={150}
          sliderWidth={500}
          renderItem={renderItem}></Carousel>
      </View>

      <View>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 15,
            lineHeight: 36,
            color: 'black',
          }}>
          Random Category
        </Text>
        <Carousel
          layout="default"
          data={data}
          itemWidth={120}
          itemHeight={150}
          sliderWidth={500}
          renderItem={renderItem}></Carousel>
      </View>

      <View>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 15,
            lineHeight: 36,
            color: 'black',
          }}>
          Random Category
        </Text>
        <Carousel
          layout="default"
          data={data}
          itemWidth={120}
          itemHeight={150}
          sliderWidth={500}
          renderItem={renderItem}></Carousel>
      </View>
    </ScrollView>
  </>
);

const renderScene = SceneMap({
  novel: novelRoute,
  selfLove: selfLoveRoute,
  science: scienceRoute,
  romance: romanceRoute,
  children: childrenRoute,
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
      <View
        style={{
          display: 'flex',
        }}>
        <View>
          {/* Header */}
          <View
            style={{
              paddingLeft: 10,
              paddingRight: 10,
              paddingTop: 10,
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
              paddingLeft: 10,
              paddingRight: 10,
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
          {/* https://reactnavigation.org/docs/material-top-tab-navigator/ */}
          {/* https://github.com/satya164/react-native-tab-view/issues/1087#issuecomment-707961741 */}
          <View
            style={{
              height: 560,
              marginTop: 20,
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

        <View
          style={{
            position: 'absolute',
            left: 0,
            bottom: -5,
            right: 0,
            backgroundColor: 'white',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}>
          <View>
            <Image source={require('./assets/homeIcon.png')}></Image>
          </View>

          <View
            style={{
              paddingTop: 17,
            }}>
            <Image source={require('./assets/bookIcon.png')}></Image>
          </View>

          <View
            style={{
              paddingTop: 17,
            }}>
            <Image source={require('./assets/wishListIcon.png')}></Image>
          </View>

          <View
            style={{
              paddingTop: 17,
            }}>
            <Image source={require('./assets/settingsIcon.png')}></Image>
          </View>
        </View>
      </View>
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
