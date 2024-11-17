

export default function Footer() {
  return (
    <footer className="relative w-full h-[50%] mx-auto bg-[#000919] text-white overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('public/Footer.png')",
          backgroundPosition: "right center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          opacity: 0.8,
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 md:px-24 py-24">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-20">
          <div className="flex items-center gap-2 mb-8 md:mb-0">
            <img
              src="public/logo.png"
              alt="LOGO"
              className="h-10 w-10"
            />
            <span className="text-xl font-light">Smart Lights</span>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col md:flex-row gap-6 md:gap-12">
            <a href="#product" className="hover:text-gray-300 transition-colors">
              Product
            </a>
            <a href="#services" className="hover:text-gray-300 transition-colors">
              Software Services
            </a>
            <a href="#follow" className="hover:text-gray-300 transition-colors">
              Follow Us
            </a>
          </nav>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-700 mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-wrap gap-4 md:gap-8 text-sm text-gray-300">
          <a href="/privacy" className="hover:text-white transition-colors">
            Privacy Policy
          </a>
          <span className="hidden md:inline text-gray-700">|</span>
          <a href="/terms" className="hover:text-white transition-colors">
            Terms & Conditions
          </a>
          <span className="hidden md:inline text-gray-700">|</span>
          <a href="/cookies" className="hover:text-white transition-colors">
            Cookie Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
