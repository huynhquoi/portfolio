import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"

interface ProjectCardProps {
    title: string
    description: string
    image: string
    technologies: string[]
    github: string
    demo: string
}

export function ProjectCard({ title, description, image, technologies, github, demo }: ProjectCardProps) {
    return (
        <Card className="overflow-hidden h-full flex flex-col">
            <div className="relative h-48 w-full">
                <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
            </div>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                    {technologies.map((tech, i) => (
                        <Badge key={i} variant="secondary">
                            {tech}
                        </Badge>
                    ))}
                </div>
            </CardContent>
            <CardFooter className="flex justify-between">
                <a href={github} target="_blank" rel="noopener noreferrer" aria-label={`GitHub repository for ${title}`}>
                    <Button variant="outline" size="sm">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                    </Button>
                </a>
                <a href={demo} target="_blank" rel="noopener noreferrer" aria-label={`Live demo for ${title}`}>
                    <Button size="sm">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                    </Button>
                </a>
            </CardFooter>
        </Card>
    )
}
