import Logo from "../assets/Terra.png";
export default function Footer() {
  return (
  <footer className="relative text-white bg-[#031556] overflow-hidden">
   
      <div className="mx-auto max-w-[1200px] px-4 sm:px-10 lg:px-12 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 lg:gap-16">
          {/* Quick Links */}
          <ul className="space-y-1">
            <li className="text-2xl font-medium">Quick Links</li>
            <li className="text-[1.125rem] leading-8">Home</li>
            <li className="text-[1.125rem] leading-8">About US</li>
            <li className="text-[1.125rem] leading-8">Services</li>
            <li className="text-[1.125rem] leading-8">Contact</li>
          </ul>

          {/* Legal */}
          <ul className="space-y-4">
            <li className="text-2xl font-medium">Legal</li>
            <li className="text-[1.125rem] leading-8">Privacy Policy</li>
            <li className="text-[1.125rem] leading-8">Terms of Use</li>
          </ul>

          {/* Contact */}
          <ul className="space-y-4">
            <li className="text-2xl font-medium">Contact</li>
            <li className="text-[1.125rem] leading-8">Info@terragroup.ae</li>
            <li className="text-[1.125rem] leading-8">+971 XXX XXX XXX</li>
            <li className="text-[1.125rem] leading-8">Sun-Thu 9:00-18:00</li>
          </ul>
        </div>
      </div>

     
      <div className="relative flex justify-center gap-6 mb-2 z-10">
        {/* Facebook */}
        <div className="p-2 bg-white rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#031556" viewBox="0 0 24 24">
            <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 5.004 3.657 9.128 8.438 9.878v-6.987H8.077v-2.89h2.361V9.845c0-2.337 1.393-3.626 3.523-3.626.999 0 2.043.178 2.043.178v2.25h-1.151c-1.137 0-1.492.707-1.492 1.432v1.717h2.539l-.406 2.89h-2.133V21.88C18.343 21.128 22 17.004 22 12z" />
          </svg>
        </div>

        {/* Instagram */}
        <div className="p-2 bg-white rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#031556" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.344 3.608 1.32.975.976 1.257 2.243 1.32 3.609.058 1.266.07 1.645.07 4.838s-.012 3.573-.07 4.838c-.063 1.366-.345 2.633-1.32 3.609-.975.976-2.242 1.258-3.608 1.32-1.266.059-1.646.07-4.85.07s-3.584-.011-4.85-.07c-1.366-.062-2.633-.344-3.609-1.32-.975-.976-1.257-2.243-1.32-3.609C2.175 15.573 2.163 15.194 2.163 12s.012-3.573.07-4.838c.063-1.366.345-2.633 1.32-3.609C4.528 2.577 5.795 2.295 7.161 2.233 8.427 2.175 8.807 2.163 12 2.163zm0 1.687c-3.163 0-3.532.012-4.777.07-1.072.05-1.655.227-2.04.385-.514.2-.88.438-1.27.828-.39.39-.628.756-.828 1.27-.158.385-.335.968-.385 2.04-.058 1.245-.07 1.614-.07 4.777s.012 3.532.07 4.777c.05 1.072.227 1.655.385 2.04.2.514.438.88.828 1.27.39.39.756.628 1.27.828.385.158.968.335 2.04.385 1.245.058 1.614.07 4.777.07s3.532-.012 4.777-.07c1.072-.05 1.655-.227 2.04-.385.514-.2.88-.438 1.27-.828.39-.39.628-.756.828-1.27.158-.385.335-.968.385-2.04.058-1.245.07-1.614.07-4.777s-.012-3.532-.07-4.777c-.05-1.072-.227-1.655-.385-2.04-.2-.514-.438-.88-.828-1.27-.39-.39-.756-.628-1.27-.828-.385-.158-.968-.335-2.04-.385-1.245-.058-1.614-.07-4.777-.07zm0 3.9a5.94 5.94 0 1 1 0 11.88 5.94 5.94 0 0 1 0-11.88zm0 1.687a4.253 4.253 0 1 0 0 8.506 4.253 4.253 0 0 0 0-8.506zm4.406-2.46a1.387 1.387 0 1 1-2.774 0 1.387 1.387 0 0 1 2.774 0z" />
          </svg>
        </div>

        {/* LinkedIn */}
        <div className="p-2 bg-white rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#031556" viewBox="0 0 24 24">
            <path d="M19 0h-14C2.239 0 0 2.239 0 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5V5c0-2.761-2.238-5-5-5zM8.339 18.338H5.667V9.667h2.672v8.671zM7.003 8.527a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zM18.338 18.338h-2.67v-4.224c0-1.008-.018-2.304-1.404-2.304-1.406 0-1.621 1.099-1.621 2.233v4.295H10.97V9.667h2.563v1.178h.036c.357-.676 1.227-1.39 2.526-1.39 2.701 0 3.2 1.778 3.2 4.088v4.795z" />
          </svg>
        </div>
      </div>

      
      <div className="border-t border-white/10 relative z-10">
        <p className="mx-auto max-w-[1200px] px-6 sm:px-10 lg:px-12 text-center text-sm sm:text-[0.95rem] py-4">
          © 2025 Terra Group L.L.C. All rights reserved
        </p>
      </div>

   
      <div className="absolute bottom-0 right-0 w-[15rem]">
        <img src={Logo} alt="Terra Logo" className="w-full h-auto object-contain" />
      </div>
    </footer>

  );
}
