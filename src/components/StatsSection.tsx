'use client'

import React from "react"
import { motion } from "framer-motion"
import { Check, Clock, Shield, User } from 'lucide-react';

export default function StatsSection() {
    const stats = [
        { value: "24-48h", label: "Délai moyen", icon: <Clock className="text-blue-500" size={32} /> },
        { value: "100%", label: "En ligne", icon: <Shield className="text-green-500" size={32} /> },
        { value: "24/7", label: "Accessible", icon: <Check className="text-purple-500" size={32} /> },
        { value: "5000+", label: "Étudiants", icon: <User className="text-orange-500" size={32} /> }
      ];
    return (
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center py-4"
              >
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <p className="text-4xl font-bold mb-2">{stat.value}</p>
                <p className="text-blue-100">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    )
}
