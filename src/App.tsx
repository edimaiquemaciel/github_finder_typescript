
import { Outlet } from 'react-router-dom';

import styles from "./App.module.css";

function App() {

  const {app} = styles;

  return (
    <div className={app}>
      <h1>Github Finder</h1>
      <Outlet />
    </div>
  )
}

export default App
