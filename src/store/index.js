import AppStore from './App';
import {RouterStore} from 'mobx-router';

const store = {
  app: new AppStore(),
  router: new RouterStore()
};

export default store
