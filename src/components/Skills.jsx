import { useInView } from '../hooks/useInView'
import {
    FaReact, FaNodeJs, FaPython, FaGitAlt, FaDocker, FaAws, FaFigma,
} from 'react-icons/fa'
import {
    SiTypescript, SiJavascript, SiNextdotjs, SiTailwindcss, SiMongodb,
    SiPostgresql, SiRedis, SiGraphql, SiVite, SiVercel, SiLinux,
} from 'react-icons/si'

const skillCategories = [
    {
        title: 'Frontend',
        color: 'from-primary-500 to-accent-blue',
        borderColor: 'border-primary-500/30',
        skills: [
            { name: 'React', icon: FaReact, level: 90 },
            { name: 'Next.js', icon: SiNextdotjs, level: 85 },
            { name: 'TypeScript', icon: SiTypescript, level: 85 },
            { name: 'JavaScript', icon: SiJavascript, level: 92 },
            { name: 'Tailwind CSS', icon: SiTailwindcss, level: 90 },
            { name: 'Vite', icon: SiVite, level: 80 },
        ],
    },
    {
        title: 'Backend',
        color: 'from-accent-violet to-accent-pink',
        borderColor: 'border-accent-violet/30',
        skills: [
            { name: 'Node.js', icon: FaNodeJs, level: 88 },
            { name: 'Python', icon: FaPython, level: 82 },
            { name: 'MongoDB', icon: SiMongodb, level: 80 },
            { name: 'PostgreSQL', icon: SiPostgresql, level: 78 },
            { name: 'Redis', icon: SiRedis, level: 70 },
            { name: 'GraphQL', icon: SiGraphql, level: 75 },
        ],
    },
    {
        title: 'Tools & DevOps',
        color: 'from-accent-cyan to-accent-emerald',
        borderColor: 'border-accent-cyan/30',
        skills: [
            { name: 'Git', icon: FaGitAlt, level: 90 },
            { name: 'Docker', icon: FaDocker, level: 75 },
            { name: 'AWS', icon: FaAws, level: 70 },
            { name: 'Vercel', icon: SiVercel, level: 88 },
            { name: 'Linux', icon: SiLinux, level: 78 },
            { name: 'Figma', icon: FaFigma, level: 72 },
        ],
    },
]

export default function Skills() {
    const [ref, isInView] = useInView()

    return (
        <section id="skills" className="relative section-padding bg-dark-400/30">
            <div className="gradient-orb w-[400px] h-[400px] bg-accent-violet/10 top-1/4 -right-20 animate-float-slow" />

            <div ref={ref} className="relative z-10 max-w-6xl mx-auto">
                {/* Section header */}
                <div className={`text-center mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <p className="text-primary-400 font-medium tracking-widest uppercase text-sm mb-3">
                        Expertise
                    </p>
                    <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
                        My <span className="gradient-text">Skills</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-violet mx-auto rounded-full" />
                </div>

                {/* Skill categories */}
                <div className="grid lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, ci) => (
                        <div
                            key={category.title}
                            className={`glass-card p-6 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                                }`}
                            style={{ transitionDelay: `${200 + ci * 200}ms` }}
                        >
                            {/* Category header */}
                            <div className="flex items-center gap-3 mb-6">
                                <div className={`w-10 h-1 rounded-full bg-gradient-to-r ${category.color}`} />
                                <h3 className="font-display text-xl font-semibold text-white">
                                    {category.title}
                                </h3>
                            </div>

                            {/* Skills */}
                            <div className="space-y-5">
                                {category.skills.map((skill, si) => (
                                    <div
                                        key={skill.name}
                                        className={`transition-all duration-500 ${isInView ? 'opacity-100' : 'opacity-0'
                                            }`}
                                        style={{ transitionDelay: `${400 + ci * 200 + si * 80}ms` }}
                                    >
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center gap-2.5">
                                                <skill.icon className="text-gray-400" size={18} />
                                                <span className="text-sm font-medium text-gray-300">
                                                    {skill.name}
                                                </span>
                                            </div>
                                            <span className="text-xs text-gray-500 font-mono">
                                                {skill.level}%
                                            </span>
                                        </div>
                                        {/* Progress bar */}
                                        <div className="h-1.5 bg-dark-300 rounded-full overflow-hidden">
                                            <div
                                                className={`h-full rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
                                                style={{
                                                    width: isInView ? `${skill.level}%` : '0%',
                                                    transitionDelay: `${600 + ci * 200 + si * 80}ms`,
                                                }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
