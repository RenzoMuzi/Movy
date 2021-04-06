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
import {
  getMovieDetails,
  addToMyList,
  removeFromMyList,
} from '@/actions/MovieActions';
import {
  getMovieDetails as getMovieDetailsSelector,
  isDetailsIsLoading as isDetailsIsLoadingSelector,
  getMyMovieList,
} from '@/selectors/MovieSelectors';
import star from '@/assets/ic_ui/ic_star.png';
import { addIcon, removeIcon } from '@/assets';
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

  const myMovieList = useSelector(state => getMyMovieList(state));
  const isDetailsIsLoading = useSelector(state =>
    isDetailsIsLoadingSelector(state)
  );
  const movieDetails = useSelector(state => getMovieDetailsSelector(state));

  const {
    genres,
    overview,
    release_date: releaseDate,
    vote_average: voteAverage,
  } = movieDetails;

  if (isDetailsIsLoading || refreshing) {
    return <Spinner />;
  }

  const getActionToList = () => {
    if (myMovieList.findIndex(item => item.id === movieDetails.id) === -1) {
      return {
        color: 'white',
        icon: addIcon,
        text: 'My List',
        handleOnPress: () => dispatch(addToMyList(movieDetails)),
      };
    }
    return {
      color: 'white',
      icon: removeIcon,
      text: 'My List',
      handleOnPress: () => dispatch(removeFromMyList(movieDetails)),
    };
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <FeaturedItem icons={[getActionToList()]} item={movieDetails} />
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
