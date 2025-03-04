<script>
import emailjs from '@emailjs/browser';

export default {
    name: "Contact",
    data() {
        return {
            formData: {
                nombre: '',
                correo: '',
                servicio: '',
                mensaje: '',
                metodosContacto: [],
            },
            errors: {
                nombre: '',
                correo: '',
                servicio: '',
                mensaje: '',
                metodosContacto: '',
            },
            touched: {
                nombre: false,
                correo: false,
                servicio: false,
                mensaje: false,
                metodosContacto: false,
            },
            services: [
                { name: 'Mantenimiento Correctivo' },
                { name: 'Mantenimiento Preventivo' },
                { name: 'Mantenimiento Predictivo' },
                { name: 'Instalaciones y/o Adecuaciones' },
                { name: 'Automatizaciones' }
            ],
            phoneNumber: '3197139235',
            isLoading: false,
            emailError: '',
            metodosContactoDisponibles: [
                { id: 'email', name: 'Correo Electrónico' },
                { id: 'whatsapp', name: 'WhatsApp' }
            ],
        };
    },
    computed: {
        isValidForm() {
            return this.isValidNombre && 
                   this.isValidCorreo && 
                   this.isValidServicio &&
                   this.isValidMensaje &&
                   this.isValidMetodosContacto &&
                   Object.values(this.touched).every(field => field);
        },
        isValidNombre() {
            return /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(this.formData.nombre) && this.formData.nombre.length > 0;
        },
        isValidCorreo() {
            return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(this.formData.correo);
        },
        isValidServicio() {
            return this.services.some(service => service.name === this.formData.servicio);
        },
        isValidMensaje() {
            return /^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ\s.,]+$/.test(this.formData.mensaje) && this.formData.mensaje.length > 0;
        },
        isValidMetodosContacto() {
            return this.formData.metodosContacto.length > 0;
        }
    },
    methods: {
        validateField(field) {
            this.touched[field] = true;
            
            switch(field) {
                case 'nombre':
                    if (!this.formData.nombre) {
                        this.errors.nombre = 'El nombre es requerido';
                    } else if (!this.isValidNombre) {
                        this.errors.nombre = 'El nombre solo puede contener letras';
                    } else {
                        this.errors.nombre = '';
                    }
                    break;
                
                case 'correo':
                    if (!this.formData.correo) {
                        this.errors.correo = 'El correo es requerido';
                    } else if (!this.isValidCorreo) {
                        this.errors.correo = 'Ingrese un correo válido';
                    } else {
                        this.errors.correo = '';
                    }
                    break;
                
                case 'servicio':
                    if (!this.formData.servicio) {
                        this.errors.servicio = 'Debe seleccionar un servicio';
                    } else if (!this.isValidServicio) {
                        this.errors.servicio = 'Seleccione un servicio válido';
                    } else {
                        this.errors.servicio = '';
                    }
                    break;
                
                case 'mensaje':
                    if (!this.formData.mensaje) {
                        this.errors.mensaje = 'El mensaje es requerido';
                    } else if (!this.isValidMensaje) {
                        this.errors.mensaje = 'El mensaje solo puede contener letras y números';
                    } else {
                        this.errors.mensaje = '';
                    }
                    break;
                
                case 'metodosContacto':
                    if (this.formData.metodosContacto.length === 0) {
                        this.errors.metodosContacto = 'Debe seleccionar al menos un método de contacto';
                    } else {
                        this.errors.metodosContacto = '';
                    }
                    break;
            }
        },
        formatWhatsAppMessage() {
            return `*Nueva solicitud de servicio desde el formulario web*%0A%0A` +
                   `*Nombre:* ${this.formData.nombre}%0A` +
                   `*Correo:* ${this.formData.correo}%0A` +
                   `*Servicio solicitado:* ${this.formData.servicio}%0A` +
                   `*Detalles adicionales:* ${this.formData.mensaje}`;
        },
        async submitForm() {
            if (this.isValidForm) {
                this.isLoading = true;
                this.emailError = '';

                try {
                    const promises = [];

                    if (this.formData.metodosContacto.includes('email')) {
                        const templateParams = {
                            from_name: this.formData.nombre,
                            from_email: this.formData.correo,
                            service: this.formData.servicio,
                            message: this.formData.mensaje,
                            to_name: 'Administrador'
                        };

                        promises.push(
                            emailjs.send(
                                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                                templateParams,
                                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
                            )
                        );
                    }

                    if (this.formData.metodosContacto.includes('whatsapp')) {
                        const message = this.formatWhatsAppMessage();
                        const whatsappUrl = `https://wa.me/${this.phoneNumber}?text=${message}`;
                        window.open(whatsappUrl, '_blank');
                    }

                    await Promise.all(promises);

                    // Limpiar el formulario
                    this.formData = {
                        nombre: '',
                        correo: '',
                        servicio: '',
                        mensaje: '',
                        metodosContacto: [],
                    };
                    this.touched = {
                        nombre: false,
                        correo: false,
                        servicio: false,
                        mensaje: false,
                        metodosContacto: false,
                    };

                    alert('¡Mensaje enviado con éxito!');
                } catch (error) {
                    this.emailError = 'Hubo un error al enviar el mensaje';
                    console.error('Error:', error);
                } finally {
                    this.isLoading = false;
                }
            }
        }
    }
};
</script>

