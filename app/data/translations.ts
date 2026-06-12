export type Locale = "en" | "ko" | "uz";

export interface ProjectData {
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  contributions?: string[];
  challenges?: string;
  deployment?: string;
  githubUrl?: string;
  demoUrl?: string;
  image: string;
}

export interface TranslationSchema {
  nav: {
    about: string;
    skills: string;
    experience: string;
    projects: string;
    contact: string;
  };
  hero: {
    greeting: string;
    name: string;
    title: string;
    statusOpen: string;
    statusVisa: string;
    ctaWork: string;
    ctaContact: string;
    ctaResume: string;
    experienceYears: string;
    projectsCount: string;
    automationTitle: string;
  };
  about: {
    title: string;
    heading: string;
    paragraph1: string;
    paragraph2: string;
    mathTitle: string;
    mathText: string;
    languagesTitle: string;
    fluent: string;
    conversational: string;
    native: string;
    enLang: string;
    koLang: string;
    uzLang: string;
  };
  skills: {
    title: string;
    subtitle: string;
    categories: {
      languages: string;
      backend: string;
      frontend: string;
      ai: string;
      databases: string;
      devops: string;
    };
  };
  experience: {
    title: string;
    subtitle: string;
    present: string;
    roles: {
      ai: {
        title: string;
        company: string;
        location: string;
        duration: string;
        points: string[];
      };
      epam: {
        title: string;
        company: string;
        location: string;
        duration: string;
        points: string[];
      };
    };
    education: {
      title: string;
      university: string;
      degree: string;
      duration: string;
      location: string;
    };
  };
  projects: {
    title: string;
    subtitle: string;
    viewDetails: string;
    close: string;
    techUsed: string;
    mainFeatures: string;
    contributionsTitle: string;
    challengesTitle: string;
    deploymentTitle: string;
    list: ProjectData[];
  };
  contact: {
    title: string;
    subtitle: string;
    nameLabel: string;
    emailLabel: string;
    messageLabel: string;
    sendButton: string;
    sending: string;
    successMessage: string;
    contactInfo: string;
    phone: string;
    email: string;
    github: string;
    location: string;
    locationVal: string;
  };
}

