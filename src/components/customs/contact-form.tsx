"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"

export function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1500))

        toast("Message sent!", {
            description: "Thanks for reaching out. I'll get back to you soon.",
        })

        setIsSubmitting(false)
        e.currentTarget.reset()
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                    <Input id="name" name="name" placeholder="Your Name" required />
                </div>
                <div className="space-y-2">
                    <Input id="email" name="email" type="email" placeholder="Your Email" required />
                </div>
            </div>
            <div className="space-y-2">
                <Input id="subject" name="subject" placeholder="Subject" required />
            </div>
            <div className="space-y-2">
                <Textarea id="message" name="message" placeholder="Your Message" rows={5} required />
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
        </form>
    )
}
