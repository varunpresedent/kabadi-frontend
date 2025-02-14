export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 px-4">
      <div className="container mx-auto text-center">
        <p className="text-sm md:text-base">&copy; {new Date().getFullYear()} Kabaddi Website. All rights reserved.</p>
      </div>
    </footer>
  )
}

