"use client"

export function YouTubeVideoSection() {
  return (
    <section className="w-full px-5 overflow-hidden flex flex-col justify-start items-center my-0 py-8 md:py-14">
      <div className="self-stretch relative flex flex-col justify-center items-center gap-8 max-w-[1100px] mx-auto">
        <div className="flex flex-col justify-start items-center gap-4">
          <h2 className="text-center text-foreground text-4xl md:text-5xl font-semibold leading-tight md:leading-[40px]">
            See PickyPics in Action  
          </h2>
          <p className="self-stretch text-center text-muted-foreground text-sm font-medium leading-tight">
            See how PickyPics reduces decision fatigue and helps you find your best photos!
          </p>
        </div>

        <div className="w-full max-w-4xl">
          <div className="relative w-full pt-[56.25%] bg-card rounded-lg overflow-hidden shadow-lg outline outline-1 outline-border">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/HwM5phsMrrs"
              title="PickPics - Promotional Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  )
}
