<script>
export default {
    name: "Tools",
    data() {
        return {
            equipos: [
                {
                    name: 'Pinza Fluke 376 FC',
                    image: '/Images/tools/pinza-flake.webp',
                    description: 'Medición precisa de corriente y voltaje',
                },
                {
                    name: 'Medidor de Aislamiento Hioki',
                    image: '/Images/tools/hioki.jpg',
                    description: 'Evaluación de la integridad del aislamiento eléctrico',
                },
                {
                    name: 'Analizador de Redes Algodue UPM 309',
                    image: '/Images/tools/UPM.jpg',
                    description: 'Análisis completo de la calidad de energía',
                },
                {
                    name: 'Cámara Termográfica FLIR C5',
                    image: '/Images/tools/FLIRC5.jpg',
                    description: 'Detección de problemas térmicos en equipos',
                },
            ]
        };
    },
    methods: {
        scrollLeft() {
            this.$refs.scrollContainer.scrollBy({ left: -300, behavior: 'smooth' });
        },
        scrollRight() {
            this.$refs.scrollContainer.scrollBy({ left: 300, behavior: 'smooth' });
        }
    }
};
</script>

<template>
    <section class="py-20 bg-gray-100 relative" v-scroll-animate="'animate-fadeIn'">
        <div class="container mx-auto px-4 relative">
            <h2 class="text-3xl font-bold mb-12 text-center text-blue-900">Nuestros Equipos</h2>

            <div class="relative w-full flex items-center">
                <button
                    @click="scrollLeft"
                    class="absolute left-0 px-4 py-2 bg-blue-900 text-white rounded-full shadow-md hover:bg-blue-700 transition duration-300 z-10 md:hidden"
                >
                    ◀
                </button>

                <div
                    ref="scrollContainer"
                    class="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 overflow-x-auto md:overflow-visible
                           pb-4 whitespace-nowrap md:whitespace-normal scroll-smooth px-12"
                >
                    <div
                        v-for="equipo in equipos"
                        :key="equipo.name"
                        class="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 transform hover:scale-105
                               flex-shrink-0 md:flex-shrink w-80 md:w-auto max-w-xs md:max-w-full"
                        v-scroll-animate="'animate-slideUp'"
                    >
                        <div class="w-full">
                            <img
                                :src="equipo.image"
                                :alt="equipo.name"
                                class="w-full h-48 object-cover"
                            />
                        </div>
                        <div class="p-6 text-center">
                            <h3 class="text-lg font-semibold mb-2 text-blue-900 break-words">{{ equipo.name }}</h3>
                            <p class="text-gray-700 text-sm break-words text-wrap overflow-hidden">{{ equipo.description }}</p>
                        </div>
                    </div>
                </div>

                <button
                    @click="scrollRight"
                    class="absolute right-0 px-4 py-2 bg-blue-900 text-white rounded-full shadow-md hover:bg-blue-700 transition duration-300 z-10 md:hidden"
                >
                    ▶
                </button>
            </div>
        </div>
    </section>
</template>
