import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'FAQs',
  description: 'FAQs for the wedding.',
};

export default function Faqs() {
  const faqs = [
    {
      id: 1,
      question: "How can I RSVP?",
      answer:
        "I haven't added RSVP permission to this website yet. However, if you're already on the list, you can check it out from the RSVP page.",
    },
    {
      id: 2,
      question: "What is the dress code?",
      answer:
        "Just look snazzy please. That's all I ask.",
    },
    {
      id: 3,
      question: "What are your wedding colors?",
      answer:
        "That is TBD, pending what my (currently non-existent) wife would like. I will be wearing 7-inch inseam jorts and a straw hat, most likely.",
    },
    {
      id: 4,
      question: "Can I bring a plus-one?",
      answer:
        "The more the merrier! Bring the whole family; just let me know. We need to know how much lobster ravioli to make 🤌.",
    },
    {
      id: 5,
      question: "What activities are there to do outside of the events?",
      answer:
        "My beach villa is located amidst 200 acres of pristine wildlife. You're more than free to pick out a golf cart from the fleet and voyage around aimlessly. There will also be various social events going on all weekend, such as beach yoga, volleyball, smoothie festival, stargazing, beer olympics, and drunk painting.",
    },
    {
      id: 6,
      question: "Will there be an open bar?",
      answer:
        "Yes. There will be lots of alcohol. Be warned though, the bartender I've hired has paramount photographic memory, and will cut you off once you exceed a 3-drink-per-hour threshold. You will be promptly thrown out of the wedding for your transgressions, and permanently banned from my estate.",
    },
    {
      id: 7,
      question: "Can I take photos at your wedding?",
      answer:
        "Sure. However, if you post too many stories on Instagram during the wedding, your camera functionality will be terminated via a sophisticated malware I've authored. This malware has been programmed to autonomously deploy itself onto your device via the venue wifi.",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center space-y-20 centered-container">
        <div className="">
            <h1>FAQs</h1>
        </div>
        <div className="mx-auto max-w-7xl divide-y divide-gray-900/10 px-6">
          <dl className="mt-10 space-y-8 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <div key={faq.id} className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
                <dt className="font-semibold leading-7 text-gray-900 lg:col-span-5">{faq.question}</dt>
                <dd className="mt-4 lg:col-span-7 lg:mt-0">
                  <p className="leading-7 text-gray-600">{faq.answer}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
    </main>
  )
};