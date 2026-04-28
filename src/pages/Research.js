import React, { useState, useRef, useEffect } from 'react';
import FeatherIcon from 'feather-icons-react';
import { motion, AnimatePresence } from 'framer-motion';

// Placeholder data for research areas
const researchAreasData = [
  {
    id: 'immersive-media',
    icon: "layers",
    title: "Immersive Media",
    description: "Investigating and evaluating user immersion, presence, and overall experience in augmented and virtual reality applications.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1200&auto=format&fit=crop",
    details: "A great immersive experience requires balancing realism, comfort, and usability. We develop tools and interaction paradigms that allow users to intuitively manipulate 3D content. Our projects include auto-generating storyboards with virtual actors and handling diminished reality techniques to seamlessly blend physical environments with virtual elements.",
    techStacks: ['Spatial Computing', 'Mixed Reality', 'Computer Vision', 'Generative AI'],
    highlightPapers: [
      { title: "ASAP for multi-outputs: auto-generating storyboard and pre-visualization with virtual actors", venue: "Multimedia Tools and Applications", year: 2025, link: "/#/publication/asap-multi-outputs" },
      { title: "Silhouettes from Real Objects Enable Realistic Interactions with a Virtual Human in Mobile AR", venue: "Applied Sciences", year: 2021, link: "https://www.mdpi.com/2076-3417/11/6/2763" }
    ]
  },
  {
    id: 'comfortable-xr',
    icon: "zap",
    title: "Comfortable XR",
    description: "Developing novel techniques and evaluating their effectiveness to reduce cybersickness in various virtual reality environments.",
    image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=1200&auto=format&fit=crop",
    details: "Our research deeply investigates the physiological and cognitive origins of cybersickness in immersive environments. By analyzing user feedback, EEG, and heart rate variability, we aim to establish personalized mitigation strategies. We also develop dynamic field-of-view modulators and balance training systems (e.g., BalanceVR) to help users adapt to VR environments more comfortably.",
    techStacks: ['Unity / C#', 'Biosignals (EEG, ECG)', 'Statistical Analysis', 'User Study'],
    highlightPapers: [
      { title: "BalanceVR: Balance Training to Increase Tolerance to Cybersickness in Immersive Virtual Reality", venue: "Virtual Reality", year: 2025, link: "/#/publication/balance-vr" },
      { title: "Effects of Mini-Map Usage and Spatial Ability on Cybersickness in Virtual Reality Navigation", venue: "IJHCI", year: 2025, link: "/#/publication/effects-of-minimap" }
    ]
  },
  {
    id: 'believable-ai',
    icon: "cpu",
    title: " Believable AI/ML",
    description: "Creating intelligent and believable virtual agents that enhance user interaction through affective computing and machine learning.",
    image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=1200&auto=format&fit=crop",
    details: "Our fundamental HCI research focuses on the intersection of human psychology and artificial intelligence. We investigate how users perceive and interact with intelligent agents and affective postures. By understanding these dynamics, we create systems that foster trustworthiness, social presence, and believable interactions.",
    techStacks: ['Virtual Agents', 'Affective Computing', 'Python', 'Machine Learning'],
    highlightPapers: [
      { title: "Engaged and Affective Virtual Agents: Their Impact on Social Presence, Trustworthiness, and Decision-Making", venue: "CHI '24", year: 2024, link: "/#/publication/engaged-affective-agents" },
      { title: "Auto-generating Virtual Human Behavior by Understanding User Contexts", venue: "IEEE VRW", year: 2021, link: "https://ieeexplore.ieee.org/document/9419331" }
    ]
  },
  {
    id: 'intelligence',
    icon: "eye",
    title: "Intelligence",
    description: "Exploring intuitive and efficient user interaction methods using eye-tracking and AI-driven predictive models.",
    image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=1200&auto=format&fit=crop",
    details: "Eye-tracking and intelligent intent prediction are core modalities for next-generation spatial computing. We explore peripheral gaze interactions, natural object targeting, and gaze-based navigation techniques. Our goal is to minimize physical fatigue while maximizing interaction efficiency, enabling seamless, hands-free control in both VR and AR scenarios.",
    techStacks: ['Eye-Tracking', 'Spatial Computing', 'Intent Prediction', 'Unity / C#'],
    highlightPapers: [
      { title: "RPG: Rotation Technique in VR Locomotion using Peripheral Gaze", venue: "PACM HCI", year: 2024, link: "https://dl.acm.org/doi/10.1145/3655609" },
      { title: "Keep Your Eyes on the Target: Enhancing Immersion and Usability by Designing Natural Object Throwing with Gaze-based Targeting", venue: "ETRA '24", year: 2024, link: "https://dl.acm.org/doi/10.1145/3649902.3653338" }
    ]
  },
  {
    id: 'empathy',
    icon: "heart",
    title: "Empathy",
    description: "Designing systems that understand and respond to human emotions, fostering trustworthiness and social presence.",
    image: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?q=80&w=1200&auto=format&fit=crop",
    details: "By understanding cognitive responses and biofeedback mechanisms, we create empathetic systems. We conduct human-centered studies to evaluate the impact of false but stable heart rate feedback and observer presence on user immersion, mental state, and performance during VR/AR usage.",
    techStacks: ['Biofeedback', 'Emotion Recognition', 'User Study', 'HCI'],
    highlightPapers: [
      { title: "The Effects of False but Stable Heart Rate Feedback on Cybersickness and User Experience", venue: "CHI '24", year: 2024, link: "https://dl.acm.org/doi/10.1145/3613904.3642072" },
      { title: "The Impact of Observer Presence on Trainees' Mental States and Performance in Remote Military Training", venue: "CHI '25", year: 2025, link: "https://dl.acm.org/doi/10.1145/3706598.3713515" }
    ]
  },
  {
    id: 'accessibility',
    icon: "users",
    title: "Accessibility",
    description: "Ensuring that immersive technologies are usable and accessible for diverse user groups, minimizing physical and cognitive barriers.",
    image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=1200&auto=format&fit=crop",
    details: "We aim to make XR technologies accessible to everyone. Our projects include hardware ergonomics like VR headset lifters to alleviate mental and physical fatigue, and adapting interfaces for different abilities. We focus on creating inclusive designs that adapt to users' unique needs and environments.",
    techStacks: ['Hardware Ergonomics', 'Human Factors', 'Inclusive Design', 'Mixed Reality'],
    highlightPapers: [
      { title: "Lifter for VR Headset: Enhancing Immersion, Presence, Flow, and Alleviating Mental and Physical Fatigue", venue: "VRST '24", year: 2024, link: "https://dl.acm.org/doi/10.1145/3641825.3687753" },
      { title: "Don't Bother Me: How to Handle Content-Irrelevant Objects in Handheld Augmented Reality", venue: "VRST '20", year: 2020, link: "https://dl.acm.org/doi/10.1145/3385956.3418948" }
    ]
  }
];

