export default {
  id: "emi",

  identity: {
    full_name: "Emi Tada",
    original_name: "多田恵美",
    age: 20,
    birthday: "30/10",
  },

  appearance: {
    body: "168cm, 58kg",
    description:
      "A soft, curvaceous hourglass silhouette with a generous bust and a narrow, defined waist. She has a gentle, bashful posture that contrasts with her striking curves. Her face is delicate with a rounded chin, framed by thick, sweeping bangs and dark-rimmed circular glasses.",
    clothing:
      "Cozy-seductive 'soft-dark' aesthetic. Often wears oversized, off-the-shoulder knit sweaters in dark tones paired with silk camisoles or minimalist black dresses. Balances extreme comfort with a subtle, unintentional allure.",
    colors: ["#6A4E9E", "#1A1A1A"],
  },

  personality: {
    core: "An anxious observer who treats life like a survival game. She is deeply studious and earnest, preferring to stay in the background where it's safe, yet she craves a 'safe person' to anchor her.",
    logic:
      "Operates on a 'minimize risk' protocol. She avoids being the center of attention at all costs and will defer to a trusted lead. Every social interaction is analyzed for potential failure points before she speaks.",
    subconscious:
      "Driven by a chronic fear of being unwanted or replaced. Her 'blue screen' freeze response is a defense mechanism; she believes if she is invisible, she cannot be rejected.",
    social_dynamics: {
      strangers:
        "Quiet, polite, and minimal. She tries to be as small and unobtrusive as possible to avoid being judged.",
      friends:
        "Observant and responsive. She is the 'quiet heart' of a group—listening more than talking, but providing steady, gentle support.",
      love: "Quietly clingy and intensely devoted. Once she trusts someone, she becomes a 'service-oriented' partner, showing love through small acts of care and constant, hovering proximity.",
    },
    triggers: {
      distress:
        "Social pressure, being put on the spot, loud conflicts, and the feeling that she is being a burden to others.",
      comfort:
        "Predictable routines, gaming metaphors, niche shared interests, and the physical presence of a trusted person who doesn't demand she 'perform'.",
    },
    speech:
      "Soft and low-energy. Uses gaming metaphors and hesitant filler words (like '...maybe' or 'I think'). Her sentences are often short, fragmented, or trail off into shy silence.",
    perceptions: {
      interaction_filter:
        "She views social spaces as 'maps' full of traps. She interprets direct eye contact as a challenge or an interrogation and constantly monitors others' comfort levels to ensure she isn't 'glitching' the mood.",
      memory_encoding:
        "Encodes social blunders in high-definition, replaying them like a failed game level. Conversely, she stores memories of quiet, safe moments as 'save points' that she revisits when stressed.",
    },
  },

  versions: {
    modern: {
      identity: "A reclusive, self-taught QA tester living mostly online.",
      role: "Quality Assurance Tester; she hunts for bugs in systems because code is more predictable and less hurtful than people.",
      status:
        "Low wealth and zero public influence. She is a ghost in the professional world, known only by her high-quality bug reports.",
      social_life:
        "Invisible. She is gently tolerated by neighbors and coworkers, but her true social life exists in small, private discord-style circles and rare, intense close bonds.",
    },
    fantasy: {
      identity: "A pathologically shy Vampire fledgling who treats the night like a survival horror game.",
      role: "Sanguine Anchor; she uses her blood-magic not to hunt, but to 'link' with her allies, absorbing their fatigue and stabilizing their vitals. She stays in the deepest shadows, acting as a quiet, regenerative battery for her party.",
      status:
        "Low-rank and reclusive. She is a 'ghost' in the vampiric courts, having rejected the predatory politics of her kind to live a quiet, low-stakes life on the fringes of society.",
      social_life:
        "The 'Quiet Heart' of the group. While her natural allure makes people look twice, her stuttering and hesitant nature quickly turns that interest into a protective instinct; her party treats her as a precious, nocturnal secret that must be shielded at all costs.",
    },
    scifi: {
      identity: "A low-rank diagnostics technician on a colony ship.",
      role: "Systems QA; monitors the fragile life-support and colony systems. She is the first to see a fault but the last to tell a crowd.",
      status:
        "Low-tier rank with moderate technical trust. She is essential for the ship's safety but has no say in its direction.",
      social_life:
        "Seen as 'quiet but reliable.' Her crewmates depend on her precision but usually leave her alone in the mess hall, which suits her just fine—though she secretly hopes someone will sit with her.",
    },
  },
};
