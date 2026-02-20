import { useInView } from '../hooks/useInView'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
    {
        title: 'E-Commerce Platform',
        description:
            'A full-featured online store with cart management, payment integration, and admin dashboard. Built with modern web technologies for a seamless shopping experience.',
        tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        github: 'https://github.com/ankushpille',
        live: '#',
        gradient: 'from-primary-500/20 to-accent-blue/20',
        accent: 'border-primary-500/30',
    },
    {
        title: 'Task Management App',
        description:
            'A collaborative project management tool with real-time updates, drag-and-drop boards, and team workspace functionality.',
        tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Socket.io'],
        github: 'https://github.com/ankushpille',
        live: '#',
        gradient: 'from-accent-violet/20 to-accent-pink/20',
        accent: 'border-accent-violet/30',
    },
    {
        title: 'AI Chat Application',
        description:
            'An intelligent conversational interface powered by modern AI models, with message history, streaming responses, and a clean user experience.',
        tags: ['React', 'Python', 'FastAPI', 'OpenAI'],
        github: 'https://github.com/ankushpille',
        live: '#',
        gradient: 'from-accent-cyan/20 to-accent-emerald/20',
        accent: 'border-accent-cyan/30',
    },
    {
        title: 'Portfolio Website',
        description:
            'This very portfolio! A modern, responsive single-page application built with React and Tailwind CSS, featuring smooth animations and dark theme.',
        tags: ['React', 'Tailwind CSS', 'Vite', 'Vercel'],
        github: 'https://github.com/ankushpille/ankush-pille-portfolio',
        live: '#',
        gradient: 'from-accent-pink/20 to-primary-500/20',
        accent: 'border-accent-pink/30',
    },
]

export default function Projects() {
    const [ref, isInView] = useInView()

    return (
        <section id="projects" className="relative section-padding">
            <div className="gradient-orb w-[500px] h-[500px] bg-primary-500/10 -bottom-32 -left-32 animate-float" />

            <div ref={ref} className="relative z-10 max-w-6xl mx-auto">
                {/* Section header */}
                <div className={`text-center mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <p className="text-primary-400 font-medium tracking-widest uppercase text-sm mb-3">
                        Portfolio
                    </p>
                    <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-violet mx-auto rounded-full" />
                </div>

                {/* Projects grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, i) => (
                        <div
                            key={project.title}
                            className={`glass-card-hover overflow-hidden group transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                                }`}
                            style={{ transitionDelay: `${200 + i * 150}ms` }}
                        >
                            {/* Project image placeholder */}
                            <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="font-display text-4xl font-bold text-white/20 group-hover:text-white/30 transition-colors duration-300">
                                        {project.title.split(' ').map(w => w[0]).join('')}
                                    </span>
                                </div>
                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-dark-500/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-all duration-200"
                                        aria-label="GitHub"
                                    >
                                        <FaGithub size={20} />
                                    </a>
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-all duration-200"
                                        aria-label="Live Demo"
                                    >
                                        <FaExternalLinkAlt size={18} />
                                    </a>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="font-display text-xl font-semibold text-white mb-3 group-hover:gradient-text transition-all duration-300">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 text-xs font-medium rounded-md bg-dark-300/80 text-gray-300 border border-gray-700/50"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
