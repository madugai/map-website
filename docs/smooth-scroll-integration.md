# Smooth Scroll Integration Guide

This guide documents how to implement smooth scrolling using **Lenis** with **GSAP ScrollTrigger** in a Next.js project.

---

## 📦 Dependencies

Install the required packages:

```bash
npm install lenis gsap
```

**Or with yarn:**

```bash
yarn add lenis gsap
```

**Package versions used:**
- `lenis`: ^1.3.17
- `gsap`: Latest version

---

## 📁 File Structure

```
src/
├── components/
│   └── SmoothScroll.tsx    # Smooth scroll wrapper component
├── app/
│   └── layout.tsx          # Root layout (wrap children with SmoothScroll)
```

---

## 🛠️ Implementation

### Step 1: Create the SmoothScroll Component

Create a new file at `src/components/SmoothScroll.tsx`:

```tsx
"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

interface SmoothScrollProps {
    children: ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
    useEffect(() => {
        // Initialize Lenis
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
            infinite: false,
        });

        // Synchronize Lenis with GSAP ScrollTrigger
        lenis.on("scroll", ScrollTrigger.update);

        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });

        gsap.ticker.lagSmoothing(0);

        // Cleanup
        return () => {
            lenis.destroy();
            gsap.ticker.remove((time) => {
                lenis.raf(time * 1000);
            });
        };
    }, []);

    return <>{children}</>;
}
```

---

### Step 2: Wrap Your App with SmoothScroll

In your `layout.tsx` (or main layout file), wrap the children with the `SmoothScroll` component:

```tsx
import SmoothScroll from "@/components/SmoothScroll";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <SmoothScroll>
                    {children}
                </SmoothScroll>
            </body>
        </html>
    );
}
```

---

## ⚙️ Lenis Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `duration` | `number` | `1.2` | Duration of the scroll animation in seconds |
| `easing` | `function` | Exponential easing | Custom easing function |
| `orientation` | `"vertical"` \| `"horizontal"` | `"vertical"` | Scroll direction |
| `gestureOrientation` | `"vertical"` \| `"horizontal"` \| `"both"` | `"vertical"` | Touch/gesture direction |
| `smoothWheel` | `boolean` | `true` | Enable smooth scrolling for mouse wheel |
| `wheelMultiplier` | `number` | `1` | Multiplier for wheel scroll speed |
| `touchMultiplier` | `number` | `2` | Multiplier for touch scroll speed |
| `infinite` | `boolean` | `false` | Enable infinite scrolling |

### Custom Easing Function

The default easing function provides a smooth exponential ease-out effect:

```ts
easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
```

You can customize this to your preference. Some alternatives:

```ts
// Linear
easing: (t) => t

// Ease Out Quad
easing: (t) => 1 - (1 - t) * (1 - t)

// Ease Out Cubic
easing: (t) => 1 - Math.pow(1 - t, 3)

// Ease In Out Cubic
easing: (t) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
```

---

## 🎨 Bonus: GSAP ScrollTrigger Animations

Since Lenis is synchronized with GSAP ScrollTrigger, you can use scroll-triggered animations seamlessly. Here's an example setup in your page component:

