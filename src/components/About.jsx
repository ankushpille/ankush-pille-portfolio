import { useInView } from '../hooks/useInView'
import { HiCode, HiLightningBolt, HiGlobe } from 'react-icons/hi'

const highlights = [
    {
        icon: HiCode,
        title: 'Clean Code',
        desc: 'Writing maintainable, well-structured code with best practices.',
    },
    {
        icon: HiLightningBolt,
        title: 'Fast Learner',
        desc: 'Quickly adapting to new technologies and frameworks.',
    },
    {
        icon: HiGlobe,
        title: 'Full-Stack',
        desc: 'End-to-end development from frontend to backend and deployment.',
    },
]

export default function About() {
    const [ref, isInView] = useInView()

    return (
        <section id="about" className="relative section-padding">
            {/* Background */}
            <div className="gradient-orb w-[400px] h-[400px] bg-accent-blue/10 top-0 right-0 animate-float-slow" />

            <div ref={ref} className="relative z-10 max-w-6xl mx-auto">
                {/* Section header */}
                <div className={`text-center mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <p className="text-primary-400 font-medium tracking-widest uppercase text-sm mb-3">
                        About Me
                    </p>
                    <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
                        Get to know <span className="gradient-text">me</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-violet mx-auto rounded-full" />
                </div>

                {/* Content */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                    {/* Avatar / Visual */}
                    <div
                        className={`relative transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
                            }`}
                    >
                        <div className="relative mx-auto w-72 h-72 md:w-80 md:h-80">
                            {/* Decorative rings */}
                            <div className="absolute inset-0 rounded-full border-2 border-primary-500/20 animate-spin-slow" />
                            <div className="absolute inset-4 rounded-full border border-accent-violet/20 animate-spin-slow" style={{ animationDirection: 'reverse' }} />
                            {/* Inner content */}
                            <div className="absolute inset-8 rounded-full bg-gradient-to-br from-primary-500/20 to-accent-violet/20 flex items-center justify-center overflow-hidden border border-primary-500/30">
                                <span className="font-display text-6xl md:text-7xl font-bold gradient-text">AP</span>
                            </div>
                        </div>
                    </div>

                    {/* Bio */}
                    <div
                        className={`transition-all duration-700 delay-300 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
                            }`}
                    >
                        <h3 className="font-display text-2xl md:text-3xl font-semibold mb-4 text-white">
                            A passionate developer building for the web
                        </h3>
                        <p className="text-gray-400 leading-relaxed mb-6 text-base md:text-lg">
                            I'm a Full-Stack Developer with a passion for creating modern, responsive, and
                            user-friendly applications. I enjoy turning complex problems into elegant
                            solutions through clean code and thoughtful design.
                        </p>
                        <p className="text-gray-400 leading-relaxed mb-8 text-base md:text-lg">
                            When I'm not coding, you'll find me exploring new technologies, contributing
                            to open-source projects, or learning about system design and architecture.
                            I believe in continuous learning and pushing the boundaries of what's possible
                            with web technologies.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            {['React', 'Node.js', 'TypeScript', 'Python', 'AWS'].map((tag) => (
                                <span
                                    key={tag}
                                    className="px-4 py-2 text-sm font-medium rounded-lg bg-primary-500/10 text-primary-300 border border-primary-500/20"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Highlight cards */}
                <div className="grid sm:grid-cols-3 gap-6">
                    {highlights.map((item, i) => (
                        <div
                            key={item.title}
                            className={`glass-card-hover p-6 text-center transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                }`}
                            style={{ transitionDelay: `${400 + i * 150}ms` }}
                        >
                            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary-500/10 text-primary-400 mb-4">
                                <item.icon size={28} />
                            </div>
                            <h4 className="font-display font-semibold text-lg text-white mb-2">
                                {item.title}
                            </h4>
                            <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
