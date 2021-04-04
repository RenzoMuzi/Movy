import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';
import { logout } from '@/actions/UserActions';
import { Button } from '@/components';
import { strings } from '@/localization';
import { styles } from '@/screens/MyList/MyList.styles';
import { TextStyles } from '@/theme';

export function MovieDetail() {
  const { colors } = useTheme();
  const dispatch = useDispatch();

  const logoutUser = () => {
    dispatch(logout());
  };

  return (
    <View style={styles.container}>
      <Text style={[TextStyles.title, styles.title, { color: colors.text }]}>
        {strings.myList.message}
      </Text>
      <Button title={strings.myList.logout} onPress={logoutUser} />
    </View>
  );
}
