import React from 'react';
import { View, StyleSheet, Modal } from 'react-native';
import AppText from '../components/AppText';
import * as Progress from 'react-native-progress';
import colors from '../config/colors';
import LottieView from 'lottie-react-native';

function UploadScreen({ onDone, progress = 0, visible = false }) {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progress < 1 ? (
          <Progress.Bar progress={progress} color={colors.primary} />
        ) : (
          <LottieView
            autoPlay
            loop={false}
            onAnimationFinish={onDone}
            source={require('../assets/animations/done.json')}
            autoSize
            style={styles.animation}
          />
        )}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  animations: { width: 150 },
});

export default UploadScreen;
