import React, { useState, useEffect } from 'react';
import {
    GrowIcon, CollectIcon, RecycleIcon, GlobeIcon, TargetIcon,
    WasteIcon, WaterIcon, EarthIcon, PackageIcon, PeopleIcon,
    GraduationIcon, GiftIcon, SchoolIcon, HotelIcon, BuildingIcon,
    PersonIcon, EmailIcon, PhoneIcon, LocationIcon, SocialIcon
} from './components/Icons';

const TexEvoWebsite = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const partners = [
        { name: 'PT Mitra Saruta', subtitle: 'TEXCYCLE Program', description: 'Our strategic partner operates innovative recycling technologies to transform collected textiles into new materials, creating a closed-loop system for sustainable fashion.' },
        { name: 'EcoFashion Alliance', subtitle: 'Sustainability Network', description: 'Collaborating with leading sustainability organizations to amplify our impact and share best practices across the fashion industry.' }
    ];

    const team = [
        { name: 'Eucharist Darius Satya Suhargo', role: 'Founder & CEO', quote: 'Fashion should enhance our world, not harm it. Through TexEvo, we\'re proving that students can lead the change toward a more sustainable future, one textile at a time.' },
        { name: 'Sarah Chen', role: 'Operations Director' },
        { name: 'Marcus Johnson', role: 'Sustainability Coordinator' },
        { name: 'Elena Rodriguez', role: 'Community Outreach Manager' },
        { name: 'David Kim', role: 'Impact Analytics Specialist' }
    ];

    const institutions = [
        { name: 'University of Indonesia', donated: 847 },
        { name: 'Grand Hyatt Jakarta', donated: 623 },
        { name: 'Plaza Indonesia', donated: 1234 }
    ];

    return (
        <div className="min-h-screen" style={{ background: '#F5EDE3' }}>
            {/* Navigation - Sleek with depth */}
            <nav className="fixed top-0 w-full z-50 nav-depth">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold" style={{ color: '#2D7A5F' }}>TexEvo</h1>
                    <div className="hidden md:flex gap-8">
                        {['About', 'Impact', 'How It Works', 'Progress', 'Team', 'Join Us'].map(item => (
                            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`}
                                className="font-medium transition-all outline-sleek hover:scale-105"
                                style={{ color: '#5A6B60' }}>
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden" style={{ background: 'linear-gradient(135deg, #2D7A5F 0%, #1E5A43 100%)' }}>
                <div className="absolute inset-0 opacity-10" style={{
                    transform: `translateY(${scrollY * 0.5}px)`,
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }} />

                <div className="relative z-10 text-center px-6" style={{ transform: `translateY(${scrollY * 0.3}px)` }}>
                    <h2 className="text-7xl font-serif italic text-white mb-6" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.3)' }}>
                        Reweave. Renew. Revive.
                    </h2>
                    <p className="text-2xl text-white mb-10" style={{ opacity: 0.95 }}>
                        A movement to transform fashion's footprint.
                    </p>
                    <div className="flex gap-6 justify-center flex-wrap">
                        <button className="btn btn-primary">Join Us</button>
                        <button className="btn btn-secondary">Donate Now</button>
                    </div>
                </div>

                <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float" />
                <div className="absolute bottom-40 right-20 w-32 h-32 bg-white/10 rounded-full animate-float" style={{ animationDelay: '2s' }} />
                <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-white/10 rounded-full animate-float" style={{ animationDelay: '4s' }} />
            </section>

            {/* About Section - Beige Background */}
            <section id="about" className="section-beige py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-5xl font-bold text-center mb-16" style={{ color: '#2D4A3E' }}>About TexEvo</h2>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <p className="text-lg leading-relaxed" style={{ color: '#5A6B60' }}>
                                TexEvo is a student-led sustainability organization dedicated to transforming the fashion industry's environmental impact. We tackle fast-fashion waste through innovative textile collection and recycling programs, creating a circular economy where every piece of clothing has value and purpose.
                            </p>
                            <p className="text-lg leading-relaxed" style={{ color: '#5A6B60' }}>
                                Our mission extends beyond waste reduction – we educate communities about sustainable fashion practices, foster environmental consciousness, and build partnerships that create lasting change. Together, we're reweaving the future of fashion.
                            </p>
                        </div>

                        <div className="relative group">
                            <div className="icon-card">
                                <div className="flex justify-around items-center">
                                    <div className="text-center transform hover:scale-110 transition-transform cursor-pointer">
                                        <GrowIcon className="w-16 h-16 text-white mb-3 mx-auto" />
                                        <p className="text-white font-semibold">Grow</p>
                                    </div>
                                    <div className="text-center transform hover:scale-110 transition-transform cursor-pointer">
                                        <CollectIcon className="w-16 h-16 text-white mb-3 mx-auto" />
                                        <p className="text-white font-semibold">Collect</p>
                                    </div>
                                    <div className="text-center transform hover:scale-110 transition-transform cursor-pointer">
                                        <RecycleIcon className="w-16 h-16 text-white mb-3 mx-auto" />
                                        <p className="text-white font-semibold">Recycle</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mt-16">
                        <div className="card vision-card">
                            <GlobeIcon className="w-12 h-12 mb-4" style={{ color: '#4FC3F7' }} />
                            <h3 className="text-2xl font-bold mb-4" style={{ color: '#2D4A3E' }}>Our Vision</h3>
                            <p className="leading-relaxed" style={{ color: '#5A6B60' }}>
                                A world where textile waste is eliminated through conscious consumption, innovative recycling, and community-driven sustainability initiatives that protect our planet for future generations.
                            </p>
                        </div>

                        <div className="card mission-card">
                            <TargetIcon className="w-12 h-12 mb-4" style={{ color: '#F06292' }} />
                            <h3 className="text-2xl font-bold mb-4" style={{ color: '#2D4A3E' }}>Our Mission</h3>
                            <p className="leading-relaxed" style={{ color: '#5A6B60' }}>
                                To revolutionize textile waste management by connecting students, communities, and industry partners through the TEXCYCLE program, creating measurable environmental impact while fostering sustainable lifestyle choices.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Impact Statistics - White Background */}
            <section id="impact" className="section-light py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-5xl font-bold text-center mb-16" style={{ color: '#2D4A3E' }}>The Hidden Cost of Fast Fashion</h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: <WasteIcon className="w-16 h-16" style={{ color: '#999' }} />, value: '92M', label: 'Tons of textile waste generated globally each year' },
                            { icon: <WaterIcon className="w-16 h-16" style={{ color: '#64B5F6' }} />, value: '2,700L', label: 'Water needed to make one cotton T-shirt' },
                            { icon: <EarthIcon className="w-16 h-16" style={{ color: '#66BB6A' }} />, value: '10%', label: 'Of global carbon emissions from fashion industry' }
                        ].map((stat, i) => (
                            <div key={i} className="stat-card">
                                <div className="flex justify-center mb-4">{stat.icon}</div>
                                <div className="text-5xl font-bold mb-3" style={{ color: '#D88B6F' }}>{stat.value}</div>
                                <p className="font-medium" style={{ color: '#5A6B60' }}>{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works - Beige Background */}
            <section id="how-it-works" className="section-beige py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-5xl font-bold text-center mb-16" style={{ color: '#2D4A3E' }}>How It Works</h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { num: '1', icon: <CollectIcon className="w-16 h-16" style={{ color: '#2D7A5F' }} />, title: 'Donate Clothes', desc: 'Bring your unwanted textiles to our collection points across campus and community locations. Every donation counts toward a sustainable future.' },
                            { num: '2', icon: <RecycleIcon className="w-16 h-16" style={{ color: '#2D7A5F' }} />, title: 'Recycle with TEXCYCLE', desc: 'We partner with PT Mitra Saruta to process and transform textiles into new materials using innovative recycling technologies.' },
                            { num: '3', icon: <GrowIcon className="w-16 h-16" style={{ color: '#2D7A5F' }} />, title: 'Impact Together', desc: 'Track our collective environmental impact and celebrate the positive change we\'re creating as a community.' }
                        ].map((step, i) => (
                            <div key={i} className="relative card" style={{ paddingTop: '3.5rem' }}>
                                <div className="step-number">{step.num}</div>
                                <div className="flex justify-center mb-4">{step.icon}</div>
                                <h3 className="text-2xl font-bold text-center mb-3" style={{ color: '#2D4A3E' }}>{step.title}</h3>
                                <p className="text-center leading-relaxed" style={{ color: '#5A6B60' }}>{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Progress Tracking - White Background */}
            <section id="progress" className="section-white py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-5xl font-bold text-center mb-6" style={{ color: '#2D4A3E' }}>See Who's Leading the Change</h2>
                    <p className="text-center mb-16 max-w-3xl mx-auto text-lg" style={{ color: '#8A9B90' }}>
                        Each participating school, hotel, or store contributes to sustainability through TexEvo's donation system. Track your institution's impact below and see how we're making a difference together.
                    </p>

                    <div className="space-y-6 max-w-4xl mx-auto">
                        {institutions.map((inst, i) => (
                            <div key={i}>
                                <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center gap-3">
                                        {i === 0 ? <SchoolIcon className="w-7 h-7" style={{ color: '#D88B6F' }} /> :
                                            i === 1 ? <HotelIcon className="w-7 h-7" style={{ color: '#D88B6F' }} /> :
                                                <BuildingIcon className="w-7 h-7" style={{ color: '#D88B6F' }} />}
                                        <span className="font-semibold text-lg" style={{ color: '#2D4A3E' }}>{inst.name}</span>
                                    </div>
                                    <span className="font-bold text-lg" style={{ color: '#D88B6F' }}>{inst.donated} kg donated</span>
                                </div>
                                <div className="progress-bar">
                                    <div className="progress-fill" style={{ width: `${Math.min((inst.donated / 1500) * 100, 100)}%` }}>
                                        <div className="absolute inset-0 bg-white/20 animate-shimmer" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Partners - Beige Background */}
            <section id="partners" className="section-beige py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-5xl font-bold text-center mb-6" style={{ color: '#2D4A3E' }}>Our Partners</h2>
                    <p className="text-center mb-16 text-lg" style={{ color: '#8A9B90' }}>Working together to close the loop in fashion.</p>

                    <div className="grid md:grid-cols-2 gap-8">
                        {partners.map((partner, i) => (
                            <div key={i} className="card">
                                <h3 className="text-3xl font-bold mb-2" style={{ color: '#2D4A3E' }}>{partner.name}</h3>
                                <p className="font-semibold mb-4" style={{ color: '#D88B6F' }}>{partner.subtitle}</p>
                                <p className="leading-relaxed" style={{ color: '#5A6B60' }}>{partner.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team - White Background */}
            <section id="team" className="section-white py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-5xl font-bold text-center mb-16" style={{ color: '#2D4A3E' }}>Our Team</h2>

                    <div className="mb-16 card-elevated max-w-4xl mx-auto" style={{ padding: '3rem', background: 'linear-gradient(135deg, #FAF6F1 0%, #F5EDE3 100%)', borderRadius: '24px' }}>
                        <div className="flex flex-col items-center text-center">
                            <div className="team-avatar team-avatar-primary mb-6">
                                <PersonIcon className="w-16 h-16 text-white" />
                            </div>
                            <h3 className="text-3xl font-bold mb-2" style={{ color: '#2D4A3E' }}>{team[0].name}</h3>
                            <p className="font-semibold mb-6" style={{ color: '#D88B6F' }}>{team[0].role}</p>
                            <p className="italic text-lg leading-relaxed max-w-2xl" style={{ color: '#5A6B60' }}>
                                "{team[0].quote}"
                            </p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6">
                        {team.slice(1).map((member, i) => (
                            <div key={i} className="card text-center" style={{ background: 'linear-gradient(135deg, #F5E6E0 0%, #FAF5F0 100%)' }}>
                                <div className="team-avatar team-avatar-secondary mb-4">
                                    <PersonIcon className="w-12 h-12 text-white" />
                                </div>
                                <h4 className="font-bold mb-1" style={{ color: '#2D4A3E' }}>{member.name}</h4>
                                <p className="text-sm" style={{ color: '#8A9B90' }}>{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Growing Impact - Dark Green */}
            <section className="section-dark-green py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-5xl font-bold text-center text-white mb-16">Our Growing Impact</h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { value: '3,247', label: 'Kilograms of Clothes Collected', icon: <PackageIcon className="w-16 h-16 text-white" /> },
                            { value: '1,580', label: 'Students Involved', icon: <PeopleIcon className="w-16 h-16 text-white" /> },
                            { value: '67', label: 'Workshops & Events Held', icon: <GraduationIcon className="w-16 h-16 text-white" /> }
                        ].map((stat, i) => (
                            <div key={i} className="glass-card p-8 text-center transform hover:-translate-y-2 transition-all">
                                <div className="flex justify-center mb-4">{stat.icon}</div>
                                <div className="text-5xl font-bold text-white mb-3">{stat.value}</div>
                                <p className="text-emerald-100 font-medium">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Join the Movement - Beige */}
            <section id="join-us" className="section-beige py-24 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-5xl font-bold mb-6" style={{ color: '#2D4A3E' }}>Join the Movement</h2>
                    <p className="text-xl mb-12" style={{ color: '#5A6B60' }}>Be part of the solution. Every action creates ripples of positive change.</p>

                    <div className="flex flex-wrap gap-6 justify-center mb-12">
                        <button className="btn btn-primary" style={{ padding: '1.125rem 2.5rem', fontSize: '1.125rem' }}>Join TexEvo Team</button>
                        <button className="btn btn-outline" style={{ padding: '1.125rem 2.5rem', fontSize: '1.125rem' }}>Donate Clothes</button>
                    </div>

                    <div className="card max-w-2xl mx-auto text-center">
                        <div className="flex justify-center mb-4">
                            <GiftIcon className="w-16 h-16" style={{ color: '#D88B6F' }} />
                        </div>
                        <h3 className="text-2xl font-bold mb-3" style={{ color: '#D88B6F' }}>Monthly Pop Mart Raffle</h3>
                        <p className="leading-relaxed" style={{ color: '#5A6B60' }}>
                            Every donation = one entry for our monthly Pop Mart raffle! The more you donate, the more chances you have to win exclusive merchandise and sustainable fashion items.
                        </p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer-dark py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-12 mb-12">
                        <div>
                            <h3 className="text-3xl font-bold mb-4" style={{ color: '#66BB6A' }}>TexEvo</h3>
                            <p className="italic mb-4" style={{ color: '#999' }}>Stitching Sustainability Together</p>
                            <p className="leading-relaxed" style={{ color: '#999' }}>
                                Transforming fashion's footprint through student-led innovation and community action.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-xl font-bold mb-4" style={{ color: '#D88B6F' }}>Contact</h4>
                            <div className="space-y-3" style={{ color: '#999' }}>
                                <p className="flex items-center gap-2">
                                    <EmailIcon className="w-5 h-5" />
                                    info@texevo.org
                                </p>
                                <p className="flex items-center gap-2">
                                    <PhoneIcon className="w-5 h-5" />
                                    +62 812-3456-7890
                                </p>
                                <p className="flex items-center gap-2">
                                    <LocationIcon className="w-5 h-5" />
                                    Jakarta, Indonesia
                                </p>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-xl font-bold mb-4" style={{ color: '#D88B6F' }}>Quick Links</h4>
                            <div className="space-y-2">
                                {['About Us', 'Our Impact', 'Get Involved'].map(link => (
                                    <a key={link} href="#" className="block transition-colors hover:text-emerald-400" style={{ color: '#999' }}>
                                        {link}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="border-t pt-8" style={{ borderColor: '#444' }}>
                        <div className="flex flex-wrap justify-between items-center gap-4">
                            <p className="italic" style={{ color: '#666' }}>
                                "Stitching Sustainability Together" - TexEvo 2024
                            </p>
                            <div className="flex gap-4">
                                {['facebook', 'twitter', 'instagram', 'tiktok'].map((platform, i) => (
                                    <button key={i} className="w-12 h-12 rounded-full flex items-center justify-center transform hover:scale-110 transition-all shadow-depth-1" style={{ background: '#2D7A5F' }}>
                                        <SocialIcon platform={platform} className="w-6 h-6 text-white" />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default TexEvoWebsite;
