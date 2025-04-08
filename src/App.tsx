import React from 'react';
import { Bitcoin, Feather as Ethereum, ShoppingCart, Menu } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-purple-900/30 backdrop-blur-sm fixed w-full z-50">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Bitcoin className="w-8 h-8 text-purple-500" />
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-cyan-500 text-transparent bg-clip-text">
              CryptoShirts
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="hover:text-purple-400 transition-colors">Home</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Coleção</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Sobre</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Contato</a>
          </div>

          <div className="flex items-center gap-4">
            <ShoppingCart className="w-6 h-6 hover:text-purple-400 cursor-pointer" />
            <Menu className="md:hidden w-6 h-6" />
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-transparent bg-clip-text">
                  Crypto Fashion
                </span>
                <br />
                para o Brasil
              </h1>
              <p className="text-gray-400 text-lg">
                Coleção exclusiva de camisetas inspiradas no mundo crypto. 
                Design único, qualidade premium.
              </p>
              <button className="bg-gradient-to-r from-purple-500 to-cyan-500 px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity">
                Explorar Coleção
              </button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 blur-3xl -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?auto=format&fit=crop&q=80"
                alt="Camiseta Crypto"
                className="rounded-lg shadow-2xl shadow-purple-500/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Destaques da Coleção
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-gray-900 rounded-lg overflow-hidden group hover:scale-105 transition-transform duration-300">
                <div className="relative">
                  <img 
                    src={`https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?auto=format&fit=crop&q=80&w=400`}
                    alt="Camiseta"
                    className="w-full aspect-square object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4">
                      <button className="bg-white text-black px-4 py-2 rounded-full font-semibold">
                        Comprar Agora
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">Crypto Punk #{item}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-purple-400">R$ 129,90</span>
                    <div className="flex items-center gap-2">
                      <Bitcoin className="w-4 h-4" />
                      <Ethereum className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 px-4 bg-gradient-to-b from-transparent to-gray-900">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <Bitcoin className="w-12 h-12 mx-auto mb-4 text-purple-500" />
              <h3 className="font-semibold text-xl mb-2">Pagamento em Crypto</h3>
              <p className="text-gray-400">Aceitamos as principais criptomoedas do mercado</p>
            </div>
            <div className="p-6">
              <svg className="w-12 h-12 mx-auto mb-4 text-purple-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
              <h3 className="font-semibold text-xl mb-2">Qualidade Premium</h3>
              <p className="text-gray-400">Tecidos de alta qualidade e estampas duráveis</p>
            </div>
            <div className="p-6">
              <svg className="w-12 h-12 mx-auto mb-4 text-purple-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 12V8H4v4M4 16v-4M20 16v-4M1 12h22M12 12v8" />
              </svg>
              <h3 className="font-semibold text-xl mb-2">Envio Seguro</h3>
              <p className="text-gray-400">Entrega para todo o Brasil</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;