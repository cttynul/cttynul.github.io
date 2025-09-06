// Funzione per associare le stringhe dello stack alle classi di icone di Font Awesome.
const getTechIcon = (techName) => {
    switch (techName.toLowerCase().trim()) {
        case 'html':
            return 'fa-brands fa-html5';
        case 'css':
            return 'fa-brands fa-css3-alt';
        case 'php':
            return 'fa-brands fa-php';
        case 'vb':
        case 'microsoft':
            return 'fa-brands fa-microsoft';
        case 'chrome':
            return 'fa-brands fa-chrome';
        case 'c':
            return 'fa-solid fa-c';
        case 'rpi':
            return 'fa-brands fa-raspberry-pi';
        case 'javascript':
        case 'js':
            return 'fa-brands fa-js';
        case 'python':
            return 'fa-brands fa-python';
        case 'react':
            return 'fa-brands fa-react';
        case 'nodejs':
            return 'fa-brands fa-node-js';
        case 'c++':
            return 'fa-solid fa-c';
        case 'github':
            return 'fa-brands fa-github';
        case 'linux':
            return 'fa-brands fa-linux';
        case 'docker':
            return 'fa-brands fa-docker';
        case 'bootstrap':
            return 'fa-brands fa-bootstrap';
        case 'sql':
            return 'fa-solid fa-database';
        default:
            return '';
    }
};

// Dati dei progetti
const projects = [
    {
        title: 'opentivu',
        description: 'Free-to-air worldwide TV channels streaming hub, featuring a custom m3u playlist converter',
        markdownFile: '',
        stack: ['python', 'js'],
    },
    {
        title: 'waybackproxy',
        description: 'Time Machine: HTTP proxy for tunneling requests through the Internet Archive Wayback Machine',
        markdownFile: '',
        stack: ['python', 'docker'],
    },
    {
        title: 'caffeine',
        description: 'Caffeine for Microsoft Windows™ to prevent your PC going to sleep but in a stealth way',
        markdownFile: '',
        stack: ['microsoft', 'python'],
    },
    {
        title: 'f86-dos',
        description: 'MS-DOS™ running on an 8086 and 80186 bare-metal emulator for Raspberry Pi',
        markdownFile: '',
        stack: ['rpi', 'c'],
    },
    {
        title: 'fomn',
        description: 'Just a personal preconfigured RSS feed reader used to check something but that can be used and customized by you',
        markdownFile: 'fomn.md',
        stack: ['js'],
    },
    {
        title: 'charon',
        description: 'Just another no-backend blog engine Javascript & Markdown powered',
        markdownFile: 'charon.md',
        stack: ['bootstrap', 'js'],
    },
    {
        title: 'styx',
        description: 'Full-Stack vulnerabilities, KPI & compliance cybersecurity dashboard CSV powered',
        markdownFile: '',
        stack: ['python', 'js', 'docker'],
    },
    {
        title: 'amnesia',
        description: 'Forgot your Google Chrome™ browsing and download history but keep cookies & cache',
        markdownFile: '',
        stack: ['chrome', 'js'],
    },
    {
        title: 'fantahackalcio',
        description: 'Fantacalcio™ Dashboard: The famous "Excel sheet" reimagined, with a touch of AI',
        markdownFile: 'fantahackalcio.md',
        stack: ['python', 'js'],
    },
    {
        title: 'kodi™ addons',
        description: 'Kodi™ add-ons developed over the years, with a focus on Italian content',
        markdownFile: 'kodi.md',
        stack: ['python'],
    },
    {
        title: 'more',
        description: 'Unlisted projects and funny things',
        markdownFile: 'more.md',
        stack: ['python', 'php', 'microsoft'],
    },
];

// Intersection Observer per animare gli elementi allo scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        }
    });
});

