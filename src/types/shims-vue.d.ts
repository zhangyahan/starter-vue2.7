import { ComponentCustomOptions, ComponentCustomProperties } from 'vue'
import VueRouter, { Route } from 'vue-router'
import Vuex from 'vuex'
import { State } from '../store/index'
import { Pinia } from 'pinia'

export {}

declare module 'vue' {
  /**
   * Vue 实例化参数
   */
  interface ComponentOptions {
    pinia?: Pinia
    router?: VueRouter
  }

  /**
   * 自定义 Vue 组件的选项
   */
  interface ComponentCustomOptions {}

  /**
   * 自定义 Vue 组件属性
   */
  interface ComponentCustomProperties {
    $route?: Route
    $router?: VueRouter
  }
}
