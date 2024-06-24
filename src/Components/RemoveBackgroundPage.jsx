import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import Header from './Header'

const RemoveBackgroundPage = () => {
  const location = useLocation()
  const { image } = location.state || {}
  const [processedImage, setProcessedImage] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    console.log('Received image:', image)
    if (image) {
      const formData = new FormData()
      formData.append('image_file_b64', image)

      const apiKey = 'dsMUa3JNSKvJsrkHWNmrNPh2'

      setIsLoading(true)

      axios
        .post('https://api.remove.bg/v1.0/removebg', formData, {
          headers: {
            'X-Api-Key': apiKey,
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((response) => {
          const url = response.data.data.result_b64
          console.log('Processed image URL:', url)
          setProcessedImage(`data:image/png;base64,${url}`)
          setIsLoading(false)
        })
        .catch((error) => {
          console.error('Error removing background:', error)
          setError('Failed to remove background')
          setIsLoading(false)
        })
    }
  }, [image])

  return (
    <div className="w-full h-screen flex flex-col items-center">
      <Header />
      <div className="w-full h-[100vh] flex justify-center items-center mt-10">
        <span className=" w-[25vw] h-[45vh] flex items-center justify-center border-[3px] border-gray-300">
          {isLoading ? (
            <p>Loading...</p>
          ) : error ? (
            <div className="text-red-500 cursor-pointer">
              <p>{error}</p>
            </div>
          ) : (
            processedImage && <img src={processedImage} alt="Processed" />
          )}
        </span>
      </div>
    </div>
  )
}

export default RemoveBackgroundPage
