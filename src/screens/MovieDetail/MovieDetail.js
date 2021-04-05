import { useTheme } from '@react-navigation/native';
import React, { useEffect } from 'react';
import {
  Text,
  View,
  ScrollView,
  SafeAreaView,
  ImageBackground,
  Image
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import { getMovieDetails } from '@/actions/MovieActions';
import { getMovieDetails as getMovieDetailsSelector } from '@/selectors/MovieSelectors';
import { POSTER_URL } from '@/constants/url';
import star from '@/assets/ic_ui/ic_star.png';
import { TextStyles } from '@/theme';
import { styles } from '@/screens/MovieDetail/MovieDetail.styles';

export function MovieDetail({ route }) {
  const { colors } = useTheme();
  const { movieId } = route.params;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovieDetails(movieId));
  }, []);

  const movieDetails = useSelector(state => getMovieDetailsSelector(state));
  const {
    imdb_id,
    title,
    poster_path,
    genres,
    overview,
    release_date: releaseDate,
    vote_average: voteAverage
  } = movieDetails;
  const poster = `${POSTER_URL}${poster_path}`;
  console.log('poster:', poster);

  return (
    <ScrollView>
      <View style={styles.posterContainer}>
        <ImageBackground source={{ uri: poster }} style={styles.image}>
          <LinearGradient
            colors={['#ffffff00', 'black']}
            style={styles.gradientMask}
          />
        </ImageBackground>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.votes}>
        <Image
          style={styles.star}
          source={star}
        />
      </View>

      <Text style={{ color: 'red' }}>{imdb_id}</Text>
    </ScrollView>
  );
}
