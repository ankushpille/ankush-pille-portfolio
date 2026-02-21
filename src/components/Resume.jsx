import { useState, useEffect } from 'react'
import { useInView } from '../hooks/useInView'
import {
    HiOutlineDocumentDownload,
    HiOutlineBriefcase,
    HiOutlineAcademicCap,
    HiOutlineCalendar,
    HiOutlineLocationMarker,
} from 'react-icons/hi'

const experiences = [
    {
        type: 'work',
        title: 'Full-Stack Developer',
        organization: 'Tech Company',
        location: 'Hyderabad, India',
        period: '2024 – Present',
        description:
            'Building scalable web applications with React, Node.js, and cloud services. Leading frontend architecture decisions and mentoring junior developers.',
        tags: ['React', 'Node.js', 'AWS', 'TypeScript'],
    },
    {
        type: 'work',
        title: 'Frontend Developer Intern',
        organization: 'Startup Inc.',
        location: 'Remote',
        period: '2023 – 2024',
        description:
            'Developed responsive UI components and implemented state management solutions. Improved page load performance by 40%.',
        tags: ['React', 'Tailwind CSS', 'Redux'],
    },
    {
        type: 'education',
        title: 'B.Tech in Computer Science',
        organization: 'University',
        location: 'Hyderabad, India',
        period: '2020 – 2024',
        description:
            'Graduated with distinction. Focused on software engineering, data structures, algorithms, and web technologies.',
        tags: ['CS Fundamentals', 'DSA', 'Web Development'],
    },
]

const stats = [
    { label: 'Years Experience', value: 2, suffix: '+' },
    { label: 'Projects Completed', value: 15, suffix: '+' },
    { label: 'Technologies', value: 20, suffix: '+' },
    { label: 'Certifications', value: 5, suffix: '' },
]

function AnimatedCounter({ target, suffix, isInView }) {
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (!isInView) return
        let start = 0
        const duration = 2000
        const increment = target / (duration / 16)
        const timer = setInterval(() => {
            start += increment
            if (start >= target) {
                setCount(target)
                clearInterval(timer)
            } else {
                setCount(Math.floor(start))
            }
        }, 16)
        return () => clearInterval(timer)
    }, [isInView, target])

    return (
        <span className="font-display text-3xl md:text-4xl font-bold gradient-text">
            {count}{suffix}
        </span>
    )
}

