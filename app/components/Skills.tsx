"use client";

import { TranslationSchema } from "../data/translations";

interface SkillsProps {
  t: TranslationSchema;
}

export default function Skills({ t }: SkillsProps) {
  // Categorized skills directly from the resume
  const skillsCategories = [
    {
      key: "ai",
      title: t.skills.categories.ai,
      icon: "🤖",
      gradient: "from-amber-500 to-red-500",
      bgLight: "bg-amber-500/5",
      borderLight: "border-amber-500/10",
      badgeColor: "bg-amber-500/10 text-amber-300 border-amber-500/20",
      items: [
        "LLM API Integration (OpenAI, Claude, Gemini)",
        "Prompt Engineering",
        "n8n Workflow Automation",
        "AI Agents",
        "Slack/Discord AI Gateway",
      ],
    },
    {
      key: "backend",
      title: t.skills.categories.backend,
      icon: "⚙️",
      gradient: "from-brand-teal to-cyan-500",
      bgLight: "bg-brand-teal/5",
      borderLight: "border-brand-teal/10",
      badgeColor: "bg-brand-teal/10 text-brand-teal border-brand-teal/20",
      items: [
        "Node.js",
        "NestJS",
        "Express.js",
        "FastAPI (Python)",
        "GraphQL (Apollo)",
        "REST APIs",
        "Microservices (MSA)",
      ],
    },
    {
      key: "frontend",
      title: t.skills.categories.frontend,
      icon: "💻",
      gradient: "from-brand-indigo to-blue-500",
      bgLight: "bg-brand-indigo/5",
      borderLight: "border-brand-indigo/10",
      badgeColor: "bg-brand-indigo/10 text-brand-indigo border-brand-indigo/20",
      items: [
        "React",
        "Next.js",
        "TypeScript",
        "Redux / Redux Toolkit",
        "React Query",
        "Tailwind CSS",
        "Material UI (MUI)",
        "SCSS Modules",
      ],
    },
    {
      key: "languages",
      title: t.skills.categories.languages,
      icon: "📝",
      gradient: "from-emerald-500 to-brand-teal",
      bgLight: "bg-emerald-500/5",
      borderLight: "border-emerald-500/10",
      badgeColor: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
      items: ["JavaScript (ES6+)", "TypeScript", "Python", "SQL"],
    },
    {
      key: "databases",
      title: t.skills.categories.databases,
      icon: "🗄️",
      gradient: "from-violet-500 to-brand-purple",
      bgLight: "bg-violet-500/5",
      borderLight: "border-violet-500/10",
      badgeColor: "bg-violet-500/10 text-violet-300 border-violet-500/20",
      items: ["PostgreSQL", "MySQL", "MongoDB", "Redis Cache", "DB Indexing & Query Tuning"],
    },
    {
      key: "devops",
      title: t.skills.categories.devops,
      icon: "☁️",
      gradient: "from-fuchsia-500 to-pink-500",
      bgLight: "bg-fuchsia-500/5",
      borderLight: "border-fuchsia-500/10",
      badgeColor: "bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-500/20",
      items: [
        "Docker",
        "Docker Compose",
        "NGINX Reverse Proxy",
        "Linux (Ubuntu)",
        "PM2 Process Manager",
        "VPS / VPC Networks",
        "CI/CD Integration",
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-bg-primary">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-brand-teal/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-xl mx-auto">
          <h2 className="text-xs font-bold text-brand-teal uppercase tracking-widest mb-2">
            {t.skills.title}
          </h2>
          <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
            {t.skills.subtitle}
          </h3>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsCategories.map((category) => (
            <div
              key={category.key}
              className={`p-6 rounded-2xl bg-zinc-950 border border-white/5 glow-hover flex flex-col justify-between`}
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">{category.icon}</span>
                  <h4 className="font-extrabold text-white text-base tracking-wide">
                    {category.title}
                  </h4>
                </div>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill, index) => (
                    <span
                      key={index}
                      className={`text-2xs font-semibold px-2.5 py-1 rounded-lg border transition-all duration-300 hover:scale-[1.03] ${category.badgeColor}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom stylized indicator */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-3xs text-zinc-600 font-bold uppercase tracking-wider">
                  Verified Skill
                </span>
                <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.gradient}`} />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
