import {StyleSheet, ScrollView ,Text, View } from 'react-native'
import react, { useRef } from 'react'
import AppImagePicker from './form/AppImagePicker';

function ImageInputList({imageUris=[],onAddImage, onRemoveImage}) {
    const scrolView = useRef();
    

return (
    <View>
<ScrollView 
    horizontal ref={scrolView} 
    onContentSizeChange={() => 
    scrolView.current.scrollToEnd()}
>
    <View style={styles.container}>
        {imageUris.map((uri) => (
            <AppImagePicker
            key={uri}
            imageUri={uri}
            onChangeImage={() => onRemoveImage(uri)}
        />
        ))}
        <AppImagePicker onChangeImage={(uri) => onAddImage(uri)} />
    </View>
</ScrollView>
</View>

)};


const styles = StyleSheet.create({
container:{
    flexDirection:'row',
    gap:10,
},
});

export default ImageInputList