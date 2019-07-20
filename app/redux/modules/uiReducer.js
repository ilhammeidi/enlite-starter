import { fromJS, List } from 'immutable';
import MenuContent from 'enl-api/ui/menu';
import {
  TOGGLE_SIDEBAR,
  OPEN_MENU,
  OPEN_SUBMENU,
  CLOSE_ALL_SUBMENU,
  CHANGE_THEME,
  CHANGE_MODE,
  CHANGE_LAYOUT,
  CHANGE_DIRECTION,
  LOAD_PAGE
} from '../constants/uiConstants';

const initialState = {
  /* Settings for Themes and layout */
  theme: 'lightBlueTheme',
  type: 'light', // light or dark
  direction: 'ltr', // ltr or rtl
  layout: 'sidebar',
  /* End settings */
  palette: List([
    { name: 'Red', value: 'redTheme' },
    { name: 'Green', value: 'greenTheme' },
    { name: 'Blue', value: 'blueTheme' },
    { name: 'Purple', value: 'purpleTheme' },
    { name: 'Orange', value: 'orangeTheme' },
    { name: 'Grey', value: 'greyTheme' },
    { name: 'Green Light', value: 'lightGreenTheme' },
    { name: 'Blue Light', value: 'lightBlueTheme' },
    { name: 'Brown', value: 'brownTheme' },
  ]),
  sidebarOpen: true,
  pageLoaded: false,
  subMenuOpen: []
};

const getMenus = menuArray => menuArray.map(item => {
  if (item.child) {
    return item.child;
  }
  return false;
});

const setNavCollapse = (arr, curRoute) => {
  let headMenu = 'not found';
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < arr[i].length; j += 1) {
      if (arr[i][j].link === curRoute) {
        headMenu = MenuContent[i].key;
      }
    }
  }
  return headMenu;
};

const initialImmutableState = fromJS(initialState);

export default function reducer(state = initialImmutableState, action = {}) {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return state.withMutations((mutableState) => {
        mutableState.set('sidebarOpen', !state.get('sidebarOpen'));
      });
    case OPEN_MENU:
      return state.withMutations((mutableState) => {
        mutableState.set('sidebarOpen', true);
      });
    case OPEN_SUBMENU:
      return state.withMutations((mutableState) => {
        // Set initial open parent menu
        const activeParent = setNavCollapse(
          getMenus(MenuContent),
          action.initialLocation
        );

        // Once page loaded will expand the parent menu
        if (action.initialLocation) {
          mutableState.set('subMenuOpen', List([activeParent]));
          return;
        }

        // Expand / Collapse parent menu
        const menuList = state.get('subMenuOpen');
        if (menuList.indexOf(action.key) > -1) {
          if (action.keyParent) {
            mutableState.set('subMenuOpen', List([action.keyParent]));
          } else {
            mutableState.set('subMenuOpen', List([]));
          }
        } else {
          mutableState.set('subMenuOpen', List([action.key, action.keyParent]));
        }
      });
    case CLOSE_ALL_SUBMENU:
      return state.withMutations((mutableState) => {
        mutableState.set('subMenuOpen', List([]));
      });
    case CHANGE_THEME:
      return state.withMutations((mutableState) => {
        mutableState.set('theme', action.theme);
      });
    case CHANGE_MODE:
      return state.withMutations((mutableState) => {
        mutableState.set('type', action.mode);
      });
    case CHANGE_LAYOUT:
      return state.withMutations((mutableState) => {
        mutableState.set('layout', action.layout);
      });
    case CHANGE_DIRECTION:
      return state.withMutations((mutableState) => {
        mutableState.set('direction', action.direction);
      });
    case LOAD_PAGE:
      return state.withMutations((mutableState) => {
        mutableState.set('pageLoaded', action.isLoaded);
      });
    default:
      return state;
  }
}
