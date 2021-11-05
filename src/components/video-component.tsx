/* eslint-disable jsx-a11y/media-has-caption */
import React, { ReactElement, useEffect, useRef, useState } from 'react'
import { Video } from '../models/video'
import { getMobileOperatingSystem } from '../util/constants'

export default function VideoComponent({
  video,
  autoPlay = false,
}: {
  video: Video
  autoPlay?: boolean
}): ReactElement {
  const videoRef = useRef<HTMLVideoElement>(null)

  const [isIos, setIsIos] = useState(false)
  useEffect(() => {
    setIsIos(getMobileOperatingSystem() == 'ios')
  }, [])

  useEffect(() => {
    const options = {
      rootMargin: '0px',
      threshold: [0.4, 0.6],
    }

    const handlePlay = (entries: IntersectionObserverEntry[]): void => {
      if (!autoPlay) {
        entries.forEach((entry) => {
          if (!isIos) {
            if (entry.isIntersecting) {
              videoRef?.current?.play()
            } else {
              videoRef?.current?.pause()
            }
          }
        })
      }
    }

    const observer = new IntersectionObserver(handlePlay, options)

    if (videoRef.current) observer.observe(videoRef.current)
  })

  return (
    <div className="md:w-72 md:ml-auto">
      <div className="relative my-12 rounded-xl overflow-hidden aspect-h-16 aspect-w-9 block mx-auto md:h-full">
        <div>
          {isIos ? (
            <img
              className="rounded-full w-10 h-10 object-cover"
              src={video.image_url}
              alt={video.description}
            />
          ) : (
            <video
              autoPlay={autoPlay}
              muted
              ref={videoRef}
              className="object-cover absolute inset-0 h-full"
              src={video.url}
            ></video>
          )}
          <div className="absolute left-0 bottom-0 text-white p-2 bg-opacity-20 bg-black rounded-xl">
            <div className="flex items-center">
              <img
                className="rounded-full w-10 h-10 object-cover"
                src={video.users.image_url || '/img/user.svg'}
                alt={video.users.name}
              />
              <div className="pl-2">{video.users.name}</div>
            </div>
            <div className="pt-2">{video.description}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
