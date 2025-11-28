import React from "react"

interface BentoCardProps {
  title: string
  description: string
  image: string
}

const BentoCard = ({ title, description, image }: BentoCardProps) => (
  <div className="overflow-hidden rounded-2xl border border-white/20 flex flex-col justify-start items-start relative">
    {/* Background with blur effect */}
    <div
      className="absolute inset-0 rounded-2xl"
      style={{
        background: "rgba(231, 236, 235, 0.08)",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: "blur(4px)",
      }}
    />
    {/* Additional subtle gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl" />

    <div className="self-stretch p-6 flex flex-col justify-start items-start gap-2 relative z-10">
      <div className="self-stretch flex flex-col justify-start items-start gap-1.5">
        <p className="self-stretch text-foreground text-lg font-normal leading-7">
          {title} <br />
          <span className="text-muted-foreground">{description}</span>
        </p>
      </div>
    </div>
    <div className="self-stretch h-72 relative -mt-0.5 z-10">
      <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover rounded-b-2xl" />
    </div>
  </div>
)

export function BentoSection() {
  const cards = [
    {
      title: "A more intuitive image display gallery.",
      description: "We created a special display to show multiple photos optimally preview images.",
      image: "/images/dashboard-preview.webp",
    },
    {
      title: "Ease of decision-making for each photo.",
      description: "A simple and quick approach to sorting the photos you like.",
      image: "/images/yornay.webp",
    },
    {
      title: "Comparing identical images with Ai.",
      description: "We will help you collect identical photos so you can choose the best one.",
      image: "/images/pairwise.webp",
    },
  ]

  return (
    <section className="w-full px-5 flex flex-col justify-center items-center overflow-visible bg-transparent">
      <div className="w-full py-8 relative flex flex-col justify-start items-start gap-6 md:py-[34px]">
        <div className="w-[547px] h-[938px] absolute top-[614px] left-[80px] origin-top-left rotate-[-33.39deg] blur-[130px] z-0 bg-blue-900" />
        <div className="self-stretch py-8 md:py-14 flex flex-col justify-center items-center gap-2 z-10">
          <div className="flex flex-col justify-start items-center gap-4">
            <h2 className="w-full max-w-[655px] text-center text-foreground text-4xl md:text-6xl font-semibold leading-tight md:leading-[66px]">
              Reduce decision fatigue, find your best photos!
            </h2>
            <p className="w-full max-w-[600px] text-center text-muted-foreground text-lg md:text-xl font-medium leading-relaxed">
              There should be an easier way for her to select many photos at once, all while maintaining good decision quality and choose the best photos!
            </p>
          </div>
        </div>
        <div className="self-stretch grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 z-10">
          {cards.map((card) => (
            <BentoCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  )
}
