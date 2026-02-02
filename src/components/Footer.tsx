const Footer = () => {
  return (
    <footer className="flex flex-col bg-[#000] min-h-75 mt-10">
      <div className="container text-white flex justify-between">
        <div className="flex flex-col gap-4 hidden md:block">
            <b className="md:text-2xl">Books</b>
            <div className="flex flex-col gap-3">
                <span>Books Delivered. Imagination Unlimited.</span>
            </div>
        </div>
        <div className="flex flex-col gap-4">
            <b className="md:text-xl">Quick Links</b>
            <div className="flex flex-col gap-3">
                <a className="decoration-none" href="/">Home</a>
                <a className="decoration-none" href="/about">About Us</a>
                <a className="decoration-none" href="/contact">Contact</a>
            </div>
        </div>
        <div className="flex flex-col gap-4">
            <b className="md:text-xl">Contact</b>
            <div className="flex flex-col gap-3">
                <a className="decoration-none" href="">Email: mssonukr@gmail.com</a>
                <a className="decoration-none" href="">Phone: +91 7061543815</a>
                <a className="decoration-none" href="">MMEC, Mullana - 133207</a>
            </div>
        </div>
      </div>
      <p className="text-white text-center py-8 border-t border-dashed">© 2025 Books. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
