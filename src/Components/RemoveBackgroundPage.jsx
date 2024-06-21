import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import Header from './Header'

const RemoveBackgroundPage = () => {
  const location = useLocation()
  const { image } = location.state || {}
  const [processedImage, setProcessedImage] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (image) {
      const formData = new FormData()
      formData.append('image_file', image)

      const apiKey = ' w4gZUgzFKgixEjDVJHstraEr'

      setIsLoading(true)

      axios
        .post('https://api.remove.bg/v1.0/removebg', formData, {
          headers: {
            'X-Api-Key': apiKey,
          },
          responseType: 'blob',
        })
        .then((response) => {
          const url = URL.createObjectURL(response.data)
          setProcessedImage(url)
          setIsLoading(false)
        })
        .catch((error) => {
          console.error('Error removing background:', error)
          setIsLoading(false)
        })
    }
  }, [image])

  return (
    <div className=" w-[100%] h-[100vh]">
      <nav className="flex items-center w-full h-[12vh]">
        <Header />
      </nav>
      <div className=" w-full flex justify-center gap-10">
        <ul className=" flex flex-col gap-7">
          <div className="border-[2px] border-slate-500 flex items-center justify-center w-[25vw] h-[45vh]">
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              processedImage && <img src={processedImage} alt="Processed" />
            )}
          </div>
          <span className=" flex gap-6 text-[#555555] md:text-3xl items-center">
            <i className="bi bi-dash text-[#b0afaf]"></i>
            <i className="bi bi-plus-lg"></i>
            <p>|</p>
            <i className="bi bi-input-cursor"></i>
            <p>|</p>
            <i className="bi bi-arrow-clockwise cursor-not-allowed text-[#b0afaf]"></i>
            <i className="bi bi-arrow-counterclockwise cursor-not-allowed text-[#b0afaf]"></i>
          </span>
        </ul>
      </div>
    </div>
  )
}

export default RemoveBackgroundPage
