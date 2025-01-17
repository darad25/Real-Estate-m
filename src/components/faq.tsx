"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { CustomAccordionTrigger } from "@/components/ui/custom-accordion-trigger"
import { cn } from "@/lib/utils"

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border border-gray-200 rounded-md mb-4", className)}
    {...props}
  />
))
AccordionItem.displayName = "AccordionItem"

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0 px-6 bg-white", className)}>{children}</div>
  </AccordionPrimitive.Content>
))
AccordionContent.displayName = "AccordionContent"

export function FAQ() {
  const faqs = [
    {
      question: "How does Steezely's virtual try-on technology work?",
      answer: "Our AI-powered technology creates a virtual representation of how clothes will look on you based on your photos and measurements."
    },
    {
      question: "Is my personal data and photos secure with Steezely?",
      answer: "Yes, we take privacy seriously. All your data is encrypted and stored securely following industry standards."
    },
    {
      question: "How accurate are Steezely's size recommendations?",
      answer: "Our size recommendations are highly accurate, based on detailed measurements and AI analysis of clothing fits."
    },
    {
      question: "Can I use Steezely with any online clothing store?",
      answer: "We support integration with major fashion retailers and are constantly adding more to our network."
    },
    {
      question: "How do I get started with Steezely?",
      answer: "Getting started is easy! Download the Steezely app from the App Store or Google Play, create an account, and upload a full-body photo. You can then start browsing clothes from our partner stores or paste links to items you're interested in. Our AI will quickly generate a virtual try-on experience for you."
    }
  ]

  return (
    <section className="container px-4 py-16 lg:pb-4">
      <h2 className="text-3xl font-bold text-center mb-2">Frequently Asked Questions</h2>
      <p className="text-xl text-center text-black mb-12">Got Questions? We've Got Answers!</p>
      <Accordion type="single" collapsible className="w-full lg:text-[24px] text-[24px] max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <CustomAccordionTrigger>{faq.question}</CustomAccordionTrigger>
            <AccordionContent className="px-6 pb-4 lg:text-[18px] text-[16px] leading-relaxed">{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}

