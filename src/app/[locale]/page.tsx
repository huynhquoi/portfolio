'use client'

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Mail, Linkedin, ExternalLink, ArrowRight } from "lucide-react"
import { useRef } from "react"
import { ContactForm } from "@/components/customs/contact-form"
import { Separator } from "@/components/ui/separator"

export default function Portfolio() {
  const heroRef = useRef<HTMLElement>(null)
  const aboutRef = useRef<HTMLElement>(null)
  const projectsRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)

  const scrollTo = (id: 'hero' | 'about' | 'projects' | 'contact') => {
    if (id == 'hero') {
      heroRef?.current?.scrollIntoView({ behavior: 'smooth' })
    } else if (id == 'about') {
      aboutRef?.current?.scrollIntoView({ behavior: 'smooth' })
    } else if (id == 'contact') {
      contactRef?.current?.scrollIntoView({ behavior: 'smooth' })
    } else {
      projectsRef?.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section ref={heroRef} className="container px-4 md:px-6 py-12 md:py-24 lg:py-32">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Hi, I'm <span className="text-primary">Huynh Van Quoi</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Full Stack Developer specializing in modern web technologies
            </p>
            <div className="flex gap-4">
              <Button onClick={() => scrollTo('projects')}>
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button onClick={() => scrollTo('contact')} variant="outline">Contact Me</Button>
            </div>
            <div className="flex gap-4 pt-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Button variant="ghost" size="icon">
                  <Github className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Button variant="ghost" size="icon">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>
              <a href="mailto:contact@example.com" aria-label="Email">
                <Button variant="ghost" size="icon">
                  <Mail className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px] rounded-full overflow-hidden border-4 border-primary/20">
              <Image src="/placeholder.svg?height=320&width=320" alt="Profile" fill className="object-cover" priority />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="container px-4 md:px-6 py-12 bg-muted/50">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold tracking-tighter">About Me</h2>
          <p className="text-muted-foreground">
            I'm a passionate full-stack developer with 5+ years of experience building web applications. I enjoy solving
            complex problems and creating intuitive, accessible user experiences. When I'm not coding, you can find me
            hiking, reading, or experimenting with new technologies.
          </p>

          <div className="pt-6">
            <h3 className="text-xl font-semibold mb-4">Skills & Technologies</h3>
            <div className="flex flex-wrap gap-2">
              <Badge>React</Badge>
              <Badge>Next.js</Badge>
              <Badge>TypeScript</Badge>
              <Badge>Node.js</Badge>
              <Badge>Express</Badge>
              <Badge>MongoDB</Badge>
              <Badge>PostgreSQL</Badge>
              <Badge>Tailwind CSS</Badge>
              <Badge>GraphQL</Badge>
              <Badge>AWS</Badge>
              <Badge>Docker</Badge>
              <Badge>Git</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} className="container px-4 md:px-6 py-12 md:py-24">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter">Featured Projects</h2>
            <p className="text-muted-foreground mt-2">Some of my recent work</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`GitHub repository for ${project.title}`}
                  >
                    <Button variant="outline" size="sm">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Live demo for ${project.title}`}
                  >
                    <Button size="sm">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="text-center pt-8">
            <Button variant="outline">
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="container px-4 md:px-6 py-12 md:py-24 bg-muted/50">
        <div className="max-w-md mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold tracking-tighter">Get In Touch</h2>
          <p className="text-muted-foreground">Interested in working together? Feel free to reach out!</p>
          <ContactForm />
          <Separator />
          <div className="flex justify-center gap-4">
            <Button>
              <Mail className="mr-2 h-4 w-4" />
              Email Me
            </Button>
            <Button variant="outline">
              <Linkedin className="mr-2 h-4 w-4" />
              Connect
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-6">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">© 2024 Huynh Van Quoi. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Button variant="ghost" size="icon">
                  <Github className="h-4 w-4" />
                </Button>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Button variant="ghost" size="icon">
                  <Linkedin className="h-4 w-4" />
                </Button>
              </a>
              <a href="mailto:contact@example.com" aria-label="Email">
                <Button variant="ghost" size="icon">
                  <Mail className="h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Sample project data
const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce application with payment processing and inventory management",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["Next.js", "Stripe", "MongoDB", "Tailwind"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Task Management App",
    description: "A collaborative task management tool with real-time updates",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["React", "Firebase", "TypeScript", "CSS Modules"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Weather Dashboard",
    description: "A weather application with location-based forecasts and interactive maps",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["JavaScript", "OpenWeather API", "Chart.js", "SCSS"],
    github: "https://github.com",
    demo: "https://example.com",
  },
]
