'use client'

import React from "react"
import { motion } from "framer-motion"
import { FileText, ChevronRight, Check, BookOpen, Award, FileSignature } from 'lucide-react';

export default function ServicesSection() {
    const actesTypes = [
        {
            id: 'diplome',
            title: "Copie de diplôme",
            description: "Obtenez une copie certifiée conforme de votre diplôme",
            icon: <Award className="text-blue-500" size={24} />,
            price: "3000 FCFA"
        },
        {
            id: 'releve',
            title: "Relevé de notes",
            description: "Demandez votre relevé de notes officiel",
            icon: <BookOpen className="text-green-500" size={24} />,
            price: "4000 FCFA"
        },
        {
            id: 'attestation',
            title: "Attestation",
            description: "Attestation de scolarité ou de réussite",
            icon: <FileSignature className="text-purple-500" size={24} />,
            price: "5000 FCFA"
        },
        {
            id: 'bulletin',
            title: "Bulletin de notes",
            description: "Bulletin semestriel détaillé",
            icon: <FileText className="text-orange-500" size={24} />,
            price: "2500 FCFA"
        },
        {
            id: 'licence',
            title: "Attestation de licence",
            description: "Document officiel de validation de licence",
            icon: <Check className="text-red-500" size={24} />,
            price: "3000 FCFA"
        },
        {
            id: 'master',
            title: "Attestation de master",
            description: "Document officiel de validation de master",
            icon: <Check className="text-indigo-500" size={24} />,
            price: "5000 FCFA"
        }
    ];

    return (
        <section id="services" className="py-20 px-6 bg-white">
            <div className="mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Services disponibles</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Tous vos documents universitaires disponibles en ligne
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {actesTypes.map((acte, index) => (
                        <motion.div
                            key={acte.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 hover:shadow-lg transition-all border border-gray-100 hover:border-blue-100 hover:translate-y-[-5px]`}
                        >
                            <div className="mb-4 flex justify-between items-start">
                                <div className="p-3 rounded-lg bg-opacity-20" style={{ backgroundColor: `${acte.icon.props.className.split(' ')[1]?.replace('text-', 'bg-')}20` }}>
                                    {acte.icon}
                                </div>
                                <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">{acte.price}</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-gray-900">{acte.title}</h3>
                            <p className="text-gray-600 mb-6">{acte.description}</p>
                            <a href="#demande" className={`inline-flex items-center font-medium ${acte.icon.props.className.split(' ')[1]} hover:underline`}>
                                Demander <ChevronRight className="ml-1" size={18} />
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}