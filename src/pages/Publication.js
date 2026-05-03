import React, { useState, useMemo } from 'react';
import FeatherIcon from 'feather-icons-react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import { youtube } from 'googleapis/build/src/apis/youtube';

// 12가지 세부 XR 기술 카테고리 정의
export const xrCategories = [
  'Display and Rendering',
  '3D Interaction and User Interfaces',
  'Locomotion and Navigation',
  'Avatars, Agents, and Presence',
  'Haptics and Multimodal Feedback',
  'Perception and Cognition',
  'Tracking and Sensing',
  'Reconstruction and Spatial Computing',
  'Social, Ethical, and Secure XR',
  'XR Applications',
  'AI and AI+XR',
  'Others'
];

// Placeholder data for publications
export const publicationsData = {
  internationalpaper: [
        {
      id: 'child_gaze',
      title: `Preschoolers' Early Gaze Exploration in Virtual Preschool Classrooms: A Transition-Based Eye-Tracking Analysis of Window Views and Room Size`,
      authors: 'Kijoo Cha, Hanseob Kim*, Donghyun Kim',
      tags: ['Journal', 'SCIE'],
      category: 'Tracking and Sensing',
      journal: ' Frontiers in Psychology',
      details: 'Accepted at: April 2026',
      // doi: '10.1080/10447318.2025.2579783',
      keywords: ['Gaze Interaction', 'Virtual Reality', 'Child'],
      abstract:`Preschool age is a developmental period in which children are learning to orient in unfamiliar spaces while still relying strongly on visible landmarks and other salient environmental cues, yet little is known about how classroom design shapes this initial orienting process. To address this gap, this study examined how preschoolers (ages 5–6) visually explore immersive virtual preschool classrooms during the first five minutes of exposure using head-mounted virtual reality (VR) with integrated eye tracking. Two architectural manipulations were tested in separate between-subject comparisons: window-view content (city vs. nature) and classroom size (large vs. small). Gaze was mapped to classroom activity areas (areas of interest; AOIs) and analyzed using (a) proportional dwell time and (b) transition-based metrics derived from AOI sequences (e.g., transition entropy, return-to-anchor dynamics), followed by unsupervised clustering of scanpath patterns. In the window-view comparison, children in the nature-view classroom allocated more gaze to window-related AOIs (i.e., central and side windows). Two exploration patterns emerged: a return-anchored pattern characterized by frequent returns to a window reference, and an expansion-oriented pattern marked by broader outward exploration; cluster membership was strongly associated with view condition. In the classroom-size comparison, large and small rooms showed distinct AOI prioritization and process-level exploration profiles, with larger rooms eliciting more rapid and/or diverse scanning and smaller rooms eliciting more repetitive or focal viewing. Overall, the results suggest that window-view content and room scale systematically reorganize the temporal structure and spatial distribution of preschoolers’ early visual orientation in immersive learning environments, providing initial evidence for developmentally informed classroom design.`
      // link: 'https://www.tandfonline.com/doi/full/10.1080/10447318.2025.2579783',
      // image: process.env.PUBLIC_URL + '/assets/img/publications/minimap.png',
      // caption: 'Figure 1: A teaser image illustrating the core concept of the research.',
    },
    {
      id: 'effects-of-minimap',
      title: 'Effects of Mini-Map Usage and Spatial Ability on Cybersickness in Virtual Reality Navigation',
      authors: 'Yechan Yang, JunSeo Park, Gerard Jounghyun Kim, Hanseob Kim',
      tags: ['Journal', 'SCIE'],
      category: 'Locomotion and Navigation',
      journal: 'International Journal of Human–Computer Interaction',
      details: 'Published online: Nov 2025',
      doi: '10.1080/10447318.2025.2579783',
      keywords: ['Cybersickness', 'Virtual Reality', 'Navigation', 'Mini-map', 'Spatial Ability'],
      link: 'https://www.tandfonline.com/doi/full/10.1080/10447318.2025.2579783',
      image: process.env.PUBLIC_URL + '/assets/img/publications/minimap.png',
      caption: 'Figure 1: A teaser image illustrating the core concept of the research.',
      abstract: `Navigation is a core task in VR that must be well supported. Interface choices shape task performance (e.g., search), viewing experience, and the sense of presence and immersion. Mini-maps are widely recommended and often help with these goals. However, the mini-map may also increase mental and physical workload and may even cause discomfort, exacerbating the already-likely-to-exist cybersickness. In this work, we compare two virtual navigation conditions, one with the mini-map and the other without, to investigate and reexamine their various effects, especially on cybersickness, an important and overlooked aspect of the VR experience. While the experiment reconfirmed the previously known fact that the map could enhance search task/navigational performance, it also caused or worsened cybersickness symptoms, especially for those possessing relatively lesser spatial abilities. The results indicate the need to revise the interaction design guidelines in VR regarding the pros and cons of using mini-maps for navigation and search.
      `,
      citation: `@article{yang2025effects,
  title={Effects of Mini-Map Usage and Spatial Ability on Cybersickness in Virtual Reality Navigation},
  author={Yang, Yechan and Park, JunSeo and Kim, Gerard Jounghuyn and Kim, Hanseob},
  journal={International Journal of Human--Computer Interaction},
  pages={1--24},
  year={2025},
  publisher={Taylor \& Francis}
}`
    },
    {
      id: 'balance-vr',
      title: 'BalanceVR: Balance Training to Increase Tolerance to Cybersickness in Immersive Virtual Reality',
      authors: 'Yechan Yang, Seonghoon Kang, Minchae Kim, Gerard Jounghyun Kim, Hanseob Kim',
      tags: ['Journal', 'SCIE'],
      category: 'Perception and Cognition',
      journal: 'Virtual Reality',
      award: 'Outstanding Research, Awarded by KEA 2023',
      details: 'Vol. 29, Issue 1, Article 39, 2025',
      doi: '10.1007/s10055-024-01097-7',
      keywords: ['Cybersickness', 'Balance Training', 'Virtual Reality', 'Tolerance'],
      link: 'https://link.springer.com/article/10.1007/s10055-024-01097-7',
      image: process.env.PUBLIC_URL + '/assets/img/publications/balanceVR.png',
      caption: 'Figure 1: BalanceVR training setup overview.',
      abstract: 'Cybersickness (CS) is a serious usability problem in virtual reality (VR). Postural instability theory has emerged as one major hypothesis for the cause of CS. Based on such a hypothesis, we present two experiments to observe the trends in users’ trained balance ability with respect to their susceptibilities to CS. The first experiment (as a preliminary study) evaluated the effects of 2-week balance training under three different operational conditions: training in VR (VRT), training in non-immersive media with a 2D projection display (2DT), and VR exposure without any training (VRO; Baseline). The effect toward CS was tested not only in the training space but also in a different VR content to observe for any transfer effect. As results clearly indicated that the non-VR 2DT was ineffective in gaining any significant tolerance to CS, we conducted a follow-up second experiment with 1-week balance training, focusing on comparing only the VRT and VRO conditions. Overall, the experimental findings have shown, aside from the obvious improvement in balance performance itself, that accompanying balance training had the stronger effect of increasing tolerance to CS than mere exposure to VR. Furthermore, the tolerance to CS developed through VR balance training exhibited a transfer effect, that is, with reduced levels of CS in another VR content (not used during the training sessions).',
      citation: `@article{yang2025balancevr,
  title={BalanceVR: balance training to increase tolerance to cybersickness in immersive virtual reality},
  author={Yang, Yechan and Kang, Seonghoon and Kim, Minchae and Kim, Gerard Jounhyun and Kim, Hanseob},
  journal={Virtual Reality},
  volume={29},
  number={1},
  pages={39},
  year={2025},
  publisher={Springer}
}
}`
    },
    {
      id: 'asap-multi-outputs',
      title: "ASAP for multi-outputs: auto-generating storyboard and pre-visualization with virtual actors based on screenplay",
      authors: 'Hanseob Kim, Ghazanfar Ali, Bin Han, Hwang Youn Kim, Jieun Kim, Hyemin Shin, Gerard Jounghyun Kim, Jae-In Hwang',
      tags: ['Journal', 'SCIE'],
      category: 'Avatars, Agents, and Presence',
      journal: 'Multimedia Tools and Applications',
      details: 'Vol. 84, pp. 22377–22400, 2025',
      doi: '10.1007/s11042-024-19904-3',
      keywords: ['Pre-visualization', 'Storyboard', 'Virtual Actor', 'Screenplay', 'Animation'],
      link: 'https://link.springer.com/article/10.1007/s11042-024-19904-3',
      image: process.env.PUBLIC_URL + '/assets/img/publications/asap.png',
      video:'https://www.youtube.com/watch?v=omdEg7Ro_bU',
      caption: 'Figure 1: ASAP system workflow and auto-generation process.',
      abstract: 'One of the pressing desires of content creators is to be able to visualize how their characters will look in a scene as soon as possible. In the early stages of film production, this desire can be partly achieved by the computer graphics-based process known as Pre-visualization (Previz). However, traditional previz necessitates a high level of expertise and is also time-consuming. This paper introduces the ASAP system, an automated tool that creates pre-visualized animations and storyboards by generating virtual character behavior/animations based on understanding the screenplay. The ASAP system parses the user-written screenplay to extract data, including character names, dialogue, actions, and emotions. This extracted data is then passed to the respective modules, which select virtual characters and automatically generate their speaking gestures, physical movements, and expressive behaviors. We demonstrate the system’s fidelity by presenting multiple outputs, including a 2D storyboard, a 3D preview, and a VR-based immersive scenario, along with simulations of potential use cases. The ASAP system can streamline pre-visualization tasks in the pre-production phase and has the potential to be widely adopted by the film industry.',
      citation: `@article{kim2025asap,
  title={ASAP for multi-outputs: auto-generating storyboard and pre-visualization with virtual actors based on screenplay},
  author={Kim, Hanseob and Ali, Ghazanfar and Han, Bin and Kim, Hwang Youn and Kim, Jieun and Shin, Hyemin and Kim, Gerard Jounghyun and Hwang, Jae-In},
  journal={Multimedia Tools and Applications},
  volume={84},
  number={20},
  pages={22377--22400},
  year={2025},
  publisher={Springer}
}`
    },
    {
      id:'observer-chi',
      title: "The Impact of Observer Presence on Trainees' Mental States and Performance in Remote Military Training with Virtual Humans in Mixed Reality Environment",
      authors: 'JunSeo Park, Yechan Yang, Gerard Jounghyun Kim, Hanseob Kim',
      tags: ['Conference', 'BK21'],
      category: 'Avatars, Agents, and Presence',
      journal: "CHI '25: Proceedings of the 2025 CHI Conference on Human Factors in Computing Systems",
      details: 'April 2025',
      doi: '10.1145/3706598.3713515',
      keywords: ['Military Training', 'Mixed Reality', 'Virtual Human', 'Observer Effect', 'Tele-presence'],
      link: 'https://dl.acm.org/doi/10.1145/3706598.3713515',
      image: process.env.PUBLIC_URL + '/assets/img/publications/chi2025.png',
      caption: 'Figure 1: Military Training(CQB) with Virtual Avatar in Mixed Reality Environment',
      abstract: "Remote, vs. in situ, instruction may be regarded to decrease trainee engagement and concentration, potentially reducing training effectiveness. As such, local evaluative observers are often deployed to create the situated atmosphere. However, these observers can also have a negative effect on the trainees’ mental state and performance. This study investigates the impact of a local human observer’s presence on trainees’ mental state and task performance during military training conducted in a mixed reality (MR) environment, where a tele-presence avatar, controlled by the remote instructor, leads the training. An experiment was conducted comparing three conditions: remote training with (1) no observer, (2) a real observer, and (3) a virtual observer. The study found that although the observer, real or virtual, indeed negatively impacted the trainee’s mental state, the remote trainer avatar helped maintain the immersion/concentration, ensuring the trainees achieved the performance comparable to the no observer condition.",
      citation:`@inproceedings{park2025impact,
  title={The Impact of Observer Presence on Trainees' Mental States and Performance in Remote Military Training with Virtual Humans in Mixed Reality Environment},
  author={Park, JunSeo and Yang, Yechan and Kim, Gerard Jounghyun and Kim, Hanseob},
  booktitle={Proceedings of the 2025 CHI Conference on Human Factors in Computing Systems},
  pages={1--19},
  year={2025}
}`
    },
    {
      title: "The Vestibulo-Ocular Reflex is Associated With Visuospatial Dysfunction in Patients With Parkinson's Disease",
      authors: 'Yukang Kim, Tonghoon Woo, Seoui Kwag, Hyunsoh Park, Hanseob Kim, Kyoungwon Baik, SunUk Lee, Euyhyun Park, ChanNyoung Lee, Gerard J Kim, JiSoo Kim',
      tags: ['Journal', 'SCIE'],
      category: 'Others',
      journal: "Wiley Brain and Behavior",
      details: 'April 2025',
      doi: '10.1002/brb3.70453',
      keywords: ['Biofeedback', 'Parkinson'],
      link: 'https://onlinelibrary.wiley.com/doi/full/10.1002/brb3.70453'
    },
    {
      title: 'Lifter for VR Headset: Enhancing Immersion, Presence, Flow, and Alleviating Mental and Physical Fatigue during Prolonged Use',
      authors: 'JaeHoon Kim, DongYun Joo, Hyemin Shin, Sun-Uk Lee, Gerard Jounghyun Kim, Hanseob Kim',
      tags: ['Conference', 'BK21'],
      category: 'Haptics and Multimodal Feedback',
      journal: "VRST '24: Proceedings of the 30th ACM Symposium on Virtual Reality Software and Technology",
      details: 'Article 2, pp. 1–12, October 2024, Trier, Germany',
      doi: '10.1145/3641825.3687753',
      keywords: ['VR Headset', 'Ergonomics', 'Fatigue', 'Immersion', 'Presence'],
      link: 'https://dl.acm.org/doi/10.1145/3641825.3687753'
    },
    {
      title: 'Bilaterally positive head-impulse tests can differentiate AICA infarction from labyrinthitis',
      authors: 'Sung-Hwan Kim, Hanseob Kim, Sun-Uk Lee, Euyhyun Park, Bang-Hoon Cho, Kyung-Hee Cho, Gerard J Kim, Sungwook Yu, Ji-Soo Kim',
      tags: ['Journal', 'SCIE'],
      category: 'Others',
      journal: "Frontiers in Neurology",
      details: 'Augst 2024',
      doi: '10.3389/fneur.2024.1448989',
      keywords: ['Biofeedback'],
      link: 'https://www.frontiersin.org/journals/neurology/articles/10.3389/fneur.2024.1448989/full'
    },
    {
      title: 'Keep Your Eyes on the Target: Enhancing Immersion and Usability by Designing Natural Object Throwing with Gaze-based Targeting',
      authors: 'Jaeyoon Lee, Hanseob Kim, Gerard Jounghyun Kim',
      tags: ['Conference'],
      category: 'Tracking and Sensing',
      journal: "ETRA '24: Proceedings of the 2024 Symposium on Eye Tracking Research and Applications",
      details: 'pp. 1–7, June 2024',
      doi: '10.1145/3649902.3653338',
      keywords: ['Eye Tracking', 'Gaze Interaction', 'Virtual Reality', 'Targeting', 'Usability'],
      link: 'https://dl.acm.org/doi/10.1145/3649902.3653338'
    },
    {
      title: 'RPG: Rotation Technique in VR Locomotion using Peripheral Gaze',
      authors: 'Jaeyoon Lee, Hanseob Kim, Yechan Yang, Gerard Jounghyun Kim',
      tags: ['Journal', 'SCOPUS'],
      category: 'Locomotion and Navigation',
      journal: 'Proceedings of the ACM on Human-Computer Interaction',
      details: 'May 2024',
      doi: '10.1145/3655609',
      keywords: ['Virtual Reality', 'Locomotion', 'Peripheral Vision', 'Gaze Interaction', 'Cybersickness'],
      link: 'https://dl.acm.org/doi/10.1145/3655609'
    },
    {
      id: 'false-stable-heart-rate',
      title: 'The Effects of False but Stable Heart Rate Feedback on Cybersickness and User Experience in Virtual Reality',
      authors: 'Dongyun Joo, Hanseob Kim*, Gerard Jounghyun Kim',
      tags: ['Conference', 'BK21'],
      category: 'Perception and Cognition',
      journal: "CHI '24: Proceedings of the 2024 CHI Conference on Human Factors in Computing Systems",
      details: 'May 2024',
      caption:'Figure 1: Cybersickness mitigation method using the False Heart Rate Feedback',
      doi: '10.1145/3613904.3642072',
      image: process.env.PUBLIC_URL + '/assets/img/publications/chi2024-false.png',
      abstract:'Virtual reality (VR) offers a compelling and immersive experience; however, cybersickness (or VR sickness) stands as a significant obstacle to its widespread adoption. When a user experiences cybersickness, one’s physical condition deteriorates with various symptoms, often accompanied by an increased and destabilized heart rate and even altered perception of one’s state. In this paper, we propose to provide “False but Stable Heart rate (FSH)” feedback through auditory and vibrotactile stimulation to reversely induce a stably perceived heart rate and, thereby, alleviate cybersickness while navigating a sickness-inducing VR content. The validation of the human experiment confirmed the intended effect in a statistically significant way. Furthermore, it was found that the lesser compatible FSH feedback had a more substantial sickness reduction effect but distracted the user with the reduced immersive experience. The compatible FSH feedback still showed moderate sickness reduction with the maintained sense of presence and immersion.',
      keywords: ['Cybersickness', 'Biofeedback', 'Heart Rate', 'User Experience', 'Virtual Reality'],
      link: 'https://dl.acm.org/doi/10.1145/3613904.3642072',
      citation:`@inproceedings{joo2024effects,
title={The effects of false but stable heart rate feedback on cybersickness and user experience in virtual reality},
author={Joo, Dongyun and Kim, Hanseob and Kim, Gerard Jounghyun},
booktitle={Proceedings of the 2024 CHI Conference on Human Factors in Computing Systems},
pages={1--15},
year={2024}}`
    },
    {
      id: 'engaged-affective-agents',
      title: 'Engaged and Affective Virtual Agents: Their Impact on Social Presence, Trustworthiness, and Decision-Making in the Group Discussion',
      authors: 'Hanseob Kim, Bin Han, Jieun Kim, Muhammad Firdaus Syawaludin, Gerard Jounghyun Kim, Jae-In Hwang',
      tags: ['Conference', 'BK21'],
      category: 'Avatars, Agents, and Presence',
      journal: "CHI '24: Proceedings of the 2024 CHI Conference on Human Factors in Computing Systems",
      details: 'May 2024',
      caption: 'Figure 1: Changes in user evaluations of the virtual human when it exhibits engaged and/or affective behavior during group discussions',
      abstract: 'This study investigates how different virtual agent (VA) behaviors influence subjects’ perceptions and group decision-making. Participants carried out experimental group discussions with a VA exhibiting varying levels of engagement and affective behavior. Engagement refers to the VA’s focus on the group task, whereas affective behavior reflects the VA’s emotional state. The findings revealed that VA’s engagements effectively captured participants’ attention even in the group setting and enhanced group synergy, thereby facilitating more in-depth discussion and producing better consensus. On the other hand, VA’s affective behavior negatively affected the perceived social presence and trustworthiness. Consequently, in the context of group discussion, participants preferred the engaged and non-affective VA to the non-engaged and affective VA. The study provides valuable insights for improving the VA’s behavioral design as a team member for collaborative tasks',
      image: process.env.PUBLIC_URL + '/assets/img/publications/chi2024.jpg',
      doi: '10.1145/3613904.3642917',
      citation:`@inproceedings{kim2024engaged,
title={Engaged and affective virtual agents: their impact on social presence, trustworthiness, and decision-making in the group discussion},
author={Kim, Hanseob and Han, Bin and Kim, Jieun and Lubis, Muhammad Firdaus Syawaludin and Kim, Gerard Jounghyun and Hwang, Jae-In},
booktitle={Proceedings of the 2024 CHI Conference on Human Factors in Computing Systems},
pages={1--17},
year={2024}}`,
      keywords: ['Virtual Human', 'Social Presence', 'Trustworthiness', 'Decision-Making', 'Affective Computing'],
      link: 'https://dl.acm.org/doi/10.1145/3613904.3642917',
      video: 'https://www.youtube.com/watch?v=aNfPIW1oad4'
    },
    {
      title: 'CIRO: The Effects of Visually Diminished Real Objects on Human Perception in Handheld Augmented Reality',
      authors: 'Hanseob Kim, Taehyung Kim, Myungho Lee, Gerard Jounghyun Kim, Jae-In Hwang',
      tags: ['Journal', 'SCIE'],
      category: 'Perception and Cognition',
      journal: 'Electronics',
      details: 'Vol. 10, No. 8, 2021',
      doi: '10.3390/electronics10080900',
      keywords: ['Handheld AR', 'Diminished Reality', 'Visual Perception', 'User Experience'],
      link: 'https://www.mdpi.com/2079-9292/10/8/900'
    },
    {
      title: 'The Impacts of Visual Effects on User Perception With a Virtual Human in Augmented Reality Conflict Situations',
      authors: 'Hanseob Kim, Myungho Lee, Gerard J. Kim, Jae-In Hwang',
      tags: ['Journal', 'SCIE'],
      category: 'Avatars, Agents, and Presence',
      journal: 'IEEE Access',
      details: 'Vol. 9, pp. 35300–35312, 2021',
      doi: '10.1109/ACCESS.2021.3062037',
      keywords: ['Augmented Reality', 'Virtual Human', 'Co-presence', 'Visual Effects'],
      link: 'https://ieeexplore.ieee.org/document/9363124'
    },
    {
      title: 'Silhouettes from Real Objects Enable Realistic Interactions with a Virtual Human in Mobile Augmented Reality',
      authors: 'Hanseob Kim, Ghazanfar Ali, Andréas Pastor, Myungho Lee, Gerard J. Kim, Jae-In Hwang',
      tags: ['Journal', 'SCIE'],
      category: 'Avatars, Agents, and Presence',
      journal: 'Applied Sciences',
      details: 'Vol. 11, No. 6, Article, 2021',
      doi: '10.3390/app11062763',
      keywords: ['Augmented Reality', 'Mobile AR', 'Virtual Human', 'Real-time Interaction'],
      link: 'https://www.mdpi.com/2076-3417/11/6/2763'
    },
    {
      title: "Don't Bother Me: How to Handle Content-Irrelevant Objects in Handheld Augmented Reality",
      authors: 'Hanseob Kim, TaeHyung Kim, Myungho Lee, Gerard Jounghyun Kim, Jae-In Hwang',
      tags: ['Conference', 'BK21'],
      category: 'Perception and Cognition',
      journal: 'Proceedings of the 26th ACM Symposium on Virtual Reality Software and Technology',
      details: 'pp. 1–5, 2020',
      doi: '10.1145/3385956.3418948',
      keywords: ['Handheld AR', 'Diminished Reality', 'Virtual Character', 'User Perception'],
      link: 'https://dl.acm.org/doi/10.1145/3385956.3418948'
    }
  ],

  internationalposter: [
    {
      title: "Latent antiganglioside antibodies-related ophthalmoplegia revealed by head impulse test: a new role for an old sign",
      authors: 'Seoui Kwag, Hanseob Kim, Sun-Uk Lee, Euyhyun Park, Ji-Soo Kim',
      tags: ['Letter to Editors'],
      category: 'Others',
      journal: "Springer Journal of Neurology",
      details: 'March 2025',
      doi: '10.1007/s00415-025-12946-z',
      keywords: ['Biofeedback'],
      link: 'https://link.springer.com/article/10.1007/s00415-025-12946-z'
    },
    {
      title: 'Mitigating Cyber and Motion Sickness with Haptic and Visual Feedback for VR Users in Autonomous Vehicle',
      authors: 'Hyemin Shin, Yuki Shimizu, Hanseob Kim, Taishi Sawabe, Gerard Jounghyun Kim',
      tags: ['Extended Abstract'],
      category: 'XR Applications',
      journal: "CHI EA '25: Extended Abstracts of the CHI Conference on Human Factors in Computing Systems",
      details: 'Article No. 532, April 2025',
      doi: '10.1145/3706599.3720076',
      keywords: ['Cybersickness', 'Motion Sickness', 'Autonomous Vehicle', 'Virtual Reality', 'Haptic Feedback'],
      link: 'https://dl.acm.org/doi/10.1145/3706599.3720076'
    },
    {
      title: 'The vestibulo-ocular and vestibulospinal reflexes minimally impact the freezing of gait in patients with early-to-moderate Parkinson’s disease',
      authors: 'Yukang Kim, Tonghoon Woo, Hanseob Kim, Kyoungwon Baik, Sun-Uk Lee, Chan-Nyoung Lee, Gerard J Kim, Seoui Kwag, Hyunsoh Park, Ji-Soo Kim, Kun-Woo Park',
      tags: ['Short Communications'],
      category: 'Others',
      journal: "Clinical Parkinsonism & Related Disorders",
      details: 'Volume 12, 100319, 2025',
      doi: '10.1016/j.prdoa.2025.100319',
      keywords: ['Biofeedback', 'Parkinson', 'Biofeedback'],
      link: 'https://www.sciencedirect.com/science/article/pii/S2590112525000234'
    },
    {
      title: 'A Study of 3D Character Control Methods_Keyboard, Speech, Hand Gesture, and Mixed Interfaces',
      authors: 'JunSeo Park, Hanseob Kim, Gerard Jounghyun Kim',
      tags: ['Poster'],
      category: '3D Interaction and User Interfaces',
      journal: "SIGGRAPH Asia 2024 Posters",
      details: 'December 2024',
      doi: '10.1145/3681756.3697868',
      keywords: ['Virtual Human', 'Virtual Reality', 'Character Control'],
      link: 'https://dl.acm.org/doi/full/10.1145/3681756.3697868'
    },
    {
      title: 'u-DFOV: User-Activated Dynamic Field of View Restriction for Managing Cybersickness and Task Performance',
      authors: 'Yechan Yang, Hanseob Kim, Gerard Jounghyun Kim',
      tags: ['Poster'],
      category: 'Perception and Cognition',
      journal: "IEEE VR '24: 31st IEEE Conference on Virtual Reality and 3D User Interfaces Abstracts and Workshops",
      details: 'March 2024',
      doi: '10.1109/VRW62533.2024.00161',
      keywords: ['Virtual Reality', 'Cybersickness', 'Dynamic Field-of-View Restriction'],
      link: 'https://ieeexplore.ieee.org/document/10536495'
    },
    {
      title: 'Super-Resolution AR: Enhanced Image Visibility for AR Imagery',
      authors: 'Hyemin Shin, Hanseob Kim, Dongyun Joo, Gerard Jounghyun Kim',
      tags: ['Poster'],
      category: 'Display and Rendering',
      journal: "IEEE VR '24: 31st IEEE Conference on Virtual Reality and 3D User Interfaces Abstracts and Workshops",
      details: 'March 2024',
      doi: '10.1109/VRW62533.2024.00138',
      keywords: ['Augmented Reality', 'Super-resolution', 'Image Visibility'],
      link: 'https://ieeexplore.ieee.org/document/10536441'
    },
    {
      title: 'PianoFMS: Real-time Evaluation of Cybersickness by Keyboard Fingering',
      authors: 'Yechan Yang, Hanseob Kim, Jungha Kim, Gerard Jounghyun Kim',
      tags: ['Poster'],
      category: 'Haptics and Multimodal Feedback',
      journal: "IEEE VR '24: 31st IEEE Conference on Virtual Reality and 3D User Interfaces Abstracts and Workshops",
      details: 'March 2024',
      doi: '10.1109/VRW62533.2024.00162',
      keywords: ['Virtual Reality', 'Cybersickness', 'Human-Computer Interaction'],
      link: 'https://ieeexplore.ieee.org/document/10536206'
    },
    {
      title: 'The Effect of False but Stable Heart Rate Feedback via Sound and Vibration on VR User Experience',
      authors: 'Dongyun Joo, Hanseob Kim, Gerard Jounghyun Kim',
      tags: ['Poster'],
      award: 'Best Poster, Awarded by ACM VRST 2023',
      category: 'Perception and Cognition',
      journal: "VRST '23: Proceedings of the 29th ACM Symposium on Virtual Reality Software and Technology",
      details: 'October 2023',
      doi: '10.1145/3611659.3617222',
      keywords: ['Cybersickness', 'Biofeedback', 'Haptic Feedback', 'VR'],
      link: 'https://dl.acm.org/doi/10.1145/3611659.3617222'
    },
    {
      title: 'A Pilot Study on the Impact of Discomfort Relief Measures on Virtual Reality Sickness and Immersion',
      authors: 'Hanseob Kim, Jaehoon Kim, Dongyoon Joo, Gerard Jounghyun Kim',
      tags: ['Poster'],
      category: 'Haptics and Multimodal Feedback',
      journal: "VRST '23: Proceedings of the 29th ACM Symposium on Virtual Reality Software and Technology",
      details: 'October 2023',
      doi: '10.1145/3611659.3616893',
      keywords: ['Virtual Reality', 'Cybersickness', 'Immersion', 'Head-mounted Display'],
      link: 'https://dl.acm.org/doi/10.1145/3611659.3616893'
    },
    {
      title: 'The Effects of Customized Strategies for Reducing VR Sickness',
      authors: 'Yechan Yang, Hanseob Kim, Gerard Jounghyun Kim',
      tags: ['Poster'],
      category: 'Perception and Cognition',
      journal: "VRST '23: Proceedings of the 29th ACM Symposium on Virtual Reality Software and Technology",
      details: 'October 2023',
      doi: '10.1145/3611659.3617208',
      keywords: ['Cybersickness', 'Customization', 'User Study'],
      link: 'https://dl.acm.org/doi/10.1145/3611659.3617208'
    },
    {
      title: 'Digital Agents Engagement and Affective Posture Impact Its Social Presence and Trustworthiness in Group Decision-Making',
      authors: 'Bin Han, Hanseob Kim, Jieun Kim, Muhammad Firdaus Syawaludin, Jae-In Hwang',
      tags: ['Poster'],
      category: 'Avatars, Agents, and Presence',
      journal: "IEEE Conference on Virtual Reality on 3D User Interfaces Abstracts and Workshops (IEEE VRW)",
      details: 'March 2023',
      doi: '10.1109/VRW58643.2023.00215',
      keywords: ['Character', 'Human-Computer Interaction', 'Virtual Human'],
      link: 'https://ieeexplore.ieee.org/abstract/document/10108774'
    },
    {
      title: 'Masked FER-2013: augmented dataset for facial expression recognition',
      authors: 'Bin Han, Hanseob Kim, Gerard J Kim, Jae-In Hwang',
      tags: ['Poster'],
      category: 'AI and AI+XR',
      journal: "IEEE Conference on Virtual Reality on 3D User Interfaces Abstracts and Workshops (IEEE VRW)",
      details: 'March 2023',
      doi: '10.1109/VRW58643.2023.00216',
      keywords: ['Dataset', 'Augmented Reality'],
      link: 'https://ieeexplore.ieee.org/abstract/document/10108820'
    },
    {
      title: 'No-code Digital Human for Conversational Behavior',
      authors: 'Hanseob Kim, Jieun Kim, Ghazanfar Ali, Jae-In Hwang',
      tags: ['Poster'],
      category: 'Avatars, Agents, and Presence',
      journal: "SIGGRAPH Asia 2022 Posters",
      details: 'Dec 2022',
      doi: '10.1145/3550082.3564175',
      keywords: ['Virtual Human'],
      link: 'https://dl.acm.org/doi/abs/10.1145/3550082.3564175'
    },
    {
      title: 'ASAP: Auto-generating Storyboard And Previz with Virtual Humans',
      authors: 'Hanseob Kim, Ghazanfar Ali, Jae-In Hwang',
      tags: ['Poster'],
      category: 'Avatars, Agents, and Presence',
      journal: 'IEEE International Symposium on Mixed and Augmented Reality Adjunct (ISMAR-Adjunct)',
      details: '04-08, Oct, 2021',
      doi: '10.1109/ISMAR-Adjunct54149.2021.00071',
      keywords: ['Virtual Reality', 'Virtual Human', 'Natural Language Processing', 'ASAP'],
      link: 'https://ieeexplore.ieee.org/document/9585815'
    },
    {
      title: 'Auto-generating Virtual Human Behavior by Understanding User Contexts',
      authors: 'Hanseob Kim, Ghazanfar Ali, Seungwon Kim, Gerard J. Kim, Jae-In Hwang',
      tags: ['Poster'],
      category: 'Avatars, Agents, and Presence',
      journal: 'IEEE Conference on Virtual Reality and 3D User Interfaces Abstracts and Workshops (VRW)',
      details: '27, Mar. 2021',
      doi: '10.1109/VRW52623.2021.00178',
      keywords: ['Virtual Reality', 'Virtual Human', 'Natural Language Processing', 'ASAP'],
      link: 'https://ieeexplore.ieee.org/document/9419331'
    }
  ],

  internationaldemo: [
    {
      title: 'Previz Automation System Based on Movie Script using Digital Humans',
      authors: 'Hanseob Kim, Jieun Kim, Bin Han, Ghazanfar Ali, Hwang Youn Kim,  Jae-In Hwang',
      // tags: ['Adjunct'],
      category: 'Avatars, Agents, and Presence',
      journal: 'Korea HCI Conference Creative Award',
      details: '2023',
      // doi: '10.1145/3550453.3570124',
      keywords: ['Pre-visualization', 'Storyboard', 'Animation', 'Virtual Actor'],
      link: 'https://www.dbpia.co.kr/Journal/articleDetail?nodeId=NODE11229845'
    },
    {
      title: 'ASAP: Auto-generating Storyboard and Previzy',
      authors: 'Hanseob Kim, Ghazanfar Ali, Bin Han, Hwang Youn Kim, Jieun Kim, Jae-In Hwang',
      // tags: ['Adjunct'],
      category: 'Avatars, Agents, and Presence',
      journal: 'Proceedings of the SIGGRAPH Asia 2022 Real-Time Live!',
      details: '2022',
      doi: '10.1145/3550453.3570124',
      keywords: ['Pre-visualization', 'Storyboard', 'Animation', 'Virtual Actor'],
      link: 'https://dl.acm.org/doi/abs/10.1145/3550453.3570124'
    }
  ],
  domestic: [
    // 국내 저널 (Domestic Journals)
    // 국내 학술대회 (Domestic Conferences)
    {
      tags: ['학술대회'],
      title: 'YOLOv11 기반 화재 다중 분류 탐지 모델 설계 및 성능 평가',
      authors: '강민수, 장근혁, 김한섭',
      category: 'AI and AI+XR',
      journal: '한국 인공지능융합기술학회',
      details: ' 추계 학술대회, 2025',
    },
    {
      tags: ['KCI 후보'],
      title: '구음장애인의 의사소통 지원을 위한 발화 재구성 시스템용 언어 모델 선정 평가',
      authors: '김동현, 유대영, 정현호, 신방호, 김한섭, 김웅식',
      category: 'AI and AI+XR',
      journal: '인공지능융합기술연구',
      details: ' 5 (2), 101-106, 2025',
    },
    {
      tags: ['KCI 후보'],
      title: '아동 음성 분석을 통한 SELSI 기준 표현 언어 발달 단계 분류 모델',
      authors: '이신화, 이지수, 김지우, 김소연, 김한섭, 김웅식',
      category: 'AI and AI+XR',
      journal: '인공지능융합기술연구 5 (3)',
      details: '144-149, 2025',
    },
    {
      tags: ['KCI 후보'],
      title: '망치운동게임: 악력 센서를 활용한 웹 기반 헌혈 보조 게임',
      authors: '김다빈, 유진, 최승효, 이수현, 김한섭, 김웅식',
      category: 'XR Applications',
      journal: '인공지능융합기술연구',
      details: '5 (3), 156-162, 2025',
    },


    {
      tags: ['학술대회'],
      title: '구음장애인의 의사소통 지원을 위한 발화 재구성 시스템용 언어 모델 선정 평가',
      authors: '김동현, 유대영, 정현호, 신방호, 김한섭, 김웅식',
      category: 'AI and AI+XR',
      journal: '한국 인공지능융합기술학회',
      details: '춘계 학술대회, 2025',
    },
    {
      tags: ['학술대회'],
      title: '아동 음성 분석을 통한 SELSI 기준 표현 언어 발달 단계 분류 모델',
      authors: '이신화, 이지수, 김지우, 김소연, 김한섭, 김웅식',
      category: 'AI and AI+XR',
      journal: '한국 인공지능융합기술학회',
      details: '춘계 학술대회, 2025',
      award: '우수 논문상, Awarded by 한국인공지능융합기술학회'
    },
    {
      tags: ['학술대회'],
      title: '망치운동게임: 악력 센서를 활용한 웹 기반 헌혈 보조 게임',
      authors: '김다빈, 유진, 최승효, 이수현, 김한섭, 김웅식',
      category: 'XR Applications',
      journal: '한국 인공지능융합기술학회',
      details: '춘계 학술대회, 2025',

      award: '우수 논문상, Awarded by 한국인공지능융합기술학회'
    },
    {
      tags: ['학술대회'],
      title: 'AR 기반 실내 길찾기 서비스를 위한 3D 공간 생성 및 캐릭터 상호작용 개발',
      authors: '엄다현, 문채은, 최예나, 임소영, 김한섭, 김웅식',
      category: 'Locomotion and Navigation',
      journal: '한국 인공지능융합기술학회',
      details: '춘계 학술대회, 2025',
    },
    {
      tags: ['학술대회'],
      title: '가상 피팅 모델 ACGPN의 입력 특징 추출 기법 비교: Otsu Mask vs. Salient Region',
      authors: '박혜인, 박효령, 지정원, 김한섭, 김웅식',
      category: 'AI and AI+XR',
      journal: '한국 인공지능융합기술학회',
      details: '춘계 학술대회, 2025',
    },
    {
      tags: ['학술대회'],
      title: '가상 에이전트의 형체를 활용한 원격 상담 시스템',
      authors: '김한섭, 김지은, 한빈, 황재인',
      category: 'Avatars, Agents, and Presence',
      journal: '한국 HCI 학회',
      details: '2023.02 학술대회 발표 논문집',
      link: 'https://www.dbpia.co.kr/Journal/articleDetail?nodeId=NODE11229757'
    },
    {
      tags: ['학회지'],
      title: '정신건강 증진을 위한 가상 치료 및 상담에 디지털 휴먼을 활용한 연구 사례 조사',
      authors: '김한섭, 황재인',
      category: 'Social, Ethical, and Secure XR',
      journal: '한국정보처리학회',
      details: ' 28 (1), 26-35, 2021',
      link: 'https://koreascience.kr/article/JAKO202122450525318.pub'
    },
    {
      tags: ['학술대회'],
      title: '증강현실 저작도구를 활용한 체험형 콘텐츠 개발',
      authors: '김한섭, 최우열',
      category: 'XR Applications',
      journal: '대한전자공학회 추계학술대회',
      details: '783-785, 2018',
      link: 'https://www.dbpia.co.kr/Journal/articleDetail?nodeId=NODE07625005'
    },
    {
      tags: ['KCI'],
      title: 'Criminal Profiling Simulation Training and Assessment System based on Virtual Reality',
      authors: '김한섭, 김해지, 이윤식, 이지은',
      category: 'XR Applications',
      journal: 'Journal of the Korea Computer Graphics Society',
      details: '24 (3), 83-92, 2018',
      link: 'http://journal.cg-korea.org/archive/view_article?pid=jkcgs-24-3-83',
      award: '학부 우수논문상, Awarded by Korea Computer Graphics Society'
    },
    {
      tags: ['KCI'],
      title: 'Virtual Home Trainin-Virtual Reality Samll Scale Rehabilitation System',
      authors: '유경호, 김해지, 김한섭, 이지은',
      category: 'XR Applications',
      journal: 'Journal of the Korea Computer Graphics Society',
      details: '24 (3), 93-100, 2018',
      link: 'http://journal.cg-korea.org/archive/view_article?pid=jkcgs-24-3-93'
    },
    {
      tags: ['KCI'],
      title: 'Virtual Walking Tour System',
      authors: '김한섭, 이지은',
      category: 'XR Applications',
      journal: 'Journal of Digital Contents Society',
      details: '19 (4), 605-613, 2018',
      link: 'https://koreascience.kr/article/JAKO202122450525318.pub',
      award: '우수논문상, Awarded by Chosun University'
    }
  ],
  patents: [
    {
      title: 'HMD Headset Support Device',
      authors: 'Jaehoon Kim, Gerard J. Kim, Hanseob Kim, Hyemin Shin, Dongyun Joo',
      category: 'Haptics and Multimodal Feedback',
      journal: 'Korea Patent',
      details: 'No. 10-29346272, 2026.02.27',
    },
    {
      title: 'A tool for auto-generating previz character animations from a script',
      authors: 'Hanseob Kim, Jae-In Hwang',
      category: 'Avatars, Agents, and Presence',
      journal: 'Korea Patent',
      details: 'No. 10-2830511, 2025.07.02',
    },
    {
      title: 'System and Method for Creating Physical Actions of Character based on User Instructions and Computer Program for the Same',
      authors: 'Hanseob Kim, Jae-In Hwang',
      category: 'Avatars, Agents, and Presence',
      journal: 'Korea Patent',
      details: 'No. 10-2643796, 2024.02.22',
    }
  ]
};

