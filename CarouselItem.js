import { SafeAreaView } from "react-native-safe-area-context";
import { ParallaxImage } from "react-native-snap-carousel";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import styles from "./styles";

function CarouselItem ({ item, index} , parallaxProps) {
    return (
        <></>
        // <Pressable onPress={() => alert('image description' + item.description)}>
        //     <SafeAreaView style={styles.item}>
        //         {/* <ParallaxImage
        //         source={{
        //             uri : item.source
        //         }}
        //         containerStyle={styles.imageContainer}
        //         style={styles.image}
        //         {...parallaxProps}
        //         >

        //         </ParallaxImage>

        //         <Text style={styles.title} numberOfLines={2}>
        //             {item.title}
        //         </Text> */}
        //     </SafeAreaView>
        // </Pressable>
    )
}

export default CarouselItem;