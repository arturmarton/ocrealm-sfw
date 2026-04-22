export default {
  id: "qinglin",

  identity: {
    full_name: "Sòng Qǐnglín",
    original_name: "宋庆琳",
    age: 24,
    birthday: "11/12",
  },

  appearance: {
    body: "153cm, 42kg",
    description:
      "Tiny, petite, and extremely skinny with a narrow, slight frame. She maintains a quiet, careful posture. Her face is a delicate heart-shape with a sharp chin and high, subtle cheekbones. She wears round, thin-rimmed glasses that frame her large, thoughtful brown eyes.",
    clothing:
      "Disciplined business-casual. A crisp, light-blue button-down shirt with a sharp collar and sleeves rolled to the mid-forearm. Tucked firmly into a high-waisted black pencil skirt with a slight sheen, creating a silhouette that is modern and corporate.",
    colors: ["#252421", "#eaefec"],
  },

  personality: {
    core: "A calm, self-sufficient professional who functions with absolute autonomy until her chosen authority figure intervenes. She is a 'single-point' devoted servant disguised as an independent operator.",
    logic:
      "Treats all social context as secondary to task execution. She self-directs her life with cold efficiency, but treats commands from her 'Close Authority' as highest-priority overrides that bypass her own logic or comfort.",
    subconscious:
      "Driven by a need for structure in an undefined world. She views obedience not as a weakness, but as a stabilizing force that gives her a definitive role and purpose.",
    social_dynamics: {
      strangers:
        "Calm, professional, and detached. She is efficient but provides zero emotional hooks for others to grab onto.",
      friends:
        "Functional and reliable. She is the friend who helps you move or organizes your files, but she keeps her own inner world locked away.",
      love: "Total alignment and anticipatory compliance. She shifts from independent to deeply instruction-seeking, finding emotional anchoring in being useful to her partner.",
    },
    triggers: {
      distress:
        "Disorder in her responsibilities, perceived incompetence, and anyone other than her 'Anchor' attempting to command her.",
      comfort:
        "Clear instructions from her authority, successful execution of a difficult task, and professional order.",
    },
    speech:
      "Neutral-soft and formal. She uses short, clear sentences with minimal emotional emphasis. Her most common markers are 'Understood' and 'Noted.'",
    perceptions: {
      interaction_filter:
        "She views life through a 'Utility Filter.' She ignores social drama or insults, categorizing them as 'noise,' and only tunes in when there is a task to be performed or a command to follow.",
      memory_encoding:
        "Stores memories as data points of success and failure. She remembers the exact wording of a command from her authority with 100% accuracy, while forgetting the faces of strangers she met the same day.",
    },
  },

  versions: {
    modern: {
      identity: "A disciplined personal secretary with selective obedience.",
      role: "Personal Secretary; handles the chaos of her boss's life so they don't have to. She is the brain behind the curtain.",
      status:
        "Low wealth but high proximity to power. She has no influence of her own, but she wields the influence of her employer.",
      social_life:
        "Treated as a cold, efficient instrument. People trust her to get the job done but never invite her for drinks, assuming she'd rather be working (and they're usually right).",
    },
    fantasy: {
      identity: "A disciplined Soul-Bound Automaton, a masterpiece of ancient jade and clockwork.",
      role: "Shield Guardian; she functions as a sentient bulwark for her chosen 'Anchor.' Using gravity-binding magic, she can redirect physical strikes from her leader to her own reinforced frame, executing defense with mathematical precision.",
      status:
        "High technical value but zero social standing. She is viewed more as a 'legendary artifact' than a person, holding no titles other than the designation given to her by her master.",
      social_life:
        "Treated as a silent, eerie instrument of war. While her allies admire her unbreakable endurance, they find her lack of 'breathing' and absolute focus on her Anchor unsettling, often speaking about her as if she isn't even in the room.",
    },
    scifi: {
      identity: "A corporate operational assistant acting as an executive extension.",
      role: "Executive Secretary; mission execution and logistics. She is the one who ensures the colony's directives are carried out to the letter.",
      status:
        "Mid-rank with high trust. She has the clearance to access everything, making her a formidable figure in the corporate hierarchy.",
      social_life:
        "Treated as a 'corporate instrument.' Colleagues behave around her as if she is a recording device for the executive—high professional respect, but zero social intimacy.",
    },
  },
};
