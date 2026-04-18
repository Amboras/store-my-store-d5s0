'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { ArrowRight, Truck, RefreshCw, BadgeIndianRupee, Sparkles } from 'lucide-react'
import { trackMetaEvent } from '@/lib/meta-pixel'

// Curated imagery — premium ethnic & fusion womenswear (Unsplash, copyright-free)
const HERO_IMAGE = 'https://images.unsplash.com/photo-1610030006920-9a827a795712?w=1600&q=80'
const EDITORIAL_IMAGE = 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=1600&q=80'

type Category = {
  title: string
  subtitle: string
  href: string
  image: string
}

const CATEGORIES: Category[] = [
  {
    title: 'Anarkalis',
    subtitle: 'Flowing silhouettes',
    href: '/collections/anarkalis',
    image: 'https://images.unsplash.com/photo-1617711164094-dae2c79b92e3?w=1200&q=80',
  },
  {
    title: 'Lehengas',
    subtitle: 'Ocassion-ready',
    href: '/collections/lehengas',
    image: 'https://images.unsplash.com/photo-1594742500014-ebb8c1a16b3d?w=1200&q=80',
  },
  {
    title: 'Kurta Sets',
    subtitle: 'Everyday elegance',
    href: '/collections/kurta-sets',
    image: 'https://images.unsplash.com/photo-1581375074612-d1fd0e661aeb?w=1200&q=80',
  },
  {
    title: 'Co-ords',
    subtitle: 'Modern fusion',
    href: '/collections/co-ords',
    image: 'https://images.unsplash.com/photo-1610189019500-c0e0e3bbcf63?w=1200&q=80',
  },
  {
    title: 'Dresses',
    subtitle: 'Western edit',
    href: '/collections/dresses',
    image: 'https://images.unsplash.com/photo-1604504197192-b96c70a4ad0e?w=1200&q=80',
  },
]

