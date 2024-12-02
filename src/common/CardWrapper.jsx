import React from 'react'

const CardWrapper = ({ children, className = '' }) => {
  return (
    <section className={`cardContainer ${className}`}>
        {children}
    </section>
  )
}

export default CardWrapper