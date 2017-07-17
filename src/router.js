/* eslint-disable */
import Vue from 'vue/dist/vue.js';
import Router from 'vue-router';
import ArticleList from './pages/ArticleList';
import Baijiahao from './pages/Baijiahao';
import NewRule from './pages/NewRule';
import BeforePost from './pages/BeforePost';
import AfterPost from './pages/AfterPost';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    name: 'ArticleList',
    component: ArticleList
  }, {
    path: '/ArticleList',
    name: 'ArticleList',
    component: ArticleList
  }, {
    path: '/Baijiahao',
    name: 'Baijiahao',
    component: Baijiahao
  }, {
    path: '/NewRule',
    name: 'NewRule',
    component: NewRule
  }, {
    path: '/BeforePost',
    name: 'BeforePost',
    component: BeforePost
  }, {
    path: '/AfterPost',
    name: 'AfterPost',
    component: AfterPost
  }]
});
