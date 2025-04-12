/*import { ChatInterface } from "@/components/chat-interface"
import { ScaleIcon, MessageCircleIcon, ShieldIcon, BookOpenIcon } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-100 to-white bg-pattern">
      <header className="bg-gradient-to-r from-navy-800 to-navy-900 text-white py-6 shadow-lg">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center">
            <ScaleIcon className="w-10 h-10 mr-3 text-gold-400" />
            <h1 className="text-3xl font-serif font-bold tracking-wide">JusticeNow</h1>
          </div>
          <nav>
            <ul className="flex space-x-6 text-sm">
              <li>
                <a href="#about" className="hover:text-gold-300 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-gold-300 transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#chat" className="hover:text-gold-300 transition-colors">
                  Get Advice
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="bg-hero-pattern bg-cover bg-center py-20 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold mb-4 text-shadow">
            Anonymous Legal Guidance at Your Fingertips
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-shadow">
            Get instant, AI-powered legal information tailored to your situation, anytime, anywhere.
          </p>
          <a
            href="#chat"
            className="bg-gold-400 hover:bg-gold-500 text-navy-900 font-bold py-3 px-8 rounded-full transition-colors text-lg shadow-md"
          >
            Get Started
          </a>
        </div>
      </section>

      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <section id="about" className="mb-12">
              <h2 className="text-3xl font-serif font-bold mb-4 text-navy-800">About JusticeNow</h2>
              <p className="text-gray-700 leading-relaxed">
                JusticeNow is your trusted companion in navigating the complex world of law. Our AI-powered platform
                provides instant, anonymous legal guidance to help you understand your rights and options.
              </p>
            </section>
            <section id="how-it-works" className="mb-12">
              <h2 className="text-3xl font-serif font-bold mb-4 text-navy-800">How It Works</h2>
              <ol className="space-y-4">
                {[
                  { icon: MessageCircleIcon, text: "Describe your legal situation in the chat" },
                  { icon: ShieldIcon, text: "Receive anonymous, AI-generated legal information" },
                  { icon: BookOpenIcon, text: "Get insights to better understand your options" },
                ].map((step, index) => (
                  <li key={index} className="flex items-center">
                    <div className="bg-gold-100 p-3 rounded-full mr-4">
                      <step.icon className="w-6 h-6 text-gold-600" />
                    </div>
                    <span className="text-gray-700">{step.text}</span>
                  </li>
                ))}
              </ol>
            </section>
          </div>
          <div id="chat" className="bg-white rounded-lg shadow-xl p-6 border border-gray-200">
            <h2 className="text-2xl font-serif font-bold mb-4 text-navy-800">Get Legal Guidance</h2>
            <ChatInterface />
          </div>
        </div>
      </main>

      <footer className="bg-gradient-to-r from-navy-800 to-navy-900 text-white py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-serif font-bold mb-4">JusticeNow</h3>
              <p className="text-sm text-gray-300">Empowering individuals with accessible legal information.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#about" className="hover:text-gold-300 transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="hover:text-gold-300 transition-colors">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gold-300 transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gold-300 transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Legal Disclaimer</h3>
              <p className="text-sm text-gray-300">
                The information provided by JusticeNow is for general informational purposes only and is not intended to
                be a substitute for professional legal advice. Always seek the advice of a qualified attorney for any
                legal questions or concerns.
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
            © {new Date().getFullYear()} JusticeNow. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
*/
