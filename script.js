const projects = [
    { title: 'opentivu', description: 'Free-to-air worldwide TV channels streaming hub, featuring a custom m3u playlist converter.', stack: ['python', 'js'], markdownFile: 'README.md' },
    { title: 'waybackproxy', description: 'HTTP proxy for tunneling requests through the Internet Archive.', stack: ['python', 'docker'], markdownFile: 'https://raw.githubusercontent.com/richardg867/WaybackProxy/refs/heads/master/README.md' },
    { title: 'caffeine', description: 'Caffeine for Microsoft Windows™ to prevent your PC going to sleep but in a stealth way', stack: ['microsoft', 'python'], markdownFile: 'README.md' },
    { title: 'f86-dos', description: 'MS-DOS™ running on an 8086 and 80186 bare-metal emulator for Raspberry Pi.', stack: ['rpi', 'c'], markdownFile: 'README.md' },
    { title: 'openfeed', description: 'Hackable RSS feed reader desktop client and web-based versions available.', stack: ['electron', 'js'], markdownFile: 'openfeed.md' },
    { title: 'charon', description: 'No-backend blog engine Javascript & Markdown powered.', stack: ['bootstrap', 'js'], markdownFile: 'charon.md' },
    { title: 'amnesia', description: 'Forgot your Google Chrome™ browsing and download history but keep cookies & cache.', stack: ['chrome', 'js'], markdownFile: 'README.md' },
    { title: 'chatterbot-corpus', description: 'A multilingual dialog corpus.', stack: ['python'], markdownFile: 'https://raw.githubusercontent.com/gunthercox/chatterbot-corpus/refs/heads/master/README.md' },
    { title: 'fantahackalcio', description: 'The famous Fantacalcio™ "Excel sheet" reimagined with AI.', stack: ['python', 'html', 'js'], markdownFile: 'fantahackalcio.md' },
    { title: 'gimpshop-reloaded', description: 'GIMP mod to make it similiar to Adobe™ product. A reborn of the most popular free Photoshop™ alternative.', stack: ['css', 'python'], markdownFile: 'README.md' },
    { title: 'kodi-addons', description: 'Kodi™ add-ons focus on Italian content.', stack: ['python'], markdownFile: 'kodi.md' }
];

const getTechIcon = (techName) => {
    switch (techName.toLowerCase().trim()) {
        case 'electron':
            return 'electron';
        case 'html':
            return 'html5';
        case 'css':
            return 'css3';
        case 'php':
            return 'php';
        case 'vb':
            return 'visualbasic';
        case 'microsoft':
            return 'microsoft';
        case 'chrome':
            return 'googlechrome';
        case 'c':
            return 'c';
        case 'rpi':
            return 'raspberrypi';
        case 'javascript':
        case 'js':
            return 'javascript';
        case 'python':
            return 'python';
        case 'react':
            return 'react';
        case 'nodejs':
            return 'nodedotjs';
        case 'c++':
            return 'cplusplus';
        case 'github':
            return 'github';
        case 'linux':
            return 'linux';
        case 'docker':
            return 'docker';
        case 'bootstrap':
            return 'bootstrap';
        case 'sql':
            return 'sqlite';
        default: return 'github'; // Fallback
    }
};

const openModal = async (project) => {
    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body');

    // Reset and show loader
    modalBody.innerHTML = '<div id="modal-loader" class="flex flex-col items-center justify-center h-[50vh]"><p class="mono text-zinc-500 animate-pulse tracking-[0.5em] text-xs">ESTABLISHING_SECURE_LINK...</p></div>';

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';

    // Modal Entrance Animation
    gsap.fromTo(modal,
        { y: '100%', opacity: 0 },
        { y: '0%', opacity: 1, duration: 1.2, ease: "expo.out" }
    );

    const githubUser = 'cttynul';
    const baseUrl = `https://raw.githubusercontent.com/${githubUser}`;
    let primaryUrl;

    if (project.markdownFile && project.markdownFile.startsWith('https://')) {
        // Percorso remoto assoluto
        primaryUrl = project.markdownFile;
    } else if (project.markdownFile && !['README.md', 'readme.md'].includes(project.markdownFile)) {
        // Percorso per file personalizzati nel repository del portfolio
        primaryUrl = `${baseUrl}/cttynul.github.io/refs/heads/master/assets/mds/${project.markdownFile}`;
    } else {
        // Percorso standard per README nel repository del progetto
        primaryUrl = `${baseUrl}/${project.title}/refs/heads/master/README.md`;
    }

    try {
        let response = await fetch(primaryUrl);

        // Fallback specifico per README.md -> readme.md se non trovato
        if (!response.ok && primaryUrl.endsWith('README.md')) {
            const fallbackUrl = primaryUrl.replace('README.md', 'readme.md');
            response = await fetch(fallbackUrl);
        }

        if (!response.ok) throw new Error('FILE_NOT_FOUND');

        const markdown = await response.text();

        // Smoothly swap loader with content
        gsap.to("#modal-loader", {
            opacity: 0, duration: 0.3, onComplete: () => {
                modalBody.innerHTML = marked.parse(markdown);

                // Staggered Reveal for Markdown Content
                gsap.from(".markdown-content > *", {
                    opacity: 0,
                    y: 50,
                    stagger: 0.08,
                    duration: 1,
                    ease: "power4.out",
                    clearProps: "all"
                });
            }
        });
    } catch {
        modalBody.innerHTML = `<div class="flex flex-col items-center justify-center h-[50vh]"><h1 class="text-white font-black text-4xl mb-4">LINK_TERMINATED</h1><p class="mono text-zinc-500 text-xs uppercase tracking-widest">Documentation not found for ${project.title}</p></div>`;
    }
};

