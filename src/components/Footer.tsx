"use client";

const Footer = () => {
  return (
    <footer className="text-slate-50">

      <div className="py-6" style={{backgroundImage:"url('/images/home/footer-bottom-bg.png')"}}>
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-center items-center gap-4">
          <div className="text-sm md:text-center sm:text-left">
            {/* Website Content Managed by <strong>Department Name, Ministry Name, </strong><br /> */}
            <span>
              Designed, Developed and Hosted by{' '}
              <a
                href="http://www.nic.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                <strong>National Informatics Centre</strong>
              </a>
              <strong> (NIC)</strong> <br />
            </span>
            <div className="text-xs text-gray-500 mt-1">
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
