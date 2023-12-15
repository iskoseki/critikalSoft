'use client'
import React, {useState, useEffect} from "react"

import {motion} from 'framer-motion'

export default function Cursor(){

  const [mousePosition, setMousePosition] = useState({x: 0, y: 0})

  useEffect(() => {
    /**
     * Handles the mouse move event.
     *
     * @param {MouseEvent} event - The mouse move event.
     * @return {void} No return value.
     */
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: event.pageX,
        y: event.pageY
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  },[])

  let variants = {
    default: {
      x: mousePosition.x,
      y: mousePosition.y
    }
  }
    return (
          <motion.div variants={variants} animate="default"  className="cursor z-50"></motion.div>
    )
}