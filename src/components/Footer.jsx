import { footerLinks } from "../constants";

const Footer = () => (
  <footer className="px-5 py-5 sm:px-10">
    <div className="screen-max-width">
      <div>
        <p className="text-gray text-xs font-semibold">
          More ways to shop:{" "}
          <a className="text-blue cursor-pointer underline">Find an Apple Store</a> or{" "}
          <a className="text-blue cursor-pointer underline">other retailer</a> near you.
        </p>
        <p className="text-gray text-xs font-semibold">Or call 000800-040-1966</p>
      </div>

      <div className="my-5 h-px w-full bg-neutral-700" />

      <div className="flex flex-col justify-between md:flex-row md:items-center">
        <p className="text-gray text-xs font-semibold">
          Copright @ 2024 Apple Inc. All rights reserved.
        </p>
        <div className="flex">
          {footerLinks.map((link, i) => (
            <a key={link} className="text-gray cursor-pointer text-xs font-semibold">
              {link} {i !== footerLinks.length - 1 && <span className="mx-2"> | </span>}
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
