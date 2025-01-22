<script>
import { ref } from 'vue'

export default {
  name: 'App',
  setup() {
    const sections = [
      { id: 'nosotros', name: 'Nosotros' },
      { id: 'servicios', name: 'Servicios' },
      { id: 'equipos', name: 'Equipos' },
      { id: 'contacto', name: 'Contacto' },
    ]

    const services = [
      {
        title: 'Mantenimiento Correctivo',
        image: '/placeholder.svg?height=64&width=64',
        items: [
          'Servicios de correctivos por hora',
          'Contrato para la ejecución de correctivos',
          'Aplicativo para el control de solicitudes de servicio',
          'Ejecución del mantenimiento en máquina',
        ],
      },
      {
        title: 'Mantenimiento Preventivo',
        image: '/placeholder.svg?height=64&width=64',
        items: [
          'Implementar planes de mantenimiento específicos',
          'Contrato para la ejecución de mantenimientos preventivos',
          'Capacitaciones o asesorías en mantenimientos preventivos',
          'Asesorías para la compra de equipos nuevos o de segunda mano',
        ],
      },
      {
        title: 'Mantenimiento Predictivo',
        image: '/placeholder.svg?height=64&width=64',
        items: [
          'Termografía',
          'Medición y consumos energía',
          'Medición aislamiento de motores',
          'Paralelismo',
        ],
      },
      {
        title: 'Instalaciones y/o Adecuaciones',
        image: '/placeholder.svg?height=64&width=64',
        items: [
          'Eléctricas, neumáticas e hidráulicas',
          'Pruebas de cargabilidad en ML',
          'Pruebas de cargabilidad y termografía en ML',
          'Diseño y overhaul de maquinaria y equipos',
        ],
      },
      {
        title: 'Automatizaciones',
        image: '/placeholder.svg?height=64&width=64',
        items: [
          'Venta de robots cartesianos y programación',
          'Diseño de bandas transportadoras a medida',
        ],
      },
    ]

    const equipos = [
      {
        name: 'Pinza Fluke 376 FC',
        image: '/placeholder.svg?height=128&width=128',
        description: 'Medición precisa de corriente y voltaje',
      },
      {
        name: 'Medidor de Aislamiento Hioki',
        image: '/placeholder.svg?height=128&width=128',
        description: 'Evaluación de la integridad del aislamiento eléctrico',
      },
      {
        name: 'Analizador de Redes Algodue UPM 309',
        image: '/placeholder.svg?height=128&width=128',
        description: 'Análisis completo de la calidad de energía',
      },
      {
        name: 'Cámara Termográfica FLIR C5',
        image: '/placeholder.svg?height=128&width=128',
        description: 'Detección de problemas térmicos en equipos',
      },
    ]

    const formData = ref({
      nombre: '',
      correo: '',
      telefono: '',
      mensaje: '',
    })

    const submitForm = () => {
      console.log('Formulario enviado:', formData.value)
      // Resetear el formulario después de enviar
      formData.value = {
        nombre: '',
        correo: '',
        telefono: '',
        mensaje: '',
      }
    }

    const scrollTo = (id) => {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }

    return {
      sections,
      services,
      equipos,
      formData,
      submitForm,
      scrollTo,
    }
  },
}
</script>

<style>
@import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css';

html {
  scroll-behavior: smooth;
}

