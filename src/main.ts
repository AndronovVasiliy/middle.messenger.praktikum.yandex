import './style.less';
import {
  Chat,
  Login,
  Error,
  Registration,
  Profile,
  EditProfile,
  ChangePassword,
} from './Pages';

// eslint-disable-next-line no-undef
document.addEventListener('DOMContentLoaded', () => {
  // eslint-disable-next-line no-undef
  const root = document.querySelector<HTMLDivElement>('#app')!;
  let page: string;
  // eslint-disable-next-line no-undef
  const location = window.location.pathname;

  switch (location) {
    case '/login':
      page = Login();
      break;
    case '/registration':
      page = Registration();
      break;
    case '/profile':
      page = Profile();
      break;
    case '/profile/edit':
      page = EditProfile();
      break;
    case '/change-password':
      page = ChangePassword();
      break;
    case '/chat':
      page = Chat();
      break;
    case '/500':
      page = Error('500', 'Мы уже фиксим');
      break;
    default:
      page = Error('404', 'Не туда попали');
      break;
  }

  root.innerHTML = page;
});
