import Container from "../ui/Container";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-16">
      <Container>
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold">EduNova</h3>

            <p className="mt-4 text-gray-400 leading-relaxed">
              Empowering future innovators through technology-driven education
              and modern learning experiences.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-5">Quick Links</h4>

            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#">Home</a>
              </li>

              <li>
                <a href="#about">About</a>
              </li>

              <li>
                <a href="#programs">Programs</a>
              </li>

              <li>
                <a href="#testimonials">Testimonials</a>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-semibold mb-5">Programs</h4>

            <ul className="space-y-3 text-gray-400">
              <li>Computer Science</li>
              <li>Artificial Intelligence</li>
              <li>Design & Media</li>
              <li>Business Management</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-5">Contact</h4>

            <ul className="space-y-3 text-gray-400">
              <li>hello@edunova.com</li>
              <li>+91 98765 43210</li>
              <li>Ahmedabad, India</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-gray-500 text-sm">
          <p>© 2026 EduNova. All rights reserved.</p>

          <p>Designed with modern UI principles.</p>
        </div>
      </Container>
    </footer>
  );
}
