import Image from 'next/image'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


export default function Home() {
  return (
    <main className="max-w-[1440px] mx-auto flex min-h-screen flex-col items-center justify-start  bg-violet-300">
      <Image
      width={1440}
      height={320}
      src='/assets/images/background-pattern-desktop.svg'
      alt='background'
      sizes="100vw "
      style={{
        width: '100%',
        height: 'auto',
      }}
      />
     <Accordion type="single" collapsible className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[500px] max-h-[500px] min-w-[320px] flex flex-col justify-evenly rounded-3xl  bg-slate-200 p-4">
      
        <div className='flex items-center'>
        <Image
      width={30}
      height={30}
      src='/assets/images/icon-star.svg'
      alt='star'
      
      />
      <h1 className='text-4xl font-bold ml-4'> FAQs</h1>
        </div>
       
      <AccordionItem value="item-1">
        <AccordionTrigger>What is Frontend Mentor, and how will it help me?</AccordionTrigger>
        <AccordionContent>
        Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is Frontend Mentor free?</AccordionTrigger>
        <AccordionContent>
        Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels. 
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Can I use Frontend Mentor projects in my portfolio?</AccordionTrigger>
        <AccordionContent>
          Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>How can I get help if I'm stuck on a  FM challenge?</AccordionTrigger>
        <AccordionContent>
        The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  
    </main>
  )
}