// AX Convergence Research Data (XR + AI)
const axConvergenceData = [
  {
    id: 'ax-immersive',
    icon: 'layers',
    title: 'Immersive Media + AI',
    description: '생성형 AI를 활용한 몰입형 미디어 생성 및 상호작용',
    past: '전문가에 의한 수동적인 3D 에셋 및 환경 제작. 사전 시각화(Pre-visualization) 작업에 높은 비용과 시간이 소모됨.',
    present: '대형 언어 모델(LLM)과 생성형 AI를 활용하여 대본 기반의 스토리보드 및 초기 3D 프로토타입을 자동 생성.',
    direction: '사용자의 맥락과 의도를 실시간으로 파악하여, 시각적 지연 없이 끊김없이(seamless) 적응하는 개인화된 몰입형 미디어 실시간 자동 생성.'
  },
  {
    id: 'ax-comfortable',
    icon: 'activity',
    title: 'Comfortable XR + AI',
    description: 'AI 기반 초개인화 맞춤형 XR 환경 및 포용적 접근성 제공',
    past: '보편적인 다수의 평균적 사용자를 기준으로 한 일괄적인 인터페이스 설계 및 사후 평가(SSQ 등)에 의존한 수동적 멀미 저감 기법 적용.',
    present: '생체 신호 및 행동 데이터를 기계학습 모델로 분석하여, 사용자 개인의 신체·인지적 특성과 사이버멀미 민감도를 실시간으로 예측.',
    direction: '사용자의 고유한 특성에 맞춰 스스로 적응하는 맞춤형 애플리케이션을 구현하여, 포용적이고 접근성 높은 실전형 AX 기술 선도.'
  },
  {
    id: 'ax-believable',
    icon: 'smile',
    title: 'Believable XR + AI',
    description: '감성 컴퓨팅과 자율적 행동을 갖춘 지능형 디지털 휴먼',
    past: '제한된 상호작용 트리와 사전에 스크립트된 애니메이션에 의존하는 수동적 가상 에이전트.',
    present: '대형 언어 모델을 활용한 자연스러운 대화 생성 및 감성 컴퓨팅(Affective Computing)을 결합한 감정 표현 기술 적용.',
    direction: '사용자와의 상호작용을 통해 신뢰감과 사회적 실재감을 형성하고, 스스로 맥락을 파악해 자율적으로 행동하는 완전한 디지털 동반자(Digital Companion) 실현.'
  }
];

