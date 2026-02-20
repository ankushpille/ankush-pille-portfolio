import { HiArrowDown, HiOutlineDocumentDownload } from 'react-icons/hi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Hero() {
    const scrollToProjects = (e) => {
        e.preventDefault()
        document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Background Orbs */}
            <div className="gradient-orb w-[500px] h-[500px] bg-primary-500/20 top-1/4 -left-32 animate-float-slow" />
            <div className="gradient-orb w-[400px] h-[400px] bg-accent-violet/20 bottom-1/4 -right-20 animate-float" />
            <div className="gradient-orb w-[300px] h-[300px] bg-accent-cyan/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse-glow" />

            {/* Grid Pattern */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(rgba(99,102,241,0.3) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(99,102,241,0.3) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px',
                }}
            />

            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-300 text-sm font-medium animate-fade-in">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-emerald opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-emerald"></span>
                    </span>
                    Available for opportunities
                </div>

                {/* Main heading */}
                <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight mb-6 animate-fade-in-up">
                    Hi, I'm{' '}
                    <span className="gradient-text">Ankush</span>
                    <br />
                    <span className="text-gray-300">Pille</span>
                </h1>

                {/* Subtitle */}
                <p className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    Full-Stack Developer crafting{' '}
                    <span className="text-accent-blue">modern</span>,{' '}
                    <span className="text-accent-violet">scalable</span>, and{' '}
                    <span className="text-accent-pink">beautiful</span>{' '}
                    digital experiences.
                </p>

                {/* CTAs */}
                <div
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up"
                    style={{ animationDelay: '0.4s' }}
                >
                    <button
                        onClick={scrollToProjects}
                        className="glow-button flex items-center gap-2 text-base"
                    >
                        View My Work
                        <HiArrowDown className="animate-bounce" />
                    </button>
                    <a
                        href="#contact"
                        onClick={(e) => {
                            e.preventDefault()
                            document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                        }}
                        className="px-6 py-3 rounded-xl border border-gray-600 text-gray-300 hover:border-primary-400 hover:text-white transition-all duration-300 font-medium"
                    >
                        Get in Touch
                    </a>
                </div>

                {/* Social links */}
                <div
                    className="flex items-center justify-center gap-5 animate-fade-in-up"
                    style={{ animationDelay: '0.6s' }}
                >
                    <a
                        href="https://github.com/ankushpille"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-xl bg-dark-300/50 border border-gray-700/50 text-gray-400 hover:text-white hover:border-primary-400/50 hover:bg-primary-500/10 transition-all duration-300"
                        aria-label="GitHub"
                    >
                        <FaGithub size={22} />
                    </a>
                    <a
                        href="https://linkedin.com/in/ankushpille"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-xl bg-dark-300/50 border border-gray-700/50 text-gray-400 hover:text-white hover:border-primary-400/50 hover:bg-primary-500/10 transition-all duration-300"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin size={22} />
                    </a>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 animate-fade-in" style={{ animationDelay: '1s' }}>
                <span className="text-xs tracking-widest uppercase">Scroll</span>
                <div className="w-5 h-8 rounded-full border-2 border-gray-600 flex items-start justify-center p-1">
                    <div className="w-1 h-2 bg-gray-400 rounded-full animate-bounce" />
                </div>
            </div>
        </section>
    )
}