/* Añade aquí estilos adicionales si es necesario */
</style>
<template>
  <div class="font-sans text-gray-900 bg-gray-100">
    <header class="fixed top-0 left-0 right-0 bg-blue-900 shadow-md z-50">
      <nav class="container mx-auto px-4 py-4 flex justify-between items-center">
        <div class="text-2xl font-bold text-white">Edemtto</div>
        <ul class="flex space-x-6">
          <li v-for="section in sections" :key="section.id">
            <a
              :href="`#${section.id}`"
              class="text-gray-200 hover:text-yellow-400 transition duration-300"
              @click.prevent="scrollTo(section.id)"
            >
              {{ section.name }}
            </a>
          </li>
        </ul>
      </nav>
    </header>

    <main>
      <!-- Sección Hero -->
      <section id="hero" class="bg-blue-900 text-white py-20" v-scroll-animate="'animate-fadeIn'">
        <div class="container mx-auto px-4 text-center">
          <h1 class="text-5xl font-bold mb-4">Edemtto</h1>
          <p class="text-2xl text-yellow-400">Mantenimiento industrial especializado</p>
        </div>
      </section>

      <!-- Sección Nosotros -->
      <section id="nosotros" class="py-20 bg-gray-100" v-scroll-animate="'animate-slideUp'">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold mb-8 text-center text-blue-900">Nosotros</h2>
          <p class="text-lg text-gray-700 max-w-3xl mx-auto">
            Ingenieros en instrumentación y control con posgrado 
            en mantenimiento industrial con 15 años de experiencia 
            en la industria del plástico en especial en el área de 
            mantenimiento, decidimos poner a disposición nuestro 
            conocimiento y experiencia adquirida durante este 
            tiempo para las diferentes empresas del sector, 
            brindándoles una solución oportuna y en el menor 
            tiempo posible porque entendemos (el valor costo 
            oportunidad) que representa un equipo fuera de servicio.

          </p>
        </div>
      </section>

      <!-- Sección Servicios -->
      <section id="servicios" class="bg-white py-20" v-scroll-animate="'animate-fadeIn'">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold mb-12 text-center text-blue-900">Nuestros Servicios</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div v-for="service in services" :key="service.title" class="bg-gray-100 rounded-lg shadow-md p-6 transition duration-300 transform hover:scale-105">
              <img :src="service.image" :alt="service.title" class="w-16 h-16 mx-auto mb-4">
              <h3 class="text-xl font-semibold mb-2 text-blue-900">{{ service.title }}</h3>
              <ul class="text-gray-700">
                <li v-for="item in service.items" :key="item" class="mb-1">{{ item }}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Sección Equipos -->
      <section id="equipos" class="py-20 bg-gray-100" v-scroll-animate="'animate-fadeIn'">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold mb-12 text-center text-blue-900">Nuestros Equipos</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div
              v-for="equipo in equipos"
              :key="equipo.name"
              class="bg-white rounded-lg shadow-md p-6 transition duration-300 transform hover:scale-105"
              v-scroll-animate="'animate-slideUp'"
            >
              <img :src="equipo.image" :alt="equipo.name" class="w-32 h-32 mx-auto mb-4 object-contain">
              <h3 class="text-lg font-semibold mb-2 text-blue-900 text-center">{{ equipo.name }}</h3>
              <p class="text-gray-700 text-sm text-center">{{ equipo.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Sección Contacto -->
      <section id="contacto" class="bg-blue-900 text-white py-20" v-scroll-animate="'animate-fadeIn'">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold mb-12 text-center">Contacto</h2>
          <div class="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
            <form @submit.prevent="submitForm" class="space-y-4">
              <div>
                <label for="nombre" class="block text-gray-700 mb-2">Nombre</label>
                <input type="text" id="nombre" v-model="formData.nombre" required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400">
              </div>
              <div>
                <label for="correo" class="block text-gray-700 mb-2">Correo</label>
                <input type="email" id="correo" v-model="formData.correo" required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400">
              </div>
              <div>
                <label for="telefono" class="block text-gray-700 mb-2">Teléfono</label>
                <input type="tel" id="telefono" v-model="formData.telefono" required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400">
              </div>
              <div>
                <label for="mensaje" class="block text-gray-700 mb-2">Mensaje</label>
                <textarea id="mensaje" v-model="formData.mensaje" required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400" rows="4"></textarea>
              </div>
              <button type="submit" class="w-full bg-blue-900 text-white py-2 px-4 rounded-md hover:bg-yellow-400 transition duration-300">Enviar</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>


