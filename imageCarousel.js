import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {data} from './CarouselData';

const renderItem = ({item, index}) => {
  return (
    <View>
      <View>
        <View>
          <Image
            source={{
              uri: item.illustration,
            }}
            style={{
              height: 200,
              borderRadius : 20
            }}></Image>
        </View>
      </View>
    </View>
  );
};

const imageCarousel = () => {
  return (
    <View>
      <Text>
        <Carousel
        layout='default'
          data={data}
          itemWidth={120}
          itemHeight={150}
          sliderWidth={500}
          renderItem={renderItem}></Carousel>
      </Text>
    </View>
  );
};
export default imageCarousel;
