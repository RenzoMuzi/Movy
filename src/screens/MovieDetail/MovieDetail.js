import React, { useState, useEffect, useCallback } from 'react';
import {
  Text,
  View,
  ScrollView,
  ImageBackground,
  Image,
  RefreshControl,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import { getMovieDetails } from '@/actions/MovieActions';
import {
  getMovieDetails as getMovieDetailsSelector,
  isDetailsIsLoading as isDetailsIsLoadingSelector,
} from '@/selectors/MovieSelectors';
import { POSTER_URL } from '@/constants/url';
import star from '@/assets/ic_ui/ic_star.png';
import { addIcon } from '@/assets';
import { styles } from '@/screens/MovieDetail/MovieDetail.styles';
import { Spinner } from '@/components/Spinner';
import { FeaturedItem } from '@/components/FeaturedItem';

export function MovieDetail({ route }) {
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
  }, [dispatch, movieId]);

  useEffect(() => {
    dispatch(getMovieDetails(movieId));
  }, [dispatch, movieId]);

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
    vote_average: voteAverage,
  } = movieDetails;

  const poster = `${POSTER_URL}${poster_path}`;

  if (isDetailsIsLoading || refreshing) {
    return <Spinner />;
  }

  const featuredIcons = () => {
    return [
      {
        color: 'white',
        icon: addIcon,
        text: 'My List',
        handleOnPress: () => {console.log("testing")}
      },
    ];
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <FeaturedItem icons={featuredIcons()} item={movieDetails} />
      <View style={styles.votes}>
        <Image
          style={styles.star}
          source={star}
          accessibilityIgnoresInvertColors
        />
        <Text style={styles.votesAverage}>{voteAverage}</Text>
      </View>
      <View style={styles.genres}>
        {genres &&
          genres.map((genre, i) => (
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