// Funzione per popolare la lista dei progetti e collegare il click
const loadProjects = () => {
    const projectList = document.querySelector('.project-list');
    projects.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.classList.add('project-item', 'is-hidden');
        
        // Creazione delle icone dello stack
        const techStackHtml = project.stack.map(tech => {
            const iconClass = getTechIcon(tech);
            if (iconClass) {
                return `<i class="${iconClass}" title="${tech.toUpperCase()}"></i>`;
            }
            return '';
        }).join('');

        projectItem.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="tech-stack">
                ${techStackHtml}
            </div>
        `;

        projectItem.addEventListener('click', () => {
            openModal(project);
        });

        projectList.appendChild(projectItem);
        
        // Osserva subito l'elemento appena creato
        observer.observe(projectItem);
    });
};

// Funzione per popolare la lista dei progetti in background
const loadBgProjects = () => {
    const projectListBg = document.querySelector('.project-list-bg');
    
    // Numero di colonne di schede da creare per riempire lo spazio verticale
    const numColumns = 3;
    const numCopiesForScroll = 5;

    for (let j = 0; j < numCopiesForScroll; j++) {
        const projectColumn = document.createElement('div');
        projectColumn.classList.add('project-column');

        // Duplica i progetti per riempire la colonna
        for (let i = 0; i < numColumns; i++) {
            projects.forEach(project => {
                const projectItem = document.createElement('div');
                projectItem.classList.add('project-item');
                
                const techStackHtml = project.stack.map(tech => {
                    const iconClass = getTechIcon(tech);
                    if (iconClass) {
                        return `<i class="${iconClass}" title="${tech.toUpperCase()}"></i>`;
                    }
                    return '';
                }).join('');

                projectItem.innerHTML = `
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="tech-stack">
                        ${techStackHtml}
                    </div>
                `;
                projectColumn.appendChild(projectItem);
            });
        }
        projectListBg.appendChild(projectColumn);
    }
};

// Funzione per popolare il background della sezione about
const loadAboutBg = () => {
    const aboutContent = document.querySelector('.about-content');
    const aboutContentBg = document.querySelector('.about-content-bg');
    
    // Duplica il contenuto più volte per un'animazione fluida
    for (let i = 0; i < 5; i++) {
        const clonedContent = aboutContent.cloneNode(true);
        clonedContent.classList.remove('about-content');
        clonedContent.classList.remove('is-hidden');
        aboutContentBg.appendChild(clonedContent);
    }
};

const renderer = {
  link(token) {
    const href = token.href;
    const text = marked.parseInline(token.text, {
      renderer: this.renderer
    });
    const titleAttribute = token.title ? ` title="${token.title}"` : '';

    return `<a href="${href}"${titleAttribute} class="gradient-text">${text}</a>`;
  }
};

marked.use({ renderer });

// Funzione per aprire il modale
const openModal = async (project) => {
    const modal = document.getElementById('project-modal');
    const modalContent = document.getElementById('modal-body');
    
    // Controlla il tipo di percorso del file Markdown
    let markdownPath;
    if (project.markdownFile.startsWith('https://')) {
        // Caso 1: È un URL completo, usalo direttamente.
        markdownPath = project.markdownFile;
    } else if (!project.markdownFile.endsWith('.md')) {
        // Caso 2: Non ha estensione .md, costruisci l'URL di GitHub.
        const projectId = project.title;
        markdownPath = `https://raw.githubusercontent.com/cttynul/${projectId}/refs/heads/master/README.md`;
    } else {
        // Caso 3: È un file locale, usa il percorso predefinito.
        markdownPath = `projects/${project.markdownFile}`;
    }

    modalContent.innerHTML = '<div class="loader">Caricamento...</div>';
    
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';

    try {
      const response = await fetch(markdownPath);
      if (!response.ok) {
          throw new Error(`Errore HTTP: ${response.status} - File non trovato.`);
      }
      const markdown = await response.text();
      
      // Usa marked.js per convertire il markdown in HTML
      const htmlContent = marked.parse(markdown);

      modalContent.innerHTML = `
        <div class="markdown-content">
            ${htmlContent}
        </div>
      `;
    } catch (error) {
      console.error('Errore nel caricamento del Markdown:', error);
      modalContent.innerHTML = `<h4>Errore nel caricamento del contenuto.<br>${error.message}</h4>`;
    }
};

// Funzione per chiudere il modale
const closeModal = () => {
    const modal = document.getElementById('project-modal');
    modal.classList.remove('open');
    document.body.style.overflow = 'auto';
};

// Inizializzazione
document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
    loadAboutBg();
    loadBgProjects();
    
    // Imposta l'anno corrente nel footer
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
    
    // Osserva anche le sezioni statiche
    const staticSections = document.querySelectorAll('.section.is-hidden, .footer.is-hidden');
    staticSections.forEach((el) => observer.observe(el));

    const closeButton = document.querySelector('.close-button');
    closeButton.addEventListener('click', closeModal);

    window.addEventListener('click', (event) => {
        const modal = document.getElementById('project-modal');
        if (event.target === modal) {
            closeModal();
        }
    });
    // Funzione per impostare un cookie
    const setCookie = (name, value, days) => {
        const d = new Date();
        d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = "expires=" + d.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/";
    };

    // Funzione per leggere un cookie
    const getCookie = (name) => {
        const cname = name + "=";
        const decodedCookie = decodeURIComponent(document.cookie);
        const ca = decodedCookie.split(';');
        for(let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(cname) === 0) {
                return c.substring(cname.length, c.length);
            }
        }
        return "";
    };

    // Gestione del cookie banner
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptButton = document.getElementById('accept-cookies');

    // Controlla se il cookie di accettazione esiste
    const hasAcceptedCookies = getCookie("cookiesAccepted");
    if (!hasAcceptedCookies) {
        // Mostra il banner se non è stato accettato in precedenza
        setTimeout(() => {
            cookieBanner.classList.remove('is-hidden');
            cookieBanner.classList.add('is-visible');
        }, 1000); // Ritardo per non disturbare l'animazione iniziale
    }

    // Aggiungi un evento al pulsante per chiudere il banner e impostare il cookie
    acceptButton.addEventListener('click', () => {
        setCookie("cookiesAccepted", "true", 365); // Imposta il cookie per 365 giorni
        cookieBanner.classList.remove('is-visible');
        cookieBanner.classList.add('is-hidden');
        setTimeout(() => {
            cookieBanner.style.display = 'none';
        }, 500); // Attendi la fine dell'animazione
    });
});