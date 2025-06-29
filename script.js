// JavaScript Content - script.js

// Quiz Data
const quizData = [
    {
        question: "What does IaaS stand for?",
        options: ["Infrastructure as a Service", "Internet as a Service", "Information as a Service", "Integration as a Service"],
        correct: 0
    },
    {
        question: "Which of the following is NOT a cloud deployment model?",
        options: ["Public Cloud", "Private Cloud", "Hybrid Cloud", "Local Cloud"],
        correct: 3
    },
    {
        question: "What is the main characteristic of PaaS?",
        options: ["Provides virtual machines", "Provides development platform", "Provides software applications", "Provides network infrastructure"],
        correct: 1
    },
    {
        question: "Which company provides AWS cloud services?",
        options: ["Google", "Microsoft", "Amazon", "IBM"],
        correct: 2
    },
    {
        question: "What is serverless computing?",
        options: ["Computing without servers", "Computing with hidden servers", "Computing where server management is abstracted", "Computing with virtual servers"],
        correct: 2
    }
];

// Topic Content Data
const topicContent = {
    basics: {
        title: "Cloud Computing Basics",
        content: `
            <h3>What is Cloud Computing?</h3>
            <p>Cloud computing is the delivery of computing services including servers, storage, databases, networking, software, analytics, and intelligence over the Internet ("the cloud") to offer faster innovation, flexible resources, and economies of scale.</p>
            
            <h4>Key Characteristics:</h4>
            <ul>
                <li><strong>On-demand self-service:</strong> Users can provision computing capabilities automatically</li>
                <li><strong>Broad network access:</strong> Available over the network through standard mechanisms</li>
                <li><strong>Resource pooling:</strong> Provider's resources are pooled to serve multiple consumers</li>
                <li><strong>Rapid elasticity:</strong> Capabilities can be elastically provisioned and released</li>
                <li><strong>Measured service:</strong> Cloud systems control and optimize resource use</li>
            </ul>
            
            <h4>Benefits:</h4>
            <ul>
                <li>Cost reduction</li>
                <li>Scalability and flexibility</li>
                <li>Automatic updates</li>
                <li>Remote accessibility</li>
                <li>Disaster recovery</li>
            </ul>
        `
    },
    services: {
        title: "Cloud Service Models",
        content: `
            <h3>The Three Main Service Models</h3>
            
            <h4>1. Infrastructure as a Service (IaaS)</h4>
            <p>Provides virtualized computing resources over the internet. Users get virtual machines, storage, and networks.</p>
            <p><strong>Examples:</strong> Amazon EC2, Google Compute Engine, Microsoft Azure VMs</p>
            
            <h4>2. Platform as a Service (PaaS)</h4>
            <p>Provides a platform allowing customers to develop, run, and manage applications without the complexity of building and maintaining infrastructure.</p>
            <p><strong>Examples:</strong> Google App Engine, Heroku, Microsoft Azure App Service</p>
            
            <h4>3. Software as a Service (SaaS)</h4>
            <p>Delivers software applications over the internet, on-demand and typically on a subscription basis.</p>
            <p><strong>Examples:</strong> Gmail, Salesforce, Microsoft Office 365, Dropbox</p>
            
            <div style="margin-top: 20px; padding: 15px; background: #f8f9fa; border-radius: 8px;">
                <strong>Remember:</strong> IaaS gives you the building blocks, PaaS gives you the development platform, and SaaS gives you ready-to-use applications.
            </div>
        `
    },
    deployment: {
        title: "Cloud Deployment Models",
        content: `
            <h3>Types of Cloud Deployment</h3>
            
            <h4>1. Public Cloud</h4>
            <p>Services are delivered over the public internet and shared across organizations. Owned and operated by third-party providers.</p>
            <p><strong>Pros:</strong> Cost-effective, scalable, no maintenance</p>
            <p><strong>Cons:</strong> Less control, security concerns</p>
            
            <h4>2. Private Cloud</h4>
            <p>Cloud infrastructure operated solely for a single organization. Can be managed internally or by third parties.</p>
            <p><strong>Pros:</strong> More control, better security, compliance</p>
            <p><strong>Cons:</strong> Higher costs, limited scalability</p>
            
            <h4>3. Hybrid Cloud</h4>
            <p>Combines public and private clouds, allowing data and applications to be shared between them.</p>
            <p><strong>Pros:</strong> Flexibility, optimized costs, gradual migration</p>
            <p><strong>Cons:</strong> Complex management, integration challenges</p>
            
            <h4>4. Community Cloud</h4>
            <p>Shared infrastructure for specific communities with common concerns (security, compliance, jurisdiction).</p>
            <p><strong>Examples:</strong> Government clouds, healthcare clouds</p>
        `
    },
    security: {
        title: "Cloud Security",
        content: `
            <h3>Cloud Security Fundamentals</h3>
            
            <h4>Key Security Challenges:</h4>
            <ul>
                <li><strong>Data breaches:</strong> Unauthorized access to sensitive data</li>
                <li><strong>Data loss:</strong> Accidental deletion or corruption</li>
                <li><strong>Account hijacking:</strong> Compromised user credentials</li>
                <li><strong>Insider threats:</strong> Malicious activities by authorized users</li>
                <li><strong>API vulnerabilities:</strong> Insecure application programming interfaces</li>
            </ul>
            
            <h4>Security Best Practices:</h4>
            <ul>
                <li><strong>Identity and Access Management (IAM):</strong> Control who has access to what</li>
                <li><strong>Encryption:</strong> Encrypt data in transit and at rest</li>
                <li><strong>Multi-factor Authentication:</strong> Add extra layers of security</li>
                <li><strong>Regular Audits:</strong> Monitor and log all activities</li>
                <li><strong>Backup and Recovery:</strong> Implement disaster recovery plans</li>
                <li><strong>Compliance:</strong> Follow industry standards and regulations</li>
            </ul>
            
            <h4>Shared Responsibility Model:</h4>
            <p>Cloud security is a shared responsibility between the cloud provider and the customer. The provider secures the infrastructure, while the customer secures their data and applications.</p>
        `
    },
    providers: {
        title: "Major Cloud Providers",
        content: `
            <h3>Leading Cloud Service Providers</h3>
            
            <h4>1. Amazon Web Services (AWS)</h4>
            <p>The largest and most comprehensive cloud platform, offering over 200 services.</p>
            <p><strong>Key Services:</strong> EC2, S3, RDS, Lambda, CloudFront</p>
            <p><strong>Strengths:</strong> Market leader, extensive services, global infrastructure</p>
            
            <h4>2. Microsoft Azure</h4>
            <p>Microsoft's cloud platform with strong integration with Microsoft products.</p>
            <p><strong>Key Services:</strong> Virtual Machines, Blob Storage, SQL Database, Functions</p>
            <p><strong>Strengths:</strong> Enterprise integration, hybrid capabilities</p>
            
            <h4>3. Google Cloud Platform (GCP)</h4>
            <p>Google's cloud offering with strong AI/ML and data analytics capabilities.</p>
            <p><strong>Key Services:</strong> Compute Engine, Cloud Storage, BigQuery, Cloud Functions</p>
            <p><strong>Strengths:</strong> AI/ML services, data analytics, competitive pricing</p>
            
            <h4>Other Notable Providers:</h4>
            <ul>
                <li><strong>IBM Cloud:</strong> Enterprise-focused with strong AI capabilities</li>
                <li><strong>Oracle Cloud:</strong> Database-centric cloud services</li>
                <li><strong>Alibaba Cloud:</strong> Leading provider in Asia-Pacific region</li>
            </ul>
        `
    },
    future: {
        title: "Future of Cloud Computing",
        content: `
            <h3>Emerging Trends and Technologies</h3>
            
            <h4>1. Edge Computing</h4>
            <p>Processing data closer to where it's generated, reducing latency and bandwidth usage.</p>
            <p><strong>Applications:</strong> IoT devices, autonomous vehicles, real-time analytics</p>
            
            <h4>2. Serverless Computing</h4>
            <p>Event-driven computing where you only pay for actual compute time used.</p>
            <p><strong>Benefits:</strong> No server management, automatic scaling, cost-effective</p>
            
            <h4>3. Multi-Cloud Strategy</h4>
            <p>Using multiple cloud providers to avoid vendor lock-in and optimize performance.</p>
            
            <h4>4. Artificial Intelligence and Machine Learning</h4>
            <p>Cloud providers are integrating AI/ML services to make these technologies more accessible.</p>
            
            <h4>5. Quantum Computing</h4>
            <p>Cloud-based quantum computing services for solving complex problems.</p>
            
            <h4>6. Sustainability</h4>
            <p>Focus on green computing and carbon-neutral cloud services.</p>
            
            <div style="margin-top: 20px; padding: 15px; background: #e8f5e8; border-radius: 8px;">
                <strong>Future Outlook:</strong> Cloud computing will continue to evolve with more distributed, intelligent, and sustainable solutions.
            </div>
        `
    }
};

