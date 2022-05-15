import {
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoMail,
} from 'react-icons/io5';
import { socials, SocialType } from '../config/socials';
import { Container } from './Container';

export const IconForSocialType = {
  [SocialType.instagram]: IoLogoInstagram,
  [SocialType.twitter]: IoLogoTwitter,
  [SocialType.email]: IoMail,
  [SocialType.linkedIn]: IoLogoLinkedin,
  [SocialType.github]: IoLogoGithub,
};

const Socials = () => {
  return (
    <section>
      <ul className="text-sm flex space-x-6">
        {socials.map((social) => {
          const Icon = IconForSocialType[social.type];

          return (
            <li key={social.type}>
              <a
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Icon size={16} className="inline" aria-hidden="true" />
                <span className="sr-only sm:not-sr-only sm:ml-2">{social.label}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-bl from-pink-900 to-indigo-900 dark:via-neutral-900  text-white">
      <Container>
        <Socials />
      </Container>
    </footer>
  );
};
