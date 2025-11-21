import Image from "next/image";
import { ChevronRight } from "lucide-react";

export default function Footer() {
  return (
    <div className="mt-10 min-h-screen bg-white/90 p-4 md:p-8 ">
  <div className="max-w-8xl mx-auto">

    <footer className="max-w-8xl mt-20 bg-black text-white rounded-3xl">

      {/* ===== CTA WRAPPED BOX ===== */}
      <div className="w-full flex justify-center px-4 -mt-32 relative z-10 my-4">
        <div className="max-w-8xl w-full bg-white rounded-3xl px-10 py-20 shadow-2xl text-center mt-2">
          <h2 className="text-5xl font-light leading-tight mb-6 text-black">
            Ready To Launch Your Digital <br /> Marketing Project?
          </h2>

          <p className="text-gray-700 mb-10 leading-relaxed">
            Ready to launch your digital marketing project? Let us craft strategies <br />
            that drive results and growth.
          </p>

          <button className="bg-black text-white px-8 py-3 rounded-lg flex items-center gap-2 mx-auto">
            Let’s Talk
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* ===== MAIN FOOTER ===== */}
      <div className="w-full bg-black pt-44 pb-20 px-4">
        <div className="max-w-8xl w-[95%] mx-auto flex flex-col md:flex-row gap-12">

          {/* LEFT SIDE - BRAND SECTION */}
          <div className="md:w-2/5">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-white text-black p-2 rounded">
                <Image src="/Logo.png" alt="Logo" width={32} height={32} />
              </div>
              <span className="text-xl font-bold tracking-wider">
                V I G Y A P A N W A L A
              </span>
            </div>

            <p className="text-gray-400 leading-relaxed">
              Specializes in innovative digital marketing strategies,
              blending creativity and data-driven insights to elevate your
              brand's online presence and drive measurable growth.
            </p>
          </div>

          {/* RIGHT SIDE - LINKS GRID (3 COLUMNS) */}
          <div className="md:w-3/5 grid grid-cols-1 sm:grid-cols-3 gap-8">
            
            {/* MENU COLUMN */}
            <div>
              <h3 className="text-lg font-semibold mb-4">MENU</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-white cursor-pointer">Home</li>
                <li className="hover:text-white cursor-pointer">Service</li>
                <li className="hover:text-white cursor-pointer">Our Work</li>
                <li className="hover:text-white cursor-pointer">Project</li>
                <li className="hover:text-white cursor-pointer">About Us</li>
              </ul>
            </div>

            {/* SERVICES COLUMN */}
            <div>
              <h3 className="text-lg font-semibold mb-4">SERVICES</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-white cursor-pointer">Web & App Development</li>
                <li className="hover:text-white cursor-pointer">Social Media Marketing</li>
                <li className="hover:text-white cursor-pointer">Email Marketing</li>
                <li className="hover:text-white cursor-pointer">SEO</li>
                <li className="hover:text-white cursor-pointer">Creative & Content</li>
              </ul>
            </div>

            {/* SOCIAL MEDIA COLUMN */}
            <div>
              <h3 className="text-lg font-semibold mb-4">SOCIAL MEDIA</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-white cursor-pointer">Instagram</li>
                <li className="hover:text-white cursor-pointer">Twitter</li>
                <li className="hover:text-white cursor-pointer">LinkedIn</li>
                <li className="hover:text-white cursor-pointer">Facebook</li>
              </ul>
            </div>

          </div>

        </div>
        </div>

    </footer>

  </div>
</div>

  );
}
