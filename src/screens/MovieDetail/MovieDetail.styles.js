import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  posterContainer: {
    flex: 1,
    height: 400,
  },
  gradientMask: {
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  title: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
    position: "absolute",
    bottom: 70,
    paddingLeft: 15,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center'
  },
  votes: {
    paddingRight: 15,
    paddingLeft: 15
  },
  star: {
    width: 20,
    height: 20
  },
  
});