export default function HomePage() {
  const [newsletterEmail, setNewsletterEmail] = useState('')

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newsletterEmail.trim()) return
    trackMetaEvent('Lead', {
      content_name: 'newsletter_signup',
      status: 'submitted',
    })
  }

  return (
    <>
      {/* ───────────────────────── Hero ───────────────────────── */}
      <section className="relative overflow-hidden bg-background">
        <div className="container-custom grid lg:grid-cols-12 gap-10 lg:gap-16 items-center py-section lg:py-32">
          {/* Copy */}
          <div className="lg:col-span-5 space-y-7 animate-fade-in-up">
            <p className="text-xs uppercase tracking-[0.3em] text-accent font-medium">
              Festive Edit · 2025
            </p>
            <h1 className="text-display font-heading font-medium text-balance leading-[1.05]">
              Woven in Jaipur,
              <span className="block italic text-accent font-normal">worn everywhere.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
              Handcrafted anarkalis, lehengas and fusion pieces — shaped by centuries of Rajasthani
              craft and designed for the woman of today.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.15em] hover:opacity-90 transition-opacity"
                prefetch={true}
              >
                Shop the Edit
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 border border-foreground/80 px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.15em] hover:bg-foreground hover:text-background transition-colors"
                prefetch={true}
              >
                Our Story
              </Link>
            </div>
          </div>

          {/* Image collage */}
          <div className="lg:col-span-7 relative animate-fade-in">
            <div className="relative aspect-[4/5] lg:aspect-[5/6] bg-muted overflow-hidden">
              <Image
                src={HERO_IMAGE}
                alt="Ethnic womenswear campaign"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
                priority
              />
            </div>
            {/* Decorative tag */}
            <div className="hidden lg:flex absolute -bottom-6 -left-6 bg-background border border-border px-6 py-4 items-center gap-3 shadow-sm">
              <Sparkles className="h-4 w-4 text-accent" strokeWidth={1.5} />
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Handcrafted
                </p>
                <p className="text-sm font-heading">Since 2015 · Jaipur</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────── Category Grid ─────────────────────── */}
      <section className="py-section bg-muted/40">
        <div className="container-custom">
          <div className="text-center max-w-xl mx-auto mb-12 lg:mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-accent font-medium mb-3">
              Shop by Silhouette
            </p>
            <h2 className="text-h2 font-heading font-medium text-balance">
              A curation of timeless staples &amp; new-season muses
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 lg:gap-6">
            {CATEGORIES.map((cat, i) => (
              <Link
                key={cat.title}
                href={cat.href}
                prefetch={false}
                className={`group relative overflow-hidden bg-background ${
                  // First tile spans 2 cols on desktop for editorial rhythm
                  i === 0 ? 'col-span-2 lg:col-span-2 lg:row-span-2' : 'lg:col-span-2'
                } ${i === 0 ? 'aspect-[4/5] lg:aspect-auto' : 'aspect-[4/5]'}`}
              >
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  sizes="(max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 lg:p-6 text-background">
                  <p className="text-[10px] uppercase tracking-[0.25em] opacity-80 mb-1">
                    {cat.subtitle}
                  </p>
                  <h3 className="font-heading text-xl lg:text-2xl flex items-center justify-between">
                    {cat.title}
                    <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────── Editorial ─────────────────────── */}
      <section className="py-section">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative aspect-[4/5] bg-muted overflow-hidden order-2 lg:order-1">
              <Image
                src={EDITORIAL_IMAGE}
                alt="The atelier — handcraft in Jaipur"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="space-y-6 lg:max-w-md order-1 lg:order-2">
              <p className="text-xs uppercase tracking-[0.3em] text-accent font-medium">
                The Atelier
              </p>
              <h2 className="text-h2 font-heading font-medium text-balance leading-tight">
                Where tradition meets a modern eye
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                From block-printed cottons to zardozi embroideries, every piece passes through the
                hands of Jaipur&apos;s finest karigars. We celebrate slow fashion — small batches,
                natural dyes, and silhouettes built to last a lifetime.
              </p>
              <div className="grid grid-cols-3 gap-6 pt-4 border-t border-border">
                <div>
                  <p className="font-heading text-2xl text-accent">10+</p>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
                    Years of craft
                  </p>
                </div>
                <div>
                  <p className="font-heading text-2xl text-accent">200+</p>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
                    Karigars
                  </p>
                </div>
                <div>
                  <p className="font-heading text-2xl text-accent">50K+</p>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
                    Happy women
                  </p>
                </div>
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.15em] link-underline pb-0.5"
                prefetch={true}
              >
                Read Our Story
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────── Trust / Features ─────────────────────── */}
      <section className="py-section-sm border-y bg-muted/40">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <Truck className="h-6 w-6 flex-shrink-0 text-accent" strokeWidth={1.5} />
              <div>
                <p className="text-sm font-semibold">Free shipping across India</p>
                <p className="text-xs text-muted-foreground">On orders above ₹2,499</p>
              </div>
            </div>
            <div className="flex items-center gap-4 justify-center">
              <RefreshCw className="h-6 w-6 flex-shrink-0 text-accent" strokeWidth={1.5} />
              <div>
                <p className="text-sm font-semibold">Easy 7-day exchange</p>
                <p className="text-xs text-muted-foreground">Hassle-free returns</p>
              </div>
            </div>
            <div className="flex items-center gap-4 justify-center md:justify-end">
              <BadgeIndianRupee className="h-6 w-6 flex-shrink-0 text-accent" strokeWidth={1.5} />
              <div>
                <p className="text-sm font-semibold">Cash on delivery</p>
                <p className="text-xs text-muted-foreground">Available pan-India</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────── Newsletter ─────────────────────── */}
      <section className="py-section">
        <div className="container-custom max-w-xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-accent font-medium mb-3">
            Join the list
          </p>
          <h2 className="text-h2 font-heading font-medium">Early access to new drops</h2>
          <p className="mt-3 text-muted-foreground">
            Subscribe for festive previews, atelier stories, and a welcome offer on your first
            order.
          </p>
          <form className="mt-8 flex gap-2" onSubmit={handleNewsletterSubmit}>
            <input
              type="email"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 border-b border-foreground/30 bg-transparent px-1 py-3 text-sm placeholder:text-muted-foreground focus:border-foreground focus:outline-none transition-colors"
            />
            <button
              type="submit"
              className="bg-foreground text-background px-6 py-3 text-xs font-semibold uppercase tracking-[0.15em] hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
