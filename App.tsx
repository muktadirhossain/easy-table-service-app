import {useColorScheme} from 'react-native';
import AppNavigator from './src/AppNavigator';
import GlobalContextProvider from './src/context/GlobalContextProvider';
import {
  MD3LightTheme as DefaultLightTheme,
  MD3DarkTheme as DefaultDarkTheme,
  PaperProvider,
} from 'react-native-paper';
import Colors from './src/assets/Colors';

const CombinedLightTheme = {
  ...DefaultLightTheme,
  colors: {
    ...DefaultLightTheme.colors,
    primary: Colors.primary, // change this to your desired color
    underlineColor: 'transparent',
    // background: Colors.primary, // change this to your desired color

    secondaryContainer: 'rgba(22, 163, 74, .15)',
  },
};

const CombinedDarkTheme = {
  ...DefaultDarkTheme,
  colors: {
    ...DefaultDarkTheme.colors,
    primary: Colors.primary, // change this to your desired color
    underlineColor: 'transparent',
    // background: Colors.secondary, // change this to your desired color
  },
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const combineTheme = CombinedLightTheme;
  return (
    <GlobalContextProvider>
      <PaperProvider theme={combineTheme}>
        <AppNavigator />
      </PaperProvider>
    </GlobalContextProvider>
  );
};
export default App;
