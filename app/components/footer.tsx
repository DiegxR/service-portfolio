"use client"

import { motion } from "framer-motion"
import { Github, Twitter, Linkedin, Instagram } from "lucide-react"

const links = {
  company: ["Nosotros", "Carreras", "Blog", "Prensa"],
  services: ["Desarrollo Web", "Apps Móviles", "Cloud", "Soluciones IA"],
  resources: ["Documentación", "Casos de éxito", "Newsletter", "FAQ"],
}

const socials = [
  { icon: Twitter, href: "#" },
  { icon: Github, href: "#" },
  { icon: Linkedin, href: "#" },
  { icon: Instagram, href: "#" },
]

export function Footer() {
  return (
    <footer className="py-16 bg-stone-950 border-t border-stone-800/80">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="text-2xl font-bold text-stone-50 inline-block mb-4">
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Onca
              </span>
              <span className="text-stone-400">Devs</span>
            </a>
            <p className="text-stone-400 mb-6 max-w-sm leading-relaxed">
              Transformamos ideas en soluciones tecnológicas: desde lo simple y eficaz hasta lo complejo y robusto.
            </p>
            <div className="flex gap-4">
              {socials.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 rounded-full bg-stone-800/50 border border-stone-700 flex items-center justify-center hover:border-emerald-500/50 transition-colors"
                >
                  <social.icon className="w-4 h-4 text-stone-400" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-stone-50 font-medium mb-4">Empresa</h4>
            <ul className="space-y-3">
              {links.company.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-stone-400 hover:text-stone-50 transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-stone-50 font-medium mb-4">Servicios</h4>
            <ul className="space-y-3">
              {links.services.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-stone-400 hover:text-stone-50 transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-stone-50 font-medium mb-4">Recursos</h4>
            <ul className="space-y-3">
              {links.resources.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-stone-400 hover:text-stone-50 transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-stone-800/80 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-stone-500 text-sm">
            © 2026 Onca Devs. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-stone-500 hover:text-stone-400 text-sm">
              Política de privacidad
            </a>
            <a href="#" className="text-stone-500 hover:text-stone-400 text-sm">
              Términos de servicio
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
