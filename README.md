<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AdmissionBooster - Boost Your Admission Success</title>
    <meta name="description" content="Transparent, expert guidance for Indian students studying abroad. Free university selection, commission-supported applications, and comprehensive consulting services.">
    <style>
        /* Reset and Base Styles */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        html {
            scroll-behavior: smooth;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            line-height: 1.6;
            color: #333;
            background: #fff;
        }

        /* Utility Classes */
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 1rem;
        }

        .section {
            padding: 4rem 0;
        }

        .section-alt {
            background: #f8fafc;
        }

        .grid {
            display: grid;
            gap: 2rem;
        }

        .grid-2 { grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); }
        .grid-3 { grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); }
        .grid-4 { grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); }

        .btn {
            display: inline-block;
            padding: 0.75rem 1.5rem;
            border: none;
            border-radius: 6px;
            text-decoration: none;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            text-align: center;
        }

        .btn-primary {
            background: #0ea5e9;
            color: white;
        }

        .btn-primary:hover {
            background: #0284c7;
            transform: translateY(-1px);
        }

        .btn-secondary {
            background: transparent;
            color: #0ea5e9;
            border: 2px solid #0ea5e9;
        }

        .btn-secondary:hover {
            background: #0ea5e9;
            color: white;
        }

        .text-center { text-align: center; }
        .text-blue { color: #0ea5e9; }
        .text-gray { color: #64748b; }
        .mb-1 { margin-bottom: 0.5rem; }
        .mb-2 { margin-bottom: 1rem; }
        .mb-3 { margin-bottom: 1.5rem; }
        .mb-4 { margin-bottom: 2rem; }
        .mt-2 { margin-top: 1rem; }

        /* Header */
        .header {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            z-index: 1000;
            padding: 1rem 0;
            border-bottom: 1px solid #e2e8f0;
        }

        .nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo {
            font-size: 1.5rem;
            font-weight: 700;
            color: #0ea5e9;
            text-decoration: none;
        }

        .nav-links {
            display: flex;
            list-style: none;
            gap: 2rem;
            align-items: center;
        }

        .nav-link {
            color: #333;
            text-decoration: none;
            font-weight: 500;
            transition: color 0.3s ease;
        }

        .nav-link:hover,
        .nav-link.active {
            color: #0ea5e9;
        }

        .mobile-menu-btn {
            display: none;
            background: none;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
        }

        @media (max-width: 768px) {
            .nav-links {
                position: fixed;
                top: 100%;
                left: 0;
                right: 0;
                background: white;
                flex-direction: column;
                padding: 2rem;
                gap: 1rem;
                border-top: 1px solid #e2e8f0;
                transform: translateY(-100vh);
                transition: transform 0.3s ease;
            }

            .nav-links.active {
                transform: translateY(0);
            }

            .mobile-menu-btn {
                display: block;
            }
        }

        /* Hero Section */
        .hero {
            padding: 8rem 0 4rem;
            background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
        }

        .hero h1 {
            font-size: 3rem;
            font-weight: 800;
            margin-bottom: 1rem;
            color: #1e293b;
        }

        .hero p {
            font-size: 1.25rem;
            color: #64748b;
            margin-bottom: 2rem;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
        }

        .hero-cta {
            display: flex;
            gap: 1rem;
            justify-content: center;
            flex-wrap: wrap;
        }

        @media (max-width: 768px) {
            .hero h1 {
                font-size: 2rem;
            }
            .hero p {
                font-size: 1.1rem;
            }
            .hero-cta {
                flex-direction: column;
                align-items: center;
            }
        }

        /* Stats Section */
        .stats {
            background: white;
            border-radius: 12px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            margin: -2rem auto 0;
            max-width: 800px;
            padding: 2rem;
        }

        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 2rem;
            text-align: center;
        }

        .stat-number {
            font-size: 2rem;
            font-weight: 800;
            color: #0ea5e9;
            display: block;
        }

        .stat-label {
            color: #64748b;
            font-size: 0.9rem;
        }

        /* Card Component */
        .card {
            background: white;
            border-radius: 12px;
            padding: 1.5rem;
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .card:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }

        .card h3 {
            color: #1e293b;
            margin-bottom: 0.5rem;
            font-size: 1.25rem;
        }

        .card p {
            color: #64748b;
            margin-bottom: 1rem;
        }

        .card ul {
            list-style: none;
        }

        .card li {
            color: #64748b;
            padding: 0.25rem 0;
            padding-left: 1.5rem;
            position: relative;
        }

        .card li:before {
            content: "✓";
            position: absolute;
            left: 0;
            color: #10b981;
            font-weight: bold;
        }

        /* Service Cards */
        .service-card {
            border: 2px solid #e2e8f0;
            transition: border-color 0.3s ease;
        }

        .service-card:hover {
            border-color: #0ea5e9;
        }

        .service-price {
            font-size: 1.25rem;
            font-weight: 700;
            color: #0ea5e9;
            margin: 1rem 0;
        }

        .price-free { color: #10b981; }
        .price-commission { color: #f59e0b; }

        /* Testimonials */
        .testimonial {
            background: #f8fafc;
            border-left: 4px solid #0ea5e9;
            padding: 1.5rem;
            border-radius: 0 8px 8px 0;
        }

        .testimonial-quote {
            font-style: italic;
            margin-bottom: 1rem;
            color: #334155;
        }

        .testimonial-author {
            font-weight: 600;
            color: #0ea5e9;
        }

        /* Commission Transparency */
        .transparency {
            background: #ecfdf5;
            border: 2px solid #10b981;
            border-radius: 12px;
            padding: 2rem;
        }

        .transparency h3 {
            color: #10b981;
            margin-bottom: 1rem;
        }

        .transparency ul {
            list-style: none;
        }

        .transparency li {
            padding: 0.5rem 0;
            padding-left: 2rem;
            position: relative;
            color: #065f46;
        }

        .transparency li:before {
            content: "💡";
            position: absolute;
            left: 0;
        }

        /* Country Details */
        .country-detail {
            border: 1px solid #e2e8f0;
            border-radius: 8px;
            overflow: hidden;
        }

        .country-header {
            background: #0ea5e9;
            color: white;
            padding: 1rem;
            font-weight: 600;
        }

        .country-content {
            padding: 1.5rem;
        }

        .country-content h4 {
            color: #1e293b;
            margin: 1rem 0 0.5rem;
        }

        /* Forum UI */
        .forum-category {
            background: white;
            border: 1px solid #e2e8f0;
            border-radius: 8px;
            margin-bottom: 1rem;
        }

        .forum-header {
            background: #f8fafc;
            padding: 1rem;
            font-weight: 600;
            border-bottom: 1px solid #e2e8f0;
        }

        .forum-thread {
            padding: 0.75rem 1rem;
            border-bottom: 1px solid #f1f5f9;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .thread-title {
            color: #0ea5e9;
            text-decoration: none;
            font-weight: 500;
        }

        .thread-meta {
            font-size: 0.875rem;
            color: #64748b;
        }

        /* Forms */
        .form-group {
            margin-bottom: 1rem;
        }

        .form-label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: 500;
            color: #374151;
        }

        .form-input,
        .form-select,
        .form-textarea {
            width: 100%;
            padding: 0.75rem;
            border: 1px solid #d1d5db;
            border-radius: 6px;
            font-size: 1rem;
            transition: border-color 0.3s ease;
        }

        .form-input:focus,
        .form-select:focus,
        .form-textarea:focus {
            outline: none;
            border-color: #0ea5e9;
            box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.1);
        }

        .form-error {
            color: #ef4444;
            font-size: 0.875rem;
            margin-top: 0.25rem;
        }

        .form-success {
            background: #f0fdf4;
            border: 1px solid #bbf7d0;
            color: #166534;
            padding: 1rem;
            border-radius: 6px;
            margin-bottom: 1rem;
        }

        /* Modal */
        .modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            z-index: 2000;
            align-items: center;
            justify-content: center;
            padding: 1rem;
        }

        .modal.active {
            display: flex;
        }

        .modal-content {
            background: white;
            border-radius: 12px;
            max-width: 500px;
            width: 100%;
            max-height: 90vh;
            overflow-y: auto;
            position: relative;
        }

        .modal-header {
            padding: 1.5rem;
            border-bottom: 1px solid #e2e8f0;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .modal-title {
            font-size: 1.25rem;
            font-weight: 600;
            color: #1e293b;
        }

        .modal-close {
            background: none;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            color: #64748b;
        }

        .modal-body {
            padding: 1.5rem;
        }

        /* Footer */
        .footer {
            background: #1e293b;
            color: white;
            padding: 3rem 0 1rem;
        }

        .footer-content {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            margin-bottom: 2rem;
        }

        .footer h4 {
            margin-bottom: 1rem;
            color: #0ea5e9;
        }

        .footer a {
            color: #cbd5e1;
            text-decoration: none;
            display: block;
            padding: 0.25rem 0;
        }

        .footer a:hover {
            color: #0ea5e9;
        }

        .footer-bottom {
            border-top: 1px solid #334155;
            padding-top: 1rem;
            text-align: center;
            color: #94a3b8;
        }

        /* Calculator */
        .calculator-result {
            background: #f0f9ff;
            border: 2px solid #0ea5e9;
            border-radius: 8px;
            padding: 1.5rem;
            margin-top: 1rem;
        }

        .cost-breakdown {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
            margin-top: 1rem;
        }

        .cost-item {
            background: white;
            padding: 1rem;
            border-radius: 6px;
            text-align: center;
        }

        .cost-amount {
            font-size: 1.5rem;
            font-weight: 700;
            color: #0ea5e9;
        }

        .cost-label {
            color: #64748b;
            font-size: 0.9rem;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            .section {
                padding: 2rem 0;
            }

            .grid-2,
            .grid-3,
            .grid-4 {
                grid-template-columns: 1fr;
            }

            .stats {
                margin: -1rem 1rem 0;
            }

            .hero-cta .btn {
                width: 100%;
                max-width: 250px;
            }
        }

        /* Loading and Animation */
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .animate-fade-in {
            animation: fadeInUp 0.6s ease-out;
        }

        /* Accessibility */
        .sr-only {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border: 0;
        }

        /* Focus styles */
        .btn:focus,
        .form-input:focus,
        .form-select:focus,
        .form-textarea:focus,
        .nav-link:focus {
            outline: 2px solid #0ea5e9;
            outline-offset: 2px;
        }
    </style>
