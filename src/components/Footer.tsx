import SocialIcons from "./SocialIcons";

const Footer = () => (
  <footer className="bg-[#FDF4D8] text-gray-700 py-12 px-8 md:px-16 lg:px-24">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
      {/* Operating Hours */}
      <div>
        <p className="font-semibold text-lg mb-2">Mon - Sun</p>
        <p className="text-md">7:00 AM - 7:00 PM</p>
      </div>

      {/* Contact Information */}
      <div className="space-y-4">
        <p className="text-md flex items-center">
          <span className="mr-2">📞</span>
          215-271-5520
        </p>
        <p className="text-md flex items-center">
          <span className="mr-2">📍</span>
          1500 East Passyunk Avenue
        </p>
        <p className="text-md">
          Philadelphia, PA 19147
        </p>
      </div>

      {/* Google Map Embed */}
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3058.6484403777514!2d-75.162926!3d39.9332108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6c639589ba28d%3A0x478aed3da12e43c5!2s1500%20E%20Passyunk%20Ave%2C%20Philadelphia%2C%20PA%2019147%2C%20USA!5e0!3m2!1sen!2sth!4v1673929823501!5m2!1sen!2sth"
          width="100%"
          height="200"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          title="B2 Cafe Location"
        ></iframe>
      </div>
    </div>

    {/* Footer Bottom */}
    <div className="mt-8 border-t border-gray-300 pt-4 text-center">
      <p className="text-sm">
        © {new Date().getFullYear()} B2 Cafe. All Rights Reserved.
      </p>
      <div className="mt-4">
        <SocialIcons />
      </div>
    </div>
  </footer>
);

export default Footer;
