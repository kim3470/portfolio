import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function Category({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <div className="space-y-16">
        {children}
      </div>
    </Section>
  )
}

function Organization({
  location,
  description,
  timeframe,
  cta,
  href,
}: {
  location: string
  description: string
  timeframe: string
  cta: string
  href: string
}) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {location}
      </Card.Title>
      <Card.Eyebrow decorate>{timeframe}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export const metadata: Metadata = {
  title: 'Experience',
  description:
    'A history of my professional and curricular endeavors',
}

export default function Experiences() {
  return (
    <SimpleLayout
      title="A history of my professional and curricular endeavors"
      intro="Below you'll find everywhere I've studied, or worked at. Feel free to click on any of the entries to take you to the organization's homepage."
    >
      <div className="space-y-10">
        <Category title="Experiences">
          <Organization
            href="https://www.apple.com/"
            location="Apple"
            description="Working at  as a Software Developer in IS&T, Apple's internal technology organization"
            timeframe="Nov. 4 - Present, Austin"
            cta="Apple"
          />
          <Organization
            href="https://aws.amazon.com/"
            location="Amazon Web Services (AWS) - ASBX internal tools"
            description="Worked on internal tooling at Amazon Software Builder Experiences (ASBX)
                        with a focus on visualizing AWS deployment data for developers.
                        A truly valuable internship that taught me how software is made 
                        and collaborated on in a professional team setting."
            timeframe="May - July 2023, Seattle"
            cta="Amazon Web Services"
          />
          <Organization
            href="https://www.anl.gov/"
            location="Argonne National Laboratory - SAGE Program"
            description="Implemented an internal program for ANL researchers to utilize that
                        enabled simple .CSV visualization, x-axis manipulation, detecting lesions in
                        data, and &quot;stitching&quot; lesions together. This experience helped me learn how to 
                        communicate frequently with a manager/mentor."
            timeframe="May - August 2021, Remote"
            cta="Argonne National Laboratories"
          />
        </Category>
        <Category title="Academia">
          <Organization
            href="https://www.cs.purdue.edu/"
            location="Purdue University"
            description="Bachelor of Science in Computer Science, with a concentration in Software Engineering. "
            timeframe="August 2020 - December 2023"
            cta="Purdue CS"
          />
        </Category>
      </div>
    </SimpleLayout>
  )
}
