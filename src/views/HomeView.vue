<script>
import Tools from "@/Components/Tools.vue";
import Services from "@/Components/Services.vue";
import Contact from "@/Components/Contact.vue";
import About from "@/Components/About.vue";
import Hero from "@/Components/Hero.vue";

export default {
    name: 'App',
    components: {Hero, About, Contact, Services, Tools},
    setup() {
        const sections = [
            {
                id: 'nosotros',
                name: 'Nosotros'
            },
            {
                id: 'servicios',
                name: 'Servicios'
            },
            {
                id: 'equipos',
                name: 'Equipos'
            },
            {
                id: 'contacto',
                name: 'Contacto'
            },
        ]
        const scrollTo = (id) => {
            const element = document.getElementById(id)
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
            }
        }
        return {
            sections,
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
            <div id="hero">
                <Hero/>
            </div>

            <div id="nosotros">
                <About/>
            </div>

            <div id="servicios">
                <Services/>
            </div>

            <div id="equipos">
                <Tools/>
            </div>

            <div id="contacto">
                <Contact/>
            </div>
        </main>
    </div>
</template>
