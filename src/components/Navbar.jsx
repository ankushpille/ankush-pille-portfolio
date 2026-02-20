import { useState, useEffect } from 'react'
import { HiMenuAlt3, HiX } from 'react-icons/hi'

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState('home')

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)

            // Determine active section
            const sections = navLinks.map(l => l.href.slice(1))
            for (const id of [...sections].reverse()) {
                const el = document.getElementById(id)
                if (el && el.getBoundingClientRect().top <= 150) {
                    setActiveSection(id)
                    break
                }
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleClick = (e, href) => {
        e.preventDefault()
        setIsOpen(false)
        const el = document.querySelector(href)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                    ? 'bg-dark-500/80 backdrop-blur-xl border-b border-primary-500/10 shadow-lg shadow-dark-900/50'
                    : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <a
                        href="#home"
                        onClick={(e) => handleClick(e, '#home')}
                        className="font-display text-xl md:text-2xl font-bold gradient-text hover:opacity-80 transition-opacity"
                    >
                        AP
                    </a>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleClick(e, link.href)}
                                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${activeSection === link.href.slice(1)
                                        ? 'text-white'
                                        : 'text-gray-400 hover:text-white'
                                    }`}
                            >
                                {activeSection === link.href.slice(1) && (
                                    <span className="absolute inset-0 bg-primary-500/10 rounded-lg border border-primary-500/20" />
                                )}
                                <span className="relative">{link.name}</span>
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden relative z-50 p-2 text-gray-300 hover:text-white transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden fixed inset-0 bg-dark-500/95 backdrop-blur-xl transition-all duration-500 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
            >
                <div className="flex flex-col items-center justify-center h-full gap-6">
                    {navLinks.map((link, i) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleClick(e, link.href)}
                            className={`text-2xl font-display font-semibold transition-all duration-300 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                                } ${activeSection === link.href.slice(1)
                                    ? 'gradient-text'
                                    : 'text-gray-300 hover:text-white'
                                }`}
                            style={{ transitionDelay: isOpen ? `${i * 80}ms` : '0ms' }}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    )
}
