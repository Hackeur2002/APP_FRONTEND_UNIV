'use client'

import { FileText, Check, Clock, Mail, Phone, BookOpen, Award, FileSignature } from 'lucide-react';

export default function FooterSection() {
    // Données
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
        <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <FileText className="text-white mr-2" size={28} />
                <span className="text-xl font-semibold">UNIVBENIN</span>
              </div>
              <p className="text-gray-400">Service de documents universitaires en ligne</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                {actesTypes.slice(0, 3).map(acte => (
                  <li key={acte.id}>
                    <a href="#services" className="text-gray-400 hover:text-white">{acte.title}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Liens utiles</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Université</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Règlement</a></li>
                <li><a href="#faq" className="text-gray-400 hover:text-white">FAQ</a></li>
                <li><a href="#process" className="text-gray-400 hover:text-white">Procédure</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start">
                  <Mail className="mr-2 mt-1" size={16} />
                  <span>contact@univbenin.bj</span>
                </li>
                <li className="flex items-start">
                  <Phone className="mr-2 mt-1" size={16} />
                  <span>+229 01 61 55 63 55</span>
                </li>
                <li className="flex items-start">
                  <Clock className="mr-2 mt-1" size={16} />
                  <span>Lundi-Vendredi, 9h-17h</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
            <p>© {new Date().getFullYear()} UNIVBENIN. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    )
}