export const translations: Record<Locale, TranslationSchema> = {
  en: {
    nav: {
      about: "About Me",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I'm",
      name: "Abdulboriy Rakhmatullaev",
      title: "Full-Stack & AI Automation Engineer",
      statusOpen: "Open to Opportunities",
      statusVisa: "D-10 Job Seeker Visa (Korea)",
      ctaWork: "View Projects",
      ctaContact: "Get in Touch",
      ctaResume: "Download Resume",
      experienceYears: "Years Experience",
      projectsCount: "Projects Built",
      automationTitle: "Workflows Automated",
    },
    about: {
      title: "About Me",
      heading: "Building clean, functional, and automated digital solutions.",
      paragraph1: "My journey into web development began with a deep curiosity for technology and design. I enjoy creating applications that are not only functional but also intuitive and visually appealing. Starting with JavaScript, I quickly discovered the excitement of solving complex logical problems through clean code.",
      paragraph2: "Over the past three years, I've gained hands-on experience building scalable applications, designing robust APIs, and creating automation workflows. I focus heavily on performance optimization and user experience.",
      mathTitle: "Mathematical Foundation",
      mathText: "With a strong background in mathematics, I bring logical thinking, rigorous structuring, and analytical problem-solving to every database layout and system architecture I build.",
      languagesTitle: "Conversational Languages",
      fluent: "Fluent (Professional)",
      conversational: "Conversational (Business ready)",
      native: "Native",
      enLang: "English",
      koLang: "Korean",
      uzLang: "Uzbek",
    },
    skills: {
      title: "Skills & Expertise",
      subtitle: "My technical toolkit span across multiple layers of development",
      categories: {
        languages: "Programming Languages",
        backend: "Backend Engineering",
        frontend: "Frontend Development",
        ai: "AI & Automation",
        databases: "Databases & Cache",
        devops: "DevOps & Deployment",
      },
    },
    experience: {
      title: "Work & Education",
      subtitle: "Professional path and academic background",
      present: "Present",
      roles: {
        ai: {
          title: "AI & Automation Engineer",
          company: "Remote / Contract",
          location: "Global",
          duration: "2024.03 - Present",
          points: [
            "n8n Workflow Automation: Built production-grade backend pipelines using n8n to automate manual processes, significantly cutting down execution time and improving cross-platform data efficiency.",
            "AI Message Bridge: Developed a high-performance, lightweight gateway directly connecting Claude LLM API with Slack, reducing response latency without third-party middleware packages.",
            "AI Optimization: Designed optimized Prompt Engineering structures utilizing Claude & Gemini, increasing output accuracy, system safety, and strict alignment with business logic."
          ],
        },
        epam: {
          title: "Backend Developer",
          company: "EPAM Systems",
          location: "Tashkent, Uzbekistan",
          duration: "2020.01 - 2022.02",
          points: [
            "MSA Migration: Architected scalable microservices using Node.js, TypeScript, and FastAPI (Python), migrating legacy monoliths to handle high traffic loads.",
            "Performance Optimization: Restructured DB indexing and integrated a Redis caching layer, successfully reducing heavy query loads and boosting API response speed by 25%.",
            "System Stability: Mitigated system memory leaks during high-volume batch jobs and stabilized asynchronous background workers using NestJS Schedule."
          ],
        },
      },
      education: {
        title: "Education & Visa",
        university: "Dongyang University",
        degree: "Bachelor of Computer Science / Engineering",
        duration: "2022.03 - 2026.08",
        location: "South Korea",
      },
    },
    projects: {
      title: "Featured Work",
      subtitle: "Recent projects demonstrating full-stack engineering and architecture",
      viewDetails: "View Project",
      close: "Close details",
      techUsed: "Technologies Used",
      mainFeatures: "Key Features & Functionality",
      contributionsTitle: "My Role & Contributions",
      challengesTitle: "Challenges Faced & Solutions",
      deploymentTitle: "Deployment & Infrastructure",
      list: [
        {
          title: "ViserPet",
          subtitle: "Modern Pet E-Commerce Platform",
          description: "A comprehensive pet shop e-commerce platform that combines dynamic product filtering, direct seller tools, and real-time chat operations.",
          longDescription: "ViserPet is a production-ready e-commerce ecosystem designed to deliver a smooth and user-friendly shopping experience across both desktop and mobile devices. It combines a clean, engaging UI with a robust and highly scalable monorepo backend architecture.",
          technologies: ["Next.js (App Router)", "TypeScript", "SCSS Modules", "MUI", "NestJS", "GraphQL (Apollo)", "MongoDB", "WebSockets"],
          features: [
            "Role-based User Authentication & Authorization (User, Agent, Admin).",
            "Followers System: Users can follow or unfollow other members/sellers and track social connections.",
            "Seller Dashboard: Dedicated panel to add, edit, delete listings, track product status (On Sale / Sold), and monitor page views.",
            "Admin Panel: Full control over users, listings, pet categories, articles, notices, and FAQs.",
            "Dynamic Filtering System: Search bar, category filter (Dog, Cat, Fish, Small Animal, Bird), discount filters, and price ranges fully synchronized with the browser URL.",
            "Real-time notifications and live chatting powered by WebSockets."
          ],
          contributions: [
            "Architected the backend monorepo containing services for Main API, batch processing, and shared libraries.",
            "Configured GraphQL API endpoints utilizing NestJS and Apollo Server.",
            "Implemented the real-time websocket connections to support live messaging and instant notification delivery.",
            "Designed and optimized the database schema supporting complex, high-performance product listings."
          ],
          challenges: "Designing a flexible product filtering structure that matches frontend URL search params with backend GraphQL queries. Resolved by creating a dynamic query builder in NestJS that dynamically compiles MongoDB filter queries based on Apollo variables.",
          deployment: "Deployed on a Linux-based VPS using Docker Compose. High security measures are maintained with firewall configuration, secure DNS, and persistent data storage through Docker volumes.",
          image: "/images/projects/viserpet.png"
        },
        {
          title: "NikeStore",
          subtitle: "Sneaker E-Commerce Platform",
          description: "Full-stack online sneakers store featuring modular administration panels and dynamic cart behaviors.",
          longDescription: "Nike Store is a full-stack e-commerce project built to provide a modern, smooth online shopping experience for sneaker enthusiasts. The platform allows users to browse products, view details, manage items in a cart, and complete orders.",
          technologies: ["React", "TypeScript", "Material UI", "Express.js", "MongoDB", "Redux Toolkit", "Local Storage API"],
          features: [
            "Role-based authentication supporting customer and store administrator views.",
            "Product CRUD: Admins can seamlessly add, edit, and delete product items.",
            "Dynamic shopping cart utilizing Redux Toolkit with persistent state saved in Local Storage.",
            "Order processing and backend status tracking."
          ],
          contributions: [
            "Designed the responsive frontend components using React and Material UI.",
            "Developed the Express.js REST API for secure product retrieval, order validation, and user management.",
            "Integrated MongoDB with Mongoose for robust data model handling."
          ],
          challenges: "Synchronizing state across multiple React components while maintaining item counts after page reloads. Solved by integrating Redux Toolkit alongside a middleware sync mechanism to local storage.",
          deployment: "Deployed on a Linux-based VPS using PM2 for backend process monitoring and Nginx as a reverse proxy for secure domain routing.",
          image: "/images/projects/nikestore.png"
        },
        {
          title: "NoMakler",
          subtitle: "Real Estate Listing Marketplace",
          description: "Comprehensive property search, comparisons, and rental listing platform tailored for Uzbekistan.",
          longDescription: "Nomakler is a real estate marketplace designed for browsing, searching, and comparing property listings (buying, selling, renting) in Uzbekistan. Focuses on speed, intuitive filter parameters, and responsive design.",
          technologies: ["React", "HTML5", "CSS3", "JavaScript", "REST APIs", "Responsive Layouts"],
          features: [
            "Compact listing layout optimized for quick scanning.",
            "Side-by-side comparison matrix for property prices, sizes, and locations.",
            "Fast search functionality with rich metadata indicators.",
            "Direct contact actions to quickly connect buyers with property listing owners."
          ],
          contributions: [
            "Enhanced the property listings page layout and search features.",
            "Focused heavily on UI clarity, layout structure, and mobile responsiveness to support seamless user interaction.",
            "Polished frontend CSS and component architecture for smooth navigation transitions."
          ],
          challenges: "Ensuring complex side-by-side comparisons remain legible and functional on narrow mobile viewports. Resolved using CSS Grid and dynamic scrolling columns to collapse non-essential columns on mobile.",
          image: "/images/projects/nomakler.png"
        },
        {
          title: "Evos Restaurant",
          subtitle: "Digital Menu & Platform Showcase",
          description: "Collaborated on maintaining and enhancing the digital menu and marketing platform for one of Uzbekistan's largest fast-food chains.",
          longDescription: "Evos Restaurant platform showcases menus, promotions, branch locations, and careers. The focus was to create a highly visual, modern UI to showcase Turkish-style kebabs, shawarma, and combo packs.",
          technologies: ["JavaScript", "HTML5", "CSS3", "UI/UX Enhancements", "Performance Optimization"],
          features: [
            "Interactive digital menu showcasing products, pricing, and ingredients.",
            "Promo banners slider and campaign information.",
            "Optimized asset delivery for fast image loading of menu items."
          ],
          contributions: [
            "Contributed to UI maintenance and layout polish.",
            "Improved the performance of high-resolution food images to boost site loading speeds.",
            "Assisted in refining user interactions across promotional pages."
          ],
          image: "/images/projects/evos.png"
        },
        {
          title: "Cambridge Online",
          subtitle: "Interactive Educational Platform",
          description: "A scale academic web platform offering online assessments, course selections, and certificate verifications in Uzbekistan.",
          longDescription: "Cambridge Online is an educational hub providing students and teachers access to active course listings, study materials, and mock IELTS exams. Built with security and visual appeal in mind.",
          technologies: ["React", "TypeScript", "Responsive UI", "Component Refactoring", "CSS Modules"],
          features: [
            "Course search and syllabus overview sections.",
            "Interactive student dashboard for online exams and mock grading.",
            "Mock test certificate verification utility."
          ],
          contributions: [
            "Refactored user-facing frontend components to improve load performance.",
            "Worked closely on responsive layout adjustments to support tablets and mobile screens.",
            "Optimized frontend bundle sizes and polished visual details for an engaging learning experience."
          ],
          image: "/images/projects/cambridge.png"
        },
        {
          title: "Crafty Ramen",
          subtitle: "Restaurant Showcase & E-Commerce",
          description: "Developed and refined frontend elements for a modern restaurant showcasing menus and dining operations.",
          longDescription: "Crafty Ramen is a visually rich web application built to display restaurant menus, promote brand identity, and support discovery of contemporary ramen dishes.",
          technologies: ["JavaScript", "HTML5", "CSS3", "Visual Polish", "Responsive Design"],
          features: [
            "Rich visual food presentations and menu sections.",
            "Promotions builder and brand identity pages.",
            "Intuitive header navigation with smooth transitions."
          ],
          contributions: [
            "Developed layout sections and styled pages for responsive consistency.",
            "Worked on interactive hover effects and visual micro-animations to increase engagement.",
            "Optimized layout responsiveness on different viewport sizes."
          ],
          image: "/images/projects/craftyramen.png"
        }
      ]
    },
    contact: {
      title: "Contact Me",
      subtitle: "Let's connect! Open for opportunities and engineering roles in Korea or Remote.",
      nameLabel: "Your Name",
      emailLabel: "Email Address",
      messageLabel: "Message",
      sendButton: "Send Message",
      sending: "Sending...",
      successMessage: "Thank you! Your message has been sent successfully.",
      contactInfo: "Contact Details",
      phone: "Phone",
      email: "Email",
      github: "GitHub",
      location: "Location",
      locationVal: "South Korea (D-10 Job Seeker Visa)",
    },
  },
  ko: {
    nav: {
      about: "소개",
      skills: "기술",
      experience: "경력",
      projects: "프로젝트",
      contact: "연락처",
    },
    hero: {
      greeting: "안녕하세요,",
      name: "락마툴라에브 압둘보리",
      title: "풀스택 및 AI 자동화 엔지니어",
      statusOpen: "채용 기회 열려있음",
      statusVisa: "구직활동 비자 (D-10 보유)",
      ctaWork: "프로젝트 보기",
      ctaContact: "문의하기",
      ctaResume: "이력서 다운로드",
      experienceYears: "년 개발 경력",
      projectsCount: "구축한 프로젝트",
      automationTitle: "자동화한 워크플로우",
    },
    about: {
      title: "자기 소개",
      heading: "깔끔하고 기능적이며 자동화된 디지털 솔루션을 만듭니다.",
      paragraph1: "웹 개발에 대한 저의 여정은 기술과 디자인에 대한 강한 호기심에서 시작되었습니다. 기능적일 뿐만 아니라 직관적이고 시각적으로 매력적인 애플리케이션을 만드는 것을 좋아합니다. JavaScript로 개발을 시작한 이후, 깔끔한 코드를 통해 복잡한 논리 문제를 해결하는 즐거움을 알게 되었습니다.",
      paragraph2: "지난 3년 동안 확장 가능한 애플리케이션을 구축하고 안정적인 API를 설계하며, 업무를 자동화하는 워크플로우를 직접 만들어왔습니다. 특히 성능 최적화와 사용자 경험 향상에 깊은 관심을 두고 있습니다.",
      mathTitle: "수학적 사고 방식",
      mathText: "수학 전공 분야의 견고한 학업 배경을 바탕으로, 데이터베이스 구조 설계 및 전체 시스템 아키텍처를 기획할 때 논리적 사고와 엄격한 구조화, 그리고 분석적인 문제 해결 능력을 결합하여 적용합니다.",
      languagesTitle: "가능 언어",
      fluent: "유창함 (업무 가능)",
      conversational: "비즈니스 회화 가능",
      native: "모국어",
      enLang: "영어",
      koLang: "한국어",
      uzLang: "우즈베크어",
    },
    skills: {
      title: "기술 스택",
      subtitle: "다양한 개발 영역에 걸쳐 축적한 저의 기술 역량입니다",
      categories: {
        languages: "프로그래밍 언어",
        backend: "백엔드 엔지니어링",
        frontend: "프론트엔드 개발",
        ai: "AI 및 자동화",
        databases: "데이터베이스 및 캐시",
        devops: "데브옵스 및 배포",
      },
    },
    experience: {
      title: "경력 및 학력",
      subtitle: "프로페셔널 커리어와 학업 이력",
      present: "현재",
      roles: {
        ai: {
          title: "AI 및 자동화 엔지니어",
          company: "원격 / 프리랜서 계약",
          location: "글로벌",
          duration: "2024.03 - 현재",
          points: [
            "n8n 워크플로우 자동화: n8n을 사용하여 수동 프로세스를 자동화하는 프로덕션급 백엔드 파이프라인을 구축하여 실행 시간을 크게 단축하고 교차 플랫폼 데이터 효율성을 개선했습니다.",
            "AI 메시지 브릿지: Claude LLM API와 Slack을 직접 연결하는 고성능 경량 게이트웨이를 개발하여 타사 미들웨어 패키지 없이 응답 대기 시간을 단축했습니다.",
            "AI 최적화: Claude 및 Gemini를 활용하여 최적화된 프롬프트 엔지니어링 구조를 설계함으로써 결과물의 정확도, 시스템 안정성 및 비즈니스 로직과의 일관성을 높였습니다."
          ],
        },
        epam: {
          title: "백엔드 개발자",
          company: "EPAM Systems",
          location: "우즈베키스탄 타슈켄트",
          duration: "2020.01 - 2022.02",
          points: [
            "MSA 마이그레이션: Node.js, TypeScript 및 FastAPI (Python)를 활용하여 확장 가능한 마이크로서비스 아키텍처를 설계하고 기존 모놀리식 시스템을 마이그레이션하여 대용량 트래픽을 처리했습니다.",
            "성능 최적화: DB 인덱싱 구조를 재설정하고 Redis 캐싱 레이어를 통합하여 복잡한 쿼리 부하를 성공적으로 줄이고 API 응답 속도를 25% 향상시켰습니다.",
            "시스템 안정성: 대용량 배치 작업 중 시스템 메모리 누수 문제를 해결하고 NestJS Schedule을 활용하여 비동기 백그라운드 워커의 안정성을 확보했습니다."
          ],
        },
      },
      education: {
        title: "학업 및 비자 정보",
        university: "동양대학교",
        degree: "컴퓨터공학과 학사 학위",
        duration: "2022.03 - 2026.08",
        location: "대한민국",
      },
    },
    projects: {
      title: "주요 프로젝트",
      subtitle: "풀스택 엔지니어링 및 시스템 설계를 보여주는 대표 프로젝트입니다",
      viewDetails: "자세히 보기",
      close: "닫기",
      techUsed: "사용 기술",
      mainFeatures: "주요 기능",
      contributionsTitle: "담당 역할 및 기여도",
      challengesTitle: "문제점 및 해결 방안",
      deploymentTitle: "배포 및 인프라",
      list: [
        {
          title: "ViserPet",
          subtitle: "현대적인 반려동물 쇼핑몰 플랫폼",
          description: "동적 제품 필터링, 판매자 전용 관리 도구 및 실시간 채팅을 제공하는 풀스택 반려동물 쇼핑 플랫폼입니다.",
          longDescription: "ViserPet은 모바일과 데스크톱 전반에서 매끄럽고 편리한 쇼핑 환경을 제공하도록 설계된 상용 수준의 이커머스 생태계입니다. 깔끔한 UI 디자인에 모노레포 구조로 설계된 확장성 높은 NestJS 백엔드를 결합했습니다.",
          technologies: ["Next.js (App Router)", "TypeScript", "SCSS Modules", "MUI", "NestJS", "GraphQL (Apollo)", "MongoDB", "WebSockets"],
          features: [
            "사용자 역할 기반 인증 및 권한 부여 (구매자, 판매자, 관리자).",
            "팔로워 시스템: 다른 회원이나 판매자를 팔로우/언팔로우하여 관계망을 관리.",
            "판매자 대시보드: 제품 등록, 수정, 삭제 및 판매 상태 변경(판매중/품절), 상품 조회수 분석 전용 UI 제공.",
            "어드민 패널: 가입 회원 관리, 상품 승인/삭제, 반려동물 카테고리 설정, 공지사항 및 FAQ 관리 기능.",
            "동적 필터링 시스템: 키워드 검색, 카테고리(강아지, 고양이, 물고기, 소동물, 조류), 할인 혜택, 가격 범위 필터가 브라우저 URL 쿼리 파라미터와 동기화.",
            "WebSockets을 활용한 실시간 알림 기능 및 일대일 라이브 채팅."
          ],
          contributions: [
            "메인 API 서비스, 배치 작업기 및 공용 라이브러리를 포함한 백엔드 모노레포 설계.",
            "NestJS 및 Apollo Server를 활용하여 전체 GraphQL API 엔드포인트 기획 및 구현.",
            "실시간 다대다 메시징 및 시스템 알림 배포를 위한 WebSocket 통신 모듈 구축.",
            "대용량 조회를 고려한 MongoDB 인덱스 및 스키마 설계 최적화."
          ],
          challenges: "사용자가 선택하는 다양한 검색 조합을 브라우저 URL 쿼리와 연동하고, 이를 백엔드 GraphQL 쿼리에 동적으로 바인딩하는 구조 설계의 복잡함이 있었습니다. 이를 해결하기 위해 NestJS에서 아폴로 변수에 대응해 런타임에 최적화된 MongoDB 파이프라인 쿼리를 자동 빌드하는 Dynamic Query Builder 모듈을 독자적으로 구현하여 응답 속도를 개선했습니다.",
          deployment: "Docker Compose 환경 기반의 Linux 가상 전용 서버(VPS)에 배포되었습니다. 도커 볼륨을 사용해 저장 데이터를 격리하고, 방화벽 규칙 지정 및 보안 DNS를 세팅하여 안정성을 갖추었습니다.",
          image: "/images/projects/viserpet.png"
        },
        {
          title: "NikeStore",
          subtitle: "스니커즈 전문 이커머스 웹사이트",
          description: "상태 관리가 포함된 장바구니와 관리자 패널을 제공하는 스니커즈 온라인 쇼핑몰입니다.",
          longDescription: "Nike Store는 스니커즈 매니아를 위해 깔끔하고 직관적인 가상 결제 프로세스를 지향하여 개발한 풀스택 쇼핑 플랫폼입니다. 사용자는 제품을 필터링하고 상세한 상태 정보를 탐색한 뒤 주문할 수 있습니다.",
          technologies: ["React", "TypeScript", "Material UI", "Express.js", "MongoDB", "Redux Toolkit", "Local Storage API"],
          features: [
            "일반 유저와 입점 판매자 간의 권한 전환 및 역할 기반의 로그인 세션 구현.",
            "스니커즈 등록, 편집 및 삭제 기능(CRUD).",
            "Redux Toolkit을 활용하고 로컬 스토리지를 브릿지로 결합한 영속적인 장바구니 상태 유지.",
            "주문 진행 상태 처리 및 서버 통계 모니터링."
          ],
          contributions: [
            "React 및 Material UI 컴포넌트를 설계하여 모바일 반응형 프론트엔드 제작.",
            "주문 및 제품 관리, 데이터 연동을 위한 Express.js REST API 개발.",
            "Mongoose 모듈 기반의 MongoDB 데이터 모델링 구조 개선."
          ],
          challenges: "새로고침 시에도 장바구니 내역과 선택한 스니커즈 수량이 일관되게 남아있도록 프론트엔드 상태를 바인딩해야 했습니다. Redux Toolkit 슬라이스를 생성하는 과정에 Local Storage API와 자동 동기화되는 커스텀 미들웨어를 구축해 문제를 안정적으로 해결했습니다.",
          deployment: "PM2 프로세스 매니저를 탑재한 Linux VPS에 탑재하고, Nginx 웹 서버의 역방향 프록시(Reverse Proxy)를 지정하여 SSL 보안 연결을 연동했습니다.",
          image: "/images/projects/nikestore.png"
        },
        {
          title: "NoMakler",
          subtitle: "부동산 실매물 거래 및 중개 플랫폼",
          description: "우즈베키스탄 지역을 타겟으로 빠르고 직관적인 매물 비교 및 임대/매매 검색 서비스를 제공합니다.",
          longDescription: "Nomakler는 우즈베키스탄 전역의 매물 정보를 손쉽게 등록하고 조건에 맞게 필터링하여 일대일 맞춤형으로 비교 분석할 수 있는 반응형 부동산 포털입니다.",
          technologies: ["React", "HTML5", "CSS3", "JavaScript", "REST APIs", "Responsive Layouts"],
          features: [
            "사용자가 다량의 매물을 빠르게 파악할 수 있도록 최적화된 리스트 디자인.",
            "매물의 가격, 평형, 위치 등의 조건을 한눈에 비교할 수 있는 가로 배열 비교 카드 제공.",
            "필수 메타데이터 중심의 상세 필터 및 즉각적인 소유주 문의(전화연결) 기능."
          ],
          contributions: [
            "매물 상세 리스트 페이지 및 맞춤형 통합 검색 콤보박스 인터페이스 개선.",
            "UX 사용성을 대폭 강화하기 위해 컴포넌트의 반응형 CSS 스타일과 레이아웃 고도화 담당.",
            "브라우저 호환성을 유지하며 매칭 매물 리프레시 딜레이 제거."
          ],
          challenges: "여러 부동산 매물을 비교하는 테이블이 좁은 모바일 화면에서 깨지거나 가독성이 현저히 떨어지는 문제를 직면했습니다. CSS Grid 구조 내에 가로 스크롤 열을 삽입하고 화면이 좁아질 때 중요하지 않은 정보 열은 자동으로 아코디언 메뉴로 압축되는 반응형 컬럼 방식을 기획하여 해결했습니다.",
          image: "/images/projects/nomakler.png"
        },
        {
          title: "Evos Restaurant",
          subtitle: "프랜차이즈 브랜드 공식 사이트 관리",
          description: "우즈베키스탄 최대 패스트푸드 체인인 EVOS 브랜드 웹사이트의 제품 및 지점 정보 개선에 참여했습니다.",
          longDescription: "Evos 웹 서비스는 전국의 매장 위치와 최신 프로모션, 시즌별 콤보 세트 메뉴 정보를 전달합니다. 대외 브랜드 가치를 높이기 위해 이미지 로딩 효율성을 최적화하는 데 비중을 두었습니다.",
          technologies: ["JavaScript", "HTML5", "CSS3", "UI/UX Enhancements", "Performance Optimization"],
          features: [
            "소비자가 즐겨찾는 햄버거, 케밥 메뉴의 재료 성분 및 가격 상세 팝업.",
            "프로모션 캠페인 배너 슬라이더.",
            "매장 위치 기반 지점 검색 기능."
          ],
          contributions: [
            "전반적인 UI 레이아웃 리팩토링 및 픽셀 단위 마감 완성.",
            "고해상도 제품 이미지 서빙 효율을 극대화하여 첫 페이지 로딩 속도를 향상시킴.",
            "사용자 이벤트(클릭 및 호버)에 작동하는 부드러운 애니메이션 인터랙션 보정."
          ],
          image: "/images/projects/evos.png"
        },
        {
          title: "Cambridge Online",
          subtitle: "어학 교육 및 IELTS 평가 모의시험 플랫폼",
          description: "수강 신청, 디지털 문제 풀이, 자격증 인증이 유기적으로 통합된 종합 교육용 학습 서비스입니다.",
          longDescription: "Cambridge Online은 모의 IELTS 평가를 디지털 환경에서 치르고 성적표를 보관할 수 있도록 돕는 실시간 학원 맞춤형 온라인 사이트입니다.",
          technologies: ["React", "TypeScript", "Responsive UI", "Component Refactoring", "CSS Modules"],
          features: [
            "코스 탐색, 강의 시청 및 세부 커리큘럼 소개 레이아웃.",
            "모의고사 진행 시 실시간 잔여 시간 카운트다운 타이머 및 답안 자동 제출 기능.",
            "성적 유효성 확인을 위한 인증 번호 대조 모듈."
          ],
          contributions: [
            "프론트엔드 모듈의 재사용성을 극대화하기 위해 다수의 공통 컴포넌트 리팩토링 수행.",
            "태블릿과 모바일 전용 뷰의 마크업 품질을 다듬어 수험생이 기기에 무관하게 이용하도록 개발.",
            "리액트 가상 돔 렌더링 최적화를 통한 입력 반응 지연 현상 단축."
          ],
          image: "/images/projects/cambridge.png"
        },
        {
          title: "Crafty Ramen",
          subtitle: "트렌디 레스토랑 온라인 메뉴 브랜딩",
          description: "음식점 소개 및 식재료 주문을 유도하는 감각적인 브랜드 사이트의 프론트엔드를 고도화했습니다.",
          longDescription: "Crafty Ramen은 시각적 몰입도가 높은 고화질 제품 카드 중심의 레스토랑 웹사이트입니다. 브랜드 정체성을 담은 마이크로 호버 효과 개발에 주안점을 두었습니다.",
          technologies: ["JavaScript", "HTML5", "CSS3", "Visual Polish", "Responsive Design"],
          features: [
            "라멘 종류별 화려한 이미지 중심의 다이내믹 메뉴 보드.",
            "방문 예약 및 포장 판매 안내 섹션.",
            "스크롤 트래킹을 통한 상단 헤더 숨김/노출 애니메이션."
          ],
          contributions: [
            "페이지 전체 그리드 레이아웃의 비율을 설계하여 크로스 브라우저 정렬 일치.",
            "메뉴 카드 호버 시 발생하는 부드러운 확대 및 정보 오버레이 전환 애니메이션 코딩.",
            "기기별 최적 중단점(Breakpoints) 설정을 통한 모바일 웹 화면 완성."
          ],
          image: "/images/projects/craftyramen.png"
        }
      ]
    },
    contact: {
      title: "연락처",
      subtitle: "협업 제안이나 풀스택 및 AI 자동화 엔지니어 채용 관련 문의는 언제나 환영합니다.",
      nameLabel: "성함",
      emailLabel: "이메일 주소",
      messageLabel: "메시지",
      sendButton: "메시지 보내기",
      sending: "전송 중...",
      successMessage: "감사합니다! 메시지가 성공적으로 전송되었습니다.",
      contactInfo: "연락처 정보",
      phone: "전화번호",
      email: "이메일",
      github: "GitHub",
      location: "지역",
      locationVal: "대한민국 (구직활동 D-10 비자 보유)",
    },
  },
  uz: {
    nav: {
      about: "Men Haqimda",
      skills: "Ko'nikmalar",
      experience: "Tajriba",
      projects: "Loyihalar",
      contact: "Aloqa",
    },
    hero: {
      greeting: "Salom, men",
      name: "Abdulboriy Rakhmatullaev",
      title: "Full-Stack & AI Automation Engineer",
      statusOpen: "Hamkorlikka ochiqman",
      statusVisa: "D-10 Ish Qidiruvchi Vizasi (Koreya)",
      ctaWork: "Loyihalarni ko'rish",
      ctaContact: "Bog'lanish",
      ctaResume: "Rezumeni yuklash",
      experienceYears: "Yillik Tajriba",
      projectsCount: "Yaratilgan Loyihalar",
      automationTitle: "Avtomatlashtirilgan Ishlar",
    },
    about: {
      title: "Men Haqimda",
      heading: "Toza, funktsional va avtomatlashtirilgan raqamli yechimlar yarataman.",
      paragraph1: "Dasturlash dunyosiga kirib kelishim texnologiya va dizaynga bo'lgan kuchli qiziqishimdan boshlangan. Men nafaqat funktsional, balki tushunarli va vizual jihatdan jozibador ilovalar yaratishni yaxshi ko'raman. Dastlab JavaScript-dan boshlab, toza kod yozish orqali murakkab mantiqiy masalalarni hal qilish menga zavq bag'ishlashini anglab yetdim.",
      paragraph2: "Oxirgi 3 yil davomida men kengayuvchi ilovalar qurish, ishonchli API loyihalash va avtomatlashtirish jarayonlarini integratsiya qilish bo'yicha amaliy tajriba orttirdim. Asosiy e'tiborimni ishlash tezligi (performance) va foydalanuvchi qulayligiga qarataman.",
      mathTitle: "Matematik Asos",
      mathText: "Matematika yo'nalishidagi kuchli bilimim loyihalarimda mantiqiy fikrlash, qat'iy tizimlashtirish va ma'lumotlar bazasi hamda arxitekturani eng mukammal tarzda loyihalashda yordam beradi.",
      languagesTitle: "Muloqot tillari",
      fluent: "Erkin suhbatlasha oladi (professional)",
      conversational: "Biznes darajasida muloqotga tayyor",
      native: "Ona tili",
      enLang: "Ingliz tili",
      koLang: "Koreys tili",
      uzLang: "O'zbek tili",
    },
    skills: {
      title: "Ko'nikmalar va Texnologiyalar",
      subtitle: "Dasturlash sohasidagi texnik bilimlarim ro'yxati",
      categories: {
        languages: "Dasturlash tillari",
        backend: "Backend Dasturlash",
        frontend: "Frontend Dasturlash",
        ai: "AI & Avtomatlashtirish",
        databases: "Ma'lumotlar Bazasi & Kesh",
        devops: "DevOps & Server sozlamalari",
      },
    },
    experience: {
      title: "Tajriba va Ta'lim",
      subtitle: "Professional faoliyat va akademik yo'nalishlar",
      present: "Hozirgacha",
      roles: {
        ai: {
          title: "AI & Avtomatlashtirish muhandisi",
          company: "Remote / Shartnoma asosida",
          location: "Global",
          duration: "2024.03 - Hozirgi vaqtgacha",
          points: [
            "n8n Workflow Automation: n8n yordamida mexanik jarayonlarni avtomatlashtirish uchun professional darajadagi backend konveyerlarini yaratdim, bu esa bajarilish vaqtini sezilarli darajada qisqartirdi va platformalararo ma'lumotlar almashinuvi samaradorligini oshirdi.",
            "AI Message Bridge: Uchinchi tomon middleware paketlarisiz javob berish vaqtini qisqartirish maqsadida Claude LLM API-ni bevosita Slack bilan bog'laydigan yuqori samaradorlikka ega, engil shlyuzni (gateway) ishlab chiqdim.",
            "AI Optimization: Claude va Gemini modellaridan foydalangan holda optimallashtirilgan Prompt Engineering tuzilmalarini loyihaladim, bu esa natija aniqligini, tizim xavfsizligini va biznes logikasiga qat'iy muvofiqlikni oshirdi."
          ],
        },
        epam: {
          title: "Backend dasturchi",
          company: "EPAM Systems",
          location: "Toshkent, O'zbekiston",
          duration: "2020.01 - 2022.02",
          points: [
            "MSA Migration: Node.js, TypeScript va FastAPI (Python) texnologiyalari yordamida kengayuvchan mikroxizmatlar arxitekturasini loyihalashtirdim, yuqori yuklamalarni (traffic) boshqarish uchun eski monolit tizimlarni ko'chirdim.",
            "Performance Optimization: Ma'lumotlar bazasini indekslashni qayta tizimlashtirdim va Redis keshlash qatlamini integratsiya qildim, bu esa og'ir so'rovlar yukini kamaytirdi va API tezligini 25% ga oshirdi.",
            "System Stability: Katta hajmdagi davriy (batch) vazifalar davomida xotira leaks (memory leaks) muammolarini bartaraf etdim va NestJS Schedule yordamida asinxron ishlovchi background worker-lar barqarorligini ta'minladim."
          ],
        },
      },
      education: {
        title: "Ta'lim va Viza",
        university: "Dongyang Universiteti",
        degree: "Kompyuter fanlari va muhandisligi bakalavriati",
        duration: "2022.03 - 2026.08",
        location: "Janubiy Koreya",
      },
    },
    projects: {
      title: "Tanlangan Loyihalar",
      subtitle: "Mening full-stack dasturlash va tizimlar arxitekturasidagi tajribamni ko'rsatadigan loyihalar",
      viewDetails: "Batafsil ma'lumot",
      close: "Yopish",
      techUsed: "Ishlatilgan texnologiyalar",
      mainFeatures: "Asosiy funksiyalar va imkoniyatlar",
      contributionsTitle: "Mening rolim va qo'shgan hissam",
      challengesTitle: "Qiyinchiliklar va yechimlar",
      deploymentTitle: "Server va infratuzilma",
      list: [
        {
          title: "ViserPet",
          subtitle: "Zamonaviy uy hayvonlari do'koni platformasi",
          description: "Mahsulotlarni dinamik filtrlash, sotuvchi boshqaruv paneli va real vaqtda chat funksiyalarini birlashtirgan elektron savdo platformasi.",
          longDescription: "ViserPet - bu kompyuter va mobil qurilmalarda silliq hamda qulay xaridlarni ta'minlash uchun mo'ljallangan yirik elektron tijorat ekotizimidir. U toza, chiroyli interfeysni yuqori darajada kengayuvchi monorepo backend tizimi bilan birlashtiradi.",
          technologies: ["Next.js (App Router)", "TypeScript", "SCSS Modules", "MUI", "NestJS", "GraphQL (Apollo)", "MongoDB", "WebSockets"],
          features: [
            "Rollar asosida foydalanuvchi avtorizatsiyasi (Xaridor, Sotuvchi, Admin).",
            "Obunachilar tizimi (Followers): Foydalanuvchilar boshqa a'zolarni yoki sotuvchilarni kuzatishi (follow/unfollow) mumkin.",
            "Sotuvchi boshqaruv paneli: Mahsulot qo'shish, tahrirlash, o'chirish, sotuv holatini (Sotilmoqda / Sotildi) o'zgartirish va ko'rishlar sonini kuzatish.",
            "Admin paneli: Foydalanuvchilarni boshqarish, e'lonlarni tekshirish, hayvonlar kategoriyalarini yaratish hamda yangiliklar va FAQ-ni boshqarish.",
            "Dinamik qidiruv va filtrlash: Nomi, uy hayvoni turi (It, Mushuk, Baliq, Kichik hayvonlar, Qushlar), chegirmalar va narx diapazonlari brauzer URL manzili bilan to'liq sinxronlangan.",
            "WebSockets orqali real vaqtda bildirishnomalar va jonli chat tizimi."
          ],
          contributions: [
            "Backend monorepo arxitekturasini yaratish (Asosiy API xizmati, fon vazifalari (batch processing) va umumiy kutubxonalar).",
            "NestJS va Apollo Server yordamida GraphQL API so'rovlarini loyihalash.",
            "Jonli xabarlar va tezkor bildirishnomalar yuborish uchun WebSocket muloqotini sozlash.",
            "Katta hajmdagi ma'lumotlar uchun MongoDB ma'lumotlar bazasi strukturasini optimallashtirish."
          ],
          challenges: "Murakkab filtrlarni brauzer URL parametrlari bilan sinxronlash va backend GraphQL qidiruvlari bilan bog'lashda qiyinchilik tug'ildi. Buni NestJS da URL parametrlariga muvofiq, MongoDB so'rovlarini avtomatik tarzda yaratadigan maxsus Dynamic Query Builder ishlab chiqish orqali muvaffaqiyatli hal qildim.",
          deployment: "Docker Compose yordamida Linux VPS serveriga joylashtirildi. Ma'lumotlar Docker volumes yordamida xavfsiz saqlanadi, shuningdek xavfsiz DNS va firewall qoidalari sozlangan.",
          image: "/images/projects/viserpet.png"
        },
        {
          title: "NikeStore",
          subtitle: "Krossovkalar elektron do'koni platformasi",
          description: "Sotuvchilar uchun alohida boshqaruv paneli va saqlanadigan savatchaga ega to'liq full-stack do'kon loyihasi.",
          longDescription: "Nike Store - bu krossovka ishqibozlari uchun zamonaviy va qulay xarid imkoniyatini taqdim etuvchi full-stack loyiha. Platformada mahsulotlarni ko'rish, batafsil ma'lumot olish va savatchani boshqarish mumkin.",
          technologies: ["React", "TypeScript", "Material UI", "Express.js", "MongoDB", "Redux Toolkit", "Local Storage API"],
          features: [
            "Foydalanuvchi roli (Mijoz va Do'kon egasi) asosida avtorizatsiyadan o'tish tizimi.",
            "Mahsulot CRUD: Do'kon egalari yangi krossovka qo'shishi, tahrirlashi va o'chirishi mumkin.",
            "Redux Toolkit yordamida yaratilgan hamda Local Storage bilan sinxronlangan dinamik savatcha.",
            "Buyurtmalarni qayta ishlash va backend orqali statusini kuzatish."
          ],
          contributions: [
            "React va Material UI yordamida mobil moslashuvchan dizaynni ishlab chiqish.",
            "Buyurtmalar va mahsulotlarni boshqarish uchun Express.js da REST API yaratish.",
            "Mongoose orqali MongoDB da ma'lumotlar modellarini optimallashtirish."
          ],
          challenges: "Sayt yangilanganda ham savatdagi tovarlar soni va tanlov saqlanib qolishi zarur edi. Buning uchun Redux Toolkit state-larini Local Storage API bilan sinxronlovchi middleware mantiqini yozdim.",
          deployment: "Backend jarayonlarini nazorat qilish uchun PM2 va xavfsiz domen yo'naltirishlari uchun Nginx reverse proxy yordamida Linux VPS-ga joylashtirildi.",
          image: "/images/projects/nikestore.png"
        },
        {
          title: "NoMakler",
          subtitle: "Ko'chmas mulk e'lonlari bozori",
          description: "O'zbekistondagi uylar, kvartiralarni qidirish, solishtirish va ijaraga berish/sotish platformasi.",
          longDescription: "Nomakler - bu O'zbekiston bo'ylab uylar va kvartiralarni sotib olish, sotish hamda ijaraga berish bo'yicha e'lonlar joylashtiriladigan va solishtiriladigan zamonaviy portal.",
          technologies: ["React", "HTML5", "CSS3", "JavaScript", "REST APIs", "Responsive Layouts"],
          features: [
            "Tezkor ko'zdan kechirish uchun optimallashtirilgan ixcham e'lonlar dizayni.",
            "Uylarni narxi, maydoni va joylashuvi bo'yicha yonma-yon solishtirish imkoniyati.",
            "Filtrlar va e'lon egalari bilan tezkor bog'lanish (telefon tugmalari) imkoniyati."
          ],
          contributions: [
            "Uylar ro'yxati va qidiruv tizimining interfeysini yaxshilash.",
            "UX qulayligi, sahifaning turli qurilmalarda to'g'ri ko'rinishi (responsiveness) ustida ish olib borish.",
            "Sahifalararo silliq o'tishlar uchun CSS animatsiyalarini va frontend kodlarini tahrirlash."
          ],
          challenges: "Mobil qurilmalarda uylarni yonma-yon solishtirish jadvali ekranga sig'masdan buzilib ketar edi. Buni CSS Grid va gorizontal skroll elementlari yordamida, shuningdek, ahamiyati kam ma'lumotlarni mobil ekranda avtomatik yashirish orqali hal qildim.",
          image: "/images/projects/nomakler.png"
        },
        {
          title: "Evos Restaurant",
          subtitle: "Raqamli menyu va saytni qo'llab-quvvatlash",
          description: "O'zbekistondagi eng yirik tezkor taomlanish tarmog'i bo'lgan EVOS sayti menyusi va aksiyalarini yaxshilashda ishtirok etdim.",
          longDescription: "Evos platformasi menyular, aksiyalar, filiallar manzillari va vakansiyalarni namoyish etadi. Maqsad foydalanuvchilarga taomlar va combo-larni chiroyli hamda tezkor yetkazib berish dizaynini yaratish bo'lgan.",
          technologies: ["JavaScript", "HTML5", "CSS3", "UI/UX Enhancements", "Performance Optimization"],
          features: [
            "Lavash, kebab va ichimliklar narxlari va tarkibi haqidagi interaktiv menyu.",
            "Aksiyalar va maxsus takliflar slayder paneli.",
            "Eng yaqin filialni qidirish bo'limi."
          ],
          contributions: [
            "UI menyu dizaynini yangilash va uning silliq ishlashini ta'minlash.",
            "Yuqori aniqlikdagi taomlar rasmlarining sayt yuklanishiga ta'sirini kamaytirish uchun ularni siqish va optimallashtirish.",
            "Foydalanuvchi bosish (click) va kursorni olib borish (hover) hodisalari animatsiyasini yaxshilash."
          ],
          image: "/images/projects/evos.png"
        },
        {
          title: "Cambridge Online",
          subtitle: "Interaktiv ta'lim platformasi",
          description: "O'zbekistonda kurslarga yozilish, mock imtihonlari va IELTS sertifikatlarini tekshirish platformasi.",
          longDescription: "Cambridge Online - bu o'quvchilar va o'qituvchilar uchun dars materiallari, mock imtihonlari va IELTS testlaridan o'tish imkonini beruvchi ta'limiy portal.",
          technologies: ["React", "TypeScript", "Responsive UI", "Component Refactoring", "CSS Modules"],
          features: [
            "Kurslar ro'yxati va dars rejalari tanishtiruvi.",
            "Onlayn test topshirish va natijalarni avtomatik baholash tizimi.",
            "Sertifikat haqiqiyligini tekshirish paneli."
          ],
          contributions: [
            "Foydalanuvchi ko'radigan frontend komponentlarini qayta yozish va yuklanish tezligini oshirish.",
            "Ilova planshet va telefon ekranlarida ideal ko'rinishi ustida ishlash.",
            "Frontend fayllar hajmini optimallashtirish va ta'lim jarayonini osonlashtirish uchun vizual elementlarni jozibali qilish."
          ],
          image: "/images/projects/cambridge.png"
        },
        {
          title: "Crafty Ramen",
          subtitle: "Restoran taomlari menyusi va sayti",
          description: "Zamonaviy restoran menyusi va brend taomlarini namoyish qiluvchi sayt frontend qismini yaxshilash.",
          longDescription: "Crafty Ramen - bu yuqori aniqlikdagi taomlar va maxsus ramenlar retseptini namoyish qiluvchi restoran veb-sayti. Maqsad vizual estetikani saqlagan holda foydalanuvchilar buyurtmalarini boshqarishini osonlashtirish edi.",
          technologies: ["JavaScript", "HTML5", "CSS3", "Visual Polish", "Responsive Design"],
          features: [
            "Ramen turlari va narxlari ko'rsatilgan taomlar menyusi.",
            "Bron qilish va olib ketish haqidagi ma'lumotlar bo'limi.",
            "Skroll qilinganda tepa menyu (header) animatsiyasi."
          ],
          contributions: [
            "Sahifa elementlari turli o'lchamdagi ekranlarda bir xil tekislikda turishini ta'minlash.",
            "Kursorni olib borganda (hover) elementlarning kattalashishi va ma'lumotlar chiqishini silliq qilish.",
            "Mobil ekranlar uchun sahifa moslashuvchanligini tugallash."
          ],
          image: "/images/projects/craftyramen.png"
        }
      ]
    },
    contact: {
      title: "Aloqa",
      subtitle: "Koreyada yoki masofaviy ishlash uchun hamkorlik yoki vakansiyalar bo'yicha yozishingiz mumkin.",
      nameLabel: "Ismingiz",
      emailLabel: "Elektron pochta",
      messageLabel: "Xabar",
      sendButton: "Xabarni yuborish",
      sending: "Yuborilmoqda...",
      successMessage: "Rahmat! Xabaringiz muvaffaqiyatli yuborildi.",
      contactInfo: "Aloqa ma'lumotlari",
      phone: "Telefon",
      email: "Pochta",
      github: "GitHub",
      location: "Manzil",
      locationVal: "Janubiy Koreya (D-10 Ish Qidiruvchi Vizasi)",
    },
  },
};
