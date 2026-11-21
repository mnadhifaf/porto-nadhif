export interface FocusLayer {
  id: string;
  index: string;
  title: string;
  shortLabel: string;
  accent: string;
  dotColor: string;
  subtitle: string;
  summary: string;
  stack: string[];
  targetSection: string;
}

export interface RenderLayer {
  id: string;
  name: string;
  colorClass: string;
  timeRange: string;
  blendMode: string;
  visible: boolean;
}

export interface EducationNode {
  id: string;
  period: string;
  institution: string;
  program: string;
  description: string;
  accentColor: string;
  highlight?: boolean;
}

export interface SoftwareTool {
  id: string;
  code: string;
  name: string;
  category: string;
  level: string;
  hardSkillTitle: string;
  hardSkillDesc: string;
  iconBg: string;
  iconBorder: string;
  iconText: string;
  hoverBg: string;
  highlights: string[];
}

export interface ExperienceItem {
  id: string;
  period: string;
  category: 'Leadership' | 'Event & Health' | 'Tech';
  badgeLabel: string;
  accentText: string;
  organization: string;
  role: string;
  description: string;
  roleId: string;
  deliverables: string[];
  spanWide?: boolean;
}

export const FOCUS_LAYERS: FocusLayer[] = [
  {
    id: 'web',
    index: '01',
    title: 'Web & HTML System',
    shortLabel: 'Web Architecture',
    accent: '#0057FF',
    dotColor: 'bg-[#0057FF]',
    subtitle: 'Semantic markup, responsive layouts & interactive interfaces',
    summary:
      'Clean architectural front-end engineering combining semantic HTML5, precision CSS grid systems, and TypeScript interactions.',
    stack: ['HTML5 Semantic', 'TypeScript', 'Tailwind CSS', 'React'],
    targetSection: '#skills',
  },
  {
    id: 'ai',
    index: '02',
    title: 'Artificial Intelligence',
    shortLabel: 'Artificial Intelligence',
    accent: '#2563EB',
    dotColor: 'bg-blue-600',
    subtitle: 'Heuristics, intelligent models & biosignal analytics',
    summary:
      'Computational modeling and predictive analytics applied to healthcare signals and automated problem solving.',
    stack: ['Neural Heuristics', 'Signal Classification', 'Python', 'Data Pipelines'],
    targetSection: '#neuro-dawn',
  },
  {
    id: 'cpp',
    index: '03',
    title: 'C++ & Problem Solving',
    shortLabel: 'Competitive Programming',
    accent: '#0284C7',
    dotColor: 'bg-sky-500',
    subtitle: 'Algorithmic efficiency & competitive programming logic',
    summary:
      'Time and memory complexity optimization through graph algorithms, dynamic programming, and structured C++ architectures.',
    stack: ['C++17/20', 'Data Structures', 'Graph Theory', 'Dynamic Programming'],
    targetSection: '#skills',
  },
  {
    id: 'vfx',
    index: '04',
    title: 'VFX, Ae & 3D Elements',
    shortLabel: 'VFX & Multimedia',
    accent: '#7C3AED',
    dotColor: 'bg-purple-500',
    subtitle: 'Motion graphics, 3D camera tracking & compositing',
    summary:
      'Production-grade visual effects compositing, keyframe animation, optical flares, and multi-track audio synchronization.',
    stack: ['After Effects', 'Premiere Pro', '3D Camera Rig', 'CapCut'],
    targetSection: '#skills',
  },
  {
    id: 'neuro',
    index: '05',
    title: 'Neuro-Tech Innovation',
    shortLabel: 'Neuro-Tech Innovation',
    accent: '#059669',
    dotColor: 'bg-emerald-500',
    subtitle: 'Biomedical telemetry & IIIEX 2025 Gold Medal research',
    summary:
      'Neuro-stimulation prevention research targeting early-stage dopaminergic neuron degradation in Parkinson’s disease.',
    stack: ['Biomedical Telemetry', 'Control Protocols', 'Embedded Systems', 'IYSA Research'],
    targetSection: '#neuro-dawn',
  },
];

export const INITIAL_RENDER_LAYERS: RenderLayer[] = [
  {
    id: 'layer-1',
    name: 'Track_Matte_NeuroDawn.mp4',
    colorClass: 'text-blue-400',
    timeRange: '00:00 — 00:14',
    blendMode: 'Alpha Matte',
    visible: true,
  },
  {
    id: 'layer-2',
    name: '3D_Brain_Dopamine_Emitter',
    colorClass: 'text-emerald-400',
    timeRange: '00:02 — 00:14',
    blendMode: 'Screen 85%',
    visible: true,
  },
  {
    id: 'layer-3',
    name: 'Glow_OpticalFlares_4K',
    colorClass: 'text-purple-400',
    timeRange: '00:04 — 00:12',
    blendMode: 'Add',
    visible: true,
  },
  {
    id: 'layer-4',
    name: 'Camera_Rig_Null_3D',
    colorClass: 'text-amber-400',
    timeRange: '00:00 — 00:14',
    blendMode: 'Transform 3D',
    visible: true,
  },
];