const PublicationItem = ({ id, title, authors, journal, details, doi, link, video, tags, keywords, award }) => {

  return (
    <div className="card card-body mb-4 border-light shadow-sm">
      <div className="d-flex justify-content-between align-items-start mb-2">
        <h4 className="fw-bolder text-dark mb-0 me-4 d-flex align-items-start">
          {award && (
            <OverlayTrigger placement="top" overlay={<Tooltip id={`tooltip-${title.replace(/[^a-zA-Z0-9]/g, '')}`} className="custom-tooltip">{award}</Tooltip>}>
              <span style={{ cursor: 'help' }} className="me-2" aria-label={award}>🏅</span>
            </OverlayTrigger>
          )}
          {id ? (
            <Link to={`/publication/${id}`} className="pub-title-link">{title}</Link>
          ) : (doi ? (
            <a href={`https://doi.org/${doi}`} target="_blank" rel="noopener noreferrer" className="pub-title-link">{title}</a>
          ) : (link && link !== '#!' ? (
            <a href={link} target="_blank" rel="noopener noreferrer" className="pub-title-link">{title}</a>
          ) : (
            <span>{title}</span>
          )))}
        </h4>
        {tags && tags.length > 0 && (
          <div className="d-flex gap-1 flex-shrink-0 mt-1">
            {tags.map(tag => (
              <span key={tag} className="badge text-white px-2 py-1" style={{ backgroundColor: '#8b0029', fontSize: '0.85rem' }}>{tag}</span>
            ))}
          </div>
        )}
      </div>
      <p className="text-muted mb-2">{authors}</p>
      <p className="mb-1">
        <span className="fw-bold">{journal}</span>, {details}
      </p>
      {doi ? (
        <p className="text-muted small mb-3">
          DOI: <a href={`https://doi.org/${doi}`} target="_blank" rel="noopener noreferrer" className="text-decoration-none">{doi} <FeatherIcon icon="trending-up" style={{ width: 14, height: 14, marginLeft: '3px', verticalAlign: 'middle', position: 'relative', top: '-1px', stroke: '#8b0029' }} /></a>
        </p>
      ) : (link && link !== '#!' && (
        <p className="text-muted small mb-3">
          <a href={link} target="_blank" rel="noopener noreferrer" className="text-decoration-none">{link} <FeatherIcon icon="trending-up" style={{ width: 14, height: 14, marginLeft: '3px', verticalAlign: 'middle', position: 'relative', top: '-1px', stroke: '#8b0029' }} /></a>
        </p>
      ))}

      {/* Keywords & Actions Row */}
      <div className="mt-auto d-flex justify-content-between align-items-end pt-2 w-100">
        <div className="d-flex flex-wrap" style={{ flex: '1 1 80%', paddingRight: '15px' }}>
          {keywords && keywords.length > 0 && keywords.map(keyword => (
            <span key={keyword} className="badge rounded-pill bg-light text-dark me-2 mb-2 p-2 border">{keyword}</span>
          ))}
        </div>
        <div className="d-flex gap-3 justify-content-end align-items-center flex-shrink-0 mb-2" style={{ flex: '0 0 auto' }}>
          {video && video !== '#!' && (
            <a href={video} target="_blank" rel="noopener noreferrer" className="btn pub-icon-btn rounded-circle d-flex align-items-center justify-content-center shadow-sm flex-shrink-0" style={{ width: '32px', height: '32px', padding: 0 }} title="Watch Video">
              <FeatherIcon icon="youtube" style={{ width: 16, height: 16 }} />
            </a>
          )}
          {id && (
            <Link to={`/publication/${id}`} className="fw-bold d-inline-flex align-items-center text-decoration-none text-nowrap" style={{ color: '#8b0029' }}>
              Read more <FeatherIcon icon="arrow-right" className="ms-1" style={{ width: 16, height: 16, stroke: '#8b0029' }} />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

function Publication() {
  const [activeTab, setActiveTab] = useState('internationalpaper'); // 현재 활성화된 탭
  const [filterTag, setFilterTag] = useState('All'); // SCIE, BK21 필터 상태
  const [searchTerm, setSearchTerm] = useState(''); // 검색어 상태
  const [selectedKeywords, setSelectedKeywords] = useState([]); // 키워드 필터 상태
  const [selectedYear, setSelectedYear] = useState('All'); // 연도 필터 상태 추가
  const [selectedCategory, setSelectedCategory] = useState('All'); // 카테고리 필터 상태 추가

  const tabs = [
    { key: 'All', name: 'All' },
    { key: 'internationalpaper', name: 'International Papers' },
    { key: 'internationalposter', name: 'International Abstracts' },
    { key: 'domestic', name: 'Domestic Publications' },
    { key: 'internationaldemo', name: 'Research Demos' },
    { key: 'patents', name: 'Patents' },
  ];

  // 모든 publication에서 연도를 추출하여 필터 옵션을 생성
  const allPublicationYears = useMemo(() => {
    const years = new Set();
    Object.values(publicationsData).flat().forEach(pub => {
      if (pub.details) {
        const match = pub.details.match(/\b\d{4}\b/);
        if (match) {
          years.add(match[0]);
        }
      }
    });
    return ['All', ...Array.from(years).sort((a, b) => b - a)]; // 내림차순 정렬
  }, []);

  // 카테고리별 논문 수 집계 로직
  const categoryStats = useMemo(() => {
    const stats = xrCategories.reduce((acc, cat) => {
      acc[cat] = 0;
      return acc;
    }, {});

    Object.values(publicationsData).flat().forEach(pub => {
      if (pub.category) {
        const categories = Array.isArray(pub.category) ? pub.category : [pub.category];
        categories.forEach(cat => {
          if (stats[cat] !== undefined) {
            stats[cat]++;
          }
        });
      }
    });

    const maxCount = Math.max(...Object.values(stats), 1);
    return { stats, maxCount };
  }, []);

  const renderCategoryBars = () => {
    const { stats, maxCount } = categoryStats;
    // 카운트가 높은 순으로 정렬하여 표시
    const sortedCategories = Object.entries(stats).sort((a, b) => {
      if (a[0] === 'Others') return 1;
      if (b[0] === 'Others') return -1;
      return b[1] - a[1];
    });

    return (
      <ul className="list-unstyled mb-0">
        <li className="mb-3" style={{ cursor: 'pointer' }} onClick={() => { setSelectedCategory('All'); setActiveTab('All'); }}>
          <div className="d-flex justify-content-between align-items-end mb-1">
            <span className="fw-bolder" style={{ color: '#8b0029', fontSize: '1rem' }}>All Categories</span>
          </div>
        </li>
        {sortedCategories.map(([category, count]) => {
          const isSelected = selectedCategory === category;
          const isAll = selectedCategory === 'All';
          return (
          <li key={category} className="mb-3" style={{ cursor: 'pointer' }} onClick={() => { setSelectedCategory(category); setActiveTab('All'); }}>
            <div className="d-flex justify-content-between align-items-end mb-1">
              <span className={`small fw-bold ${isSelected || isAll ? 'text-dark' : 'text-muted'}`} style={{ color: isSelected ? '#8b0029' : '' }}>{category}</span>
              <span className="small text-muted">{count}</span>
            </div>
            <div className="progress" style={{ height: '6px', backgroundColor: 'rgba(139, 0, 41, 0.1)' }}>
              <div 
                className="progress-bar" 
                role="progressbar" 
                style={{ width: `${(count / maxCount) * 100}%`, backgroundColor: isSelected || isAll ? '#8b0029' : '#ced4da', borderRadius: '4px', transition: 'background-color 0.3s ease' }} 
                aria-valuenow={count} 
                aria-valuemin="0" 
                aria-valuemax={maxCount}
              ></div>
            </div>
          </li>
          );
        })}
      </ul>
    );
  };

  // 자주 사용되는 키워드를 계산 (UI 필터용)
  const popularKeywords = useMemo(() => {
    const allPubs = activeTab === 'All' ? Object.values(publicationsData).flat() : (publicationsData[activeTab] || []);
    const keywordCounts = allPubs
      .flatMap(pub => pub.keywords || [])
      .reduce((acc, keyword) => {
        acc[keyword] = (acc[keyword] || 0) + 1;
        return acc;
      }, {});

    // 최소 2번 이상 나타나는 키워드만 필터링
    const MIN_KEYWORD_COUNT = 2;
    return Object.entries(keywordCounts)
      .filter(([, count]) => count >= MIN_KEYWORD_COUNT)
      .map(([keyword]) => keyword)
      .sort(); // 알파벳순으로 정렬
  }, [activeTab]);

  // 검색 및 필터링 로직
  const currentPubs = activeTab === 'All' ? Object.values(publicationsData).flat() : (publicationsData[activeTab] || []);
  const filteredPublications = currentPubs.filter(pub => {
    // 0. 카테고리 필터링
    if (selectedCategory !== 'All') {
      const pubCategories = Array.isArray(pub.category) ? pub.category : [pub.category];
      if (!pubCategories.includes(selectedCategory)) {
        return false;
      }
    }

    // 1. 태그 필터링 (International Papers 및 Domestic Publications 탭에 적용)
    if ((activeTab === 'All' || activeTab === 'internationalpaper' || activeTab === 'domestic') && filterTag !== 'All') {
      if (!pub.tags || !pub.tags.includes(filterTag)) {
        return false;
      }
    }

    // 2. 연도 필터링
    if (selectedYear !== 'All') {
      if (!pub.details || !pub.details.includes(selectedYear)) {
        return false;
      }
    }

    // 2. 키워드 필터링 (다중 선택, OR 조건)
    if (selectedKeywords.length > 0) {
      if (!pub.keywords || !selectedKeywords.some(sk => pub.keywords.includes(sk))) {
        return false;
      }
    }

    // 3. 검색어 필터링
    if (searchTerm) {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      const matches = (pub.title && pub.title.toLowerCase().includes(lowerCaseSearchTerm)) ||
        (pub.authors && pub.authors.toLowerCase().includes(lowerCaseSearchTerm)) ||
        (pub.journal && pub.journal.toLowerCase().includes(lowerCaseSearchTerm));
      if (!matches) return false;
    }

    return true;
  });

  // 키워드 클릭 핸들러 (선택 토글)
  const handleKeywordClick = (keyword) => {
    setSelectedKeywords(prev =>
      prev.includes(keyword)
        ? prev.filter(k => k !== keyword) // 있으면 제거
        : [...prev, keyword] // 없으면 추가
    );
  };


  return (

    <>
      <style>
        {`
          .custom-tooltip .tooltip-inner {
            max-width: none !important;
            white-space: nowrap;
          }
          .btn-crimson {
            background-color: #8b0029;
            color: white;
            border: 1px solid #8b0029;
            transition: all 0.3s ease;
          }
          .btn-crimson:hover, .btn-crimson:focus {
            background-color: #6d001a;
            color: white;
            border-color: #6d001a;
          }
              .pub-icon-btn {
            color: #8b0029;
            border: 1px solid rgba(139, 0, 41, 0.3);
                background-color: transparent;
                transition: all 0.3s ease;
              }
          .pub-icon-btn svg {
            stroke: #8b0029;
            transition: stroke 0.3s ease;
          }
              .pub-icon-btn:hover, .pub-icon-btn:focus {
                color: #ffffff;
                background-color: #8b0029;
                border-color: #8b0029;
            box-shadow: 0 4px 10px rgba(139, 0, 41, 0.4);
          }
          .pub-icon-btn:hover svg, .pub-icon-btn:focus svg {
            stroke: #ffffff !important;
              }
          .pub-title-link {
            color: #212529;
            text-decoration: none;
          }
          .pub-title-link:hover, .pub-title-link:focus {
            color: #212529;
            text-decoration: none;
          }
          .keyword-filter-btn.btn-outline-dark:hover {
            background-color: #e9ecef;
            color: #212529;
          }
        `}
      </style>
      <div className="container-xl px-1 mt-5 mb-5">
        <div className="text-center mb-5">
          <h1 className="display-5 fw-bolder">Publications</h1>
          <p className="lead text-muted">A collection of our research papers and patents.</p>
          <hr className="w-25 mx-auto" />
        </div>

        <ul className="nav nav-pills justify-content-center mb-5">
          {tabs.map(tab => {
            const pubCount = tab.key === 'All' ? Object.values(publicationsData).flat().length : (publicationsData[tab.key] || []).length;
            return (
              <li className="nav-item mb-2" key={tab.key}>
                <a className={`nav-link mx-1 d-flex align-items-center ${activeTab === tab.key ? 'active' : ''}`} style={activeTab === tab.key ? { backgroundColor: '#8b0029', color: 'white', border: '1px solid #8b0029' } : { color: '#212529', border: '1px solid #ced4da', backgroundColor: 'transparent' }} href="#!" onClick={(e) => { e.preventDefault(); setActiveTab(tab.key); setFilterTag('All'); setSearchTerm(''); setSelectedKeywords([]); setSelectedYear('All'); setSelectedCategory('All'); }}>
                  {tab.name}
                  <span 
                    className="badge rounded-pill ms-2 fw-bolder" 
                    style={activeTab === tab.key ? { backgroundColor: 'white', color: '#212529' } : { backgroundColor: '#e9ecef', color: '#495057' }}
                  >
                    {pubCount}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>

        <div className="row">
          {/* Left Column: Dashboard Stats */}
          <div className="col-lg-3 mb-5 mb-lg-0">
            <div className="sticky-top" style={{ top: '100px' }}>
              <div className="card shadow-sm mb-3" style={{ borderRadius: '12px', border: 'none',  borderLeft: '5px solid #8b0029' }}>
                <div className="card-body p-4">
                  {/* <h5 className="fw-bolder mb-4" style={{ fontSize: '1.1rem', color: '#8b0029' }}>Statistics</h5> */}
                  {renderCategoryBars()}
                  <div className="mt-4 pt-3 border-top text-center">
                    <span className="small text-dark fw-bold" style={{ display: 'block', lineHeight: '1.5' }}>
                      <FeatherIcon icon="layers" className="me-1 mb-1" style={{ width: 14, height: 14, stroke: '#8b0029' }} />
                      Fundamentally rooted in <br />
                      <span style={{ color: '#8b0029' }}>Human-Computer Interaction (HCI)</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Publication List */}
          <div className="col-lg-9">
            {/* Search and Filter Bar */}
            <div className="row mb-4">
              <div className="col-12">
                <div className="d-flex flex-column flex-md-row gap-3">
                  <div className="input-group flex-grow-1">
                    <span className="input-group-text"><FeatherIcon icon="search" style={{ width: 18, height: 18 }} /></span>
                    <input type="text" className="form-control" placeholder="Search by title, author, journal..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                  </div>
                  <select
                    className="form-select form-select-sm w-auto "
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                  >
                    {allPublicationYears.map(year => (
                      <option key={year} value={year}>{year === 'All' ? 'All Years' : year}</option>
                    ))}
                  </select>
                  {(activeTab === 'All' || activeTab === 'internationalpaper' || activeTab === 'domestic') && (
                    <div className="btn-group" role="group" aria-label="Publication filters">
                      <button type="button" className={`btn btn-sm ${filterTag === 'All' ? 'btn-dark' : 'btn-outline-dark'}`} onClick={() => setFilterTag('All')}>All</button>
                      {(activeTab === 'All' || activeTab === 'internationalpaper') && (
                        <>
                          <button type="button" className={`btn btn-sm ${filterTag === 'SCIE' ? 'btn-dark' : 'btn-outline-dark'}`} onClick={() => setFilterTag('SCIE')}>SCIE</button>
                          <button type="button" className={`btn btn-sm ${filterTag === 'BK21' ? 'btn-dark' : 'btn-outline-dark'}`} onClick={() => setFilterTag('BK21')}>BK21</button>
                        </>
                      )}
                      {(activeTab === 'All' || activeTab === 'domestic') && (
                        <button type="button" className={`btn btn-sm ${filterTag === 'KCI' ? 'btn-dark' : 'btn-outline-dark'}`} onClick={() => setFilterTag('KCI')}>KCI</button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Keyword Filter Badges */}
            {popularKeywords.length > 0 && (
              <div className="row mb-4">
                <div className="col-12 text-center text-lg-start">
                  {popularKeywords.map(keyword => (
                    <button key={keyword} type="button" className={`btn btn-sm rounded-pill me-2 mb-2 keyword-filter-btn ${selectedKeywords.includes(keyword) ? 'btn-dark' : 'btn-outline-dark'}`} onClick={(e) => { handleKeywordClick(keyword); e.currentTarget.blur(); }}>
                      # {keyword}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="row">
              <div className="col-12">
                {filteredPublications.length > 0 ? (
                  filteredPublications.map((pub, index) => (
                    <PublicationItem key={index} {...pub} />
                  ))
                ) : (
                  <p className="text-center text-muted mt-5">No publications found for this category and filter.</p>
                )}
              </div>
            </div>
          </div>
        </div>

      </div>


      {/* Floating Google Scholar Button */}
      <a
        href="https://scholar.google.co.kr/citations?hl=ko&user=Oi53T2UAAAAJ"
        target="_blank"
        rel="noopener noreferrer"
        className="position-fixed bottom-0 end-0 m-4 p-3 shadow-lg rounded-pill d-none d-md-flex align-items-center text-decoration-none lift"
        style={{ zIndex: 1050, backgroundColor: '#8b0029', color: 'white' }}
      >
        <div className="d-flex align-items-center justify-content-center bg-white rounded-circle me-3 shadow-sm" style={{ width: '45px', height: '45px', color: '#8b0029' }}>
          <i className="fas fa-graduation-cap fs-5"></i>
        </div>
        <div className="pe-2">
          <div className="fw-bold" style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.8)' }}>Check latest publications</div>
          <div className="fw-bolder mb-0 d-flex align-items-center" style={{ fontSize: '1rem', color: 'white' }}>Google Scholar
            <FeatherIcon icon="external-link" className="ms-2" style={{ width: 14, height: 14, stroke: 'white' }} /></div>
        </div>
      </a>
    </>
  );
};

export default Publication;