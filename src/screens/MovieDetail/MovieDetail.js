import { useTheme } from '@react-navigation/native';
import React, { useState, useEffect, useCallback } from 'react';
import {
  Text,
  View,
  ScrollView,
  ImageBackground,
  Image,
  RefreshControl
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import { getMovieDetails, refreshMovieDetails } from '@/actions/MovieActions';
import {
  getMovieDetails as getMovieDetailsSelector,
  isDetailsIsLoading as isDetailsIsLoadingSelector
} from '@/selectors/MovieSelectors';
import { POSTER_URL } from '@/constants/url';
import star from '@/assets/ic_ui/ic_star.png';
import { TextStyles } from '@/theme';
import { styles } from '@/screens/MovieDetail/MovieDetail.styles';

export function MovieDetail({ route }) {
  const { colors } = useTheme();
  const { movieId } = route.params;
  const dispatch = useDispatch();

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    try {
      dispatch(getMovieDetails(movieId));
      setRefreshing(false);
    } catch (error) {
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    dispatch(getMovieDetails(movieId));
  }, []);

  const isDetailsIsLoading = useSelector(state =>
    isDetailsIsLoadingSelector(state)
  );

  const movieDetails = useSelector(state => getMovieDetailsSelector(state));
  const {
    title,
    poster_path,
    genres,
    overview,
    release_date: releaseDate,
    vote_average: voteAverage
  } = movieDetails;
  const poster = `${POSTER_URL}${poster_path}`;

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
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
        <Image style={styles.star} source={star} />
        <Text style={styles.votesAverage}>{voteAverage}</Text>
      </View>
      <View style={styles.genres}>
        {genres.map((genre, i) => (
          <View>
            <Text style={styles.genre}>{`${genre.name}${
              i !== genres.length - 1 ? ' | ' : ''
            }`}</Text>
          </View>
        ))}
      </View>
      <View style={styles.overview}>
        <Text style={styles.overviewText}>{overview}</Text>
      </View>
      <Text style={styles.releaseDate}>Release: {releaseDate}</Text>
    </ScrollView>
  );
}
