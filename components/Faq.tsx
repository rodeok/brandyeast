'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    id: 'item-1',
    question: 'What is Brandyeast, and what makes it different from other branding agencies?',
  },
  {
    id: 'item-2',
    question: 'What does it mean to build a legacy through branding?',
  },
  {
    id: 'item-3',
    question: 'How does Brandyeast help with CAC registration and brand protection?',
  },
  {
    id: 'item-4',
    question: 'What types of items can Brandyeast print and produce?',
  },
  {
    id: 'item-5',
    question: 'How long does a typical branding project take?',
  },
  {
    id: 'item-6',
    question: 'How does Brandyeast measure the success of a branding project?',
  },
  {
    id: 'item-7',
    question: 'Does Brandyeast work with clients outside Nigeria?',
  },
];

export default function FAQSection() {
  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Frequently Asked Questions (FAQ)
        </h2>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="border border-gray-300 rounded-lg px-6 py-4 bg-white hover:bg-gray-50 transition-colors"
            >
              <AccordionTrigger className="text-left text-gray-900 font-medium hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-4">
                Content for {faq.question}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
