import { FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import {
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiPostgresql,
  SiGithub,
  SiNpm,
  SiVite,
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

export const tools = [
  {
    name: 'Git',
    icon: FaGitAlt,
  },
  {
    name: 'GitHub',
    icon: SiGithub,
  },
  {
    name: 'npm',
    icon: SiNpm,
  },
  {
    name: 'Vite',
    icon: SiVite,
  },
  {
    name: 'VS Code',
    icon: VscVscode,
  },
];

export const primaryStack = [
  {
    name: 'React',
    icon: FaReact,
    start: '2024-07',
  },
  {
    name: 'JavaScript',
    icon: SiJavascript,
    start: '2022-10',
  },
  {
    name: 'Tailwind CSS',
    icon: SiTailwindcss,
    start: '2024-07',
  },
];

export const expandingSkillset = [
  {
    name: 'Node.js',
    icon: FaNodeJs,
  },
  {
    name: 'Express',
    icon: SiExpress,
  },
  {
    name: 'PostgreSQL',
    icon: SiPostgresql,
  },
];

export const getTenure = (start) => {
  if (!start) return null;
  const startDate = new Date(start);
  if (Number.isNaN(startDate.getTime())) return null;
  const now = new Date();

  const months =
    (now.getFullYear() - startDate.getFullYear()) * 12 +
    (now.getMonth() - startDate.getMonth());

  if (months >= 24) return `${Math.floor(months / 12)}+ years`;
  if (months >= 12) return `~1+ year`;
  return `<1 year`;
};
