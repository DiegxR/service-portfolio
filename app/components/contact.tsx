"use client"

import { motion } from "framer-motion"
import { Mail, MapPin, Phone } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-32 bg-stone-950 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-emerald-400 text-sm font-medium tracking-wider uppercase">
            Escríbenos
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-50 mt-4">
            Inicia tu proyecto
          </h2>
          <p className="text-stone-400 mt-4 max-w-2xl mx-auto">
            ¿Listo para materializar tu idea? Hablemos de tu proyecto, sea simple o complejo.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-600/20 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <h4 className="text-stone-50 font-medium mb-1">Correo</h4>
                <p className="text-stone-400">oncadev.co@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-teal-600/20 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-teal-400" />
              </div>
              <div>
                <h4 className="text-stone-50 font-medium mb-1">Teléfono</h4>
                <p className="text-stone-400">+57 311 242 5911</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-600/20 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <h4 className="text-stone-50 font-medium mb-1">Ubicación</h4>
                <p className="text-stone-400">
                  Remoto / Colombia
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  placeholder="Tu nombre"
                  className="w-full px-5 py-4 rounded-xl bg-stone-900/50 border border-stone-700 text-stone-50 placeholder:text-stone-500 focus:outline-none focus:border-emerald-500/50 transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Tu correo"
                  className="w-full px-5 py-4 rounded-xl bg-stone-900/50 border border-stone-700 text-stone-50 placeholder:text-stone-500 focus:outline-none focus:border-emerald-500/50 transition-colors"
                />
              </div>
            </div>
            <div>
              <input
                type="text"
                placeholder="Asunto"
                className="w-full px-5 py-4 rounded-xl bg-stone-900/50 border border-stone-700 text-stone-50 placeholder:text-stone-500 focus:outline-none focus:border-emerald-500/50 transition-colors"
              />
            </div>
            <div>
              <textarea
                placeholder="Tu mensaje"
                rows={5}
                className="w-full px-5 py-4 rounded-xl bg-stone-900/50 border border-stone-700 text-stone-50 placeholder:text-stone-500 focus:outline-none focus:border-emerald-500/50 transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl text-stone-50 font-medium hover:opacity-90 transition-opacity"
            >
              Enviar mensaje
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