export default function Resume() {
    const [ref, isInView] = useInView()

    return (
        <section id="resume" className="relative section-padding">
            {/* Background */}
            <div className="gradient-orb w-[500px] h-[500px] bg-primary-500/8 top-1/3 -left-32 animate-float-slow" />
            <div className="gradient-orb w-[350px] h-[350px] bg-accent-pink/8 bottom-0 right-0 animate-float" />

            <div ref={ref} className="relative z-10 max-w-6xl mx-auto">
                {/* Section header */}
                <div
                    className={`text-center mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                >
                    <p className="text-primary-400 font-medium tracking-widest uppercase text-sm mb-3">
                        My Journey
                    </p>
                    <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
                        Resume & <span className="gradient-text">Experience</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-violet mx-auto rounded-full" />
                </div>

                {/* Main content: Profile Card + Timeline */}
                <div className="grid lg:grid-cols-5 gap-10 mb-16">
                    {/* ── Left: Profile Card ── */}
                    <div
                        className={`lg:col-span-2 transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
                            }`}
                    >
                        <div className="glass-card overflow-hidden sticky top-24">
                            {/* Photo */}
                            <div className="relative h-72 md:h-80 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark-500/90 z-10" />
                                <img
                                    src="/profile.jpg"
                                    alt="Ankush Pille"
                                    className="w-full h-full object-cover object-top"
                                />
                                {/* Decorative corner accents */}
                                <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-primary-400/40 rounded-tl-lg z-10" />
                                <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-accent-violet/40 rounded-tr-lg z-10" />
                            </div>

                            {/* Info */}
                            <div className="p-6 -mt-8 relative z-20">
                                <h3 className="font-display text-2xl font-bold text-white mb-1">
                                    Ankush Pille
                                </h3>
                                <p className="text-primary-300 font-medium mb-4">
                                    Full-Stack Developer
                                </p>

                                {/* Quick info */}
                                <div className="space-y-3 mb-6">
                                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                                        <HiOutlineLocationMarker className="text-primary-400 flex-shrink-0" size={16} />
                                        <span>Hyderabad, India</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                                        <HiOutlineBriefcase className="text-primary-400 flex-shrink-0" size={16} />
                                        <span>Available for opportunities</span>
                                    </div>
                                </div>

                                {/* Download button */}
                                <a
                                    href="/Ankush_Pille_Resume.pdf"
                                    download
                                    className="glow-button flex items-center justify-center gap-2.5 w-full text-sm"
                                >
                                    <HiOutlineDocumentDownload size={20} />
                                    Download Resume
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* ── Right: Timeline ── */}
                    <div className="lg:col-span-3">
                        <div className="relative pl-8 md:pl-10">
                            {/* Vertical timeline line */}
                            <div
                                className="absolute left-[11px] md:left-[15px] top-2 w-0.5 bg-gradient-to-b from-primary-500 via-accent-violet to-accent-pink/30 transition-all duration-1000 ease-out"
                                style={{
                                    height: isInView ? '100%' : '0%',
                                    transitionDelay: '300ms',
                                }}
                            />

                            {experiences.map((item, i) => (
                                <div
                                    key={i}
                                    className={`relative mb-10 last:mb-0 transition-all duration-700 ${isInView
                                            ? 'opacity-100 translate-x-0'
                                            : 'opacity-0 translate-x-8'
                                        }`}
                                    style={{ transitionDelay: `${400 + i * 200}ms` }}
                                >
                                    {/* Timeline dot */}
                                    <div className="absolute -left-8 md:-left-10 top-1 flex items-center justify-center">
                                        <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-dark-400 border-2 border-primary-500/60 flex items-center justify-center shadow-lg shadow-primary-500/20">
                                            {item.type === 'work' ? (
                                                <HiOutlineBriefcase
                                                    className="text-primary-400"
                                                    size={13}
                                                />
                                            ) : (
                                                <HiOutlineAcademicCap
                                                    className="text-accent-violet"
                                                    size={13}
                                                />
                                            )}
                                        </div>
                                    </div>

                                    {/* Card */}
                                    <div className="glass-card-hover p-5 md:p-6">
                                        {/* Header */}
                                        <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                                            <div>
                                                <h4 className="font-display text-lg font-semibold text-white">
                                                    {item.title}
                                                </h4>
                                                <p className="text-primary-300 text-sm font-medium">
                                                    {item.organization}
                                                </p>
                                            </div>
                                            <div className="flex items-center gap-1.5 text-xs text-gray-500 bg-dark-300/60 px-3 py-1.5 rounded-full border border-gray-700/30">
                                                <HiOutlineCalendar size={12} />
                                                {item.period}
                                            </div>
                                        </div>

                                        {/* Location */}
                                        <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-3">
                                            <HiOutlineLocationMarker size={12} />
                                            {item.location}
                                        </div>

                                        {/* Description */}
                                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                            {item.description}
                                        </p>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2">
                                            {item.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="px-2.5 py-1 text-xs font-medium rounded-md bg-primary-500/10 text-primary-300 border border-primary-500/20"
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
                </div>

                {/* ── Stats Bar ── */}
                <div
                    className={`grid grid-cols-2 md:grid-cols-4 gap-4 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}
                    style={{ transitionDelay: '800ms' }}
                >
                    {stats.map((stat, i) => (
                        <div
                            key={stat.label}
                            className="glass-card p-6 text-center group hover:border-primary-500/30 transition-all duration-500"
                        >
                            <AnimatedCounter
                                target={stat.value}
                                suffix={stat.suffix}
                                isInView={isInView}
                            />
                            <p className="text-gray-400 text-sm mt-2 font-medium">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
