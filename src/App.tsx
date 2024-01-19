import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic" />
    </SafeAreaView>
  );
}

export default App;
