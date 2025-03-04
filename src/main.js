import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'aos/dist/aos.css';
import AOS from 'aos';
import emailjs from '@emailjs/browser';

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

// Inicializar EmailJS
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

app.use(router)

app.mount('#app')
