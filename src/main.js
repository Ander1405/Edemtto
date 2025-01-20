import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'aos/dist/aos.css';
import AOS from 'aos';

const app = createApp(App)

app.directive('scroll-animate', {
    mounted(el, binding) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.classList.add(binding.value || 'animate-fadeIn');
            observer.unobserve(el); // Para evitar múltiples observaciones
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(el);
    },
});

AOS.init();

app.use(router)

app.mount('#app')