const closeModal = () => {
    const modal = document.getElementById('project-modal');
    gsap.to(modal, {
        y: '100%',
        opacity: 0,
        duration: 0.8,
        ease: "expo.in",
        onComplete: () => {
            modal.classList.remove('open');
            document.body.style.overflow = 'auto';
        }
    });
};

const initCookies = () => {
    const banner = document.getElementById('cookie-banner');
    const acceptBtn = document.getElementById('accept-cookies');

    if (!banner || !acceptBtn) return;

    if (!localStorage.getItem('cookies-acknowledged')) {
        banner.classList.remove('hidden');
        gsap.fromTo(banner,
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, delay: 2, ease: "expo.out" }
        );
    }

    acceptBtn.addEventListener('click', () => {
        localStorage.setItem('cookies-acknowledged', 'true');
        gsap.to(banner, {
            y: 100,
            opacity: 0,
            duration: 0.8,
            ease: "expo.in",
            onComplete: () => banner.classList.add('hidden')
        });
    });
};

const setYear = () => {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
};

const randomizeHero = () => {
    const titles = [
        ["PREVENTING", "ARMAGEDDON."],
        ["NOT A REAL", "DEVELOPER."],
        ["INFRASTRUCTURE", "THERAPIST."],
        ["WHEEL REINVENTION", "ENGINEER."],
        ["SERVERLESS", "ADVOCATE."],
        ["CLOUD", "WRANGLER."]
    ];

    const random = titles[Math.floor(Math.random() * titles.length)];
    const line1 = document.getElementById('hero-line-1');
    const line2 = document.getElementById('hero-line-2');

    if (line1 && line2) {
        line1.textContent = random[0];
        line2.textContent = random[1];

        // Animate title entrance
        gsap.fromTo([line1, line2],
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 1.5, stagger: 0.15, ease: "expo.out" }
        );
    }
};

const loadProjects = () => {
    const container = document.getElementById('projects-container');
    if (!container) return;
    container.innerHTML = '';

    projects.forEach(project => {
        const icons = project.stack.map(tech => `<img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${getTechIcon(tech)}.svg" class="h-5 w-auto inline-block ml-3 opacity-30 filter invert">`).join('');

        const displayDescription = project.description || "Experimental architecture focusing on system resilience and high-performance throughput.";

        const card = document.createElement('div');
        card.className = "project-card py-16 flex flex-col cursor-pointer group";
        card.innerHTML = `
            <div class="w-full mb-12">
                <div class="flex items-center gap-6">
                    <span class="mono text-[10px] text-zinc-800">/ 0${projects.indexOf(project) + 1}</span>
                    <div class="h-[1px] flex-1 bg-zinc-900 group-hover:bg-zinc-800 transition-colors"></div>
                    <div class="flex items-center">${icons}</div>
                </div>
            </div>
            
            <div class="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
                <div class="flex-1">
                    <h4 class="project-title text-4xl md:text-7xl font-black uppercase tracking-tighter transition-all group-hover:translate-x-3">
                        ${project.title}
                    </h4>
                    <p class="mt-6 font-light max-w-xl text-zinc-500 text-sm leading-relaxed">
                        ${displayDescription}
                    </p>
                </div>
                <div class="mono text-[10px] text-zinc-700 tracking-[0.3em] border border-zinc-900 px-8 py-4 group-hover:text-white group-hover:border-zinc-500 transition-all flex items-center gap-4 whitespace-nowrap">
                    EXPLORE
                    <span class="text-xl">→</span>
                </div>
            </div>
        `;
        card.addEventListener('click', () => openModal(project));
        container.appendChild(card);
    });

    gsap.from(".project-card", {
        scrollTrigger: { trigger: "#work", start: "top 80%" },
        opacity: 0, y: 30, stagger: 0.1, duration: 1, ease: "power2.out", clearProps: "all"
    });
};

const initMarquees = () => {
    const setupMarquee = (selector, duration) => {
        const container = document.querySelector(selector);
        if (!container) return;

        if (container.dataset.initialized) return;
        container.dataset.initialized = "true";

        // Double the content for seamless loop
        const content = container.innerHTML;
        container.innerHTML = content + content;

        const animation = gsap.to(container, {
            xPercent: -50,
            duration: duration,
            ease: "none",
            repeat: -1,
            force3D: true
        });

        // Premium feel: slow down on hover instead of stopping abruptly
        container.addEventListener('mouseenter', () => gsap.to(animation, { timeScale: 0.1, duration: 0.8, ease: "power2.out" }));
        container.addEventListener('mouseleave', () => gsap.to(animation, { timeScale: 1, duration: 0.8, ease: "power2.in" }));
    };

    setupMarquee('.animate-marquee', 40);
    setupMarquee('.stack-marquee', 25);
};

window.addEventListener('load', () => {
    initCookies();
    setYear();
    randomizeHero();
    loadProjects();
    initMarquees();
});