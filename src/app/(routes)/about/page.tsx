import Container from "@/components/Container/Container";
import React from "react";
import Link from "next/link";
import Logo from "@/components/Logo";
import { cardList } from "@/constants/cardlist";
export interface Card {
  title: string;
  subtitle: string;
  description: string;
  secondDescription?: string;
  link?: boolean;
}
const Card = ({ Card }: { Card: Card }) => {
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
