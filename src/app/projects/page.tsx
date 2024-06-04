import { type Metadata } from 'next'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import shellLogo from '@/images/logos/shell.png'
import serverLogo from '@/images/logos/webserver.jpg'
import titanLogo from '@/images/logos/ontrack.jpeg'
import ontrackLogo from '@/images/logos/titan.png'


const projects = [
  {
    name: 'Shell Clone',
    description: `A Shell clone written in C, C++, Lex, Yacc, and Python and based on bash. Features include basic command execution, tab completion, raw edit mode, pipes,
 control-c, quotes, subshells, builtin functions, zombie elimination, wildcards, line editing, and expansions.`,
    link: { href: 'https://github.com/kim3470/myshell', label: 'Github Repository' },
    logo: shellLogo,
  },
  {
    name: 'HTTP Web Server',
    description: `A clone of Apache’s HTTPD web server written in C/C++ that includes HTTP requests, file system navigation, image loading, and multiple
 simultaneous client connections.`,
    link: { href: 'https://github.com/kim3470/myhttpd', label: 'Github Repository' },
    logo: serverLogo,
  },
  {
    name: 'OnTrack',
    description: `A fully-featured nutrition, exercise, and general health tracking mobile app, written in Flutter with Node.js, MongoDB and Express on the backend`,
    link: { href: 'https://github.com/youngbryanyu/OnTrack', label: 'Github Repository' },
    logo: titanLogo,
  },
  {
    name: 'Titan',
    description: `Initial webapp that turned into OnTrack. Nutrition, exercise, and general health tracking done in the MERN stack.`,
    link: { href: 'https://github.com/youngbryanyu/titan-health-app', label: 'Github Repository' },
    logo: ontrackLogo,
  },
]

function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Some of the stuff I made in my free time 😲',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Some of the stuff I made in my free time 😲"
      intro="Here are some of the projects I've worked on (or am working on currently). 
            Click on any of the entries to take you to the corresponding repository!
            For more, visit my Github!"
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={project.logo}
                alt=""
                className="h-11 w-11 rounded-full"
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href}>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
