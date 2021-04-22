import { Jost_100Thin } from '@expo-google-fonts/jost';
import React from 'react';
import Routes from './src/routes';
import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold
} from '@expo-google-fonts/jost';

import AppLoading from 'expo-app-loading';

export default function App() {
  const [ fontsLoaded ] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold  
  })

  if(!fontsLoaded)
    return <AppLoading />

  return (
    // <UserIdentification />
    <Routes />
  );
}
