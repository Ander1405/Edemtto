<script>
export default {
    name: "Contact",
    data() {
        return {
            formData: {
                nombre: '',
                correo: '',
                telefono: '',
                mensaje: '',
            }
        };
    },
    methods: {
        submitForm() {
            console.log('Formulario enviado:', this.formData);
            this.formData = {
                nombre: '',
                correo: '',
                telefono: '',
                mensaje: '',
            };
        }
    }
};
</script>

<template>
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
</template>
