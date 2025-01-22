import { useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <Head>
        <title>Télécharger Notre App</title>
        <meta name="description" content="Téléchargez notre application Android" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6 animate-fade-in">
            Notre Application Mobile
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Découvrez une expérience unique sur votre Android
          </p>
          
          {/* Download Button */}
          <button
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`
              transform transition-all duration-300
              ${isHovered ? 'scale-105' : 'scale-100'}
              bg-green-500 hover:bg-green-600
              text-white font-bold py-4 px-8 rounded-full
              shadow-lg hover:shadow-xl
            `}
          >
            Télécharger sur Google Play
          </button>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <FeatureCard
            title="Sécurisé"
            description="Protection de vos données garantie"
            icon="🔒"
          />
          <FeatureCard
            title="Rapide"
            description="Performance optimisée"
            icon="⚡"
          />
          <FeatureCard
            title="Intuitif"
            description="Interface simple et élégante"
            icon="✨"
          />
        </div>

        {/* App Preview */}
        <div className="relative h-[600px] mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl transform -rotate-6 transition-transform hover:rotate-0 duration-300">
            <div className="h-full w-full bg-gray-900 bg-opacity-90 rounded-2xl p-6">
              <div className="grid grid-cols-2 gap-4 h-full">
                <div className="flex items-center justify-center">
                  <div className="text-white space-y-4">
                    <h2 className="text-3xl font-bold">Aperçu de l'App</h2>
                    <p className="text-gray-300">
                      Une interface moderne et intuitive pour une expérience utilisateur optimale
                    </p>
                  </div>
                </div>
                <div className="relative">
                  {/* Placeholder pour les screenshots de l'app */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                  <div className="h-full w-full bg-gray-800 rounded-xl animate-float" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-3 gap-8 text-center text-white">
          <StatCard number="1M+" text="Téléchargements" />
          <StatCard number="4.8" text="Note moyenne" />
          <StatCard number="50K+" text="Avis positifs" />
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-400">
        <p>© 2024 Notre App. Tous droits réservés.</p>
      </footer>

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-in;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}

// Composant pour les cartes de fonctionnalités
const FeatureCard = ({ title, description, icon }) => (
  <div className="bg-gray-800 p-6 rounded-xl transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

// Composant pour les statistiques
const StatCard = ({ number, text }) => (
  <div className="p-6">
    <div className="text-4xl font-bold mb-2">{number}</div>
    <div className="text-gray-400">{text}</div>
  </div>
);