export const EDUCATION_HISTORY: EducationNode[] = [
  {
    id: 'it-pln',
    period: '2026 — PRESENT',
    institution: 'Institut Teknologi PLN (IT-PLN)',
    program: 'S1 Teknik Informatika (Informatics Engineering)',
    description:
      'S1 Teknik Informatika (Informatics Engineering). Fokus: Rekayasa Perangkat Lunak, Sistem Cerdas & Algoritma Komputasi.',
    accentColor: '#0057FF',
    highlight: true,
  },
  {
    id: 'man-ic',
    period: '2023 — 2026',
    institution: 'MAN Insan Cendekia OKI',
    program: 'Science & Technology Track',
    description:
      'Madrasah Aliyah Negeri unggulan nasional. Aktif dalam riset sains teknologi, ekstrakurikuler ICT, dan kepemimpinan asrama.',
    accentColor: '#10B981',
    highlight: true,
  },
  {
    id: 'mtsn-2',
    period: '2020 — 2023',
    institution: 'MTsN 2 Kota Palembang',
    program: 'Junior High School',
    description:
      'Pendidikan Menengah Pertama. Pondasi logika sains, matematika terapan, dan minat awal teknologi digital.',
    accentColor: '#71717A',
  },
  {
    id: 'sd-it',
    period: '2014 — 2020',
    institution: "SD IT Ma'had Izzatuna",
    program: 'Integrated Islamic Elementary',
    description:
      'Pendidikan Dasar Islam Terpadu. Pembentukan karakter, integritas kedisiplinan, dan dasar literasi bilingual.',
    accentColor: '#52525B',
  },
];

export const SOFTWARE_TOOLS: SoftwareTool[] = [
  {
    id: 'html5',
    code: '</>',
    name: 'HTML5 Semantic',
    category: 'Modern Web Struct',
    level: 'PROFICIENT',
    hardSkillTitle: 'Kerangka Web HTML & Architecture',
    hardSkillDesc:
      'Penulisan kode HTML semantik, aksesibilitas modern, integrasi stylesheet, dan layout responsif presisi.',
    iconBg: 'bg-orange-500/10',
    iconBorder: 'border-orange-500',
    iconText: 'text-orange-600',
    hoverBg: 'group-hover:bg-orange-500 group-hover:text-white',
    highlights: ['Semantic DOM Hierarchy', 'WCAG AA Accessibility', 'Responsive Grid Systems'],
  },
  {
    id: 'cpp',
    code: 'C++',
    name: 'Comp. Program',
    category: 'Algorithms & Logic',
    level: 'ADVANCED LOGIC',
    hardSkillTitle: 'Competitive Programming & Algoritma',
    hardSkillDesc:
      'Pemecahan masalah matematis, optimasi kompleksitas waktu & memori dengan bahasa C++.',
    iconBg: 'bg-blue-500/10',
    iconBorder: 'border-blue-600',
    iconText: 'text-blue-600',
    hoverBg: 'group-hover:bg-blue-600 group-hover:text-white',
    highlights: ['Graph & Tree Traversal', 'Dynamic Programming', 'Complexity Optimization'],
  },
  {
    id: 'ai',
    code: 'AI',
    name: 'Artificial Intell.',
    category: 'Models & Heuristics',
    level: 'RESEARCH GRADE',
    hardSkillTitle: 'Artificial Intelligence & Biomedical Tech',
    hardSkillDesc:
      'Penerapan komputasi untuk biosinyal saraf dan otomasi analitik data kesehatan.',
    iconBg: 'bg-cobalt/10',
    iconBorder: 'border-cobalt',
    iconText: 'text-cobalt',
    hoverBg: 'group-hover:bg-cobalt group-hover:text-white',
    highlights: ['Biosignal Pattern Analysis', 'Predictive Health Telemetry', 'Heuristic Control Loops'],
  },
  {
    id: 'ae',
    code: 'Ae',
    name: 'After Effects',
    category: 'VFX & Compositing',
    level: 'PRODUCTION GRADE',
    hardSkillTitle: 'Multimedia Editing & VFX Compositing',
    hardSkillDesc:
      'Visual effect tracking, audio synchronization, motion graphics, color grading, dan storytelling video tingkat lanjut.',
    iconBg: 'bg-[#00005B]',
    iconBorder: 'border-[#9999FF]',
    iconText: 'text-[#9999FF]',
    hoverBg: 'group-hover:scale-105',
    highlights: ['3D Camera Tracking', 'Keyframed Motion Graphics', 'Optical Glow & Matte Compositing'],
  },
  {
    id: 'pr',
    code: 'Pr',
    name: 'Premiere Pro',
    category: 'Video Sequencing',
    level: 'PRODUCTION GRADE',
    hardSkillTitle: 'Nonlinear Video Sequencing & Sound Design',
    hardSkillDesc:
      'Penyuntingan naratif multi-track, sinkronisasi audio presisi, transisi ritmis, dan color grading sinematik.',
    iconBg: 'bg-[#00002A]',
    iconBorder: 'border-[#EA77FF]',
    iconText: 'text-[#EA77FF]',
    hoverBg: 'group-hover:scale-105',
    highlights: ['Multi-Cam Timeline Assembly', 'Lumetri Color Pipeline', 'Audio Ducking & Sync'],
  },
  {
    id: 'cc',
    code: 'CC',
    name: 'CapCut Video',
    category: 'Social Narrative',
    level: 'RAPID WORKFLOW',
    hardSkillTitle: 'Rapid Short-Form Visual Storytelling',
    hardSkillDesc:
      'Produksi cepat konten edukasi & dokumentasi visual dengan pacing dinamis untuk distribusi digital modern.',
    iconBg: 'bg-zinc-900',
    iconBorder: 'border-zinc-600',
    iconText: 'text-white',
    hoverBg: 'group-hover:bg-zinc-800',
    highlights: ['Kinetic Typography', 'Fast-Turnaround Reels', 'Rhythmic Sound Cues'],
  },
];

