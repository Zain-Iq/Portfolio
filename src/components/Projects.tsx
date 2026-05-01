'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import ProjectPopup, { ProjectPopupItem } from './ProjectPopup';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectPopupItem | null>(null);

  const projects: ProjectPopupItem[] = [
    {
      name: 'DenQuest (In Development)',
      description: 'Mobile application for household task management',
      tech: ['React Native', 'Firebase', 'Real-time Collaboration'],
      impact: [
        'Streamlines household chore distribution',
        'Real-time task tracking and accountability',
        'Scalable design for shared living spaces'
      ],
      github: 'https://github.com/Zain-Iq/DenQuest',
      codeUnavailable: true,
      demo: null,
      images: ['assets/denquest-1.png', 'assets/denquest-2.png'],
      details: [
        'Built a collaborative task management experience for shared households.',
        'Designed mobile workflows that keep chore ownership and accountability clear.',
        'Focused on responsive UI and user-friendly interactions for real-time updates.'
      ]
    },
    {
      name: 'MindGuard (In Development)',
      description: 'AI-powered mental health assistant mobile application',
      tech: ['React Native', 'AI/ML', 'Mental Health'],
      impact: [
        'AI-powered personalized support',
        'Mental health monitoring features',
        'Adaptive chatbot for user well-being'
      ],
      github: 'https://github.com/Zain-Iq/MindGuard',
      codeUnavailable: true,
      demo: null,
      images: ['assets/mindguard-1.png', 'assets/mindguard-2.png'],
      details: [
        'Created an empathetic assistant designed to support mental wellness.',
        'Built adaptive conversation paths using AI-generated responses.',
        'Focused on usability and accessibility for frequent user check-ins.'
      ]
    },
    {
      name: 'FocusFlow',
      description: 'Hackathon-built React Native productivity app with OpenAI-powered study support',
      tech: ['React Native', 'OpenAI API', 'Full-Stack Development', 'Productivity App'],
      impact: [
        'Breaks down assignments, quizzes, and exams into manageable tasks',
        'Supports emotional well-being with AI-powered mood-based recommendations',
        'Combines focused study tools with personal reflection features'
      ],
      github: 'https://github.com/omariip/FocusFlow',
      demo: null,
      images: [],
      details: [
        'Built FocusFlow in a team during a hackathon, pair-programming with mentors to ship quickly under tight deadlines.',
        'Integrated OpenAI-powered task breakdowns to help students organize assignments, quizzes, and exam prep into clearer next steps.',
        'Contributed to features like mood-based AI recommendations, a Pomodoro timer for focused study sessions, and a "Letter to Future Self" experience for reflection.'
      ]
    },
    {
      name: 'MyParty',
      description: 'Serverless AWS party invitation registration system',
      tech: ['AWS S3', 'API Gateway', 'Lambda', 'DynamoDB', 'CloudWatch'],
      impact: [
        'Hosted a static invitation page with S3',
        'Registered guests through an HTTP API endpoint',
        'Stored attendee name and email data in DynamoDB'
      ],
      github: 'https://github.com/Zain-Iq/StudentPrediction',
      demo: null,
      images: ['assets/Architecture%20diagram.png', 'assets/MyParty.png', 'assets/CodeMyParty.png'],
      imageScales: [1, 1, 1],
      details: [
        'Built a simple party invitation web app using an AWS serverless stack deployed in the North Virginia region.',
        'Used an S3 bucket to host the static frontend, with HTML, CSS, and JavaScript collecting guest name and email input.',
        'Connected the frontend to API Gateway through an HTTP POST route, then used Lambda to handle registration logic and write records to a DynamoDB Users table.',
        'Used CloudWatch logs to debug Lambda execution issues, and worked through CORS and permission challenges while connecting the AWS services.',
        'Planned improvements included SNS email reminders and event scheduling so guests could choose available dates.'
      ]
    },
    {
      name: 'Student Performance Prediction',
      description: 'Supervised machine learning project for identifying academically at-risk students',
      tech: ['Python', 'Pandas', 'Scikit-learn', 'Random Forest', 'SVM', 'GridSearchCV'],
      impact: [
        'Built an early-warning classification workflow without grade leakage',
        'Compared Random Forest and SVM using test metrics and cross-validation',
        'Used feature importance and model metrics to explain tradeoffs'
      ],
      github: '#',
      codeUnavailable: true,
      demo: null,
      images: [
        'assets/StudentPrediction/StudentPrediction.png',
        'assets/StudentPrediction/StudentPrediction2.png',
        'assets/StudentPrediction/StudentPrediction3.png',
        'assets/StudentPrediction/StudentPrediction4.png',
        'assets/StudentPrediction/StudentPrediction5.png',
        'assets/StudentPrediction/StudentPrediction6.png',
        'assets/StudentPrediction/StudentPrediction7.png',
        'assets/StudentPrediction/StudentPrediction8.png',
        'assets/StudentPrediction/StudentPrediction9.png'
      ],
      details: [
        'Used the UCI Student Performance dataset to predict whether students were academically at risk.',
        'Created a binary target from final grade G3, treating students with G3 below 10 as at risk.',
        'Removed G1, G2, and G3 from the feature set to avoid grade leakage and better simulate an early-warning model.',
        'Compared Random Forest and Support Vector Machine models with hyperparameter tuning, cross-validation, and classification metrics.'
      ],
      detailSections: [
        {
          title: 'Overview',
          description:
            'This project explored whether academic, demographic, social, and behavioural features could help identify students who may need support before final grades are known.'
        },
        {
          title: 'Dataset & preprocessing',
          items: [
            'Used student-mat.csv from the UCI Student Performance dataset with 395 rows and 33 columns.',
            'Checked the dataset for missing values and found none.',
            'Encoded categorical features for model training.',
            'Used an 80/20 stratified train/test split to preserve the pass/fail class balance.',
            'Applied StandardScaler for SVM training.'
          ]
        },
        {
          title: 'Model comparison',
          items: [
            'Trained a baseline Random Forest model, then tuned n_estimators, max_depth, and min_samples_split with GridSearchCV.',
            'Trained a baseline RBF-kernel SVM, then tuned C, gamma, and kernel with GridSearchCV.',
            'Evaluated both models using accuracy, precision, recall, F1-score, ROC-AUC, confusion matrices, learning curves, and 5-fold cross-validation.',
            'Used Random Forest feature importance to identify which inputs were most influential.'
          ]
        },
        {
          title: 'Conclusion',
          description:
            'Random Forest was selected as the stronger implementation because it performed better on the held-out test set, had stronger ROC-AUC, was easier to interpret, and required less sensitive preprocessing. SVM remained competitive in cross-validation, but it was less interpretable and weaker on the final test set.'
        }
      ],
      resultGroups: [
        {
          name: 'Random Forest',
          metrics: [
            { label: 'Accuracy', value: '68.35%' },
            { label: 'Precision', value: '71.21%' },
            { label: 'Recall', value: '88.68%' },
            { label: 'F1 Score', value: '78.99%' },
            { label: 'ROC-AUC', value: '0.6437' },
            { label: 'CV F1 Mean', value: '0.7884' },
            { label: 'CV F1 Std', value: '0.0379' }
          ]
        },
        {
          name: 'SVM',
          metrics: [
            { label: 'Accuracy', value: '65.82%' },
            { label: 'Precision', value: '68.06%' },
            { label: 'Recall', value: '92.45%' },
            { label: 'F1 Score', value: '78.40%' },
            { label: 'ROC-AUC', value: '0.6118' },
            { label: 'CV F1 Mean', value: '0.8147' },
            { label: 'CV F1 Std', value: '0.0214' }
          ]
        }
      ],
      findings: [
        'Both models were better at identifying passing students than failing students.',
        'The most important challenge was improving detection of genuinely at-risk students.',
        'Random Forest offered the best balance of held-out performance and interpretability.'
      ],
      limitations: [
        'Replace LabelEncoder with OneHotEncoder and ColumnTransformer for categorical features.',
        'Define the target directly as at_risk = 1 so metrics align more clearly with the project goal.',
        'Wrap SVM preprocessing and training in a full scikit-learn Pipeline to avoid scaling leakage during cross-validation.',
        'Explore class weighting, SMOTE, threshold tuning, SHAP/LIME explanations, and additional models such as Logistic Regression, Gradient Boosting, or XGBoost.'
      ]
    },
    {
      name: 'VHubs',
      description: 'C# Vehicle Inventory Management System',
      tech: ['C#', '.NET', 'Database Management'],
      impact: [
        'Efficient vehicle inventory tracking',
        'Streamlined dealership operations',
        'Comprehensive reporting features'
      ],
      github: 'https://github.com/Zain-Iq/VHubs',
      demo: null,
      images: ['assets/Vhubs1.png', 'assets/Vhubs2.png'],
      imageScales: [1, 1.12],
      details: [
        'Built a desktop-style vehicle inventory platform with strong data organization.',
        'Implemented inventory search and reporting workflows for dealership use.',
        'Focused on clean, intuitive interfaces for fast information access.'
      ]
    },
    {
      name: 'CoolRooms',
      description: 'C++ terminal-based reservation system',
      tech: ['C++', 'Terminal Interface', 'Data Structures'],
      impact: [
        'Command-line reservation management',
        'Efficient booking system implementation',
        'Demonstrates core programming concepts'
      ],
      github: 'https://github.com/Zain-Iq/CoolRooms',
      demo: null,
      images: [
        'assets/CoolRooms/Adding%20Invalid%20input.png',
        'assets/CoolRooms/Adding%20Valid%20input.png',
        'assets/CoolRooms/Clear%20all.png',
        'assets/CoolRooms/Display%20Roomboard.png',
        'assets/CoolRooms/Display%20Specific%20Room.png',
        'assets/CoolRooms/invalid%20choice.png',
        'assets/CoolRooms/Remove%20But%20One%20Invalid%20input.png',
        'assets/CoolRooms/Remove%20But%20One%20Valid%20input.png',
        'assets/CoolRooms/Removing%20Invalid%20input.png',
        'assets/CoolRooms/Removing%20Valid%20input.png',
        'assets/CoolRooms/Split.png'
      ],
      details: [
        'Created a terminal-based reservation workflow with data persistence.',
        'Focused on core system logic, input validation, and user prompts.',
        'Demonstrated strong C++ problem-solving and structure design.'
      ]
    },
    {
      name: 'DeeDesigns',
      description: 'E-commerce platform for Indigenous artist jewelry',
      tech: ['React', 'E-commerce', 'Cultural Preservation'],
      impact: [
        'Showcases Indigenous artistry online',
        'Modern shopping experience',
        'Promotes cultural heritage through technology'
      ],
      github: 'https://github.com/Zain-Iq/DeeDesigns',
      codeUnavailable: true,
      demo: null,
      images: ['assets/DeeDesigns1.png', 'assets/DeeDesigns2.png'],
      details: [
        'Built an artist storefront with responsive product galleries.',
        'Translated client vision into polished UI and intuitive checkout flows.',
        'Integrated backend flows for secure purchase and inventory handling.'
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-zinc-400">A selection of my recent work and contributions</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-zinc-900 rounded-lg p-6 border border-zinc-800 hover:border-zinc-700 transition-colors"
            >
              <h3 className="text-xl font-semibold text-white mb-3">{project.name}</h3>
              <p className="text-zinc-400 mb-4">{project.description}</p>
              <div className="mb-4">
                <h4 className="text-sm font-medium text-zinc-300 mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-zinc-800 text-zinc-300 px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mb-4">
                <h4 className="text-sm font-medium text-zinc-300 mb-2">Key Features:</h4>
                <ul className="text-sm text-zinc-400 space-y-1">
                  {project.impact.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-zinc-500 mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="rounded-full border border-zinc-700 bg-zinc-800 px-4 py-2 text-sm font-semibold text-white hover:border-zinc-600 hover:bg-zinc-700 transition-colors"
                >
                  View Details
                </button>
                {project.codeUnavailable ? (
                  <span
                    className="flex cursor-not-allowed items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm font-semibold text-zinc-500"
                    title="Code unavailable at this time"
                    aria-label="Code unavailable at this time"
                  >
                    <Github size={16} />
                    Code unavailable at this time
                  </span>
                ) : (
                  <a
                    href={project.github}
                    className="flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-800 px-4 py-2 text-sm font-semibold text-zinc-400 hover:text-white hover:border-zinc-600 hover:bg-zinc-700 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} />
                    Code
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <ProjectPopup project={selectedProject} open={Boolean(selectedProject)} onClose={() => setSelectedProject(null)} />
    </section>
  );
};

export default Projects;