```tsx
"use client";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Home() {
    const mainRef = useRef<HTMLElement>(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            // Section reveal animations
            gsap.utils.toArray<HTMLElement>(".reveal-section").forEach((section) => {
                gsap.from(section, {
                    opacity: 0,
                    y: 80,
                    duration: 1.2,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 85%",
                        toggleActions: "play none none none"
                    }
                });
            });

            // Parallax effect for images
            gsap.utils.toArray<HTMLElement>(".gsap-parallax").forEach((el) => {
                gsap.to(el, {
                    yPercent: -20,
                    ease: "none",
                    scrollTrigger: {
                        trigger: el,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 1
                    }
                });
            });

            // Text reveal animations
            gsap.utils.toArray<HTMLElement>(".gsap-text-reveal").forEach((el) => {
                gsap.from(el, {
                    opacity: 0,
                    y: 60,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%",
                        toggleActions: "play none none none"
                    }
                });
            });

            // Scale up animations
            gsap.utils.toArray<HTMLElement>(".gsap-scale-up").forEach((el) => {
                gsap.from(el, {
                    scale: 0.8,
                    opacity: 0,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%",
                        toggleActions: "play none none none"
                    }
                });
            });

            // Horizontal slide from left
            gsap.utils.toArray<HTMLElement>(".gsap-slide-left").forEach((el) => {
                gsap.from(el, {
                    x: -100,
                    opacity: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%",
                        toggleActions: "play none none none"
                    }
                });
            });

            // Horizontal slide from right
            gsap.utils.toArray<HTMLElement>(".gsap-slide-right").forEach((el) => {
                gsap.from(el, {
                    x: 100,
                    opacity: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%",
                        toggleActions: "play none none none"
                    }
                });
            });

            // Stagger children animations
            gsap.utils.toArray<HTMLElement>(".gsap-stagger-container").forEach((container) => {
                const children = container.querySelectorAll(".gsap-stagger-item");
                gsap.from(children, {
                    opacity: 0,
                    y: 40,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: container,
                        start: "top 80%",
                        toggleActions: "play none none none"
                    }
                });
            });

            // Rotate in animation
            gsap.utils.toArray<HTMLElement>(".gsap-rotate-in").forEach((el) => {
                gsap.from(el, {
                    rotation: 10,
                    opacity: 0,
                    scale: 0.9,
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%",
                        toggleActions: "play none none none"
                    }
                });
            });

            // Counter animation for numbers
            gsap.utils.toArray<HTMLElement>(".gsap-counter").forEach((el) => {
                const target = parseInt(el.getAttribute("data-count") || "0");
                gsap.to(el, {
                    innerHTML: target,
                    duration: 2,
                    ease: "power2.out",
                    snap: { innerHTML: 1 },
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%",
                        toggleActions: "play none none none"
                    }
                });
            });

        }, mainRef);

        return () => ctx.revert();
    }, []);

    return (
        <main ref={mainRef}>
            {/* Your content with CSS classes like:
                - reveal-section
                - gsap-parallax
                - gsap-text-reveal
                - gsap-scale-up
                - gsap-slide-left
                - gsap-slide-right
                - gsap-stagger-container (with .gsap-stagger-item children)
                - gsap-rotate-in
                - gsap-counter (with data-count attribute)
            */}
        </main>
    );
}
```

---

## 📋 Animation CSS Classes Reference

Add these classes to your elements for automatic scroll-triggered animations:

| Class | Effect |
|-------|--------|
| `.reveal-section` | Fade in + slide up (80px) |
| `.gsap-parallax` | Parallax movement on scroll |
| `.gsap-text-reveal` | Fade in + slide up (60px) |
| `.gsap-scale-up` | Scale from 0.8 + fade in |
| `.gsap-slide-left` | Slide from left (100px) + fade in |
| `.gsap-slide-right` | Slide from right (100px) + fade in |
| `.gsap-stagger-container` | Container for staggered children |
| `.gsap-stagger-item` | Child elements that animate with stagger |
| `.gsap-rotate-in` | Rotate + scale + fade in |
| `.gsap-counter` | Animate number counting (requires `data-count` attribute) |

---

## 🚀 Usage Example

```tsx
<main ref={mainRef}>
    {/* Reveal section animation */}
    <div className="reveal-section">
        <h1>Welcome</h1>
    </div>

    {/* Parallax image */}
    <div className="gsap-parallax">
        <img src="/hero.jpg" alt="Hero" />
    </div>

    {/* Left/Right slide animations */}
    <div className="gsap-slide-left">Left Content</div>
    <div className="gsap-slide-right">Right Content</div>

    {/* Staggered items */}
    <div className="gsap-stagger-container">
        <div className="gsap-stagger-item">Item 1</div>
        <div className="gsap-stagger-item">Item 2</div>
        <div className="gsap-stagger-item">Item 3</div>
    </div>

    {/* Counter animation */}
    <span className="gsap-counter" data-count="100">0</span>
</main>
```

---

## 📝 Notes

1. **"use client"**: Both `SmoothScroll.tsx` and any component using GSAP must have `"use client"` directive at the top since they use browser APIs.

2. **GSAP Context**: Using `gsap.context()` ensures proper cleanup and scoping of animations.

3. **useLayoutEffect**: Use `useLayoutEffect` instead of `useEffect` for GSAP animations to avoid flickering.

4. **Cleanup**: Always return the cleanup function to properly destroy Lenis and GSAP contexts.

---

## 🔗 Resources

- [Lenis Documentation](https://lenis.darkroom.engineering/)
- [GSAP Documentation](https://greensock.com/docs/)
- [GSAP ScrollTrigger](https://greensock.com/scrolltrigger/)
