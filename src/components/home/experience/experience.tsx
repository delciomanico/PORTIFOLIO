import Timeline from '@/components/ui/timeline'
import ExperienceTimelineItem from '@/components/home/experience/experience-timeline-item'

const EXPERIENCES = [
  {
    index: '01',
    company: 'CASSFREI',
    role: 'IT Technician / Software Developer',
    period: '2025 -',
    status: { text: 'Present', tone: 'positive' as const },
    stack: ['Linux', 'Networking', 'Territorial software', 'Support'],
    achievement: 'Built territorial-management software for a topography services company',
    description:
      'Technical support, IT consulting, and development of territorial-management software for a company specialized in topographic services.'
  },
  {
    index: '02',
    company: 'Escola 42 Luanda',
    role: 'Software Engineering Student',
    period: '2025 -',
    status: { text: 'Present', tone: 'positive' as const },
    stack: ['C', 'C++', 'Systems programming', 'Graphics'],
    achievement: 'Peer-to-peer specialization in programming and systems administration',
    description:
      'Specializing in programming and systems administration: dynamic programming with C and C++, computer graphics, and fullstack web development.'
  },
  {
    index: '03',
    company: 'IPGUL',
    role: 'Backend Developer',
    period: '2024 -',
    status: { text: 'Present', tone: 'positive' as const },
    stack: ['Node.js', 'TypeScript', 'REST APIs', 'Databases'],
    achievement: 'Automated public-service workflows to cut manual bottlenecks',
    description:
      'Working on the digitalization of public services at the Instituto de Planeamento e Gestão Urbana de Luanda — diagnosing organizational bottlenecks and automating processes end to end.'
  },
  {
    index: '04',
    company: 'Startup Olela',
    role: 'Backend Developer',
    period: '2024',
    stack: ['Node.js', 'AI integration', 'APIs'],
    achievement: 'Competed at Lispa Hack 2024 with an AI-powered agriculture platform',
    description:
      'Built the backend of an agricultural platform with AI integration. Competed in the Lispa Hack 2024 challenge.'
  },
  {
    index: '05',
    company: 'Instituto Médio Politécnico 17 de Dezembro',
    role: 'Mid-level Technician in Informatics',
    period: '2021 - 2025',
    stack: ['Fundamentals', 'Networking', 'Programming'],
    achievement: 'Completed the Mid-level Technical Course in Informatics',
    description: 'Mid-level technical education in Informatics.'
  },
  {
    index: '06',
    company: 'Vion Inovation',
    role: 'Backend Developer',
    period: '2021 - 2026',
    stack: ['TypeScript', 'Node.js', 'NestJS', 'API architecture'],
    achievement: 'Defined technical architecture for AI-driven products',
    description:
      'Defined technical architectures, implemented APIs, and supported the development of AI-based solutions.'
  }
]

const ExperienceTimeline = () => {
  return (
    <Timeline
      data={EXPERIENCES.map(({ index, ...experience }) => ({
        index,
        content: <ExperienceTimelineItem {...experience} />
      }))}
    />
  )
}

export default ExperienceTimeline
