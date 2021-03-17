import React from 'react';
import { Provider } from 'mobx-react';
import MySpring from './skill/spring';
function App() {
  return (
    <Provider>
        <div className="App">
          <MySpring />
        </div>
    </Provider>
  );
}

export default App;
