import Container from "@/components/Container/Container";
import React from "react";
import Link from 'next/link';

export default function AboutMe() {

    return (
        <Container>
            <div className="text-center  bg-slate-200 md:w-1/2 md:p-12 rounded-3xl">
            <h1 className="text-3xl font-bold mb-1">Leandro Bordon</h1>
            <p className="italic text-gray-600 mb-6"> Software engineer</p>
            <p className="text-medium text-gray-500">Full-stack Developer with +3 years of experience in developing high-impact applications. I have worked under scrum methodologies, MVC Architecture, DDD, design patterns and best practices. I&apos;m a self-taught enthusiast and passionate about algorithms and functional programming. I&apos;m focused on building consistent interfaces and solid infrastructures, constantly seeking new challenges to push myself out of the box</p>
            <Link href="/">go home</Link>
            </div>
            
        </Container>
    );
}