// Quiz Variables
let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    initializeQuiz();
    setupNavigation();
});

// Navigation functionality
function setupNavigation() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
}

// Smooth scroll function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Quiz Functions
function initializeQuiz() {
    currentQuestion = 0;
    score = 0;
    selectedAnswer = null;
    displayQuestion();
    updateScore();
}

function displayQuestion() {
    if (currentQuestion < quizData.length) {
        const question = quizData[currentQuestion];
        document.getElementById('question-text').textContent = question.question;
        
        const optionsContainer = document.querySelector('.options');
        optionsContainer.innerHTML = '';
        
        question.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.className = 'option-btn';
            button.textContent = option;
            button.onclick = () => selectAnswer(index);
            optionsContainer.appendChild(button);
        });
        
        document.getElementById('next-btn').disabled = true;
        selectedAnswer = null;
    } else {
        showQuizResults();
    }
}

function selectAnswer(index) {
    selectedAnswer = index;
    const options = document.querySelectorAll('.option-btn');
    
    // Reset all options
    options.forEach(btn => {
        btn.classList.remove('selected', 'correct', 'incorrect');
    });
    
    // Show correct/incorrect answers
    const correctAnswer = quizData[currentQuestion].correct;
    options[correctAnswer].classList.add('correct');
    
    if (index === correctAnswer) {
        score++;
        updateScore();
    } else {
        options[index].classList.add('incorrect');
    }
    
    // Mark selected answer
    options[index].classList.add('selected');
    
    // Enable next button
    document.getElementById('next-btn').disabled = false;
}