<template>
    <section id="contacto" class="bg-blue-900 text-white py-20" v-scroll-animate="'animate-fadeIn'">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold mb-12 text-center">Contacto</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <!-- Columna izquierda con descripción -->
                <div class="space-y-4 md:pt-0">
                    <h3 class="text-2xl font-semibold">¿Tienes alguna pregunta?</h3>
                    <p class="text-lg">
                        Estamos aquí para ayudarte. Completa el formulario y nos pondremos en contacto contigo lo antes posible. Tu consulta es importante para nosotros y nos comprometemos a darte una respuesta rápida y efectiva.
                    </p>
                    <div class="space-y-2 mt-8">
                        <p class="flex items-center">
                            <span class="mr-2">📧</span> info@tuempresa.com
                        </p>
                        <p class="flex items-center">
                            <span class="mr-2">📱</span> +34 123 456 789
                        </p>
                    </div>
                </div>
                
                <!-- Columna derecha con el formulario -->
                <div class="bg-white rounded-lg shadow-md p-8">
                    <form @submit.prevent="submitForm" class="space-y-4">
                        <div>
                            <label for="nombre" class="block text-gray-700 mb-2">Nombre</label>
                            <input 
                                type="text" 
                                id="nombre" 
                                v-model="formData.nombre" 
                                @blur="validateField('nombre')"
                                :class="{'border-red-500': errors.nombre}"
                                required 
                                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300 text-gray-900"
                            >
                            <p v-if="errors.nombre" class="text-red-500 text-sm mt-1">{{ errors.nombre }}</p>
                        </div>
                        <div>
                            <label for="correo" class="block text-gray-700 mb-2">Correo</label>
                            <input 
                                type="email" 
                                id="correo" 
                                v-model="formData.correo" 
                                @blur="validateField('correo')"
                                :class="{'border-red-500': errors.correo}"
                                required 
                                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300 text-gray-900"
                            >
                            <p v-if="errors.correo" class="text-red-500 text-sm mt-1">{{ errors.correo }}</p>
                        </div>
                        <div>
                            <label for="servicio" class="block text-gray-700 mb-2">Servicio</label>
                            <select 
                                id="servicio" 
                                v-model="formData.servicio" 
                                @blur="validateField('servicio')"
                                :class="{'border-red-500': errors.servicio}"
                                required 
                                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300 text-gray-900"
                            >
                                <option selected disabled value="">Seleccione un servicio</option>
                                <option v-for="service in services" :key="service.name" :value="service.name">
                                    {{ service.name }}
                                </option>
                            </select>
                            <p v-if="errors.servicio" class="text-red-500 text-sm mt-1">{{ errors.servicio }}</p>
                        </div>
                        <div>
                            <label for="mensaje" class="block text-gray-700 mb-2">Detalles adicionales</label>
                            <textarea 
                                id="mensaje" 
                                v-model="formData.mensaje" 
                                @blur="validateField('mensaje')"
                                :class="{'border-red-500': errors.mensaje}"
                                required 
                                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300 text-gray-900" 
                                rows="4"
                            ></textarea>
                            <p v-if="errors.mensaje" class="text-red-500 text-sm mt-1">{{ errors.mensaje }}</p>
                        </div>
                        <div>
                            <label class="block text-gray-700 mb-2">Métodos de contacto</label>
                            <div class="space-y-2">
                                <div v-for="metodo in metodosContactoDisponibles" :key="metodo.id" 
                                    class="flex items-center">
                                    <input 
                                        type="checkbox" 
                                        :id="metodo.id" 
                                        v-model="formData.metodosContacto" 
                                        :value="metodo.id"
                                        @change="validateField('metodosContacto')"
                                        class="h-4 w-4 text-orange-400 focus:ring-orange-300 border-gray-300 rounded"
                                    >
                                    <label :for="metodo.id" class="ml-2 block text-gray-700">
                                        {{ metodo.name }}
                                    </label>
                                </div>
                            </div>
                            <p v-if="errors.metodosContacto" class="text-red-500 text-sm mt-1">{{ errors.metodosContacto }}</p>
                        </div>
                        <button 
                            type="submit" 
                            :disabled="!isValidForm || isLoading"
                            :class="{
                                'bg-gray-400': !isValidForm || isLoading,
                                'bg-blue-900 hover:bg-orange-500': isValidForm && !isLoading
                            }"
                            class="w-full text-white py-2 px-4 rounded-md transition duration-300"
                        >
                            {{ isLoading ? 'Enviando...' : 'Enviar' }}
                        </button>
                        <p v-if="emailError" class="text-red-500 text-sm mt-2">{{ emailError }}</p>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>
