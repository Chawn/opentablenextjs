import React from 'react'
import Header from './components/Header'

type Props = {}

export default function loading({}: Props) {
  return (
   <main>
    <Header />
    <div className="py-3 px-36 mt-10 flex flex-wrap justify-center items-center">
      {[...Array(10)].map((_, i) => (
        <div key={i} className="m-3 aminate-pulse bg-slate-200 w-64 h-72 rounded overflow-hidden border cursor-pointer"></div>
      ))}
    </div>
   </main>
  )
}