import { Image, StyleSheet } from 'react-native';

function ImageViewer({ placeholderImageSource, selectedImage }) {
  const ImageSrc =
    selectedImage !== null ? { uri: selectedImage } : placeholderImageSource;
  return <Image source={ImageSrc} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});

export default ImageViewer;
