import { View, Image, StyleSheet } from 'react-native';

const Preloader = ({ customStyles }) => {
  return (
    <View style={[styles.container, customStyles]}>
      <Image
        style={styles.image}
        source={require(`../../assets/images/preloader.gif`)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // ?
  },
  image: {
    width: 50,
    height: 50,
  },
});

export default Preloader;
