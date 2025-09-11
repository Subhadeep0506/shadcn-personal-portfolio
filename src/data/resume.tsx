import { Icons } from "@/components/icons";
import fs from "fs";
import path from "path";

const IMAGE_EXTS = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif", ".svg", ".avif"]);

function extractIndex(filename: string) {
  const match = filename.match(/(\d+)/g);
  if (!match) return Number.MAX_SAFE_INTEGER;
  return parseInt(match[match.length - 1] || "0", 10);
}

function listGalleryImages() {
  const publicDir = path.join(process.cwd(), "public");
  const candidateDirs = ["gallery", path.join("assets", "gallery")];
  const items: { src: string; alt: string }[] = [];

  for (const dir of candidateDirs) {
    const full = path.join(publicDir, dir);
    if (!fs.existsSync(full)) continue;
    const names = fs.readdirSync(full, { withFileTypes: true })
      .filter((d) => d.isFile())
      .map((d) => d.name)
      .filter((name) => IMAGE_EXTS.has(path.extname(name).toLowerCase()));

    const sorted = names.sort((a, b) => {
      const ia = extractIndex(a);
      const ib = extractIndex(b);
      if (ia === ib) return a.localeCompare(b);
      return ia - ib;
    });

    for (const name of sorted) {
      const src = `/${dir}/${name}`.replace(/\\/g, "/");
      const base = name.replace(path.extname(name), "");
      const alt = base.replace(/[-_]+/g, " ").trim();
      if (!items.find((it) => it.src === src)) items.push({ src, alt });
    }
  }
  return items;
}


