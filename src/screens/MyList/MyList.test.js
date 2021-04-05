import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import { UserController } from '@/controllers';
import { strings } from '@/localization';
import { MyList } from '@/screens/MyList/MyList';
import { withProviders } from '@/test-utils';

jest.mock('@/controllers/UserController');

describe('MyList', () => {
  it('should match the snapshot', () => {
    const { toJSON } = render(withProviders(<MyList />));

    expect(toJSON()).toMatchSnapshot();
  });

  it('should render the title and logout button', async () => {
    const { getByText } = render(withProviders(<MyList />));

    const myListTitle = getByText(strings.myList.message);
    const logoutButton = getByText(strings.myList.logout);

    expect(myListTitle).toBeTruthy();
    expect(logoutButton).toBeTruthy();
  });

  it('should logout the user', async () => {
    const logoutSpy = jest.spyOn(UserController, 'logout');

    const { getByText } = render(withProviders(<MyList />));

    const logoutButton = getByText(strings.myList.logout);

    fireEvent.press(logoutButton);

    expect(logoutSpy).toHaveBeenCalledTimes(1);
  });
});
