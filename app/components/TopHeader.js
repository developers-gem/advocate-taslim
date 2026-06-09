import Link from "next/link";
export default function TopHeader() {
  return (
    <div className="w-full bg-gray-100 border-b">
      <div className="max-w-7xl mx-auto px-4 py-3">

        {/* Mobile */}
        <div className="flex md:hidden items-center justify-between">
           <Link href="/">
            <img
              src="/images/logo.jpeg"
              alt="logo"
              className="w-28 cursor-pointer"
            />
          </Link>
          <div>
              <p className="text-gray-600">
                Customer Support
              </p>
              <p className="font-semibold text-[#223a8c]">
                24×7 Available
              </p>
            </div>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex items-center justify-between">

          {/* Logo */}
          <Link href="/">
            <img
              src="/images/logo.jpeg"
              alt="logo"
              className="w-36 cursor-pointer"
            />
          </Link>

          {/* Right Info */}
          <div className="flex items-center gap-8 text-[18px]">

            <div>
              <p className="text-gray-600">
                Call or WhatsApp
              </p>
              <p className="font-semibold text-[#223a8c]">
                +91 7678336800 | +91 8826552527
              </p>
            </div>

            <div>
              <p className="text-gray-600">
                Customer Support
              </p>
              <p className="font-semibold text-[#223a8c]">
                24×7 Available
              </p>
            </div>

            <div>
              <p className="text-gray-700">
                Marriage Certificate <b>in 2 hours</b>
              </p>
              <p className="text-xs text-gray-500">
                issued by Govt. of India
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}