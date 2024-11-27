import React, { useRef} from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import LightBlurCircle from '@/components/LightBlurCircle'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'


gsap.registerPlugin(ScrollTrigger);
  
function FAQ() {

    const faqsRef = useRef();

    useGSAP(() => {
        gsap.from(faqsRef.current, {
            opacity: 0,
            duration: 2,
            scrollTrigger: {
                trigger: faqsRef.current,
                scroller: "body",
                markers: false,
                start: "top 80%"
            }
        })
    })

    const items = [
        {
            question: "How do I get a Referral Code?",
            answer: "You can get your referral code after you sign up"
        },
        {
            question: "Do I get rewarded in tokens or ETH when I refer buyers?",
            answer: "You receive your rewards in ETH instantly once someone you refer makes a transaction!"
        }, 
        {
            question: "How do I get a Referral Code?",
            answer: "You can get your referral code after you sign up"
        }
    ]

  return (
    <div 
        ref={faqsRef} 
        className='h-[500px] flex flex-col'
    >
        <div className='mx-auto text-yellow font-neue-machina-bold text-4xl mb-10'>FAQs</div>
        <div className='text-white tracking-widest w-2/3 md:w-[600px] lg:w-[1000px] mx-auto font-raleway'>
            <Accordion type="single" collapsible className="w-full">
                {items.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index + 1}`} className="border-gray-700">
                        <AccordionTrigger className="text-lg font-medium">{item.question}</AccordionTrigger>
                        <AccordionContent className="text-base font-normal text-medium-gray">
                            {item.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
        <LightBlurCircle
            styles={"top-[2100px] -left-28"}
        />
        <LightBlurCircle
            styles={"top-[1700px] -right-32"}
        />
    </div>
  )
}

export default FAQ