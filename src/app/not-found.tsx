import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div>
        <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
    <h1 className="text-6xl text-gray-700 font-bold">404</h1>
    <p className="text-3xl text-gray-700 font-semibold mt-4">Page Not Found</p>
    <p className="text-lg text-gray-700 mt-2">The requested page does not exist.</p>
     <Link href="/">Return Home</Link>
  </div>
      
     
    </div>
  )
}