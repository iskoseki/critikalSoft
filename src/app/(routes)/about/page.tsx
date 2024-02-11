import Container from "@/components/Container/Container";
import React from "react";
import Link from "next/link";
import Logo from "@/components/Logo";
export interface Card {
  title: string;
  subtitle: string;
  description: string;
  secondDescription?: string;
  link?: boolean;
}
export const Card = ({ Card }: { Card: Card }) => {
  return (
    <li className="my-20">
      <h2 className="text-5xl font-black text-gray-700 dark:text-gray-300 mb-1">
        {Card.title}
      </h2>
      <p className="italic text-gray-500 mb-6">{Card.subtitle}</p>
      <p className="text-medium text-gray-400 mb-8">{Card.description}</p>
      {Card.secondDescription ? (
        <p className="text-medium text-gray-400 mb-8">
          {Card.secondDescription}{" "}
        </p>
      ) : null}
      {Card.link ? (
        <Link
          className=" italic text-sm text-gray-500 mt-2"
          href="https://www.linkedin.com/in/leandro-bordon/"
          target="_blank"
        >
          Resume_
        </Link>
      ) : null}
    </li>
  );
};
export const cardList = [
  {
    title: "What is Critikal Software?",
    subtitle: "",
    description: ` We&apos;re obsessive and uncompromising about the quality of our work, and that&apos;s why we&apos;ve invested heavily in recruiting and retaining the very best development talent from the UK and Europe. `,
    secondDescription: ` 
We believe our strength is derived from the talents, ideas, and experiences of our people, who are at the heart of everything we do here at One Beyond. We know that an inclusive workplace where all employees are valued and have the opportunity to reach their full potential is also a successful one.`,
    link: false,
  },
  {
    title: "Leandro Bordon",
    subtitle: "CEO & Software engineer",
    description: ` I have been working with companies for more than 4 years, building
        high-impact applications. I have share my scrum methodologies, MVC
        Architecture, DDD, design patterns and best practices. I&apos;m a
        self-taught enthusiast and passionate about algorithms and functional
        programming. I&apos;m focused on building consistent interfaces and
        solid infrastructures, constantly seeking new challenges to push myself
        out of the box`,
    link: true,
  },
];

export default function AboutMe() {
  return (
    <Container>
      <section className="text-left mx-8 md:w-1/2 md:p-12 rounded-3xl">
        <div className="my-2">
          <h1 className="text-5xl font-light text-gray-800  dark:text-gray-100">
            About_
          </h1>
        </div>

        <ul>
          {cardList.map((card) => (
            <Card key={card.title} Card={card} />
          ))}
        </ul>
      </section>
    </Container>
  );
}
