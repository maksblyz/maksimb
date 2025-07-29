"use client";

import Link from "next/link";
import { useRef, useEffect } from "react";

export default function ProjectCard({
    title,
    description,
    video,
    github,
    live,
}: {
    title: string;
    description: string;
    video: string;
    github: string;
    live?: string;
}) {
    const videoRef = useRef<HTMLVideoElement>(null);

    // Pause siblings when this one plays
    useEffect(() => {
        const v = videoRef.current;
        if (!v) return;
        const handler = () => {
            document.querySelectorAll("video").forEach(other => {
                if (other !== v) other.pause();
            });
        };
        v.addEventListener("play", handler);
        return () => v.removeEventListener("play", handler);
    }, []);

    return (
        <section className="mb-20 text-center">
            <h2 className="text-4xl mb-8">{title}</h2>
            
            <div className="relative w-4/5 mx-auto mb-8" style={{ aspectRatio: '221/160' }}>
                <video
                    ref={videoRef}
                    src={video}
                    poster="/vids/poster.jpg"
                    muted
                    playsInline
                    loop
                    controls
                    preload="metadata"
                    className="absolute inset-0 h-full w-full object-cover border-2 border-black shadow"
                />
            </div>
            
            <p className="text-md mb-2 max-w-2xl mx-auto">
              <span className="dropcap" data-ch={description.charAt(0)}>{description.charAt(0)}</span>
              {description.slice(1)}
            </p>
            <Link href={github} className="text-md underline">Github</Link>
            {live && (
              <>
                <span className="mx-2">|</span>
                <Link href={live} className="text-md underline" target="_blank" rel="noopener noreferrer">itsreeve.com</Link>
              </>
            )}
        </section>
    )
}