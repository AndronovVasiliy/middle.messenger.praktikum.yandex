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
import Block from './Utils/Block';
import renderDOM from './Utils/renderDOM';

// eslint-disable-next-line no-undef
document.addEventListener('DOMContentLoaded', () => {
  let page: Block;
  // eslint-disable-next-line no-undef
  const location = window.location.pathname;

  switch (location) {
    case '/login':
      page = new Login();
      renderDOM('#app', page);
      break;
    case '/registration':
      page = new Registration();
      renderDOM('#app', page);
      break;
    case '/profile':
      page = new Profile();
      renderDOM('#app', page);
      break;
    case '/profile/edit':
      page = new EditProfile();
      renderDOM('#app', page);
      break;
    case '/change-password':
      page = new ChangePassword();
      renderDOM('#app', page);
      break;
    case '/chat':
      page = new Chat();
      renderDOM('#app', page);
      break;
    case '/500':
      page = new Error({
        titleText: '500',
        subtitleText: 'Мы уже фиксим',
      });
      renderDOM('#app', page);
      break;
    default:
      page = new Error({
        titleText: '404',
        subtitleText: 'Не туда попали',
      });
      renderDOM('#app', page);
      break;
  }
});
