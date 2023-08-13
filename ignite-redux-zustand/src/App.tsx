import './styles/global.css'

import { Player } from "./pages/Player"
import { Provider } from 'react-redux';
import { PlayerRedux } from './pages/PlayerRedux'
import { store as reduxStore } from './redux-store';

export function App() {
  return (
    <>
      <Player />
      <Provider store={reduxStore}>
        <PlayerRedux />
      </Provider>
    </>
  )
}

