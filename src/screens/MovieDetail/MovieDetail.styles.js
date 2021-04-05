import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  posterContainer: {
    flex: 1,
    height: 500
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
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    position: 'absolute',
    bottom: 70,
    paddingLeft: 15
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center'
  },
  votes: {
    flex: 5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 15,
    paddingLeft: 15,
    marginBottom: 15
  },
  star: {
    width: 15,
    height: 15,
    marginRight: 10
  },
  votesAverage: {
    color: 'yellow',
    fontWeight: 'bold',
    fontSize: 15
  },
  genres: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 15
  },
  genre: {
    color: 'grey'
  },
  overview: {
    padding: 15
  },
  overviewText: {
    color: 'white',
    fontSize: 18
  },
  releaseDate: {
    color: 'grey',
    paddingLeft: 15,
    marginBottom: 25
  }
});
