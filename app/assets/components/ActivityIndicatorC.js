import React from 'react'
import LottieView from 'lottie-react-native';
import loadingAnimation from '../../assets/animations/loading-hand.json';
function ActivityIndicatorC({visible=false }) {
if(!visible) return null;

return (
<LottieView 
    autoPlay
    loop
    source={loadingAnimation}
    style={{width:200, height:200}}
/>

);
}
export default ActivityIndicatorC;