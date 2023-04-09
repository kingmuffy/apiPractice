import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Fetch = () => {
  const [data, setData] = useState(null)
  useEffect(() => {
    axios.get('https://dog.ceo/api/breeds/image/random').then((resp) => {
      setData(resp.data.message)
    })
  }, [])

  return (
    <div>
      <img alt="dog" width={500} src={data} />
    </div>
  )
}

export default Fetch
