'use client'

import { Mail, Phone, Clock } from 'lucide-react';

export default function ContactSection() {
    return (
        <section id="contact" className="py-20 px-6 bg-white">
            <div className="mx-auto max-w-6xl">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-xl overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="p-12 text-white">
                            <h2 className="text-3xl font-bold mb-6">Contactez-nous</h2>
                            <p className="text-blue-100 mb-8 text-lg">
                                Notre équipe est disponible pour répondre à toutes vos questions concernant vos demandes de documents universitaires.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <Mail className="mt-1 mr-4 text-blue-200" size={20} />
                                    <div>
                                        <h4 className="font-semibold mb-1">Email</h4>
                                        <p className="text-blue-100">contact@univbenin.bj</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <Phone className="mt-1 mr-4 text-blue-200" size={20} />
                                    <div>
                                        <h4 className="font-semibold mb-1">Téléphone</h4>
                                        <p className="text-blue-100">+229 01 61 55 63 55</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <Clock className="mt-1 mr-4 text-blue-200" size={20} />
                                    <div>
                                        <h4 className="font-semibold mb-1">Horaires</h4>
                                        <p className="text-blue-100">Lundi-Vendredi, 9h-17h</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-12">
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Nom</label>
                                        <input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                        <input type="email" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Sujet</label>
                                    <input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                    <textarea rows={4} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"></textarea>
                                </div>

                                <div>
                                    <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-4 rounded-lg transition-all shadow-md hover:shadow-lg">
                                        Envoyer le message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
