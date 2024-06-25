import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  ResumeIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'Hey, I\'m Aaron 😎😼',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Hey, I&apos;m Aaron 😎😼
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              My parents moved to Texas from Seoul around 1999. I was born there, in 2001, 
              in a small town called Tomball, around a 40 minute drive from Houston. 
              Before Katrina passed through, we moved up to Chicago, where I&apos;ve been ever since.
              Despite having been raised nearly my whole life in the Chicagoland area, I&apos;ve always
              imagined what it would be like to live elsewhere (I&apos;m open to relocation!) 🏙️ 
            </p>
            <p>
              I attended Purdue University for my undergraduate degree, graduating recently with a B.S in 
              Computer Science and a concentration in software engineering. During my time as a student I also
              interned at Argonne National Laboratories and Amazon Web Services 🌐. I&apos;m passionate about 
              cloud computing, database systems, and tool development.
            </p>
            <p>
              Aside from programming, I&apos;m passionate about weightlifting 🏋️, nutrition 🍖,
              cool fashion 👖, and running 🏃. No matter what life throws at me, these four
              interests remain a key part of my life. I always prepare meals on the weekends and 
              find time in each and every day to fit in a lift and a run.
            </p>
            <p>
              Currently, I&apos;m seeking a new-grad or entry-level software engineering position. I&apos;m more
              seasoned as a backend engineer, but would be open to full-stack as well. Please feel free to 
              reach out to me, for any reason!
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink
              href="https://github.com/kim3470"
              icon={GitHubIcon}
              className="mt-4"
            >
              My projects on GitHub 😼
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/akim0928/"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Connect with me on LinkedIn! 🔗
            </SocialLink>
            <SocialLink
              href="https://www.instagram.com/aaron.wkim/"
              icon={InstagramIcon}
              className="mt-4"
            >
              Follow me on Instagram! 📸
            </SocialLink>
            <SocialLink
              href="https://drive.google.com/file/d/1KMZz8Jn1ZU7gFyTZyhcQrLdWIKIiQzBM/view?usp=drive_link"
              icon={ResumeIcon}
              className="mt-4"
            >
              My resume 📄
            </SocialLink>
            <SocialLink
              href="mailto:aaronkim0928@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              aaronkim0928@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
