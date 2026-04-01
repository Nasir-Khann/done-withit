import { Modal, StyleSheet, View } from "react-native";
import React from "react";
import ProgressBar from "react-native-progress/Bar";
import color from "../config/color";
import LottieView from "lottie-react-native";
import loadingAnimation from "../animations/Checked.json";

function UploadScreen({ onDone, progress, visible = false }) {
  console.log("UploadScreen progress:", progress, "visible:", visible);
  return (
    <Modal visible={visible} transparent={false} animationType="fade">
      <View style={styles.container}>
        {progress < 1 ? ( 
          <ProgressBar
            color={color.lightPink}
            
            width={200}
            progress={progress}
          />
        ) : (
          <LottieView
            autoPlay
            loop={false}
            source={loadingAnimation}
            style={styles.animation}
            onAnimationFinish={onDone}
          />
        )}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  animation: {
    width: 150,
    height: 150,
  },
});

export default UploadScreen;