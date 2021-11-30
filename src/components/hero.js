import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

  
const Hero = () => {
  return (
    <div>
          {/* Hero card */}
          <div className="relative">
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-white" />
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
              <div className="relative  sm:overflow-hidden">
                <div className="absolute inset-0">
                <StaticImage
                className="h-full w-full object-cover"
                alt="Test Image"
               src="../images/010110-greyscale.jpg"
                />

                  <div className="absolute inset-0 bg-blue-500 mix-blend-multiply" />
                </div>
                <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                  <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                    <span className="block text-white">Headline first line</span>
                    <span className="block text-blue-200">and this is the second line</span>
                  </h1>
                  <p className="mt-6 max-w-lg mx-auto text-center text-xl text-blue-200 sm:max-w-3xl">
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt
                    amet fugiat veniam occaecat fugiat aliqua.
                  </p>
                  <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                    <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                      <a
                        href="#"
                        className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium  shadow-sm text-blue-700 bg-white hover:bg-blue-50 sm:px-8"
                      >
                        Call to action
                      </a>
                      <a
                        href="#"
                        className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium  shadow-sm text-white bg-blue-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}
export default Hero