function nextQuestion() {
    currentQuestion++;
    displayQuestion();
}

function updateScore() {
    document.getElementById('score').textContent = score;
    document.getElementById('total').textContent = quizData.length;
}

function showQuizResults() {
    const percentage = Math.round((score / quizData.length) * 100);
    const resultHTML = `
        <div class="quiz-results">
            <h3>Quiz Complete!</h3>
            <div class="result-score">
                <div class="score-circle">
                    <span class="score-number">${percentage}%</span>
                </div>
                <p>You scored ${score} out of ${quizData.length} questions correctly!</p>
            </div>
            <div class="result-message">
                ${getResultMessage(percentage)}
            </div>
            <button onclick="initializeQuiz()" class="restart-btn">Take Quiz Again</button>
        </div>
    `;
    
    document.getElementById('quiz-content').innerHTML = resultHTML;
}

function getResultMessage(percentage) {
    if (percentage >= 80) {
        return "<p style='color: #28a745;'><strong>Excellent!</strong> You have a great understanding of cloud computing concepts.</p>";
    } else if (percentage >= 60) {
        return "<p style='color: #ffc107;'><strong>Good job!</strong> You have a solid foundation. Review the topics to improve further.</p>";
    } else {
        return "<p style='color: #dc3545;'><strong>Keep learning!</strong> Review the learning materials and try again.</p>";
    }
}

// Modal Functions
function openModal(topicKey) {
    const modal = document.getElementById('topic-modal');
    const modalBody = document.getElementById('modal-body');
    
    if (topicContent[topicKey]) {
        const topic = topicContent[topicKey];
        modalBody.innerHTML = `
            <h2>${topic.title}</h2>
            ${topic.content}
        `;
        modal.style.display = 'block';
    }
}

function closeModal() {
    const modal = document.getElementById('topic-modal');
    modal.style.display = 'none';
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('topic-modal');
    if (event.target === modal) {
        closeModal();
    }
}

// Add some interactive features
function addInteractiveFeatures() {
    // Add progress bar for quiz
    function updateProgressBar() {
        const progress = ((currentQuestion + 1) / quizData.length) * 100;
        const progressBar = document.querySelector('.progress-bar');
        if (progressBar) {
            progressBar.style.width = progress + '%';
        }
    }

    // Add animations to topic cards
    function observeElements() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        });

        document.querySelectorAll('.topic-card, .resource-card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(card);
        });
    }

    // Initialize when DOM is loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', observeElements);
    } else {
        observeElements();
    }
}

// Call interactive features
addInteractiveFeatures();

// Add keyboard navigation for quiz
document.addEventListener('keydown', function(event) {
    if (event.key >= '1' && event.key <= '4') {
        const optionIndex = parseInt(event.key) - 1;
        const options = document.querySelectorAll('.option-btn');
        if (options[optionIndex]) {
            selectAnswer(optionIndex);
        }
    } else if (event.key === 'Enter' || event.key === ' ') {
        const nextBtn = document.getElementById('next-btn');
        if (nextBtn && !nextBtn.disabled) {
            nextQuestion();
        }
    }
});

// Add search functionality for topics
function searchTopics(query) {
    const topics = document.querySelectorAll('.topic-card');
    query = query.toLowerCase();
    
    topics.forEach(topic => {
        const title = topic.querySelector('h3').textContent.toLowerCase();
        const description = topic.querySelector('p').textContent.toLowerCase();
        
        if (title.includes(query) || description.includes(query)) {
            topic.style.display = 'block';
        } else {
            topic.style.display = 'none';
        }
    });
}

// Theme toggle functionality
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    localStorage.setItem('darkTheme', isDark);
}

// Load saved theme
function loadTheme() {
    const savedTheme = localStorage.getItem('darkTheme');
    if (savedTheme === 'true') {
        document.body.classList.add('dark-theme');
    }
}

// Initialize theme on load
document.addEventListener('DOMContentLoaded', loadTheme);