export const SOFT_COMPETENCIES = [
  { label: 'Kepemimpinan (Leadership)', color: 'text-emerald-400' },
  { label: 'Adaptabilitas Cepat', color: 'text-cobalt' },
  { label: 'Komunikatif & Negosiasi', color: 'text-purple-400' },
  { label: 'Kerjasama Tim Solid', color: 'text-amber-400' },
  { label: 'Bahasa Inggris (Komunikasi & Teknis)', color: 'text-rose-400' },
];

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    id: 'reorg-25',
    period: '2025',
    category: 'Leadership',
    badgeLabel: 'Selection Board',
    accentText: 'text-cobalt',
    organization: 'Re-Organisasi MAN IC OKI',
    role: 'Panitia Penguji / Wawancara Calon Anggota',
    description:
      'Bertanggung jawab memimpin proses asesmen, uji integritas, dan wawancara terstruktur untuk menyaring suksesor kepengurusan organisasi siswa baru dengan standar kepemimpinan yang objektif.',
    roleId: 'REORG_ICOKI_25',
    deliverables: [
      'Structured competency interview rubric',
      'Candidate integrity & leadership evaluation',
      'Final selection deliberation & handover',
    ],
  },
  {
    id: 'iconic-25',
    period: '2025',
    category: 'Event & Health',
    badgeLabel: 'Event Management',
    accentText: 'text-cobalt',
    organization: 'ICONIC 2025',
    role: 'Anggota Divisi Acara Seminar Nasional',
    description:
      'Mengonsep rundown acara, mengoordinasikan narasumber tingkat nasional, serta menjaga alur operasional live event seminar nasional agar berjalan tepat waktu dan imersif.',
    roleId: 'ICONIC_SEMNAS_25',
    deliverables: [
      'National seminar rundown & stage cueing',
      'Speaker liaison & moderation timing',
      'Live event contingency orchestration',
    ],
  },
  {
    id: 'health-24',
    period: '2024 — 2025',
    category: 'Event & Health',
    badgeLabel: 'Health Officer',
    accentText: 'text-[#ff6c00]',
    organization: 'Organisasi Keasramaan MAN IC OKI',
    role: 'Divisi Kesehatan Asrama',
    description:
      'Mengelola logistik medis asrama, tanggap darurat pertolongan pertama (P3K) bagi siswa asrama, serta mengedukasi standar sanitasi dan pola hidup sehat di lingkungan asrama.',
    roleId: 'HEALTH_BOARD_24',
    deliverables: [
      'Dormitory medical inventory management',
      'First-aid (P3K) emergency rapid response',
      'Campus sanitation & wellness outreach',
    ],
  },
  {
    id: 'discipline-23',
    period: '2023 — 2024',
    category: 'Leadership',
    badgeLabel: 'Discipline Core',
    accentText: 'text-purple-600',
    organization: 'Organisasi Keasramaan MAN IC OKI',
    role: 'Divisi Kedisiplinan Siswa',
    description:
      'Menegakkan tata tertib kehidupan asrama terpadu 24 jam, membangun kultur ketepatan waktu belajar mandiri dan ibadah, serta membina resolusi konflik antar siswa.',
    roleId: 'DISCIPLINE_BOARD_23',
    deliverables: [
      '24-hour boarding order & schedule stewardship',
      'Peer conflict mediation & mentoring',
      'Study-hour punctuality reinforcement',
    ],
  },
  {
    id: 'ict-23',
    period: '2023 — 2024',
    category: 'Tech',
    badgeLabel: 'Tech Incubator',
    accentText: 'text-cobalt',
    organization: 'Ekstrakurikuler ICT (Information & Communication Technology)',
    role: 'Divisi Programming dan Editing Kreatif',
    description:
      'Pusat penggodokan keterampilan coding dasar, pemecahan problem logika algoritmik, serta produksi konten video sekolah. Mengoordinasikan tutorial teknis antar anggota dalam pembuatan proyek multimedia dan persiapan kompetisi sains informatika.',
    roleId: 'ICT_TECH_CORE_23',
    deliverables: [
      'Algorithmic & C++ peer tutoring workshops',
      'School multimedia & VFX video production',
      'Informatics Olympiad technical prep',
    ],
    spanWide: true,
  },
];
