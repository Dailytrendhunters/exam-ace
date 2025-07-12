'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
    Menu, 
    Twitter, 
    Linkedin, 
    Github, 
    ChevronDown, 
    BookOpenCheck, 
    BrainCircuit, 
    Users, 
    Check 
} from 'lucide-react';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header id="header" className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/70 backdrop-blur-sm' : ''}`}>
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <Link href="/" className="text-2xl font-bold text-white">
                        <span className="text-yellow-400">Flowing</span> State
                    </Link>
                    <nav className="hidden md:flex items-center space-x-8">
                        <Link href="#features" className="text-gray-300 hover:text-white transition">Features</Link>
                        <Link href="#testimonials" className="text-gray-300 hover:text-white transition">Testimonials</Link>
                        <Link href="#pricing" className="text-gray-300 hover:text-white transition">Pricing</Link>
                        <Link href="#faq" className="text-gray-300 hover:text-white transition">FAQ</Link>
                    </nav>
                    <div className="flex items-center space-x-4">
                        <Link href="/dashboard" className="hidden sm:block text-gray-300 hover:text-white transition">Log In</Link>
                        <Link href="/dashboard" className="bg-yellow-500 text-gray-900 px-5 py-2 rounded-full font-semibold hover:bg-yellow-600 transition-all duration-300 ease-in-out hover:transform hover:-translate-y-0.5 hover:shadow-lg">Get Started</Link>
                    </div>
                    <button onClick={() => setMenuOpen(!menuOpen)} id="mobile-menu-button" className="md:hidden text-gray-300 focus:outline-none">
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
                {menuOpen && (
                    <div id="mobile-menu" className="md:hidden mt-4 bg-gray-900/70 backdrop-blur-sm p-4 rounded-lg">
                        <nav className="flex flex-col space-y-4">
                            <Link href="#features" className="text-gray-300 hover:text-white transition" onClick={() => setMenuOpen(false)}>Features</Link>
                            <Link href="#testimonials" className="text-gray-300 hover:text-white transition" onClick={() => setMenuOpen(false)}>Testimonials</Link>
                            <Link href="#pricing" className="text-gray-300 hover:text-white transition" onClick={() => setMenuOpen(false)}>Pricing</Link>
                            <Link href="#faq" className="text-gray-300 hover:text-white transition" onClick={() => setMenuOpen(false)}>FAQ</Link>
                            <Link href="/dashboard" className="text-gray-300 hover:text-white transition" onClick={() => setMenuOpen(false)}>Log In</Link>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}

const FAQItem = ({ question, children }: { question: string, children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="rounded-lg bg-white/5 border border-white/10 transition-all duration-300">
            <button
                className="w-full flex justify-between items-center text-left p-6"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-lg font-semibold text-white">{question}</span>
                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <div
                className="overflow-hidden transition-[max-height] duration-500 ease-in-out"
                style={{ maxHeight: isOpen ? '200px' : '0' }}
            >
                <div className="px-6 pb-6 text-gray-400">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default function Home() {
    return (
        <>
            <Header />

            <main className="pt-24">
                <section className="relative py-20 md:py-40">
                    <div className="relative z-10 container mx-auto px-6 text-center">
                        <div className="max-w-5xl mx-auto">
                            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
                                <span className="animated-gradient-text">Unlock Your Potential with Next-Gen Learning</span>
                            </h1>
                            <p className="text-lg md:text-xl text-gray-400 mb-10">
                                Flowing State is the all-in-one platform that adapts to your learning style. Interactive courses, expert instructors, and a vibrant community await you.
                            </p>
                            <div className="flex justify-center items-center space-x-4">
                                <Link href="/dashboard" className="bg-yellow-500 text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-600 transition-all duration-300 ease-in-out hover:transform hover:-translate-y-0.5 hover:shadow-[0_10px_20px_-10px_rgba(250,204,21,0.3)]">
                                    Get Started
                                </Link>
                                <Link href="#features" className="bg-white/10 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 border border-white/20 transition">
                                    Explore Features
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="features" className="py-20">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-white">Why Flowing State is Different</h2>
                            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">We've built a learning experience that's engaging, effective, and designed for modern learners.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            <div className="p-8 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:-translate-y-1.5 transition-all duration-300">
                                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-yellow-900/50 text-yellow-400 mb-6">
                                    <BookOpenCheck className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold mb-3 text-white">Interactive Courses</h3>
                                <p className="text-gray-400">Go beyond videos with hands-on projects, quizzes, and interactive exercises that make learning stick.</p>
                            </div>
                            <div className="p-8 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:-translate-y-1.5 transition-all duration-300">
                                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-amber-900/50 text-amber-400 mb-6">
                                    <BrainCircuit className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold mb-3 text-white">Personalized Paths</h3>
                                <p className="text-gray-400">Our AI-powered engine recommends courses and creates a custom learning path based on your goals.</p>
                            </div>
                            <div className="p-8 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:-translate-y-1.5 transition-all duration-300">
                                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-lime-900/50 text-lime-400 mb-6">
                                    <Users className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold mb-3 text-white">Expert Mentorship</h3>
                                <p className="text-gray-400">Get guidance from industry professionals and connect with mentors to accelerate your growth.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="testimonials" className="py-20">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-white">Loved by Learners Worldwide</h2>
                            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Don't just take our word for it. Here's what our students have to say.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                             <div className="p-8 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:-translate-y-1.5 transition-all duration-300">
                                <p className="text-gray-300 mb-6">"Flowing State transformed my career. The hands-on projects were a game-changer and helped me land my dream job as a software engineer."</p>
                                <div className="flex items-center">
                                    <img src="https://placehold.co/48x48/facc15/1d102f.png" alt="Sarah Adams" className="w-12 h-12 rounded-full mr-4" data-ai-hint="woman portrait" />
                                    <div>
                                        <p className="font-bold text-white">Sarah Adams</p>
                                        <p className="text-sm text-gray-400">Software Engineer</p>
                                    </div>
                                </div>
                            </div>
                             <div className="p-8 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:-translate-y-1.5 transition-all duration-300">
                                <p className="text-gray-300 mb-6">"The quality of the instructors is top-notch. I've learned more here in 3 months than I did in 2 years of online tutorials. Highly recommended!"</p>
                                <div className="flex items-center">
                                    <img src="https://placehold.co/48x48/fbbf24/1d102f.png" alt="Michael Johnson" className="w-12 h-12 rounded-full mr-4" data-ai-hint="man portrait" />
                                    <div>
                                        <p className="font-bold text-white">Michael Johnson</p>
                                        <p className="text-sm text-gray-400">Product Manager</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-8 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:-translate-y-1.5 transition-all duration-300">
                                <p className="text-gray-300 mb-6">"As a visual learner, the interactive simulations were amazing. The community is also incredibly supportive and active."</p>
                                <div className="flex items-center">
                                    <img src="https://placehold.co/48x48/fde047/1d102f.png" alt="Emily Chen" className="w-12 h-12 rounded-full mr-4" data-ai-hint="woman smiling" />
                                    <div>
                                        <p className="font-bold text-white">Emily Chen</p>
                                        <p className="text-sm text-gray-400">UX/UI Designer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="pricing" className="py-20">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-white">Flexible Plans for Everyone</h2>
                            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Choose the plan that's right for you and start your learning journey today.</p>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                            <div className="rounded-xl p-8 flex flex-col bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:-translate-y-1.5 transition-all duration-300">
                                <h3 className="text-2xl font-bold mb-2 text-white">Basic</h3>
                                <p className="text-gray-400 mb-6">For casual learners</p>
                                <p className="text-4xl font-extrabold text-white mb-4">$12 <span className="text-lg font-medium text-gray-400">/month</span></p>
                                <ul className="space-y-4 text-gray-300 mb-8 flex-grow">
                                    <li className="flex items-center"><Check className="w-5 h-5 text-yellow-400 mr-2" />Access to 20+ courses</li>
                                    <li className="flex items-center"><Check className="w-5 h-5 text-yellow-400 mr-2" />Basic quizzes</li>
                                    <li className="flex items-center"><Check className="w-5 h-5 text-yellow-400 mr-2" />Community access</li>
                                </ul>
                                <Link href="/dashboard" className="w-full text-center bg-white/10 border border-white/20 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/20 transition">Choose Plan</Link>
                            </div>
                            <div className="border-2 border-yellow-500 rounded-xl p-8 flex flex-col bg-white/5 backdrop-blur-md relative hover:bg-white/10 hover:-translate-y-1.5 transition-all duration-300">
                                <p className="absolute top-0 -translate-y-1/2 bg-yellow-600 text-white text-sm font-bold px-4 py-1 rounded-full">Most Popular</p>
                                <h3 className="text-2xl font-bold mb-2 text-white">Pro</h3>
                                <p className="text-gray-400 mb-6">For serious learners & professionals</p>
                                <p className="text-4xl font-extrabold text-white mb-4">$29 <span className="text-lg font-medium text-gray-400">/month</span></p>
                                <ul className="space-y-4 text-gray-300 mb-8 flex-grow">
                                    <li className="flex items-center"><Check className="w-5 h-5 text-yellow-400 mr-2" />Unlimited course access</li>
                                    <li className="flex items-center"><Check className="w-5 h-5 text-yellow-400 mr-2" />Interactive projects</li>
                                    <li className="flex items-center"><Check className="w-5 h-5 text-yellow-400 mr-2" />Personalized learning paths</li>
                                    <li className="flex items-center"><Check className="w-5 h-5 text-yellow-400 mr-2" />Expert mentorship</li>
                                    <li className="flex items-center"><Check className="w-5 h-5 text-yellow-400 mr-2" />Course certificates</li>
                                </ul>
                                <Link href="/dashboard" className="w-full text-center bg-yellow-500 text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-yellow-600 transition-all duration-300 ease-in-out hover:transform hover:-translate-y-0.5 hover:shadow-[0_10px_20px_-10px_rgba(250,204,21,0.3)]">Choose Plan</Link>
                            </div>
                            <div className="rounded-xl p-8 flex flex-col bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:-translate-y-1.5 transition-all duration-300">
                                <h3 className="text-2xl font-bold mb-2 text-white">Teams</h3>
                                <p className="text-gray-400 mb-6">For organizations</p>
                                <p className="text-4xl font-extrabold text-white mb-4">Contact Us</p>
                                <ul className="space-y-4 text-gray-300 mb-8 flex-grow">
                                    <li className="flex items-center"><Check className="w-5 h-5 text-yellow-400 mr-2" />All Pro features</li>
                                    <li className="flex items-center"><Check className="w-5 h-5 text-yellow-400 mr-2" />Team management dashboard</li>
                                    <li className="flex items-center"><Check className="w-5 h-5 text-yellow-400 mr-2" />Usage analytics</li>
                                    <li className="flex items-center"><Check className="w-5 h-5 text-yellow-400 mr-2" />Dedicated support</li>
                                </ul>
                                <Link href="#" className="w-full text-center bg-white/10 border border-white/20 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/20 transition">Contact Sales</Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="faq" className="py-20">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-white">Frequently Asked Questions</h2>
                            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Have questions? We've got answers. If you can't find what you're looking for, feel free to contact us.</p>
                        </div>
                        <div className="max-w-3xl mx-auto">
                            <div className="space-y-4">
                                <FAQItem question="Can I switch plans later?">
                                    <p>Absolutely! You can upgrade, downgrade, or cancel your plan at any time from your account dashboard. The changes will be prorated and applied to your next billing cycle.</p>
                                </FAQItem>
                                <FAQItem question="Do you offer certificates upon completion?">
                                    <p>Yes, for all courses completed under the Pro plan, you will receive a verifiable certificate that you can share on your LinkedIn profile or resume to showcase your new skills.</p>
                                </FAQItem>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="bg-gray-900/50 mt-20">
                <div className="container mx-auto px-6 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4 text-white"><span className="text-yellow-400">Flowing</span> State</h3>
                            <p className="text-gray-400">Elevating learning through technology.</p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-white mb-4">Product</h4>
                            <ul className="space-y-2">
                                <li><Link href="#features" className="text-gray-400 hover:text-white">Features</Link></li>
                                <li><Link href="#pricing" className="text-gray-400 hover:text-white">Pricing</Link></li>
                                <li><Link href="#testimonials" className="text-gray-400 hover:text-white">Testimonials</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-white mb-4">Company</h4>
                            <ul className="space-y-2">
                                <li><Link href="#" className="text-gray-400 hover:text-white">About Us</Link></li>
                                <li><Link href="#" className="text-gray-400 hover:text-white">Careers</Link></li>
                                <li><Link href="#" className="text-gray-400 hover:text-white">Contact</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-white mb-4">Follow Us</h4>
                            <div className="flex space-x-4">
                                <Link href="#" className="text-gray-400 hover:text-white"><Twitter /></Link>
                                <Link href="#" className="text-gray-400 hover:text-white"><Linkedin /></Link>
                                <Link href="#" className="text-gray-400 hover:text-white"><Github /></Link>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center">
                        <p className="text-gray-500">&copy; 2024 Flowing State. All rights reserved.</p>
                        <div className="flex space-x-4 mt-4 sm:mt-0">
                            <Link href="#" className="text-gray-500 hover:text-white text-sm">Privacy Policy</Link>
                            <Link href="#" className="text-gray-500 hover:text-white text-sm">Terms of Service</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
