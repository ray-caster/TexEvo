import React from 'react';
import {
  TrendingUp,
  Archive,
  Recycle,
  Globe,
  Target,
  Trash2,
  Droplet,
  Earth,
  Package,
  Users,
  GraduationCap,
  Gift,
  School,
  Hotel,
  Building,
  User,
  Mail,
  Phone,
  MapPin,
  Shirt
} from 'lucide-react';

// Using Lucide React - professional, standard icons

export const GrowIcon = ({ className = "w-16 h-16" }) => (
  <TrendingUp className={className} strokeWidth={1.5} />
);

export const CollectIcon = ({ className = "w-16 h-16" }) => (
  <Archive className={className} strokeWidth={1.5} />
);

export const RecycleIcon = ({ className = "w-16 h-16" }) => (
  <Recycle className={className} strokeWidth={1.5} />
);

export const GlobeIcon = ({ className = "w-12 h-12" }) => (
  <Globe className={className} strokeWidth={1.5} />
);

export const TargetIcon = ({ className = "w-12 h-12" }) => (
  <Target className={className} strokeWidth={1.5} />
);

export const WasteIcon = ({ className = "w-12 h-12" }) => (
  <Trash2 className={className} strokeWidth={1.5} />
);

export const WaterIcon = ({ className = "w-12 h-12" }) => (
  <Droplet className={className} strokeWidth={1.5} />
);

export const EarthIcon = ({ className = "w-12 h-12" }) => (
  <Earth className={className} strokeWidth={1.5} />
);

export const PackageIcon = ({ className = "w-12 h-12" }) => (
  <Package className={className} strokeWidth={1.5} />
);

export const PeopleIcon = ({ className = "w-12 h-12" }) => (
  <Users className={className} strokeWidth={1.5} />
);

export const GraduationIcon = ({ className = "w-12 h-12" }) => (
  <GraduationCap className={className} strokeWidth={1.5} />
);

export const GiftIcon = ({ className = "w-12 h-12" }) => (
  <Gift className={className} strokeWidth={1.5} />
);

export const SchoolIcon = ({ className = "w-6 h-6" }) => (
  <School className={className} strokeWidth={1.5} />
);

export const HotelIcon = ({ className = "w-6 h-6" }) => (
  <Hotel className={className} strokeWidth={1.5} />
);

export const BuildingIcon = ({ className = "w-6 h-6" }) => (
  <Building className={className} strokeWidth={1.5} />
);

export const PersonIcon = ({ className = "w-24 h-24" }) => (
  <User className={className} strokeWidth={1.5} />
);

export const EmailIcon = ({ className = "w-5 h-5" }) => (
  <Mail className={className} strokeWidth={1.5} />
);

export const PhoneIcon = ({ className = "w-5 h-5" }) => (
  <Phone className={className} strokeWidth={1.5} />
);

export const LocationIcon = ({ className = "w-5 h-5" }) => (
  <MapPin className={className} strokeWidth={1.5} />
);

export const SocialIcon = ({ platform, className = "w-6 h-6" }) => {
  // Keep the social icons as custom SVGs since lucide-react doesn't include brand icons
  const icons = {
    facebook: (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
    twitter: (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
      </svg>
    ),
    instagram: (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="white" />
        <circle cx="17.5" cy="6.5" r="1.5" fill="white" />
      </svg>
    ),
    tiktok: (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 10.5V8.8a4.5 4.5 0 01-2.5-.8A5.3 5.3 0 0115 4.2V4h-3v12.5a2.5 2.5 0 11-2-2.5V11a5.5 5.5 0 105 5.5v-5c.9.5 1.9.8 3 .8v-1.8z" />
      </svg>
    ),
  };
  return icons[platform] || icons.facebook;
};

export const ClothesIcon = ({ className = "w-16 h-16" }) => (
  <Shirt className={className} strokeWidth={1.5} />
);