</head>
<body>
    <!-- Header -->
    <header class="header" role="banner">
        <nav class="nav container" role="navigation" aria-label="Main navigation">
            <a href="#home" class="logo">AdmissionBooster</a>
            <button class="mobile-menu-btn" id="mobileMenuBtn" aria-label="Toggle navigation menu">
                ☰
            </button>
            <ul class="nav-links" id="navLinks">
                <li><a href="#home" class="nav-link">Home</a></li>
                <li><a href="#about" class="nav-link">About</a></li>
                <li><a href="#services" class="nav-link">Services</a></li>
                <li><a href="#countries" class="nav-link">Countries</a></li>
                <li><a href="#community" class="nav-link">Community</a></li>
                <li><a href="#resources" class="nav-link">Resources</a></li>
                <li><a href="#contact" class="nav-link">Contact</a></li>
                <li><button class="btn btn-primary" id="consultationBtn">Free Consultation</button></li>
            </ul>
        </nav>
    </header>

    <main>
        <!-- Hero Section -->
        <section id="home" class="hero text-center">
            <div class="container">
                <h1>Boost Your Admission Success</h1>
                <p>Transparent, expert guidance for Indian students planning to study abroad. Get personalized recommendations, comprehensive support, and join our thriving community.</p>
                <div class="hero-cta">
                    <button class="btn btn-primary" id="heroConsultationBtn">Book Free Consultation</button>
                    <a href="#countries" class="btn btn-secondary">Explore Countries</a>
                </div>
            </div>
            
            <!-- Trust Stats -->
            <div class="container">
                <div class="stats">
                    <div class="stats-grid">
                        <div>
                            <span class="stat-number">2,500+</span>
                            <span class="stat-label">Students Placed</span>
                        </div>
                        <div>
                            <span class="stat-number">200+</span>
                            <span class="stat-label">Partner Universities</span>
                        </div>
                        <div>
                            <span class="stat-number">94%</span>
                            <span class="stat-label">Success Rate</span>
                        </div>
                        <div>
                            <span class="stat-number">15+</span>
                            <span class="stat-label">Countries Covered</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Featured Countries -->
        <section class="section">
            <div class="container">
                <h2 class="text-center mb-4">Popular Study Destinations</h2>
                <div class="grid grid-3">
                    <div class="card">
                        <h3>🇨🇦 Canada</h3>
                        <ul>
                            <li>Post-study work opportunities</li>
                            <li>Clear PR pathway</li>
                            <li>Large Indian community</li>
                        </ul>
                    </div>
                    <div class="card">
                        <h3>🇺🇸 United States</h3>
                        <ul>
                            <li>Top-ranked universities</li>
                            <li>Research opportunities</li>
                            <li>Diverse program options</li>
                        </ul>
                    </div>
                    <div class="card">
                        <h3>🇬🇧 United Kingdom</h3>
                        <ul>
                            <li>1-year master's programs</li>
                            <li>Global recognition</li>
                            <li>PSW visa available</li>
                        </ul>
                    </div>
                    <div class="card">
                        <h3>🇩🇪 Germany</h3>
                        <ul>
                            <li>Low or no tuition fees</li>
                            <li>English-taught programs</li>
                            <li>Strong research focus</li>
                        </ul>
                    </div>
                    <div class="card">
                        <h3>🇦🇺 Australia</h3>
                        <ul>
                            <li>High quality education</li>
                            <li>Work opportunities</li>
                            <li>Multicultural environment</li>
                        </ul>
                    </div>
                    <div class="card">
                        <h3>🇳🇱 Netherlands</h3>
                        <ul>
                            <li>English-taught courses</li>
                            <li>Innovation hub</li>
                            <li>Scholarship opportunities</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <!-- Services -->
        <section id="services" class="section section-alt">
            <div class="container">
                <h2 class="text-center mb-4">Our Services</h2>
                <div class="grid grid-2">
                    <div class="service-card card">
                        <h3>University Selection</h3>
                        <div class="service-price price-free">FREE</div>
                        <p>Personalized recommendations based on your academic profile, preferences, and career goals.</p>
                        <ul>
                            <li>Profile assessment</li>
                            <li>University matching</li>
                            <li>Program recommendations</li>
                        </ul>
                    </div>
                    <div class="service-card card">
                        <h3>Application Guidance</h3>
                        <div class="service-price price-commission">Commission-supported</div>
                        <p>Complete application support for partner universities with no upfront cost to you.</p>
                        <ul>
                            <li>Application review</li>
                            <li>Document preparation</li>
                            <li>Submission support</li>
                        </ul>
                    </div>
                    <div class="service-card card">
                        <h3>Premium Consulting</h3>
                        <div class="service-price">₹25,000 – ₹75,000</div>
                        <p>Comprehensive end-to-end support including essays, SOPs, and interview preparation.</p>
                        <ul>
                            <li>Essay writing guidance</li>
                            <li>SOP development</li>
                            <li>Interview preparation</li>
                            <li>End-to-end support</li>
                        </ul>
                    </div>
                    <div class="service-card card">
                        <h3>Visa Support</h3>
                        <div class="service-price">₹10,000</div>
                        <p>Documentation and application assistance for student visa requirements.</p>
                        <ul>
                            <li>Document checklist</li>
                            <li>Application review</li>
                            <li>Interview preparation</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <!-- Why AdmissionBooster -->
        <section id="about" class="section">
            <div class="container">
                <h2 class="text-center mb-4">Why Choose AdmissionBooster?</h2>
                <div class="grid grid-2">
                    <div>
                        <div class="card">
                            <h3>🔍 Complete Transparency</h3>
                            <p>All fees and commission structures are disclosed upfront. No hidden costs or surprise charges.</p>
                        </div>
                    </div>
                    <div>
                        <div class="card">
                            <h3>👥 Community-Driven</h3>
                            <p>Connect with thousands of students, share experiences, and get peer support throughout your journey.</p>
                        </div>
                    </div>
                    <div>
                        <div class="card">
                            <h3>🎯 Student-First Approach</h3>
                            <p>Our recommendations prioritize your academic fit and career goals, not just commission potential.</p>
                        </div>
                    </div>
                    <div>
                        <div class="card">
                            <h3>📋 End-to-End Guidance</h3>
                            <p>From university selection to visa approval, we support you at every step of your study abroad journey.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Testimonials -->
        <section class="section section-alt">
            <div class="container">
                <h2 class="text-center mb-4">What Students Say</h2>
                <div class="grid grid-3">
                    <div class="testimonial">
                        <p class="testimonial-quote">"AdmissionBooster's transparency helped me make informed decisions. Got into University of Toronto with their guidance!"</p>
                        <div class="testimonial-author">- Rahul S., Canada</div>
                    </div>
                    <div class="testimonial">
                        <p class="testimonial-quote">"Amazing free guidance for Germany applications. No hidden costs, just genuine support throughout the process."</p>
                        <div class="testimonial-author">- Priya K., Germany</div>
                    </div>
                    <div class="testimonial">
                        <p class="testimonial-quote">"The community forum made the entire process feel less overwhelming. Great support from both counselors and peers."</p>
                        <div class="testimonial-author">- Arjun M., UK</div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Commission Transparency -->
        <section class="section">
            <div class="container">
                <div class="transparency">
                    <h3>💡 Our Commission Model - Fully Transparent</h3>
                    <p class="mb-3">We believe in complete transparency about how we operate:</p>
                    <ul>
                        <li>We earn 10-15% commission from partner universities only when you enroll</li>
                        <li>This keeps our basic services completely free for students</li>
                        <li>All fees are disclosed upfront with no surprises or hidden costs</li>
                        <li>Our recommendations prioritize your academic fit over commission potential</li>
                        <li>You get the same university fees whether you apply through us or directly</li>
                    </ul>
                </div>
            </div>
        </section>

        <!-- Countries Detail -->
        <section id="countries" class="section section-alt">
            <div class="container">
                <h2 class="text-center mb-4">Country Guides</h2>
                <div class="grid grid-2">
                    <div class="country-detail">
                        <div class="country-header">🇨🇦 Canada</div>
                        <div class="country-content">
                            <p><strong>Why Canada:</strong> Excellent post-study work opportunities and clear pathway to permanent residency.</p>
                            
                            <h4>Popular Universities</h4>
                            <p>University of Toronto, University of British Columbia, McGill University, University of Waterloo</p>
                            
                            <h4>Cost Range</h4>
                            <p><strong>Tuition:</strong> CAD 15,000-50,000/year<br>
                            <strong>Living:</strong> CAD 12,000-18,000/year</p>
                            
                            <h4>Post-Study Work</h4>
                            <p>Up to 3 years PGWP, pathway to PR through Express Entry system</p>
                        </div>
                    </div>
                    
                    <div class="country-detail">
                        <div class="country-header">🇺🇸 United States</div>
                        <div class="country-content">
                            <p><strong>Why USA:</strong> Home to world's top universities with unparalleled research opportunities.</p>
                            
                            <h4>Popular Universities</h4>
                            <p>Harvard, MIT, Stanford, UC Berkeley, NYU, Arizona State University</p>
                            
                            <h4>Cost Range</h4>
                            <p><strong>Tuition:</strong> USD 25,000-70,000/year<br>
                            <strong>Living:</strong> USD 15,000-25,000/year</p>
                            
                            <h4>Work Opportunities</h4>
                            <p>F-1 OPT (1-3 years), H-1B visa potential for longer stay</p>
                        </div>
                    </div>
                    
                    <div class="country-detail">
                        <div class="country-header">🇬🇧 United Kingdom</div>
                        <div class="country-content">
                            <p><strong>Why UK:</strong> World-class education with shorter program duration and PSW visa.</p>
                            
                            <h4>Popular Universities</h4>
                            <p>Oxford, Cambridge, Imperial College, UCL, King's College London</p>
                            
                            <h4>Cost Range</h4>
                            <p><strong>Tuition:</strong> GBP 15,000-45,000/year<br>
                            <strong>Living:</strong> GBP 12,000-18,000/year</p>
                            
                            <h4>Post-Study Work</h4>
                            <p>2-year PSW visa for graduates, pathway to skilled worker visa</p>
                        </div>
                    </div>
                    
                    <div class="country-detail">
                        <div class="country-header">🇩🇪 Germany</div>
                        <div class="country-content">
                            <p><strong>Why Germany:</strong> Low tuition costs, strong economy, and excellent research opportunities.</p>
                            
                            <h4>Popular Universities</h4>
                            <p>TU Munich, RWTH Aachen, University of Stuttgart, Frankfurt School</p>
                            
                            <h4>Cost Range</h4>
                            <p><strong>Tuition:</strong> EUR 0-20,000/year<br>
                            <strong>Living:</strong> EUR 8,000-12,000/year</p>
                            
                            <h4>Work Opportunities</h4>
                            <p>18-month job search visa, Blue Card for skilled professionals</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Community Forum -->
        <section id="community" class="section">
            <div class="container">
                <h2 class="text-center mb-4">Community Forum</h2>
                <p class="text-center mb-4 text-gray">Connect with fellow students, share experiences, and get answers to your questions</p>
                
                <div class="grid grid-2">
                    <div>
                        <div class="forum-category">
                            <div class="forum-header">🇨🇦 Canada</div>
                            <div class="forum-thread">
                                <a href="#" class="thread-title">University of Toronto vs UBC - Which is better for CS?</a>
                                <div class="thread-meta">23 replies</div>
                            </div>
                            <div class="forum-thread">
                                <a href="#" class="thread-title">PGWP Extension Updates 2025</a>
                                <div class="thread-meta">45 replies</div>
                            </div>
                            <div class="forum-thread">
                                <a href="#" class="thread-title">Cost of living in Toronto vs Vancouver</a>
                                <div class="thread-meta">12 replies</div>
                            </div>
                        </div>
                        
                        <div class="forum-category">
                            <div class="forum-header">🇺🇸 United States</div>
                            <div class="forum-thread">
                                <a href="#" class="thread-title">GRE Score Requirements for Top Universities</a>
                                <div class="thread-meta">67 replies</div>
                            </div>
                            <div class="forum-thread">
                                <a href="#" class="thread-title">F-1 to H-1B Success Stories</a>
                                <div class="thread-meta">89 replies</div>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <div class="forum-category">
                            <div class="forum-header">🇬🇧 United Kingdom</div>
                            <div class="forum-thread">
                                <a href="#" class="thread-title">PSW Visa Application Process 2025</a>
                                <div class="thread-meta">34 replies</div>
                            </div>
                            <div class="forum-thread">
                                <a href="#" class="thread-title">Best cities for Indian students in UK</a>
                                <div class="thread-meta">56 replies</div>
                            </div>
                        </div>
                        
                        <div class="forum-category">
                            <div class="forum-header">🇩🇪 Germany</div>
                            <div class="forum-thread">
                                <a href="#" class="thread-title">Learning German while studying - Tips & Resources</a>
                                <div class="thread-meta">78 replies</div>
                            </div>
                            <div class="forum-thread">
                                <a href="#" class="thread-title">Free universities vs private - Comparison</a>
                                <div class="thread-meta">29 replies</div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="text-center mt-4">
                    <button class="btn btn-primary">Create New Thread</button>
                    <button class="btn btn-secondary">Join Community</button>
                </div>
            </div>
        </section>

        <!-- Resources -->
        <section id="resources" class="section section-alt">
            <div class="container">
                <h2 class="text-center mb-4">Free Resources</h2>
                
                <div class="mb-4">
                    <h3 class="mb-3">📚 Guides & Checklists</h3>
                    <div class="grid grid-4">
                        <a href="#" class="card">
                            <h4>Application Checklist</h4>
                            <p class="text-gray">Complete step-by-step application guide</p>
                        </a>
                        <a href="#" class="card">
                            <h4>SOP Writing Guide</h4>
                            <p class="text-gray">Craft compelling statements of purpose</p>
                        </a>
                        <a href="#" class="card">
                            <h4>LOR Template</h4>
                            <p class="text-gray">Letter of recommendation guidelines</p>
                        </a>
                        <a href="#" class="card">
                            <h4>Visa Documents</h4>
                            <p class="text-gray">Country-wise visa requirements</p>
                        </a>
                    </div>
                </div>
                
                <div class="mb-4">
                    <h3 class="mb-3">📖 Latest Blog Posts</h3>
                    <div class="grid grid-3">
                        <article class="card">
                            <h4>Top 10 Universities in Canada for Indian Students 2025</h4>
                            <p class="text-gray">Updated rankings and admission requirements...</p>
                            <small class="text-gray">Posted 2 days ago</small>
                        </article>
                        <article class="card">
                            <h4>Germany Study Visa Success Rate Increases</h4>
                            <p class="text-gray">Latest updates on German student visa approvals...</p>
                            <small class="text-gray">Posted 5 days ago</small>
                        </article>
                        <article class="card">
                            <h4>UK PSW Visa: Everything You Need to Know</h4>
                            <p class="text-gray">Complete guide to Post-Study Work visa...</p>
                            <small class="text-gray">Posted 1 week ago</small>
                        </article>
                    </div>
                </div>
                
                <div>
                    <h3 class="mb-3">🛠️ Tools</h3>
                    <div class="grid grid-3">
                        <div class="card">
                            <h4>Cost Calculator</h4>
                            <p class="text-gray">Estimate your study abroad expenses</p>
                            <button class="btn btn-primary mt-2" id="calculatorBtn">Launch Calculator</button>
                        </div>
                        <div class="card">
                            <h4>University Matcher</h4>
                            <p class="text-gray">Find universities that match your profile</p>
                            <button class="btn btn-secondary mt-2">Coming Soon</button>
                        </div>
                        <div class="card">
                            <h4>Document Tracker</h4>
                            <p class="text-gray">Track your application documents</p>
                            <button class="btn btn-secondary mt-2">Coming Soon</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Contact -->
        <section id="contact" class="section">
            <div class="container">
                <h2 class="text-center mb-4">Get In Touch</h2>
                
                <div class="grid grid-2">
                    <div>
                        <h3 class="mb-3">Contact Information</h3>
                        <div class="mb-4">
                            <p><strong>📧 Email:</strong> info@admissionbooster.com</p>
                            <p><strong>📱 WhatsApp:</strong> +91 9876543210</p>
                            <p><strong>📞 Phone:</strong> +91 11-12345678</p>
                            <p><strong>🏢 Office:</strong> Delhi, Mumbai, Bangalore</p>
                        </div>
                        
                        <h4 class="mb-2">Office Hours</h4>
                        <p class="text-gray mb-4">Monday - Saturday: 9:00 AM - 7:00 PM IST<br>Sunday: 10:00 AM - 4:00 PM IST</p>
                        
                        <h4 class="mb-2">Follow Us</h4>
                        <div style="display: flex; gap: 1rem;">
                            <a href="#" class="btn btn-secondary">Facebook</a>
                            <a href="#" class="btn btn-secondary">Instagram</a>
                            <a href="#" class="btn btn-secondary">LinkedIn</a>
                        </div>
                    </div>
                    
                    <div>
                        <h3 class="mb-3">Request Free Consultation</h3>
                        <form id="contactForm">
                            <div class="form-group">
                                <label for="name" class="form-label">Full Name *</label>
                                <input type="text" id="name" name="name" class="form-input" required>
                                <div class="form-error" id="nameError"></div>
                            </div>
                            
                            <div class="form-group">
                                <label for="email" class="form-label">Email Address *</label>
                                <input type="email" id="email" name="email" class="form-input" required>
                                <div class="form-error" id="emailError"></div>
                            </div>
                            
                            <div class="form-group">
                                <label for="phone" class="form-label">Phone Number *</label>
                                <input type="tel" id="phone" name="phone" class="form-input" required>
                                <div class="form-error" id="phoneError"></div>
                            </div>
                            
                            <div class="form-group">
                                <label for="country" class="form-label">Target Country</label>
                                <select id="country" name="country" class="form-select">
                                    <option value="">Select Country</option>
                                    <option value="canada">Canada</option>
                                    <option value="usa">United States</option>
                                    <option value="uk">United Kingdom</option>
                                    <option value="germany">Germany</option>
                                    <option value="australia">Australia</option>
                                    <option value="netherlands">Netherlands</option>
                                </select>
                            </div>
                            
                            <div class="form-group">
                                <label for="intake" class="form-label">Intake</label>
                                <select id="intake" name="intake" class="form-select">
                                    <option value="">Select Intake</option>
                                    <option value="fall2025">Fall 2025</option>
                                    <option value="spring2026">Spring 2026</option>
                                    <option value="fall2026">Fall 2026</option>
                                </select>
                            </div>
                            
                            <div class="form-group">
                                <label for="message" class="form-label">Additional Notes</label>
                                <textarea id="message" name="message" class="form-textarea" rows="4"></textarea>
                            </div>
                            
                            <button type="submit" class="btn btn-primary" style="width: 100%;">Send Request</button>
                        </form>
                        
                        <div id="formSuccess" class="form-success" style="display: none;">
                            Thank you for your inquiry! We'll get back to you within 24 hours.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div>
                    <h4>AdmissionBooster</h4>
                    <p style="color: #cbd5e1;">Empowering Indian students with transparent, expert guidance for studying abroad.</p>
                </div>
                <div>
                    <h4>Quick Links</h4>
                    <a href="#about">About Us</a>
                    <a href="#services">Services</a>
                    <a href="#countries">Countries</a>
                    <a href="#resources">Resources</a>
                </div>
                <div>
                    <h4>Countries</h4>
                    <a href="#countries">Canada</a>
                    <a href="#countries">United States</a>
                    <a href="#countries">United Kingdom</a>
                    <a href="#countries">Germany</a>
                </div>
                <div>
                    <h4>Support</h4>
                    <a href="#contact">Contact Us</a>
                    <a href="#community">Community</a>
                    <a href="#">FAQ</a>
                    <a href="#">Help Center</a>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2025 AdmissionBooster. All rights reserved. | <a href="#" style="color: #94a3b8;">Privacy Policy</a> | <a href="#" style="color: #94a3b8;">Terms of Service</a></p>
            </div>
        </div>
    </footer>

    <!-- Consultation Modal -->
    <div id="consultationModal" class="modal" role="dialog" aria-labelledby="consultationTitle" aria-hidden="true">
        <div class="modal-content">
            <div class="modal-header">
                <h2 id="consultationTitle" class="modal-title">Free Consultation Request</h2>
                <button class="modal-close" id="consultationClose" aria-label="Close modal">&times;</button>
            </div>
            <div class="modal-body">
                <form id="consultationForm">
                    <div class="form-group">
                        <label for="modalName" class="form-label">Full Name *</label>
                        <input type="text" id="modalName" name="name" class="form-input" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="modalEmail" class="form-label">Email Address *</label>
                        <input type="email" id="modalEmail" name="email" class="form-input" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="modalPhone" class="form-label">Phone Number *</label>
                        <input type="tel" id="modalPhone" name="phone" class="form-input" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="modalCountry" class="form-label">Target Country</label>
                        <select id="modalCountry" name="country" class="form-select">
                            <option value="">Select Country</option>
                            <option value="canada">Canada</option>
                            <option value="usa">United States</option>
                            <option value="uk">United Kingdom</option>
                            <option value="germany">Germany</option>
                            <option value="australia">Australia</option>
                            <option value="netherlands">Netherlands</option>
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label for="modalIntake" class="form-label">Intake</label>
                        <select id="modalIntake" name="intake" class="form-select">
                            <option value="">Select Intake</option>
                            <option value="fall2025">Fall 2025</option>
                            <option value="spring2026">Spring 2026</option>
                            <option value="fall2026">Fall 2026</option>
                        </select>
                    </div>
                    
                    <button type="submit" class="btn btn-primary" style="width: 100%;">Request Consultation</button>
                </form>
                
                <div id="consultationSuccess" class="form-success" style="display: none;">
                    Thank you! We'll contact you within 24 hours to schedule your free consultation.
                </div>
            </div>
        </div>
    </div>

    <!-- Cost Calculator Modal -->
    <div id="calculatorModal" class="modal" role="dialog" aria-labelledby="calculatorTitle" aria-hidden="true">
        <div class="modal-content">
            <div class="modal-header">
                <h2 id="calculatorTitle" class="modal-title">Study Abroad Cost Calculator</h2>
                <button class="modal-close" id="calculatorClose" aria-label="Close modal">&times;</button>
            </div>
            <div class="modal-body">
                <form id="calculatorForm">
                    <div class="form-group">
                        <label for="calcCountry" class="form-label">Country *</label>
                        <select id="calcCountry" name="country" class="form-select" required>
                            <option value="">Select Country</option>
                            <option value="canada">Canada</option>
                            <option value="usa">United States</option>
                            <option value="uk">United Kingdom</option>
                            <option value="germany">Germany</option>
                            <option value="australia">Australia</option>
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label for="calcCity" class="form-label">City Type *</label>
                        <select id="calcCity" name="city" class="form-select" required>
                            <option value="">Select City Type</option>
                            <option value="major">Major City</option>
                            <option value="mid">Mid-size City</option>
                            <option value="small">Small City/Town</option>
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label for="calcAccommodation" class="form-label">Accommodation *</label>
                        <select id="calcAccommodation" name="accommodation" class="form-select" required>
                            <option value="">Select Accommodation</option>
                            <option value="oncampus">On-Campus Housing</option>
                            <option value="shared">Shared Apartment</option>
                            <option value="studio">Studio Apartment</option>
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label for="calcLifestyle" class="form-label">Lifestyle *</label>
                        <select id="calcLifestyle" name="lifestyle" class="form-select" required>
                            <option value="">Select Lifestyle</option>
                            <option value="budget">Budget (Minimal expenses)</option>
                            <option value="moderate">Moderate (Average expenses)</option>
                            <option value="comfortable">Comfortable (Higher expenses)</option>
                        </select>
                    </div>
                    
                    <button type="button" class="btn btn-primary" id="calculateBtn" style="width: 100%;">Calculate Costs</button>
                </form>
                
                <div id="calculatorResult" class="calculator-result" style="display: none;">
                    <h3 class="text-center mb-3">Estimated Costs</h3>
                    <div class="cost-breakdown">
                        <div class="cost-item">
                            <div class="cost-amount" id="monthlyCost">-</div>
                            <div class="cost-label">Monthly Living Cost</div>
                        </div>
                        <div class="cost-item">
                            <div class="cost-amount" id="annualCost">-</div>
                            <div class="cost-label">Annual Living Cost</div>
                        </div>
                    </div>
                    <div class="mt-3">
                        <h4>Breakdown:</h4>
                        <p id="costBreakdown" class="text-gray"></p>
                        <p class="text-gray" style="font-size: 0.9rem; margin-top: 1rem;">
                            <strong>Note:</strong> These are estimated costs based on average data. Actual expenses may vary. Tuition fees are separate and vary by university.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script>
        // Navigation and Mobile Menu
        class Navigation {
            constructor() {
                this.mobileMenuBtn = document.getElementById('mobileMenuBtn');
                this.navLinks = document.getElementById('navLinks');
                this.navLinksElements = document.querySelectorAll('.nav-link');
                
                this.init();
            }
            
            init() {
                // Mobile menu toggle
                this.mobileMenuBtn.addEventListener('click', () => {
                    this.navLinks.classList.toggle('active');
                });
                
                // Close mobile menu when clicking a link
                this.navLinksElements.forEach(link => {
                    link.addEventListener('click', () => {
                        this.navLinks.classList.remove('active');
                    });
                });
                
                // Active link highlighting on scroll
                window.addEventListener('scroll', () => this.updateActiveLink());
                
                // Smooth scrolling for anchor links
                this.navLinksElements.forEach(link => {
                    link.addEventListener('click', (e) => {
                        e.preventDefault();
                        const targetId = link.getAttribute('href');
                        const targetSection = document.querySelector(targetId);
                        if (targetSection) {
                            const headerHeight = document.querySelector('.header').offsetHeight;
                            const targetPosition = targetSection.offsetTop - headerHeight;
                            window.scrollTo({
                                top: targetPosition,
                                behavior: 'smooth'
                            });
                        }
                    });
                });
            }
            
            updateActiveLink() {
                const sections = document.querySelectorAll('section[id]');
                const scrollPosition = window.scrollY + 100;
                
                sections.forEach(section => {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;
                    const sectionId = section.getAttribute('id');
                    const correspondingLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
                    
                    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                        this.navLinksElements.forEach(link => link.classList.remove('active'));
                        if (correspondingLink) {
                            correspondingLink.classList.add('active');
                        }
                    }
                });
            }
        }

        // Modal Management
        class ModalManager {
            constructor() {
                this.modals = {
                    consultation: {
                        modal: document.getElementById('consultationModal'),
                        triggers: [
                            document.getElementById('consultationBtn'),
                            document.getElementById('heroConsultationBtn')
                        ],
                        close: document.getElementById('consultationClose'),
                        form: document.getElementById('consultationForm'),
                        success: document.getElementById('consultationSuccess')
                    },
                    calculator: {
                        modal: document.getElementById('calculatorModal'),
                        triggers: [document.getElementById('calculatorBtn')],
                        close: document.getElementById('calculatorClose'),
                        form: document.getElementById('calculatorForm'),
                        calculateBtn: document.getElementById('calculateBtn'),
                        result: document.getElementById('calculatorResult')
                    }
                };
                
                this.init();
            }
            
            init() {
                // Set up modal triggers and close buttons
                Object.values(this.modals).forEach(modalConfig => {
                    // Open modal triggers
                    modalConfig.triggers.forEach(trigger => {
                        if (trigger) {
                            trigger.addEventListener('click', (e) => {
                                e.preventDefault();
                                this.openModal(modalConfig.modal);
                            });
                        }
                    });
                    
                    // Close modal button
                    if (modalConfig.close) {
                        modalConfig.close.addEventListener('click', () => {
                            this.closeModal(modalConfig.modal);
                        });
                    }
                    
                    // Close modal on backdrop click
                    modalConfig.modal.addEventListener('click', (e) => {
                        if (e.target === modalConfig.modal) {
                            this.closeModal(modalConfig.modal);
                        }
                    });
                });
                
                // Close modals on Escape key
                document.addEventListener('keydown', (e) => {
                    if (e.key === 'Escape') {
                        Object.values(this.modals).forEach(modalConfig => {
                            this.closeModal(modalConfig.modal);
                        });
                    }
                });
            }
            
            openModal(modal) {
                modal.classList.add('active');
                modal.setAttribute('aria-hidden', 'false');
                document.body.style.overflow = 'hidden';
                
                // Focus first input in modal
                const firstInput = modal.querySelector('input, select, textarea');
                if (firstInput) {
                    setTimeout(() => firstInput.focus(), 100);
                }
            }
            
            closeModal(modal) {
                modal.classList.remove('active');
                modal.setAttribute('aria-hidden', 'true');
                document.body.style.overflow = '';
            }
        }

        // Form Handling
        class FormHandler {
            constructor() {
                this.forms = {
                    contact: document.getElementById('contactForm'),
                    consultation: document.getElementById('consultationForm')
                };
                
                this.init();
            }
            
            init() {
                // Contact form
                this.forms.contact.addEventListener('submit', (e) => this.handleContactForm(e));
                
                // Consultation form
                this.forms.consultation.addEventListener('submit', (e) => this.handleConsultationForm(e));
            }
            
            validateForm(formData, requiredFields) {
                const errors = {};
                
                requiredFields.forEach(field => {
                    const value = formData.get(field);
                    if (!value || value.trim() === '') {
                        errors[field] = 'This field is required';
                    }
                });
                
                // Email validation
                const email = formData.get('email');
                if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                    errors.email = 'Please enter a valid email address';
                }
                
                // Phone validation (basic)
                const phone = formData.get('phone');
                if (phone && !/^[\+]?[\d\s\-\(\)]{10,}$/.test(phone)) {
                    errors.phone = 'Please enter a valid phone number';
                }
                
                return errors;
            }
            
            showFormErrors(errors, form) {
                // Clear previous errors
                form.querySelectorAll('.form-error').forEach(error => {
                    error.textContent = '';
                });
                
                // Show new errors
                Object.keys(errors).forEach(field => {
                    const errorElement = form.querySelector(`#${field}Error`) || 
                                       form.querySelector(`[id$="${field}Error"]`);
                    if (errorElement) {
                        errorElement.textContent = errors[field];
                    }
                });
            }
            
            handleContactForm(e) {
                e.preventDefault();
                
                const formData = new FormData(this.forms.contact);
                const errors = this.validateForm(formData, ['name', 'email', 'phone']);
                
                if (Object.keys(errors).length > 0) {
                    this.showFormErrors(errors, this.forms.contact);
                    return;
                }
                
                // TODO: Send data to backend
                // For now, just show success message
                this.showFormSuccess('contact');
            }
            
            handleConsultationForm(e) {
                e.preventDefault();
                
                const formData = new FormData(this.forms.consultation);
                const errors = this.validateForm(formData, ['name', 'email', 'phone']);
                
                if (Object.keys(errors).length > 0) {
                    this.showFormErrors(errors, this.forms.consultation);
                    return;
                }
                
                // TODO: Send data to backend
                // For now, just show success message
                this.showFormSuccess('consultation');
            }
            
            showFormSuccess(formType) {
                if (formType === 'contact') {
                    document.getElementById('formSuccess').style.display = 'block';
                    this.forms.contact.reset();
                    // Scroll to success message
                    document.getElementById('formSuccess').scrollIntoView({ behavior: 'smooth' });
                } else if (formType === 'consultation') {
                    document.getElementById('consultationSuccess').style.display = 'block';
                    this.forms.consultation.style.display = 'none';
                }
            }
        }

        // Cost Calculator
        class CostCalculator {
            constructor() {
                this.calculateBtn = document.getElementById('calculateBtn');
                this.form = document.getElementById('calculatorForm');
                this.result = document.getElementById('calculatorResult');
                this.monthlyCost = document.getElementById('monthlyCost');
                this.annualCost = document.getElementById('annualCost');
                this.costBreakdown = document.getElementById('costBreakdown');
                
                // Cost data (in local currency)
                this.costData = {
                    canada: {
                        currency: 'CAD',
                        base: 1200,
                        cityMultiplier: { major: 1.3, mid: 1.0, small: 0.8 },
                        accommodationMultiplier: { oncampus: 0.9, shared: 1.0, studio: 1.4 },
                        lifestyleMultiplier: { budget: 0.8, moderate: 1.0, comfortable: 1.3 }
                    },
                    usa: {
                        currency: 'USD',
                        base: 1500,
                        cityMultiplier: { major: 1.5, mid: 1.0, small: 0.7 },
                        accommodationMultiplier: { oncampus: 1.0, shared: 0.9, studio: 1.6 },
                        lifestyleMultiplier: { budget: 0.7, moderate: 1.0, comfortable: 1.4 }
                    },
                    uk: {
                        currency: 'GBP',
                        base: 1000,
                        cityMultiplier: { major: 1.4, mid: 1.0, small: 0.8 },
                        accommodationMultiplier: { oncampus: 0.9, shared: 1.0, studio: 1.5 },
                        lifestyleMultiplier: { budget: 0.8, moderate: 1.0, comfortable: 1.3 }
                    },
                    germany: {
                        currency: 'EUR',
                        base: 800,
                        cityMultiplier: { major: 1.2, mid: 1.0, small: 0.8 },
                        accommodationMultiplier: { oncampus: 0.8, shared: 1.0, studio: 1.3 },
                        lifestyleMultiplier: { budget: 0.8, moderate: 1.0, comfortable: 1.2 }
                    },
                    australia: {
                        currency: 'AUD',
                        base: 1400,
                        cityMultiplier: { major: 1.3, mid: 1.0, small: 0.8 },
                        accommodationMultiplier: { oncampus: 1.0, shared: 0.9, studio: 1.4 },
                        lifestyleMultiplier: { budget: 0.8, moderate: 1.0, comfortable: 1.3 }
                    }
                };
                
                this.init();
            }
            
            init() {
                this.calculateBtn.addEventListener('click', () => this.calculateCosts());
            }
            
            calculateCosts() {
                const formData = new FormData(this.form);
                const country = formData.get('country');
                const city = formData.get('city');
                const accommodation = formData.get('accommodation');
                const lifestyle = formData.get('lifestyle');
                
                if (!country || !city || !accommodation || !lifestyle) {
                    alert('Please fill in all fields');
                    return;
                }
                
                const data = this.costData[country];
                if (!data) return;
                
                const baseCost = data.base;
                const cityMultiplier = data.cityMultiplier[city] || 1;
                const accommodationMultiplier = data.accommodationMultiplier[accommodation] || 1;
                const lifestyleMultiplier = data.lifestyleMultiplier[lifestyle] || 1;
                
                const monthlyCost = Math.round(baseCost * cityMultiplier * accommodationMultiplier * lifestyleMultiplier);
                const annualCost = monthlyCost * 12;
                
                // Update display
                this.monthlyCost.textContent = `${data.currency} ${monthlyCost.toLocaleString()}`;
                this.annualCost.textContent = `${data.currency} ${annualCost.toLocaleString()}`;
                
                // Create breakdown text
                const cityType = city.charAt(0).toUpperCase() + city.slice(1);
                const accommodationType = accommodation === 'oncampus' ? 'On-Campus Housing' : 
                                        accommodation === 'shared' ? 'Shared Apartment' : 'Studio Apartment';
                const lifestyleType = lifestyle.charAt(0).toUpperCase() + lifestyle.slice(1);
                
                this.costBreakdown.textContent = `Based on ${cityType} city, ${accommodationType}, and ${lifestyleType} lifestyle. Includes accommodation, food, transportation, and personal expenses.`;
                
                // Show result
                this.result.style.display = 'block';
                this.result.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }

        // Animation and Scroll Effects
        class ScrollAnimations {
            constructor() {
                this.observer = new IntersectionObserver(
                    (entries) => this.handleIntersection(entries),
                    {
                        threshold: 0.1,
                        rootMargin: '0px 0px -50px 0px'
                    }
                );
                
                this.init();
            }
            
            init() {
                // Add animation classes to elements
                const animatedElements = document.querySelectorAll('.card, .stats, .testimonial');
                animatedElements.forEach(element => {
                    this.observer.observe(element);
                });
            }
            
            handleIntersection(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-fade-in');
                        this.observer.unobserve(entry.target);
                    }
                });
            }
        }

        // Performance Optimizations
        class PerformanceOptimizer {
            constructor() {
                this.init();
            }
            
            init() {
                // Lazy load images
                this.setupLazyLoading();
                
                // Debounce scroll events
                this.debounceScrollEvents();
            }
            
            setupLazyLoading() {
                const images = document.querySelectorAll('img[data-src]');
                
                if ('IntersectionObserver' in window) {
                    const imageObserver = new IntersectionObserver((entries) => {
                        entries.forEach(entry => {
                            if (entry.isIntersecting) {
                                const img = entry.target;
                                img.src = img.dataset.src;
                                img.removeAttribute('data-src');
                                imageObserver.unobserve(img);
                            }
                        });
                    });
                    
                    images.forEach(img => imageObserver.observe(img));
                } else {
                    // Fallback for older browsers
                    images.forEach(img => {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    });
                }
            }
            
            debounceScrollEvents() {
                let scrollTimeout;
                const originalScrollHandler = window.onscroll;
                
                window.onscroll = function(e) {
                    if (scrollTimeout) {
                        clearTimeout(scrollTimeout);
                    }
                    scrollTimeout = setTimeout(() => {
                        if (originalScrollHandler) {
                            originalScrollHandler.call(this, e);
                        }
                    }, 16); // ~60fps
                };
            }
        }

        // Accessibility Enhancements
        class AccessibilityManager {
            constructor() {
                this.init();
            }
            
            init() {
                this.setupKeyboardNavigation();
                this.setupFocusManagement();
                this.setupAriaAttributes();
            }
            
            setupKeyboardNavigation() {
                // Handle Enter key on buttons that aren't real buttons
                document.querySelectorAll('[role="button"]').forEach(element => {
                    element.addEventListener('keydown', (e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            element.click();
                        }
                    });
                });
            }
            
            setupFocusManagement() {
                // Focus management for modals
                const modals = document.querySelectorAll('.modal');
                modals.forEach(modal => {
                    modal.addEventListener('keydown', (e) => {
                        if (e.key === 'Tab') {
                            this.trapFocus(e, modal);
                        }
                    });
                });
            }
            
            setupAriaAttributes() {
                // Add ARIA attributes to interactive elements
                document.querySelectorAll('.card').forEach((card, index) => {
                    if (!card.getAttribute('role')) {
                        card.setAttribute('role', 'article');
                    }
                });
            }
            
            trapFocus(e, container) {
                const focusableElements = container.querySelectorAll(
                    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
                );
                const firstElement = focusableElements[0];
                const lastElement = focusableElements[focusableElements.length - 1];
                
                if (e.shiftKey) {
                    if (document.activeElement === firstElement) {
                        e.preventDefault();
                        lastElement.focus();
                    }
                } else {
                    if (document.activeElement === lastElement) {
                        e.preventDefault();
                        firstElement.focus();
                    }
                }
            }
        }

        // Error Handling
        class ErrorHandler {
            constructor() {
                this.setupGlobalErrorHandling();
            }
            
            setupGlobalErrorHandling() {
                window.addEventListener('error', (e) => {
                    console.error('JavaScript Error:', e.error);
                    // In production, you might want to send this to a logging service
                });
                
                window.addEventListener('unhandledrejection', (e) => {
                    console.error('Unhandled Promise Rejection:', e.reason);
                    // In production, you might want to send this to a logging service
                });
            }
            
            static handleFormError(error, formElement) {
                console.error('Form submission error:', error);
                
                // Show user-friendly error message
                const errorDiv = document.createElement('div');
                errorDiv.className = 'form-error';
                errorDiv.textContent = 'There was an error submitting your form. Please try again.';
                
                const firstInput = formElement.querySelector('input, select, textarea');
                if (firstInput) {
                    firstInput.parentNode.insertBefore(errorDiv, firstInput);
                    setTimeout(() => errorDiv.remove(), 5000);
                }
            }
        }

        // Initialize Application
        document.addEventListener('DOMContentLoaded', function() {
            try {
                // Initialize all modules
                new Navigation();
                new ModalManager();
                new FormHandler();
                new CostCalculator();
                new ScrollAnimations();
                new PerformanceOptimizer();
                new AccessibilityManager();
                new ErrorHandler();
                
                console.log('AdmissionBooster website initialized successfully');
            } catch (error) {
                console.error('Error initializing website:', error);
            }
        });

        // TODO Comments for Backend Integration:
        
        /*
        TODO: Backend Integration Points
        
        1. Contact Form Submission (Line ~890)
           - Replace FormHandler.handleContactForm() success simulation
           - Add actual API call to submit contact form data
           - Handle server response and errors
           
        2. Consultation Form Submission (Line ~905)
           - Replace FormHandler.handleConsultationForm() success simulation  
           - Add actual API call to submit consultation request
           - Integrate with calendar booking system
           
        3. Community Forum (Line ~450)
           - Replace static forum thread display
           - Add dynamic content loading from forum API
           - Implement thread creation and reply functionality
           - Add user authentication for forum features
           
        4. Blog Content (Line ~530)
           - Replace static blog post cards
           - Integrate with CMS API for dynamic blog content
           - Add pagination and search functionality
           
        5. Cost Calculator Data
           - Move cost data to backend API for easier updates
           - Add more detailed cost breakdowns
           - Include tuition fee estimates from university APIs
           
        6. University Data
           - Replace static university lists with dynamic data
           - Integrate with university APIs for real-time information
           - Add search and filter functionality
           
        7. User Analytics
           - Add tracking for form submissions
           - Track user interactions with cost calculator
           - Monitor popular countries and services
           
        8. Email Integration
           - Set up email notifications for form submissions
           - Add email templates for consultation confirmations
           - Implement newsletter signup functionality
           
        9. Authentication System
           - Add user registration and login
           - Implement user dashboard for tracking applications
           - Add personalized recommendations based on user profile
           
        10. File Upload
            - Add document upload functionality for premium services
            - Implement secure file storage and retrieval
            - Add document review workflow
        */
        
    </script>
</body>
</html>
                
