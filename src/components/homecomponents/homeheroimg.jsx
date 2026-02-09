import React, { useEffect, useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { motion, AnimatePresence } from "framer-motion"

const slides = [
  {
    id: 0,
    component: (
      <StaticImage
        src="../../images/Grp.jpg"
        quality={100}
        placeholder="blurred"
        formats={["AUTO", "WEBP"]}
        alt="cover"
        className="w-full h-full object-contain"
        style={{ position: "relative" }}
      />
    ),
  },
  {
    id: 1,
    component: (
      <StaticImage
        src="../../images/Prime.jpg"
        quality={100}
        placeholder="blurred"
        formats={["AUTO", "WEBP"]}
        alt="cover"
        className="w-full h-full object-scale-down"
        style={{ position: "relative" }}
      />
    ),
  },
]
const HomeHeroImg = () => {
  const [index, setIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length)
  }

  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(nextSlide, 4000)
    return () => clearInterval(interval)
  }, [isPaused])

  return (
    <div className="relative -mt-20 h-screen overflow-hidden"
    onMouseEnter={() => setIsPaused(true)}
  onMouseLeave={() => setIsPaused(false)}
  >
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[index].id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {slides[index].component}
        </motion.div>
      </AnimatePresence>
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="
          absolute left-2 md:left-6 top-1/2 -translate-y-1/2
          z-10
          bg-black/40 hover:bg-black/60
          text-white
          rounded-full
          w-10 h-10 md:w-12 md:h-12
          flex items-center justify-center
          transition
        "
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="
          absolute right-2 md:right-6 top-1/2 -translate-y-1/2
          z-10
          bg-black/40 hover:bg-black/60
          text-white
          rounded-full
          w-10 h-10 md:w-12 md:h-12
          flex items-center justify-center
          transition
        "
      >
        ❯
      </button>
    </div>
  )
}

export default HomeHeroImg
