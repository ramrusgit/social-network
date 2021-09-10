import AppStyle from './App.module.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import MyPosts from './components/Profile/MyPosts/MyPosts';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import News from './components/News/News';

const App = () => {
  return(
    <BrowserRouter>
      <div className={AppStyle.app__wrapper}>
        <Header />
        <Sidebar />
        <div className={AppStyle.app__wrapper__content}>
          <Route path="/profile" component={Profile} />
          <Route path="/dialogs" component={Dialogs} />
          <Route path="/news" component={News} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
