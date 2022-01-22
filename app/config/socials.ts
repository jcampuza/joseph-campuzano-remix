import { config } from './config';

export enum SocialType {
  email = 'email',
  twitter = 'twitter',
  instagram = 'instagram',
  linkedIn = 'linkedIn',
  github = 'github',
}

export interface Social {
  type: SocialType;
  label: string;
  link: string;
}

export const socials: Social[] = [
  {
    type: SocialType.twitter,
    label: 'Twitter',
    link: 'https://twitter.com/CampuzanoJoe',
  },
  {
    type: SocialType.instagram,
    label: 'Instagram',
    link: 'https://instagram.com/jcampuza',
  },
  {
    type: SocialType.github,
    label: 'Github',
    link: 'https://github.com/jcampuza',
  },
  {
    type: SocialType.linkedIn,
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/josephcampuzano',
  },
  {
    type: SocialType.email,
    label: 'Email',
    link: `mailto:${config.email}`,
  },
];
