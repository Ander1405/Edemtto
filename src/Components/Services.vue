<script>
export default {
    name: "Services",
    data() {
        return {
            services: [
                {
                    title: 'Mantenimiento Correctivo',
                    image: 'Images/mantenimiento-predictivo.jpg',
                    items: [
                        'Servicios de correctivos por hora',
                        'Contrato para la ejecución de correctivos',
                        'Aplicativo para el control de solicitudes de servicio',
                        'Ejecución del mantenimiento en máquina',
                    ],
                },
                {
                    title: 'Mantenimiento Preventivo',
                    image: 'Images/mantenimiento-predictivo.jpg',
                    items: [
                        'Implementar planes de mantenimiento específicos',
                        'Contrato para la ejecución de mantenimientos preventivos',
                        'Capacitaciones o asesorías en mantenimientos preventivos',
                        'Asesorías para la compra de equipos nuevos o de segunda mano',
                    ],
                },
                {
                    title: 'Mantenimiento Predictivo',
                    image: 'Images/mantenimiento-predictivo.jpg',
                    items: [
                        'Termografía',
                        'Medición y consumos energía',
                        'Medición aislamiento de motores',
                        'Paralelismo',
                    ],
                },
                {
                    title: 'Instalaciones y/o Adecuaciones',
                    image: 'Images/mantenimiento-predictivo.jpg',
                    items: [
                        'Eléctricas, neumáticas e hidráulicas',
                        'Pruebas de cargabilidad en ML',
                        'Pruebas de cargabilidad y termografía en ML',
                        'Diseño y overhaul de maquinaria y equipos',
                    ],
                },
                {
                    title: 'Automatizaciones',
                    image: 'Images/mantenimiento-predictivo.jpg',
                    items: [
                        'Venta de robots cartesianos y programación',
                        'Diseño de bandas transportadoras a medida',
                    ],
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
    <section id="servicios" class="bg-white py-20" v-scroll-animate="'animate-fadeIn'">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold mb-12 text-center text-blue-900">Nuestros Servicios</h2>
            <div class="relative">
                <button
                    @click="scrollLeft"
                    class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-900 text-white px-3 py-2 rounded-full shadow-md z-10 md:hidden"
                >
                    ◀
                </button>

                <div
                    ref="scrollContainer"
                    class="flex md:grid md:grid-cols-3 gap-8 overflow-x-auto md:overflow-visible pb-4
                           whitespace-nowrap md:whitespace-normal scroll-smooth"
                >
                    <div
                        v-for="service in services"
                        :key="service.title"
                        class="bg-gray-100 rounded-lg shadow-md overflow-hidden transition duration-300 transform hover:scale-105
                               flex-shrink-0 md:flex-shrink w-72 md:w-auto max-w-xs md:max-w-full"
                    >
                        <img :src="service.image" :alt="service.title" class="w-full h-48 object-cover">
                        <div class="p-6">
                            <h3 class="text-xl font-semibold mb-2 text-blue-900">{{ service.title }}</h3>
                            <ul class="text-gray-700 text-sm">
                                <li v-for="item in service.items" :key="item" class="mb-2 flex items-center">
                                    <span class="text-green-500 mr-2">✓</span>
                                    {{ item }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <button
                    @click="scrollRight"
                    class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-900 text-white px-3 py-2 rounded-full shadow-md z-10 md:hidden"
                >
                    ▶
                </button>
            </div>
        </div>
    </section>
</template>
