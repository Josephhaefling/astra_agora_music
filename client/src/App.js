import React from 'react';
import Header from './components/Header/Header';
import MainPage from './components/Views/MainPage/MainPage';
import StoreView from './components/Views/StoreView/StoreView';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Switch>
        <Route
          path='/store'
          render={() => {
            return (
              <div>
                <StoreView />
              </div>
            )
          }}
        >

        </Route>
        <Route
          path='/'
          render={() =>  {
            return (
              <div className="App">
                  <Header />
                  <MainPage />
              </div>
           )
          }
        }
        />
      </Switch>
  );
}

export default App;
