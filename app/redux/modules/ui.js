import { createSlice } from '@reduxjs/toolkit';
import menuContent from 'enl-api/ui/menu';

const initialState = {
  /* Settings for Themes and layout */
  theme: 'lightBlueTheme',
  type: 'light', // light or dark
  direction: 'ltr', // ltr or rtl
  layout: 'sidebar', // sidebar, big-sidebar, top-navigation, mega-menu
  /* End settings */
  palette: [
    { name: 'Grey', value: 'greyTheme' },
    { name: 'Blue Light', value: 'lightBlueTheme' },
  ],
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
        headMenu = menuContent[i].key;
      }
    }
  }
  return headMenu;
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleAction: (state) => {
      state.sidebarOpen = !state.sidebarOpen;
    },
    openMenuAction: (state) => {
      state.sidebarOpen = true;
    },
    closeMenuAction: (state) => {
      state.sidebarOpen = false;
      state.subMenuOpen = [];
    },
    openAction: (state, action) => {
      const { initialLocation, key } = action.payload;
      // Set initial open parent menu
      const activeParent = setNavCollapse(
        getMenus(menuContent),
        initialLocation
      );

      // Once page loaded will expand the parent menu
      if (initialLocation) {
        state.subMenuOpen = [activeParent];
        return;
      }

      // Expand / Collapse parent menu
      const menuList = state.subMenuOpen;
      if (menuList.indexOf(key) > -1) {
        const index = state.subMenuOpen.findIndex((obj) => obj === key);
        state.subMenuOpen.splice(index, 1);
      } else {
        state.subMenuOpen = [key];
      }
    },
    changeThemeAction: (state, action) => {
      state.theme = action.payload;
    },
    changeModeAction: (state, action) => {
      state.type = action.payload;
    },
    changeLayoutAction: (state, action) => {
      state.layout = action.payload;
    },
    changeDirectionAction: (state, action) => {
      state.direction = action.payload;
    },
    playTransitionAction: (state, action) => {
      state.pageLoaded = action.payload;
    }
  }
});

export const {
  toggleAction, openMenuAction, closeMenuAction,
  openAction, changeThemeAction, changeModeAction,
  changeLayoutAction, changeDirectionAction, playTransitionAction
} = uiSlice.actions;

export default uiSlice.reducer;