// --- 새롭게 추가된 애니메이션 컴포넌트 ---
const ResearchGoalAnimation = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemFadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // 중앙 포인트 UI 컴포넌트
  const PathPoint = ({ label, title, className = "" }) => (
    <div className={`d-flex flex-column align-items-center ${className}`} style={{ zIndex: 2 }}>
      <div
        className="d-flex align-items-center justify-content-center bg-white shadow-sm rounded-circle"
        style={{ width: '50px', height: '50px', border: '3px solid #8b0029' }}
      >
        <span className="fw-bolder" style={{ color: '#8b0029' }}>{label}</span>
      </div>
      <span
        className="fw-bold mt-2 bg-white px-2 py-1 rounded shadow-sm text-nowrap"
        style={{ fontSize: '0.75rem', color: '#495057' }}
      >
        {title}
      </span>
    </div>
  );

  return (
    <motion.div
      className="row align-items-center justify-content-center mb-5 pb-4 border-bottom"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // 스크롤 시 애니메이션 트리거
    >
      {/* 1. 좌측: XR User */}
      <motion.div variants={itemFadeIn} className="col-lg-3 col-md-4 mb-4 mb-lg-0 text-center">
        <div
          className="d-inline-flex align-items-center justify-content-center rounded-circle shadow-sm bg-white mb-3 position-relative"
          style={{ width: '150px', height: '150px', border: '4px solid rgba(139, 0, 41, 0.3)', zIndex: 5 }}
        >
          <span className="fw-bolder fs-4" style={{ color: '#8b0029' }}>XR User</span>
        </div>
      </motion.div>

      {/* 2. 중앙: 양방향 경로 */}
      <div className="col-lg-6 col-md-12 position-relative py-3">

        {/* 상단: 진행 경로 (XR User -> Life XR) / Research (R) */}
        <motion.div variants={itemFadeIn} className="d-flex justify-content-evenly align-items-center position-relative mb-5 w-100">

          {/* 상단 연결선 (곡선) */}
          <svg className="d-none d-lg-block" viewBox="0 0 100 50" preserveAspectRatio="none" style={{ position: 'absolute', width: '150%', height: '50px', top: '24px', left: '-25%', zIndex: 1, pointerEvents: 'none', overflow: 'visible' }}>
            <path d="M 0,70 A 50,100 0 0,1 100,70" fill="none" stroke="rgba(139, 0, 41, 0.2)" strokeWidth="3" vectorEffect="non-scaling-stroke" />
          </svg>
          <svg className="d-lg-none" viewBox="0 0 100 50" preserveAspectRatio="none" style={{ position: 'absolute', width: '100%', height: '24px', top: '12px', left: '0', zIndex: 1, pointerEvents: 'none', overflow: 'visible' }}>
            <path d="M 0,50 A 50,80 0 0,1 100,50" fill="none" stroke="rgba(139, 0, 41, 0.2)" strokeWidth="3" vectorEffect="non-scaling-stroke" />
          </svg>

          {/* 상단 애니메이션 동그라미 (물리적 요소로 1개만 존재하도록 보장) */}
          <motion.div
            className="d-none d-lg-block"
            style={{ position: 'absolute', top: '24px', left: '-25%', zIndex: 3 }}
            animate={{ left: ["-25%", "125%"], opacity: [0, 1, 1, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          >
            <motion.div
              style={{ position: 'absolute', width: '14px', height: '14px', backgroundColor: '#8b0029', borderRadius: '50%', top: '-7px', left: '-7px', boxShadow: '0 0 8px rgba(139,0,41,0.6)' }}
              animate={{ y: [50, 15.1, 2, -7.1, -14, -19.3, -23.3, -26.3, -28.4, -29.6, -30, -29.6, -28.4, -26.3, -23.3, -19.3, -14, -7.1, 2, 15.1, 50] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
          <motion.div
            className="d-lg-none"
            style={{ position: 'absolute', top: '12px', left: '0%', zIndex: 3 }}
            animate={{ left: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <motion.div
              style={{ position: 'absolute', width: '14px', height: '14px', backgroundColor: '#8b0029', borderRadius: '50%', top: '-7px', left: '-7px', boxShadow: '0 0 8px rgba(139,0,41,0.6)' }}
              animate={{ y: [24, 7.3, 1, -3.4, -6.7, -9.3, -11.2, -12.6, -13.6, -14.2, -14.4, -14.2, -13.6, -12.6, -11.2, -9.3, -6.7, -3.4, 1, 7.3, 24] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>

          <PathPoint label="R1" title="Immersive Media" className="path-node-upper-edge" />
          <PathPoint label="R2" title="Comfortable XR" className="path-node-upper-center" />
          <PathPoint label="R3" title="Believable AI/ML" className="path-node-upper-edge" />
        </motion.div>

        {/* 하단: 회귀 경로 (Life XR -> XR User) / Human Perception (H) */}
        <motion.div variants={itemFadeIn} className="d-flex justify-content-evenly align-items-center position-relative flex-row-reverse w-100">

          {/* 하단 연결선 (곡선) */}
          <svg className="d-none d-lg-block" viewBox="0 0 100 50" preserveAspectRatio="none" style={{ position: 'absolute', width: '150%', height: '50px', top: '-24px', left: '-25%', zIndex: 1, pointerEvents: 'none', overflow: 'visible' }}>
            <path d="M 100,0 A 50,80 0 0,1 0,0" fill="none" stroke="rgba(139, 0, 41, 0.2)" strokeWidth="3" vectorEffect="non-scaling-stroke" />
          </svg>
          <svg className="d-lg-none" viewBox="0 0 100 50" preserveAspectRatio="none" style={{ position: 'absolute', width: '100%', height: '24px', top: '-12px', left: '0', zIndex: 1, pointerEvents: 'none', overflow: 'visible' }}>
            <path d="M 100,0 A 50,80 0 0,1 0,0" fill="none" stroke="rgba(139, 0, 41, 0.2)" strokeWidth="3" vectorEffect="non-scaling-stroke" />
          </svg>

          {/* 하단 애니메이션 동그라미 (물리적 요소로 1개만 존재하도록 보장) */}
          <motion.div
            className="d-none d-lg-block"
            style={{ position: 'absolute', top: '-24px', right: '-25%', zIndex: 3 }}
            animate={{ right: ["-25%", "125%"], opacity: [0, 1, 1, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 2 }}
          >
            <motion.div
              style={{ position: 'absolute', width: '14px', height: '14px', backgroundColor: '#8b0029', borderRadius: '50%', top: '-7px', right: '-7px', boxShadow: '0 0 8px rgba(139,0,41,0.6)' }}
              animate={{ y: [0, 34.9, 48, 57.1, 64, 69.3, 73.3, 76.3, 78.4, 79.6, 80, 79.6, 78.4, 76.3, 73.3, 69.3, 64, 57.1, 48, 34.9, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 2 }}
            />
          </motion.div>
          <motion.div
            className="d-lg-none"
            style={{ position: 'absolute', top: '-12px', right: '0%', zIndex: 3 }}
            animate={{ right: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1.5 }}
          >
            <motion.div
              style={{ position: 'absolute', width: '14px', height: '14px', backgroundColor: '#8b0029', borderRadius: '50%', top: '-7px', right: '-7px', boxShadow: '0 0 8px rgba(139,0,41,0.6)' }}
              animate={{ y: [0, 16.7, 23, 27.4, 30.7, 33.3, 35.2, 36.6, 37.6, 38.2, 38.4, 38.2, 37.6, 36.6, 35.2, 33.3, 30.7, 27.4, 23, 16.7, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1.5 }}
            />
          </motion.div>

          <PathPoint label="H1" title="Intelligence" className="path-node-lower-edge" />
          <PathPoint label="H2" title="Empathy" className="path-node-lower-center" />
          <PathPoint label="H3" title="Accessibility" className="path-node-lower-edge" />
        </motion.div>

      </div>

      {/* 3. 우측: Life XR 실현 */}
      <motion.div variants={itemFadeIn} className="col-lg-3 col-md-4 mt-4 mt-lg-0 text-center">
        <div
          className="d-inline-flex align-items-center justify-content-center shadow bg-white position-relative"
          style={{ width: '180px', height: '150px', borderRadius: '15px', border: '4px solid #8b0029', zIndex: 5 }}
        >
          <span className="fw-bolder fs-4" style={{ color: '#8b0029' }}>Life XR era</span>
        </div>
      </motion.div>

    </motion.div>
  );
};
// ----------------------------------------

// --- Practical Applications (Graph Network) 컴포넌트 ---
const PracticalApplicationsNetwork = () => {
  // 노드 데이터 정의 (x, y는 % 좌표)
  const nodes = [
    { id: 0, x: 50, y: 55, label: 'DXP Lab', type: 'center', icon: 'box' },
    
    { id: 1, x: 50, y: 28, label: 'Immersive Media', type: 'area', icon: 'layers' },
    { id: 2, x: 25, y: 8, label: 'Child', type: 'app', icon: 'smile' },
    { id: 3, x: 75, y: 8, label: 'Military', type: 'app', icon: 'shield' },
    
    { id: 4, x: 72, y: 55, label: 'Comfortable XR', type: 'area', icon: 'zap' },
    { id: 5, x: 88, y: 32, label: 'Medical', type: 'app', icon: 'activity' },
    { id: 6, x: 88, y: 85, label: 'Mobility', type: 'app', icon: 'navigation' },
    
    { id: 7, x: 28, y: 55, label: 'Believable AI/ML', type: 'area', icon: 'cpu' },
    { id: 8, x: 12, y: 32, label: 'Art Tech', type: 'app', icon: 'pen' },
    { id: 9, x: 12, y: 85, label: 'Virtual Human', type: 'app', icon: 'user' },
  ];

  // 연결선(간선) 데이터 정의
  const edges = [
    { source: 0, target: 1 },
    { source: 0, target: 4 },
    { source: 0, target: 7 },
    { source: 1, target: 2 },
    { source: 1, target: 3 },
    { source: 4, target: 5 },
    { source: 4, target: 6 },
    { source: 7, target: 8 },
    { source: 7, target: 9 },
  ];

  const containerRef = useRef(null);
  const [nodePositions, setNodePositions] = useState(() => {
    const initialPos = {};
    nodes.forEach(n => {
      initialPos[n.id] = { x: n.x, y: n.y };
    });
    return initialPos;
  });

  const [draggingNode, setDraggingNode] = useState(null);
  const lastPos = useRef({ x: 0, y: 0 });

  const handlePointerDown = (id, e) => {
    setDraggingNode(id);
    lastPos.current = { x: e.clientX, y: e.clientY };
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (id, e) => {
    if (draggingNode === id && containerRef.current) {
      const dx = e.clientX - lastPos.current.x;
      const dy = e.clientY - lastPos.current.y;
      lastPos.current = { x: e.clientX, y: e.clientY };
      const rect = containerRef.current.getBoundingClientRect();
      setNodePositions(prev => ({
        ...prev,
        [id]: { x: prev[id].x + (dx / rect.width) * 100, y: prev[id].y + (dy / rect.height) * 100 }
      }));
    }
  };

  const handlePointerUp = (id, e) => {
    if (draggingNode === id) {
      setDraggingNode(null);
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
  };

  return (
    <div className="py-5 mt-4 mb-5 border-top">
      <div className="text-center mb-5 pt-4">
        <h2 className="fw-bolder mb-2" style={{ color: '#8b0029' }}>Practical Applications</h2>
        <p className="lead text-muted mb-2">Translating fundamental research into real-world solutions.</p>
        {/* <span className="badge rounded-pill shadow-sm" style={{ backgroundColor: '#ff5177', color: '#fff' }}>
          <FeatherIcon icon="move" style={{ width: 12, height: 12, marginRight: '4px' }} />
          Drag nodes to explore
        </span> */}
      </div>
      
      <div className="position-relative mx-auto w-100" style={{ maxWidth: '900px', height: '550px' }} ref={containerRef}>
        {/* Edges (연결선 애니메이션) */}
        <svg className="position-absolute top-0 start-0 w-100 h-100" style={{ zIndex: 1, overflow: 'visible' }}>
          {edges.map((edge, idx) => {
            const src = nodePositions[edge.source];
            const tgt = nodePositions[edge.target];
            const srcNode = nodes.find(n => n.id === edge.source);
            return (
              <motion.line
                key={idx}
                x1={`${src.x}%`} y1={`${src.y}%`}
                x2={`${tgt.x}%`} y2={`${tgt.y}%`}
                stroke={srcNode.type === 'center' ? "rgba(139,0,41,0.4)" : "rgba(108,117,125,0.3)"}
                strokeWidth={srcNode.type === 'center' ? "4" : "2"}
                strokeDasharray={srcNode.type === 'center' ? "none" : "6,6"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.2, ease: "easeInOut" }}
              />
            );
          })}
        </svg>

        {/* Nodes (그래프 노드) */}
        {nodes.map((node) => {
          const isCenter = node.type === 'center';
          const isArea = node.type === 'area';
          
          const circleSize = isCenter ? 80 : (isArea ? 60 : 50);
          const iconSize = isCenter ? 36 : (isArea ? 28 : 24);
          const bgColor = isCenter ? '#8b0029' : (isArea ? '#121212' : 'white');
          const iconColor = isCenter || isArea ? 'white' : '#8b0029';
          const border = isCenter || isArea ? 'none' : '3px solid #8b0029';
          const pos = nodePositions[node.id];

          return (
            <motion.div
              key={node.id}
              className="position-absolute d-flex flex-column align-items-center"
              style={{ top: `${pos.y}%`, left: `${pos.x}%`, zIndex: draggingNode === node.id ? 20 : (isCenter ? 5 : 4), touchAction: 'none' }}
              initial={{ opacity: 0, scale: 0.5, x: "-50%", y: "-50%" }}
              animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
              whileHover={{ scale: 1.15, x: "-50%", y: "-50%", zIndex: 10 }}
              transition={{ duration: 0.4, delay: isCenter ? 0 : (isArea ? 0.6 : 1.2), type: "spring" }}
              onPointerDown={(e) => handlePointerDown(node.id, e)}
              onPointerMove={(e) => handlePointerMove(node.id, e)}
              onPointerUp={(e) => handlePointerUp(node.id, e)}
              onPointerCancel={(e) => handlePointerUp(node.id, e)}
            >
              <div className="rounded-circle d-flex align-items-center justify-content-center shadow" style={{ width: circleSize, height: circleSize, backgroundColor: bgColor, border: border, cursor: draggingNode === node.id ? 'grabbing' : 'grab' }}>
                <FeatherIcon icon={node.icon} style={{ width: iconSize, height: iconSize, stroke: iconColor }} />
              </div>
              <div className="mt-2 fw-bold text-center shadow-sm rounded-pill px-3 py-1 bg-white" style={{ fontSize: isCenter ? '1rem' : '0.8rem', color: isCenter ? '#8b0029' : '#212529', whiteSpace: 'nowrap', border: '1px solid rgba(0,0,0,0.05)' }}>
                {node.label}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
// ----------------------------------------

const Research = () => {
  const [selectedId, setSelectedId] = useState(researchAreasData[0].id); // 기본 선택값 설정
  const detailRef = useRef(null);

  const [selectedAxId, setSelectedAxId] = useState(axConvergenceData[0].id); // AX 선택 상태
  const axDetailRef = useRef(null);

  const selectedArea = researchAreasData.find(a => a.id === selectedId);

  const handleCardClick = (id) => {
    setSelectedId(id);

    // 상세 설명 레이아웃으로 부드럽게 자동 스크롤
    setTimeout(() => {
      if (detailRef.current) {
        const yOffset = -100; // sticky nav 메뉴 바 높이 보정
        const y = detailRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 150);
  };

  const handleAxCardClick = (id) => {
    setSelectedAxId(id);
    setTimeout(() => {
      if (axDetailRef.current) {
        const yOffset = -100;
        const y = axDetailRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 150);
  };

  return (
    <>
      <style>
        {`
          .lift-text { transition: color 0.2s ease-in-out; }
          .lift-text:hover { color: #8b0029 !important; text-decoration: underline !important; }
          .lift-text-dark-bg { transition: color 0.2s ease-in-out; }
          .lift-text-dark-bg:hover { color: #ff5177 !important; text-decoration: underline !important; }
          .research-card-selected {
            outline: 2px solid #ff5177 !important;
            outline-offset: -2px;
            background-color: rgba(139, 0, 41, 0.04) !important;
          }
          .ax-card {
            background-color: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(255, 255, 255, 0.08);
            transition: all 0.3s ease;
          }
          .ax-card:hover {
            background-color: rgba(255, 255, 255, 0.08);
            transform: translateY(-5px);
          }
          .ax-card-selected {
            border: 1px solid #ff5177;
            background: linear-gradient(145deg, rgba(255,81,119,0.15) 0%, rgba(139,0,41,0.1) 100%);
            box-shadow: 0 0 20px rgba(255,81,119,0.15);
          }
          .path-node-upper-center { transform: translateY(-35px); }
          .path-node-upper-edge { transform: translateY(-30px); }
          .path-node-lower-center { transform: translateY(15px); }
          .path-node-lower-edge { transform: translateY(10px); }
          
          @media (max-width: 991.98px) {
            .path-node-upper-center { transform: translateY(-25px); }
            .path-node-upper-edge { transform: translateY(-22px); }
            .path-node-lower-center { transform: translateY(10px); }
            .path-node-lower-edge { transform: translateY(7px); }
          }
          
          .mindmap-container {
            width: 100%;
            max-width: 900px;
            aspect-ratio: 16 / 10;
            margin: 0 auto;
            position: relative;
          }
          @media (max-width: 767.98px) {
            .mindmap-container {
              aspect-ratio: 1 / 1.2;
            }
          }
        `}
      </style>
      <div className="container-xl px-4 mt-5 mb-5">

        {/* 헤더 타이틀 영역 */}
        <div className="text-center mb-5">
          <h1 className="display-5 fw-bolder">Research</h1>
          <p className="lead text-muted">Explore our key research areas and directions.</p>
          <hr className="w-25 mx-auto" />
        </div>

        {/* 여기에 목표 및 방향성 애니메이션 렌더링 */}
        <ResearchGoalAnimation />

        {/* 기존 Research Areas Section */}
        <div className="pt-4">
          {/* <h2 className="fw-bolder mb-4 text-center">Research Areas</h2>
          <hr className="w-25 mx-auto mb-5" /> */}

          {/* Research Direction (상단 3개 카드) */}
          <div className="d-flex flex-column flex-md-row align-items-md-baseline mb-4">
            <h3 className="fw-bolder mb-2 mb-md-0 me-3" style={{ color: '#8b0029' }}>Research Direction</h3>
            <span className="text-muted">Core components for realizing the Life XR era.</span>
          </div>
          <div className="row justify-content-center mb-5">
            {researchAreasData.slice(0, 3).map((area, index) => (
              <div className="col-lg-4 col-md-6 mb-4" key={index}>
                <div
                  className={`card h-100 shadow-sm lift border-0 ${selectedId === area.id ? 'research-card-selected' : ''}`}
                  onClick={() => handleCardClick(area.id)}
                  style={{
                    cursor: 'pointer',
                    outlineOffset: '-2px',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div className="card-body p-4 text-center">
                    <div className="mb-3 d-inline-flex align-items-center justify-content-center"
                      style={{ width: "50px", height: "50px", borderRadius: "10px", backgroundColor: "rgba(139, 0, 41, 0.1)", color: "#8b0029" }}>
                      <FeatherIcon icon={area.icon} style={{ width: 24, height: 24 }} />
                    </div>
                    <h5 className="fw-bolder">{area.title}</h5>
                    <p className="text-muted mb-0">{area.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Human Perception (하단 3개 카드) */}
          <div className="d-flex flex-column flex-md-row align-items-md-baseline mb-4 mt-2">
            <h3 className="fw-bolder mb-2 mb-md-0 me-3" style={{ color: '#8b0029' }}>Human Perception</h3>
            <span className="text-muted">Evaluating improvements to verify the realization of the Life XR era.</span>
          </div>
          <div className="row justify-content-center">
            {researchAreasData.slice(3, 6).map((area, index) => (
              <div className="col-lg-4 col-md-6 mb-4" key={index + 3}>
                <div
                  className={`card h-100 shadow-sm lift border-0 ${selectedId === area.id ? 'research-card-selected' : ''}`}
                  onClick={() => handleCardClick(area.id)}
                  style={{
                    cursor: 'pointer',
                    outlineOffset: '-2px',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div className="card-body p-4 text-center">
                    <div className="mb-3 d-inline-flex align-items-center justify-content-center"
                      style={{ width: "50px", height: "50px", borderRadius: "10px", backgroundColor: "rgba(139, 0, 41, 0.1)", color: "#8b0029" }}>
                      <FeatherIcon icon={area.icon} style={{ width: 24, height: 24 }} />
                    </div>
                    <h5 className="fw-bolder">{area.title}</h5>
                    <p className="text-muted mb-0">{area.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Research Details Section */}
        <div ref={detailRef} className="mt-4 mb-5 pb-5" style={{ display: 'grid' }}>
          <AnimatePresence>
            {selectedArea && (
              <motion.div
                key={selectedArea.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="card border-0 shadow-sm rounded-4 overflow-hidden"
                style={{ gridArea: '1 / 1' }}
              >
                <div className="row g-0">
                  {/* 좌측: 타이틀 및 상세 설명 */}
                  <div className="col-lg-7 p-4 p-md-5 d-flex flex-column justify-content-start">
                    <h3 className="fw-bolder mb-4" style={{ color: '#8b0029', fontSize: '2rem' }}>{selectedArea.title}</h3>
                    <p className="text-dark" style={{ lineHeight: '1.8', fontSize: '1.1rem', textAlign: 'justify' }}>{selectedArea.details}</p>

                    {/* 기술 스택 키워드 */}
                    <div className="mt-4 mt-lg-auto">
                      <h6 className="fw-bold mb-3 text-muted">Tech Stacks</h6>
                      <div className="d-flex flex-wrap gap-2">
                        {selectedArea.techStacks.map((tech, idx) => (
                          <span key={idx} className="badge bg-light text-dark border px-3 py-2 rounded-pill shadow-sm" style={{ fontSize: '0.85rem' }}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>


                  {/* 우측: 상단 액자형 이미지 & 하단 하이라이트 논문 */}
                  <div className="col-lg-5 p-4 p-md-5 d-flex flex-column bg-light">
                    <div className="mb-4">
                      <img src={selectedArea.image} alt={selectedArea.title} className="img-fluid rounded-3 w-100 shadow-sm" style={{ height: '220px', objectFit: 'cover' }} />
                    </div>

                    <div className="mt-auto">
                      <h2 className="fw-bolder mb-3 pb-2  " style={{ color: '#3a6df1', borderBottom: '1px solid rgba(139,0,41,0.1)' }}>Highlight Papers</h2>
                      <ul className="list-unstyled mb-0">
                        {selectedArea.highlightPapers.map((paper, idx) => (
                          <li key={idx} className="mb-3 d-flex align-items-start">
                            <FeatherIcon icon="file-text" className="me-2 mt-1 flex-shrink-0" style={{ width: 16, height: 16, stroke: '#2254d3' }} />
                            <div>
                              <a href={paper.link} target="_blank" rel="noopener noreferrer" className="text-decoration-none fw-bold text-dark lift-text d-block mb-1" style={{ fontSize: '0.95rem' }}>{paper.title}</a>
                              <div className="small text-muted">{paper.venue} ({paper.year})</div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        {/* --- Practical Applications (Mindmap Network) --- */}
        <PracticalApplicationsNetwork />
      </div>

      {/* --- 상단 백그라운드와의 기하학적 확산 트랜지션 (White to Dark) --- */}
      <div style={{ width: '100%', height: '300px', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: 'absolute', width: '100%', height: '100%', left: 0, top: 0, zIndex: 0 }}>
          <defs>
            <linearGradient id="ax-expansion-fill" x1="50%" y1="-20%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#8b0029" stopOpacity="0" />
              <stop offset="100%" stopColor="#8b0029" stopOpacity="0.25" />
            </linearGradient>
            <linearGradient id="ax-expansion-stroke" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#ff5177" stopOpacity="0" />
              <stop offset="100%" stopColor="#ff5177" stopOpacity="0.6" />
            </linearGradient>
            <linearGradient id="ax-dark-fade" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="70%" stopColor="#121212" stopOpacity="0" />
              <stop offset="100%" stopColor="#121212" stopOpacity="1" />
            </linearGradient>
          </defs>

          {/* 과거에서 미래(AX)로 확장되는 큰 삼각형 - 버튼 클릭 시 서서히 나타남 */}
          <polygon
            points="50,20 -30,100 130,100"
            fill="url(#ax-expansion-fill)"
          />

          {/* 삼각형 양옆을 강조하는 빛나는 선 (원근감/확장감 부여) */}
          {/* <line x1="50" y1="0" x2="-30" y2="100" stroke="url(#ax-expansion-stroke)" strokeWidth="0.5" />
          <line x1="50" y1="0" x2="130" y2="100" stroke="url(#ax-expansion-stroke)" strokeWidth="0.5" /> */}

          {/* 다크 그라데이션으로 아래쪽 경계를 부드럽게 마감하여 연결성 강화 - 버튼 클릭 시 함께 나타남 */}
          <rect
            x="0" y="0" width="100" height="100" fill="url(#ax-dark-fade)" pointerEvents="none"
          />
        </svg>

      </div>

      {/* --- AX Convergence Research (새로운 영역 - 풀와이드 다크 테마) --- */}
      <div style={{ backgroundColor: '#121212', overflow: 'hidden' }}>
          <div className="pb-5">
            <div className="container-xl px-4 pb-5 pt-2 position-relative overflow-hidden">
              {/* 배경 그라데이션 장식 */}
              <div className="position-absolute" style={{ top: '-10%', left: '10%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(255,81,119,0.12) 0%, rgba(0,0,0,0) 70%)', zIndex: 0 }}></div>
              <div className="position-absolute" style={{ bottom: '-25%', right: '-5%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(139,0,41,0.25) 0%, rgba(0,0,0,0) 70%)', zIndex: 0 }}></div>

              <div className="position-relative" style={{ zIndex: 1 }}>
                <div className="text-center m-5">
                  <span
                    className="badge rounded-pill m-3 px-3 py-2 fw-bold shadow-sm"
                    style={{ backgroundColor: '#ff5177', color: '#fff', letterSpacing: '0.05rem' }}
                  >
                    NEW RESEARCH DOMAIN
                  </span>
                  <h1 className="display-5 fw-bolder text-white">AX Convergence Research</h1>
                  <p className="lead text-white-50">A novel approach integrating XR and AI for the next-generation experience.</p>
                </div>

                {/* 도메인 선택 카드 */}
                <div className="row justify-content-center mb-5">
                  {axConvergenceData.map((area, index) => (
                    <div className="col-lg-4 col-md-6 mb-4" key={index}>
                      <div
                        className={`card h-100 ax-card rounded-4 ${selectedAxId === area.id ? 'ax-card-selected' : ''}`}
                        onClick={() => handleAxCardClick(area.id)}
                        style={{ cursor: 'pointer' }}
                      >
                        <div className="card-body p-4 text-center">
                          <div className="mb-3 d-inline-flex align-items-center justify-content-center rounded-circle" style={{ width: "60px", height: "60px", backgroundColor: "rgba(255,255,255,0.05)" }}>
                            <FeatherIcon icon={area.icon} style={{ width: 28, height: 28, stroke: '#ff5177' }} />
                          </div>
                          <h5 className="fw-bolder text-white">{area.title}</h5>
                          <p className="text-white-50 mb-0 small">{area.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* 과거/현재/적용방향 레이아웃 */}
                <div ref={axDetailRef} style={{ display: 'grid' }}>
                  <AnimatePresence mode="wait">
                    {axConvergenceData.filter(a => a.id === selectedAxId).map((selectedAxArea) => (
                      <motion.div
                        key={selectedAxArea.id}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        style={{ gridArea: '1 / 1' }}
                      >
                        <div className="row g-4">
                          <div className="col-lg-4 position-relative">
                            <div className="p-4 rounded-4 h-100" style={{ backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}>
                              <h5 className="fw-bold mb-3 d-flex align-items-center" style={{ color: '#adb5bd' }}><FeatherIcon icon="clock" className="me-2" style={{ width: '20px', stroke: '#ffffff' }} /> 과거 (Past)</h5>
                              <p className="text-white-50 small mb-0" style={{ lineHeight: '1.6', textAlign: 'justify' }}>{selectedAxArea.past}</p>
                            </div>
                            {/* 연결 화살표 1 (Desktop) */}
                            <div className="d-none d-lg-flex position-absolute align-items-center justify-content-center shadow" style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#343a40', border: '3px solid #212529', top: '50%', right: '0', transform: 'translate(50%, -50%)', zIndex: 10 }}>
                              <FeatherIcon icon="arrow-right" strokeWidth="3" style={{ stroke: '#adb5bd', width: '16px' }} />
                            </div>
                            {/* 연결 화살표 1 (Mobile) */}
                            <div className="d-lg-none d-flex position-absolute align-items-center justify-content-center shadow" style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#343a40', border: '3px solid #212529', bottom: '0', left: '50%', transform: 'translate(-50%, 50%)', zIndex: 10 }}>
                              <FeatherIcon icon="arrow-down" strokeWidth="3" style={{ stroke: '#adb5bd', width: '16px' }} />
                            </div>
                          </div>
                          <div className="col-lg-4 position-relative">
                            <div className="p-4 rounded-4 h-100" style={{ backgroundColor: 'rgba(255,255,255,0.06)', borderTop: '3px solid #ff5177' }}>
                              <h5 className="fw-bold text-white mb-3 d-flex align-items-center"><FeatherIcon icon="zap" className="me-2" style={{ width: '20px', stroke: '#ffffff' }} /> 현재 (Present)</h5>
                              <p className="text-white-75 small mb-0" style={{ lineHeight: '1.6', textAlign: 'justify' }}>{selectedAxArea.present}</p>
                            </div>
                            {/* 연결 화살표 2 (Desktop) */}
                            <div className="d-none d-lg-flex position-absolute align-items-center justify-content-center shadow" style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#ff5177', border: '3px solid #212529', top: '50%', right: '0', transform: 'translate(50%, -50%)', zIndex: 10 }}>
                              <FeatherIcon icon="arrow-right" strokeWidth="3" style={{ stroke: '#ffffff', width: '16px' }} />
                            </div>
                            {/* 연결 화살표 2 (Mobile) */}
                            <div className="d-lg-none d-flex position-absolute align-items-center justify-content-center shadow" style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#ff5177', border: '3px solid #212529', bottom: '0', left: '50%', transform: 'translate(-50%, 50%)', zIndex: 10 }}>
                              <FeatherIcon icon="arrow-down" strokeWidth="3" style={{ stroke: '#ffffff', width: '16px' }} />
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div className="p-4 rounded-4 h-100" style={{ background: 'linear-gradient(135deg, rgba(139,0,41,0.2) 0%, rgba(255,81,119,0.15) 100%)', border: '1px solid rgba(255,81,119,0.3)' }}>
                              <h5 className="fw-bold text-white mb-3 d-flex align-items-center"><FeatherIcon icon="compass" className="me-2" style={{ width: '20px', stroke: '#ffffff' }} /> 적용 방향 (Direction)</h5>
                              <p className="text-white small mb-0 fw-bold" style={{ lineHeight: '1.6', textAlign: 'justify' }}>{selectedAxArea.direction}</p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
      </div>
    </>
  );
};

export default Research;