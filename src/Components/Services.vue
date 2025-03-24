<script>
export default {
    name: "Services",
    data() {
        return {
            services: [
                {
                    title: 'Mantenimiento Correctivo',
                    image: '/src/Images/mantenimiento-predictivo.jpg',
                    items: [
                        'Servicios de correctivos por hora',
                        'Contrato para la ejecución de correctivos',
                        'Aplicativo para el control de solicitudes de servicio',
                        'Ejecución del mantenimiento en máquina',
                    ],
                },
                {
                    title: 'Mantenimiento Preventivo',
                    image: '/src/Images/mantenimiento-predictivo.jpg',
                    items: [
                        'Implementar planes de mantenimiento específicos',
                        'Contrato para la ejecución de mantenimientos preventivos',
                        'Capacitaciones o asesorías en mantenimientos preventivos',
                        'Asesorías para la compra de equipos nuevos o de segunda mano',
                    ],
                },
                {
                    title: 'Mantenimiento Predictivo',
                    image: '/src/Images/mantenimiento-predictivo.jpg',
                    items: [
                        'Termografía',
                        'Medición y consumos energía',
                        'Medición aislamiento de motores',
                        'Paralelismo',
                    ],
                },
                {
                    title: 'Instalaciones y/o Adecuaciones',
                    image: '/src/Images/mantenimiento-predictivo.jpg',
                    items: [
                        'Eléctricas, neumáticas e hidráulicas',
                        'Pruebas de cargabilidad en ML',
                        'Pruebas de cargabilidad y termografía en ML',
                        'Diseño y overhaul de maquinaria y equipos',
                    ],
                },
                {
                    title: 'Automatizaciones',
                    image: '/src/Images/mantenimiento-predictivo.jpg',
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
                        class="bg-gray-100 rounded-lg shadow-md p-6 transition duration-300 transform hover:scale-105
                               flex-shrink-0 md:flex-shrink w-80 md:w-auto max-w-xs md:max-w-full overflow-hidden text-wrap break-words"
                    >
                        <img :src="service.image" :alt="service.title" class="w-16 h-16 mx-auto mb-4">
                        <h3 class="text-xl font-semibold mb-2 text-blue-900">{{ service.title }}</h3>
                        <ul class="text-gray-700 text-sm break-words">
                            <li v-for="item in service.items" :key="item" class="mb-1">{{ item }}</li>
                        </ul>
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