export const DATA = {
  name: "Subhadeep Mandal",
  initials: "DV",
  url: "https://dillion.io",
  location: "Bengaluru, KA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Data Scientist and AI/ML Engineer. I love building things and helping people. Very active on twitter.",
  summary:
    "A self taught data scientist and machine learning engineer with a background in [Computer Science Engineering](/#education) and over 2 years of experience in the AI/ML industry. My work interests include Applied Machine and Deep Learning, Generative AI, Reinforcement Learning and MLOps. At [Genpact](https://www.genpact.com/), I am working with the AI/ML Practice team to develop cutting edge solutions leveraging Generative AI. I also engage myself in developing custom finetuned Vision, Language and Multimodal solutions for variety of usecases in Healthcare, Manufacturing, Finance and Retail. As a part of R&D I participate in [publishing our research](/#publications) work at top conferences and also patenting solutions with the core team.",
  avatarUrl: "/me.png",
  skills: [
    "Python",
    "React",
    "PyTorch",
    "FastAPI",
    "HuggingFace",
    "Flask",
    "Langchain",
    "Azure",
    "AWS",
    "GCP",
    "Github",
    "TypeScript",
    "JavaScript",
    "PostgreSQL",
    "Docker",
    "Kubernetes",
    "Java",
  ],
  navbar: [
    { href: "/", icon: Icons.home, label: "Home" },
    { href: "/blog", icon: Icons.notebook, label: "Blog" },
  ],
  contact: {
    email: "myself.subhadeepmandal@gmail.com",
    tel: "+91-79971-90640",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Subhadeep0506",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/subhadeepmandal2000/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/syntax_terror_",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:myself.subhadeepmandal@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Genpact LLC.",
      href: "https://www.genpact.com",
      badges: [],
      location: "Bengaluru, India",
      title: "Data Scientist/AI Engineer",
      logoUrl: "/genpact-b.png",
      start: "January, 2024",
      end: "PRESENT",
      description: [
        "Deep Learning and Generative AI R&D in Healthcare and Finance: Generated data synthetically using proprietary and open-source LLMs for fine-tuning LLMs and VLMs for finance, insurance and medical use-cases. Fine-tuned Phi 3 and Phi 3.5 using the synthetically generated datasets. Used Unsloth for faster and memory efficient fine-tuning. Evaluated the models on test-set and created comprehensive report for reference.",
        "Multimodal Retrieval-Augmented Generation for QA Systems: Build multi-modal RAG application for question answering on documents (scanned PDFs).",
        "Enterprise GenAI and MLOps Solutions in Healthcare and Finance: Deployed fine-tuned models on cloud services. Built consumable REST APIs serving endpoints to run inference on the deployed models.",
        "State-of-the-Art Audio Language Frameworks Implementation: Built end-to-end plug-and-play framework and application for audio based use-cases involving summarization, sentiment analysis, insights and feedback generation. ",
        "Developing Low Code Frameworks for Large Vision Models Fine-Tuning: Developed a library for low code fine-tuning traditional computer vision models using custom data, with minimal code. Supports image classification, segmentation, object detection, image generation and VLM fine-tuning.",
        "Papers and patents authoring: Authored in two papers over audio use-cases for IIMB ICBAI-2024 conference. Currently focused on patenting our latest RnD solutions on Generative and multi-modal AI.",
      ]
    },
    {
      company: "Genpact LLC.",
      badges: [],
      href: "https://www.genpact.com",
      location: "Bengaluru, India",
      title: "Data Science Inern",
      logoUrl: "/genpact-b.png",
      start: "July, 2023",
      end: "December, 2023",
      description: [
        "Developed state-of-the-art vision transformers for medical and industrial applications. Created explainable AI solutions to visualise and interpret model performance.",
        "Designed and built a Flask web application with an HTML user interface to efficiently utilise the model and provide real-time results. Conducted experiments with MONAI Deploy SDK for model deployment in the medical domain.",
        "Generated a comprehensive report comparing models based on key metrics such as performance, accuracy, training time, and inference time.",
        "Explored vision-language models tailored for medical applications. ",
        "Developed smart agent based solution with Langchain to automate Doc QnA, Source Retrieval and Summarization with RAG, as a part of Genpact's Inhouse Hackathon.",
        "Explored few Multimodal VLMs for Visual Question Answering, focusing medical domain.",
        "Developed model for detecting AI generated text. Developed Gradio and FastAPI based User Interface utilizing the models.",
        "Experimented with Nvidia's RIVA framework and OOTB models for S2T, T2S and NMT tasks. Created a comprehensive report comparing performance of Nvidia's and open source audio models.",
      ]
    },
    {
      company: "iNeuron.ai",
      href: "",
      badges: [],
      location: "Remote",
      title: "Data Science Intern",
      logoUrl: "/ineuron.png",
      start: "August, 2022",
      end: "November, 2022",
      description:
        [
          "Built a stock price prediction model using Machine Learning. Developed the pipeline using Machine Learning algorithms like Decision Tree and XGBoost",
          "Built a sentiment classification system using NLP and Logistic Regression, using twitter data."
        ]
    },
    {
      company: "Indian Institute of Technology, Bombay",
      href: "",
      badges: [],
      location: "Remote",
      title: "Flutter Developer Intern",
      logoUrl: "/iitb.png",
      start: "January, 2022",
      end: "June, 2022",
      description:[]
    },
  ],
  education: [
    {
      school: "Haldia Institute of Technology",
      href: "#",
      location: "Haldia, West Bengal",
      degree: "B.Tech CSE",
      logoUrl: "/hit.png",
      start: "2019",
      end: "2023",
    },
    {
      school: "Sri Chaitanya Educational Institution, Visakhapatnam",
      href: "#",
      location: "Visakhapatnam, Andhra Pradesh",
      degree: "Higher Secondary, PCM",
      logoUrl: "",
      start: "2017",
      end: "2019",
    },
    {
      school: "De Paul School, Visakhapatnam",
      href: "https://depaulsvizag.com/",
      location: "Visakhapatnam, Andhra Pradesh",
      degree: "Secondary Education",
      logoUrl: "/depaul.png",
      start: "2013",
      end: "2017",
    },
  ],
  gallery: listGalleryImages(),
  projects: [
    {
      title: "Qwen Mental Health Chatbot System",
      href: "#",
      dates: "July 2025 - September 2025",
      active: true,
      description:
        "Finetuned the [Qwen 3 4B Thinking](https://huggingface.co/Qwen/Qwen3-4B-Thinking-2507) model using an open-sourced [Mental Health dataset from Huggingface](https://huggingface.co/datasets/DenCT/mental-health-conversation-sft-12k). Built a FastAPI application to wrap the fine-tuned model with performant inference server and memory to persist user conversations. Added Patient, Cases and User handling to create an End-to-end mental health chatbot application.",
      technologies: [
        "Python",
        "PyTorch",
        "HuggingFace",
        "FastAPI",
        "TypeScript",
        "PostgreSQL",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Github (UI)",
          href: "https://github.com/Subhadeep0506/medichat-insight-bubble/",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Github (FastAPI)",
          href: "https://github.com/Subhadeep0506/qwen-3-mental-health-chatbot-fastapi",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/proj-1.png",
      video:
        "",
    },
    {
      title: "Godot RAG Assistant",
      href: "",
      dates: "June 2024 - Present",
      active: true,
      description:
        "Developed an agentic RAG application for Godot Documentation QnA Assiatent, to help Godot developers to quickly learn/debug games. Uses godot docs, Huggingface [Godot qna dataset](https://huggingface.co/datasets/glaiveai/godot_4_docs) and other internet sources in real-time to answer queries. Built a simple UI using Chainlit. Currently working on building a proper UI using NextJS.",
      technologies: [
        "Python",
        "PyTorch",
        "Langchain",
        "HuggingFace",
        "FastAPI",
        "TypeScript",
        "PostgreSQL",
        "TailwindCSS",
        "Next.js",
      ],
      links: [
        {
          type: "Github",
          href: "https://github.com/Subhadeep0506/godot-docs-rag-app",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/proj-2.png",
      video: "",
    },
    {
      title: "Gemini Mail Assistant",
      href: "",
      dates: "June 2024 - Present",
      active: true,
      description:
        "A Gemini app that summarizes your daily mails from Gmail.",
      technologies: [
        "Python",
        "Langchain",
        "HuggingFace",
        "FastAPI",
      ],
      links: [
        {
          type: "Github",
          href: "https://github.com/Subhadeep0506/daily-mail-summarizer",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/proj-3.png",
      video: "",
    },
  ],
  certifications: [
    {
      logoUrl: "https://cdn.brandfetch.io/idou89mSUh/w/400/h/400/theme/dark/icon.jpeg",
      title: "Fully Automated MLOps",
      issuer: "Datacamp",
      date: "2024-09-10",
      href: "https://www.datacamp.com/completed/statement-of-accomplishment/course/8d6a76254bb9432c8ab4b1fe10c59ef9f03cd942",
    },
    {
      logoUrl: "https://cdn.brandfetch.io/idou89mSUh/w/400/h/400/theme/dark/icon.jpeg",
      title: "MLOps Concepts",
      issuer: "Datacamp",
      date: "2024-09-10",
      href: "https://www.datacamp.com/completed/statement-of-accomplishment/course/6d596877222785c52dc98dec86a27a10f61d16ab",
    },
    {
      logoUrl: "https://cdn.brandfetch.io/idou89mSUh/w/400/h/400/theme/dark/icon.jpeg",
      title: "MLOps Deployment and Life Cycling",
      issuer: "Datacamp",
      date: "2024-09-10",
      href: "https://www.datacamp.com/completed/statement-of-accomplishment/course/4688003c4f6f1dfce94fbd8f792703302044bba2",
    },
    {
      logoUrl: "https://cdn.brandfetch.io/idou89mSUh/w/400/h/400/theme/dark/icon.jpeg",
      title: "Data Scientist with Python",
      issuer: "Datacamp",
      date: "2022-06-10",
      href: "https://www.datacamp.com/statement-of-accomplishment/track/c6851da56d2ab55ed1f395e2a9f211633b4803ce",
    },
    {
      logoUrl: "https://cdn.brandfetch.io/idou89mSUh/w/400/h/400/theme/dark/icon.jpeg",
      title: "Data Manupulation with Python",
      issuer: "Datacamp",
      date: "2022-07-10",
      href: "https://www.datacamp.com/statement-of-accomplishment/track/88c1dcd1e55eef05fc7110e7e36c45e4e4bbdd89",
    },
    {
      logoUrl: "https://cdn.brandfetch.io/idAaZ51xKa/w/176/h/176/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1717321002978",
      title: "Deep Learning with PyTorch: Zero to GANs",
      issuer: "Jovian",
      date: "2023-07-10",
      href: "https://jovian.com/certificate/MFQTQNZWGQ",
    },
    {
      logoUrl: "https://cdn.brandfetch.io/idAaZ51xKa/w/176/h/176/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1717321002978",
      title: "Machine Learning with Python: Zero to GBMs",
      issuer: "Jovian",
      date: "2023-03-10",
      href: "https://jovian.com/certificate/MFQTQMZTGE",
    },
    {
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/2048px-Google_%22G%22_logo.svg.png",
      title: "Google Cloud Training - Cloud Engineering Fundamentals, Cloud Application Development, Cloud ML-AI Google Cloud Training - Cloud Engineering Fundamentals, Cloud Application Development",
      issuer: "Google Cloud",
      date: "2021-04-10",
      href: "https://google.qwiklabs.com/public_profiles/6c8e954e-4b8d-44ff-8636-200446b489d2",
    },
    {
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/9/97/Coursera-Logo_600x600.svg",
      title: "Java Programming: Problem Solving with Software",
      issuer: "Coursera",
      date: "2020-06-10",
      href: "https://coursera.org/verify/XH5WH45XNJVZ",
    },
  ],
  publications: [
    {
      title: "Building a Multi-Vector Chatbot with LangChain, Milvus, and Cohere",
      date: "2024-12-04",
      description:
        "In the fast-growing area of digital healthcare, medical chatbots are becoming an important tool for improving patient care and providing quick, reliable information. This article explains how to build a medical chatbot that uses multiple vectorstores. It focuses on creating a chatbot that can understand medical reports uploaded by users and give answers based on the information in these reports. Additionally, this chatbot uses another vectorstore filled with conversations between doctors and patients about different medical issues. This approach allows the chatbot to have a wide range of medical knowledge and patient interaction examples, helping it give personalized and relevant answers to user questions. The goal of this article is to offer developers and healthcare professionals a clear guide on how to develop a medical chatbot that can be a helpful resource for patients looking for information and advice based on their own health reports and concerns.",
      href: "https://www.analyticsvidhya.com/blog/2024/12/multi-vector-chatbot/",
    },
    {
      title: "Self Hosting RAG Applications On Edge Devices with Langchain and Ollama–Part II",
      date: "2024-08-27",
      description:
        "In the second part of our series on building a RAG application on a Raspberry Pi, we’ll expand on the foundation we laid in the first part, where we created and tested the core pipeline. In the first part, we created the core pipeline and tested it to ensure everything worked as expected. Now, we’re going to take things a step further by building a FastAPI application to serve our RAG pipeline and creating a Reflex app to give users a simple and interactive way to access it. This part will guide you through setting up the FastAPI back-end, designing the front-end with Reflex, and getting everything up and running on your Raspberry Pi. By the end, you’ll have a complete, working application that’s ready for real-world use.",
      href: "https://www.analyticsvidhya.com/blog/2024/08/self-hosting-rag-applications-on-edge-devices-with-langchain-and-ollama-part-ii/",
    },
    {
      title: "Self Hosting RAG Applications On Edge Devices with Langchain and Ollama – Part I",
      date: "2024-08-01",
      description: "This article follows that journey, showing how to transform this small device into a capable tool for smart document processing. We’ll guide you through setting up the Raspberry Pi, installing the needed software, and building a system to handle document ingestion and QnA tasks. By the end, you’ll see how even the smallest tech gadgets can achieve impressive results with a bit of creativity and effort.",
      href: "https://www.analyticsvidhya.com/blog/2024/08/self-hosting-rag-applications-on-edge-devices/",
    },
    {
      title: "RAG Application using Cohere Command-R and Rerank – Part 2",
      date: "2024-06-03",
      description: "In the previous article, we experimented with Cohere’s Command-R model and Rerank model to generate responses and rerank doc sources. We have implemented a simple RAG pipeline using them to generate responses to user’s questions on ingested documents. However, what we have implemented is very simple and unsuitable for the general user, as it has no user interface to interact with the chatbot directly. In this article, we will modularize the codebase for easy interpretation and scaling and build a Streamlit application that will serve as an interface to interact with the RAG pipeline. The interface will be a chatbot interface that the user can use to interact with it. So, we will implement an additional memory component within the application, allowing users to ask follow-up queries on previous responses.",
      href: "https://www.analyticsvidhya.com/blog/2024/06/rag-application-using-cohere-command-r-and-rerank/",
    },
    {
      title: "RAG Application with Cohere Command-R and Rerank – Part 1",
      date: "2024-05-07",
      description: "The Retrieval-Augmented Generation approach combines LLMs with a retrieval system to improve response quality. However, inaccurate retrieval can lead to sub-optimal responses. Cohere’s re-ranker model enhances this process by evaluating and ordering search results based on contextual relevance, improving accuracy and saving time for specific information seekers. This article provides a guide on implementing Cohere command re-ranker model for document re-ranking, comparing its effectiveness with and without the re-ranker. It uses a pipeline to demonstrate both scenarios, providing insights into how the re-ranker model can streamline information retrieval and improve search tasks.",
      href: "https://www.analyticsvidhya.com/blog/2024/05/rag-application-with-cohere-command-r-and-rerank/",
    },
    {
      title: "A Beginner’s Guide to Evaluating RAG Pipelines Using RAGAS",
      date: "2024-05-07",
      description: "In the ever-evolving landscape of machine learning and artificial intelligence, the development of language model applications, particularly Retrieval Augmented Generation (RAG) systems, is becoming increasingly sophisticated. However, the real challenge surfaces not during the initial creation but in the ongoing maintenance and enhancement of these applications. This is where RAGAS—an evaluation library dedicated to providing metrics for RAG pipelines—comes into play. This article will explore the RAGAS library and teach you how to use it to evaluate RAG pipelines.",
      href: "https://www.analyticsvidhya.com/blog/2024/05/a-beginners-guide-to-evaluating-rag-pipelines-using-ragas/",
    },
  ],
} as const;
