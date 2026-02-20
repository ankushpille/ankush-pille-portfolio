import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa'

const socials = [
    { icon: FaGithub, href: 'https://github.com/ankushpille', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/ankushpille', label: 'LinkedIn' },
    { icon: FaTwitter, href: 'https://twitter.com/ankushpille', label: 'Twitter' },
]

export default function Footer() {
    return (
        <footer className="relative border-t border-gray-800/50">
            <div className="max-w-6xl mx-auto px-6 md:px-12 py-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Logo */}
                    <a href="#home" className="font-display text-xl font-bold gradient-text">
                        Ankush Pille
                    </a>

                    {/* Social links */}
                    <div className="flex items-center gap-4">
                        {socials.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2.5 rounded-lg text-gray-500 hover:text-white hover:bg-primary-500/10 transition-all duration-300"
                                aria-label={social.label}
                            >
                                <social.icon size={18} />
                            </a>
                        ))}
                    </div>

                    {/* Copyright */}
                    <p className="text-sm text-gray-500 flex items-center gap-1.5">
                        © {new Date().getFullYear()} — Built with <FaHeart className="text-accent-pink" size={12} /> by Ankush Pille
                    </p>
                </div>
            </div>
        </footer>
    )
}
