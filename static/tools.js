// Tools Database
const toolsData = [
    // Reconnaissance & Subdomain Enumeration
    { name: "Amass", category: "reconnaissance", description: "In-depth attack surface mapping and asset discovery", source: "Go", url: "https://github.com/owasp-amass/amass" },
    { name: "Subfinder", category: "reconnaissance", description: "Fast passive subdomain enumeration tool", source: "Go", url: "https://github.com/projectdiscovery/subfinder" },
    { name: "Sublist3r", category: "reconnaissance", description: "Fast subdomains enumeration tool for penetration testers", source: "APT", url: "https://github.com/aboul3la/Sublist3r" },
    { name: "Assetfinder", category: "reconnaissance", description: "Find domains and subdomains related to a given domain", source: "Go", url: "https://github.com/tomnomnom/assetfinder" },
    { name: "github-subdomains", category: "reconnaissance", description: "Find subdomains on GitHub", source: "Go", url: "https://github.com/gwen001/github-subdomains" },
    { name: "Shosubgo", category: "reconnaissance", description: "Small tool to extract subdomains from Shodan", source: "Go", url: "https://github.com/incogbyte/shosubgo" },
    
    // DNS Tools
    { name: "DNSx", category: "dns", description: "Fast and multi-purpose DNS toolkit", source: "Go", url: "https://github.com/projectdiscovery/dnsx" },
    { name: "MassDNS", category: "dns", description: "High-performance DNS stub resolver", source: "Git", url: "https://github.com/blechschmidt/massdns" },
    { name: "PureDNS", category: "dns", description: "Fast domain resolver and subdomain bruteforcing tool", source: "Go", url: "https://github.com/d3mondev/puredns" },
    { name: "ShuffleDNS", category: "dns", description: "Wrapper around massdns for bruteforce subdomains", source: "Go", url: "https://github.com/projectdiscovery/shuffledns" },
    { name: "DNSRecon", category: "dns", description: "DNS enumeration script", source: "APT", url: "https://github.com/darkoperator/dnsrecon" },
    { name: "DNSEnum", category: "dns", description: "Perl script to enumerate DNS information", source: "APT", url: "https://github.com/fwaeytens/dnsenum" },
    { name: "dnsgen", category: "dns", description: "Generate DNS permutations for subdomain discovery", source: "pipx", url: "https://github.com/ProjectAnte/dnsgen" },
    
    // Web Analysis & Probing
    { name: "httpx", category: "web", description: "Fast and multi-purpose HTTP toolkit", source: "Go", url: "https://github.com/projectdiscovery/httpx" },
    { name: "httprobe", category: "web", description: "Take a list of domains and probe for working HTTP/HTTPS servers", source: "Go", url: "https://github.com/tomnomnom/httprobe" },
    { name: "Nuclei", category: "web", description: "Fast and customizable vulnerability scanner", source: "Go", url: "https://github.com/projectdiscovery/nuclei" },
    { name: "WhatWeb", category: "web", description: "Web scanner to identify technologies", source: "APT", url: "https://github.com/urbanadventurer/WhatWeb" },
    { name: "WhatWaf", category: "web", description: "Detect and bypass web application firewalls", source: "Git", url: "https://github.com/ekultek/whatwaf" },
    { name: "wafw00f", category: "web", description: "Identify and fingerprint Web Application Firewall products", source: "pipx", url: "https://github.com/EnableSecurity/wafw00f" },
    { name: "Gobuster", category: "web", description: "Directory/file & DNS busting tool written in Go", source: "APT", url: "https://github.com/OJ/gobuster" },
    { name: "dirb", category: "web", description: "Web content scanner", source: "APT", url: "http://dirb.sourceforge.net/" },
    { name: "ffuf", category: "web", description: "Fast web fuzzer written in Go", source: "APT", url: "https://github.com/ffuf/ffuf" },
    { name: "Aquatone", category: "web", description: "Tool for visual inspection of websites across many hosts", source: "Git", url: "https://github.com/michenriksen/aquatone" },
    { name: "EyeWitness", category: "web", description: "Take screenshots of websites and provide server header info", source: "Git", url: "https://github.com/FortyNorthSecurity/EyeWitness" },
    { name: "webscreenshot", category: "web", description: "Simple script to screenshot a list of websites", source: "Git", url: "https://github.com/maaaaz/webscreenshot" },
    { name: "httpscreenshot", category: "web", description: "Tool for grabbing screenshots and HTML of large numbers of websites", source: "Git", url: "https://github.com/breenmachine/httpscreenshot" },
    
    // Web Crawling & Spidering
    { name: "Katana", category: "web", description: "Next-generation crawling and spidering framework", source: "Go", url: "https://github.com/projectdiscovery/katana" },
    { name: "GoSpider", category: "web", description: "Fast web spider written in Go", source: "Go", url: "https://github.com/jaeles-project/gospider" },
    { name: "Hakrawler", category: "web", description: "Fast web crawler for gathering URLs and JavaScript files", source: "Go", url: "https://github.com/hakluke/hakrawler" },
    
    // OSINT - Social Media & People
    { name: "Sherlock", category: "social", description: "Hunt down social media accounts by username across social networks", source: "pipx", url: "https://github.com/sherlock-project/sherlock" },
    { name: "Maigret", category: "social", description: "Collect information about people by username", source: "Git", url: "https://github.com/soxoj/maigret" },
    { name: "Blackbird", category: "social", description: "Search for accounts by username across 500+ sites", source: "Git", url: "https://github.com/p1ngul1n0/blackbird" },
    { name: "Holehe", category: "email", description: "Check if an email is attached to an account on sites like Twitter, Instagram", source: "pipx", url: "https://github.com/megadose/holehe" },
    { name: "GHunt", category: "osint", description: "Investigate Google accounts with emails", source: "pipx", url: "https://github.com/mxrch/GHunt" },
    { name: "Toutatis", category: "social", description: "Extract information from Instagram accounts", source: "pipx", url: "https://github.com/megadose/toutatis" },
    { name: "h8mail", category: "email", description: "Email OSINT and breach hunting tool", source: "pipx", url: "https://github.com/khast3x/h8mail" },
    
    // OSINT - General
    { name: "SpiderFoot", category: "osint", description: "Automated OSINT collection tool", source: "Git", url: "https://github.com/smicallef/spiderfoot" },
    { name: "theHarvester", category: "osint", description: "Gather emails, subdomains, hosts, employee names, open ports and banners", source: "Git", url: "https://github.com/laramies/theHarvester" },
    { name: "Recon-ng", category: "osint", description: "Full-featured reconnaissance framework", source: "APT", url: "https://github.com/lanmaster53/recon-ng" },
    { name: "Maltego", category: "osint", description: "Interactive data mining tool for link analysis", source: "DEB", url: "https://www.maltego.com/" },
    { name: "SpiderSuite", category: "osint", description: "Advanced GUI OSINT framework", source: "AppImage", url: "https://github.com/3nock/SpiderSuite" },
    { name: "sn0int", category: "osint", description: "Semi-automatic OSINT framework and package manager", source: "Docker", url: "https://github.com/kpcyrd/sn0int" },
    { name: "bbot", category: "osint", description: "OSINT automation for hackers", source: "pipx", url: "https://github.com/blacklanternsecurity/bbot" },
    { name: "Orbit", category: "osint", description: "OSINT investigation tool for social media", source: "Git", url: "https://github.com/s0md3v/Orbit" },
    { name: "OSIF", category: "osint", description: "Open Source Information Facebook", source: "Git", url: "https://github.com/fr4nc1stein/osint-framework" },
    { name: "Sterra", category: "osint", description: "GitHub OSINT tool", source: "pipx", url: "https://github.com/atiilla/sterra" },
    { name: "Nexfil", category: "osint", description: "OSINT tool for finding profiles by username", source: "pipx", url: "https://github.com/thewhiteh4t/nexfil" },
    
    // OSINT - Specialized
    { name: "PhoneInfoga", category: "osint", description: "Advanced information gathering & OSINT tool for phone numbers", source: "Docker", url: "https://github.com/sundowndev/phoneinfoga" },
    { name: "Metagoofil", category: "osint", description: "Metadata harvester for public documents", source: "Git", url: "https://github.com/laramies/metagoofil" },
    { name: "exiflooter", category: "osint", description: "Find geolocation on all image URLs of a web page", source: "Go", url: "https://github.com/aydinnyunus/exiflooter" },
    { name: "Pagodo", category: "osint", description: "Automate Google Hacking Database scraping", source: "Git", url: "https://github.com/opsdisk/pagodo" },
    { name: "github-search", category: "osint", description: "Tools for searching sensitive data on GitHub", source: "Git", url: "https://github.com/gwen001/github-search" },
    { name: "TruffleHog", category: "osint", description: "Find credentials in git repositories", source: "Git", url: "https://github.com/trufflesecurity/trufflehog" },
    { name: "Gitleaks", category: "osint", description: "Scan git repos for secrets", source: "Docker", url: "https://github.com/gitleaks/gitleaks" },
    { name: "OnionScan", category: "osint", description: "Tool for investigating the Dark Web", source: "Go", url: "https://github.com/s-rah/onionscan" },
    { name: "Karma v2", category: "osint", description: "LinkedIn OSINT tool", source: "Git", url: "https://github.com/Dheerajmadhukar/karma_v2" },
    { name: "Shodan CLI", category: "osint", description: "Command-line interface for Shodan", source: "pipx", url: "https://cli.shodan.io/" },
    
    // Network Analysis
    { name: "Nmap", category: "network", description: "Network discovery and security auditing", source: "APT", url: "https://nmap.org/" },
    { name: "Wireshark", category: "network", description: "Network protocol analyzer", source: "APT", url: "https://www.wireshark.org/" },
    { name: "tshark", category: "network", description: "Terminal-based Wireshark", source: "APT", url: "https://www.wireshark.org/" },
    { name: "tcpdump", category: "network", description: "Packet analyzer", source: "APT", url: "https://www.tcpdump.org/" },
    { name: "SSLScan", category: "network", description: "Test SSL/TLS enabled services", source: "APT", url: "https://github.com/rbsec/sslscan" },
    { name: "tlsx", category: "network", description: "Fast and configurable TLS grabber", source: "Go", url: "https://github.com/projectdiscovery/tlsx" },
    { name: "asnmap", category: "network", description: "Quickly map organization network ranges", source: "Go", url: "https://github.com/projectdiscovery/asnmap" },
    { name: "mapcidr", category: "network", description: "Utility for manipulating IP/CIDR ranges", source: "Go", url: "https://github.com/projectdiscovery/mapcidr" },
    { name: "cdncheck", category: "network", description: "Check if IP belongs to CDN", source: "Go", url: "https://github.com/projectdiscovery/cdncheck" },
    { name: "cloudlist", category: "network", description: "Multi-cloud asset enumeration", source: "Go", url: "https://github.com/projectdiscovery/cloudlist" },
    { name: "CertGraph", category: "network", description: "Crawl SSL certificates to create a graph", source: "Git", url: "https://github.com/lanrat/certgraph" },
    { name: "favfreak", category: "web", description: "Fingerprint web servers using favicon hashes", source: "Git", url: "https://github.com/devanshbatham/favfreak" },
    { name: "Fierce", category: "network", description: "DNS reconnaissance tool", source: "APT", url: "https://github.com/mschwager/fierce" },
    { name: "Firewalk", category: "network", description: "Active reconnaissance network security tool", source: "APT", url: "http://packetfactory.openwall.net/projects/firewalk/" },
    
    // Automation & Frameworks
    { name: "ReconFTW", category: "automation", description: "Automated reconnaissance wrapper", source: "Docker", url: "https://github.com/six2dez/reconftw" },
    { name: "Interlace", category: "automation", description: "Easily turn single-threaded tools into multi-threaded", source: "Python", url: "https://github.com/codingo/Interlace" },
    { name: "alterx", category: "automation", description: "Fast and customizable subdomain wordlist generator", source: "Go", url: "https://github.com/projectdiscovery/alterx" },
    { name: "anew", category: "automation", description: "Tool for adding new lines to files, skipping duplicates", source: "Go", url: "https://github.com/tomnomnom/anew" },
    
    // Data Analysis & Utilities
    { name: "CyberChef", category: "data", description: "The Cyber Swiss Army Knife for data transformation", source: "Git", url: "https://github.com/gchq/CyberChef" },
    { name: "jq", category: "data", description: "Command-line JSON processor", source: "APT", url: "https://stedolan.github.io/jq/" },
    { name: "csvkit", category: "data", description: "Suite of utilities for working with CSV", source: "pipx", url: "https://csvkit.readthedocs.io/" },
    { name: "yt-dlp", category: "utilities", description: "Download videos from YouTube and other sites", source: "pipx", url: "https://github.com/yt-dlp/yt-dlp" },
    { name: "waybackpack", category: "utilities", description: "Download archived versions of websites", source: "pipx", url: "https://github.com/jsvine/waybackpack" },
    { name: "tubeup", category: "utilities", description: "Upload videos to Internet Archive", source: "pipx", url: "https://github.com/bibanon/tubeup" },
    
    // Email & Communication
    { name: "MHA (Mail Header Analyzer)", category: "email", description: "Analyze email headers for forensics", source: "Git", url: "https://github.com/cyberdefenders/mha" },
    { name: "swaks", category: "email", description: "Swiss Army Knife for SMTP", source: "APT", url: "http://www.jetmore.org/john/code/swaks/" },
    
    // Browsers & Privacy
    { name: "Firefox ESR", category: "utilities", description: "Extended Support Release of Firefox", source: "APT", url: "https://www.mozilla.org/firefox/" },
    { name: "Chromium", category: "utilities", description: "Open-source web browser", source: "APT", url: "https://www.chromium.org/" },
    { name: "Tor Browser", category: "utilities", description: "Anonymous web browsing", source: "Flatpak", url: "https://www.torproject.org/" },
    { name: "OnionShare", category: "utilities", description: "Securely and anonymously share files", source: "Flatpak", url: "https://onionshare.org/" },
    
    // Productivity & Documentation
    { name: "Obsidian", category: "productivity", description: "Powerful knowledge base on local Markdown files", source: "Flatpak", url: "https://obsidian.md/" },
    { name: "XMind", category: "productivity", description: "Mind mapping and brainstorming tool", source: "Flatpak", url: "https://www.xmind.net/" },
    { name: "Draw.io", category: "productivity", description: "Diagram and flowchart software", source: "Flatpak", url: "https://www.diagrams.net/" },
    { name: "Sublime Text", category: "productivity", description: "Sophisticated text editor", source: "Flatpak", url: "https://www.sublimetext.com/" },
    { name: "VS Code", category: "productivity", description: "Code editor by Microsoft", source: "APT", url: "https://code.visualstudio.com/" },
    { name: "KeePassXC", category: "utilities", description: "Cross-platform password manager", source: "APT", url: "https://keepassxc.org/" },
    { name: "Pinta", category: "utilities", description: "Simple drawing and image editing", source: "Flatpak", url: "https://www.pinta-project.com/" },

    // Additional Tools
    { name: "LinkScope", category: "osint", description: "OSINT link analysis and visualization tool", source: "Git", url: "https://github.com/AccentuSoft/LinkScope_Client" },
    { name: "Parsero", category: "web", description: "Read robots.txt file of a web server", source: "APT", url: "https://github.com/behindthefirewalls/Parsero" },
    { name: "YARA", category: "utilities", description: "Pattern matching for malware research", source: "APT", url: "https://virustotal.github.io/yara/" },
    { name: "Proxychains", category: "network", description: "Force any TCP connection through proxy", source: "APT", url: "https://github.com/haad/proxychains" },
    { name: "macchanger", category: "network", description: "Utility for manipulating MAC addresses", source: "APT", url: "https://github.com/alobbs/macchanger" },
    { name: "Tor", category: "network", description: "Anonymity network", source: "APT", url: "https://www.torproject.org/" },
    { name: "ncat", category: "network", description: "Concatenate and redirect sockets", source: "APT", url: "https://nmap.org/ncat/" },
    { name: "PhantomJS", category: "utilities", description: "Headless WebKit scriptable with JavaScript", source: "Git", url: "https://phantomjs.org/" },
    { name: "GeckoDriver", category: "utilities", description: "WebDriver for Firefox", source: "Git", url: "https://github.com/mozilla/geckodriver" },
    { name: "DuckDuckGo Search", category: "osint", description: "Privacy-focused search utilities", source: "Git", url: "https://duckduckgo.com/" },
    { name: "TOSINT", category: "osint", description: "OSINT tool for Telegram", source: "Git", url: "https://github.com/drego85/tosint" },
    { name: "Glit", category: "osint", description: "Git repository OSINT tool", source: "Git", url: "https://github.com/shadawck/glit" },
    { name: "DiscoShell", category: "utilities", description: "Discord shell bot", source: "Git", url: "https://github.com/foozzi/discoshell" },
    { name: "SerpScan", category: "osint", description: "Search engine results page scanner", source: "Docker", url: "https://github.com/evilsocket/serpscan" },
];

