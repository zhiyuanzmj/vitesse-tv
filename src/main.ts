import './assets/main.css'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'uno.css'
import '@unocss/reset/tailwind.css'

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

// window.focusableElements = document.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
// let currentTabIndex = 0;

// window.addEventListener('keydown', function(event) {
//   switch(event.keyCode) {
//     case 39: // 右箭头，切换到下一个元素
//     case 40: 
//       currentTabIndex = (currentTabIndex + 1) % focusableElements.length;
//       focusableElements[currentTabIndex].focus();
//       break;
//     case 37: // 左箭头，切换到上一个元素
//     case 38:
//       currentTabIndex = (currentTabIndex - 1 + focusableElements.length) % focusableElements.length;
//       focusableElements[currentTabIndex].focus();
//       break;
//   }
// });

