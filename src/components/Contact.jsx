import { useState } from 'react'
import { useInView } from '../hooks/useInView'
import { HiMail, HiLocationMarker, HiPhone } from 'react-icons/hi'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const contactInfo = [
    { icon: HiMail, label: 'Email', value: 'ankush.pille1@email.com', href: 'mailto:ankush.pille@email.com' },
    { icon: HiLocationMarker, label: 'Location', value: 'India', href: null },
    { icon: HiPhone, label: 'Phone', value: 'Available on request', href: null },
]

const socials = [
    { icon: FaGithub, label: 'GitHub', href: 'https://github.com/ankushpille' },
    { icon: FaLinkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/ankushpille' },
    { icon: FaTwitter, label: 'Twitter', href: 'https://twitter.com/ankushpille' },
]

export default function Contact() {
    const [ref, isInView] = useInView()
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // In production, connect to a form endpoint (Formspree, Netlify Forms, etc.)
        setSubmitted(true)
        setTimeout(() => setSubmitted(false), 4000)
        setFormData({ name: '', email: '', message: '' })
    }

    return (
        <section id="contact" className="relative section-padding">
            <div className="gradient-orb w-[500px] h-[500px] bg-accent-pink/10 bottom-0 left-1/4 animate-float-slow" />

            <div ref={ref} className="relative z-10 max-w-6xl mx-auto">
                {/* Section header */}
                <div className={`text-center mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <p className="text-primary-400 font-medium tracking-widest uppercase text-sm mb-3">
                        Get In Touch
                    </p>
                    <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
                        Let's <span className="gradient-text">Connect</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-violet mx-auto rounded-full" />
                </div>

                <div className="grid lg:grid-cols-5 gap-12">
                    {/* Contact info */}
                    <div
                        className={`lg:col-span-2 space-y-8 transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
                            }`}
                    >
                        <div>
                            <h3 className="font-display text-2xl font-semibold text-white mb-3">
                                Let's work together
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                I'm always open to discussing new projects, creative ideas, or opportunities
                                to be part of your vision. Feel free to reach out!
                            </p>
                        </div>

                        <div className="space-y-4">
                            {contactInfo.map((info) => (
                                <div key={info.label} className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center text-primary-400 flex-shrink-0">
                                        <info.icon size={22} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase tracking-wider">{info.label}</p>
                                        {info.href ? (
                                            <a href={info.href} className="text-gray-300 hover:text-primary-400 transition-colors text-sm">
                                                {info.value}
                                            </a>
                                        ) : (
                                            <p className="text-gray-300 text-sm">{info.value}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Social links */}
                        <div>
                            <p className="text-sm text-gray-500 mb-3">Find me on</p>
                            <div className="flex gap-3">
                                {socials.map((social) => (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-11 h-11 rounded-xl bg-dark-300/50 border border-gray-700/50 flex items-center justify-center text-gray-400 hover:text-white hover:border-primary-400/50 hover:bg-primary-500/10 transition-all duration-300"
                                        aria-label={social.label}
                                    >
                                        <social.icon size={20} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Contact form */}
                    <div
                        className={`lg:col-span-3 transition-all duration-700 delay-300 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
                            }`}
                    >
                        <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-dark-300/50 border border-gray-700/50 rounded-xl text-gray-200 placeholder-gray-600 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/20 transition-all duration-300"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                                        Your Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-dark-300/50 border border-gray-700/50 rounded-xl text-gray-200 placeholder-gray-600 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/20 transition-all duration-300"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 bg-dark-300/50 border border-gray-700/50 rounded-xl text-gray-200 placeholder-gray-600 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/20 transition-all duration-300 resize-none"
                                    placeholder="Tell me about your project..."
                                />
                            </div>
                            <button
                                type="submit"
                                className="glow-button w-full py-3.5 text-base flex items-center justify-center gap-2"
                            >
                                {submitted ? (
                                    <>
                                        <span className="inline-block w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        Message Sent!
                                    </>
                                ) : (
                                    'Send Message'
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