// State management
let currentFilter = 'all';
let currentSearch = '';

// Filter and render tools based on current search and filter
function filterAndRenderTools() {
    let filteredTools = toolsData;

    // Apply category filter
    if (currentFilter !== 'all') {
        filteredTools = filteredTools.filter(tool => tool.category === currentFilter);
    }

    // Apply search filter
    if (currentSearch) {
        filteredTools = filteredTools.filter(tool =>
            tool.name.toLowerCase().includes(currentSearch) ||
            tool.description.toLowerCase().includes(currentSearch) ||
            tool.category.toLowerCase().includes(currentSearch)
        );
    }

    renderTools(filteredTools);
    updateToolsCount(filteredTools.length);
}

// Render tools to the grid
function renderTools(tools) {
    const grid = document.getElementById('tools-grid');

    if (tools.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 2rem;">No tools found.</p>';
        return;
    }

    grid.innerHTML = tools.map(tool => createToolCard(tool)).join('');
}

// Create a tool card HTML
function createToolCard(tool) {
    const categoryLabel = tool.category.charAt(0).toUpperCase() + tool.category.slice(1);

    return `
        <div class="tool-card">
            <div class="tool-header">
                <h3 class="tool-name">${tool.name}</h3>
                <span class="tool-category">${categoryLabel}</span>
            </div>
            <p class="tool-description">${tool.description}</p>
            <div class="tool-footer">
                <span class="tool-source">Source: ${tool.source}</span>
                <a href="${tool.url}" target="_blank" rel="noopener noreferrer" class="tool-link">
                    Learn More
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                </a>
            </div>
        </div>
    `;
}

// Update tools count
function updateToolsCount(count) {
    document.getElementById('tools-count').textContent = count;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, toolsData length:', toolsData.length);
    console.log('tools-grid element:', document.getElementById('tools-grid'));
    console.log('tool-search element:', document.getElementById('tool-search'));
    console.log('category-filter element:', document.getElementById('category-filter'));

    // Initial render
    filterAndRenderTools();

    // Search functionality
    const searchInput = document.getElementById('tool-search');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            currentSearch = e.target.value.toLowerCase();
            filterAndRenderTools();
        });
    }

    // Category filter
    const categoryFilter = document.getElementById('category-filter');
    if (categoryFilter) {
        categoryFilter.addEventListener('change', function(e) {
            currentFilter = e.target.value;
            filterAndRenderTools();
        });
    }
});
