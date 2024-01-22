import React from 'react';
import {SafeAreaView} from 'react-native';
import ReactQuery from './components/ReactQuery.tsx';
import WeatherScreen from './screens/WeatherScreen.tsx';

function App(): React.JSX.Element {
  return (
    <ReactQuery>
      <SafeAreaView>
        <WeatherScreen />
      </SafeAreaView>
    </ReactQuery>
  );
}

export default App;
