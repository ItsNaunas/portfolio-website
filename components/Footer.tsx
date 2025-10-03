"use client";

import Link from "next/link";
import { navLinks, socialLinks } from "@/lib/data";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const iconMap = {
  FaTwitter,
  FaLinkedin,
  FaGithub,
};

export default function Footer() {
  return (
    <footer className="bg-ink border-t border-white/10">
      <div className="section-container">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <p className="text-signal font-body text-sm tracking-widest uppercase mb-4">
              BY NAUNAS
            </p>
            <p className="text-white/60 text-sm font-body">
              Websites & systems that turn clicks into clients.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-white font-display text-sm uppercase mb-4">NAVIGATE</p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-signal font-body text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white font-display text-sm uppercase mb-4">CONNECT</p>
            <div className="space-y-3">
              <a
                href="mailto:hello@naunas.com"
                className="block text-white/60 hover:text-signal font-body text-sm transition-colors"
              >
                hello@naunas.com
              </a>

              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = iconMap[social.icon as keyof typeof iconMap];
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-signal transition-colors"
                      aria-label={social.name}
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 pb-6">
          <p className="text-white/40 text-xs font-body text-center">
            © {new Date().getFullYear()} Naunas. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

