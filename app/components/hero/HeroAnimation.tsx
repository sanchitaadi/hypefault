"use client";

import { useLayoutEffect } from "react";
import { gsap } from "gsap";

export default function HeroAnimation() {
  useLayoutEffect(() => {
    const tl = gsap.timeline();

    tl.from(".hero-badge", {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: "power3.out",
    })
      .from(
        ".hero-brand",
        {
          opacity: 0,
          y: 20,
          duration: 0.5,
          ease: "power3.out",
        },
        "-=0.3"
      )
      .from(
        ".hero-title",
        {
          opacity: 0,
          y: 80,
          duration: 1,
          ease: "power4.out",
        },
        "-=0.2"
      )
      .from(
        ".hero-description",
        {
          opacity: 0,
          y: 30,
          duration: 0.7,
        },
        "-=0.6"
      )
      .from(
        ".hero-buttons",
        {
          opacity: 0,
          y: 20,
          stagger: 0.15,
          duration: 0.5,
        },
        "-=0.4"
      )
      .from(
        ".hero-stats",
        {
          opacity: 0,
          y: 20,
          duration: 0.6,
        },
        "-=0.3"
      );

    return () => {
      tl.kill();
    };
  }, []);

  return null;
}