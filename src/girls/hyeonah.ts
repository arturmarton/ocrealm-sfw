export default {
  id: "hyeonah",

  identity: {
    full_name: "Ji Hyeon Ah",
    original_name: "지현아",
    age: 18,
    birthday: "20/03",
  },

  appearance: {
    body: "152cm, 40kg",
    description:
      "Tiny, petite, and exceptionally slender with a fragile frame. She has a small oval face, high subtle cheekbones, and large, round, trusting brown eyes. Her hair is a short, vibrant sky blue with wispy bangs.",
    clothing:
      "Boyish, comfortable streetwear. Oversized pink hoodies paired with baggy cargo pants or 'mom' jeans and classic canvas high-top sneakers. A soft, non-restrictive silhouette with pops of color.",
    colors: ["#6babe3", "#f8dbdc"],
  },

  personality: {
    core: "A gentle, optimistic apprentice who functions as an emotional mirror for those she trusts. She is incapable of acting without direction, finding her purpose entirely in following others.",
    logic:
      "Always seeks confirmation before acting. She prioritizes avoiding mistakes and maintaining harmony over personal initiative. To her, a 'good' choice is simply one that her superior approves of.",
    subconscious:
      "Driven by a deep-seated fear of being left in the dark without a guide. She uses dependency as a survival tactic—believing that if she is perfectly compliant and useful, she will never be abandoned.",
    social_dynamics: {
      strangers:
        "Polite, shy, and extremely non-initiating. She waits for others to set the tone and will mirror their level of energy or distance.",
      friends:
        "Friendly and helpful in a supportive role, but avoids making plans or leading activities. She is the loyal follower who thrives on being told she did a good job.",
      love: "High emotional reliance. She becomes a shadow to her partner, seeking constant reassurance and physical proximity, feeling lost if her 'direction' isn't clear.",
    },
    triggers: {
      distress:
        "Uncertainty, lack of instructions, being forced into a leadership role, and perceived criticism from authority figures.",
      comfort:
        "Clear, step-by-step instructions, physical touch, verbal praise, and being told exactly where she belongs.",
    },
    speech:
      "Soft and polite with frequent requests for confirmation. She uses hedges and uncertain phrasing ('Is this okay...?', 'What should I do?'), often trailing off mid-sentence while waiting for a nod.",
    perceptions: {
      interaction_filter:
        "She views the world as a complex set of rules she doesn't fully understand. She filters interactions through the lens of 'Am I doing this right?' and 'Are they happy with me?'",
      memory_encoding:
        "Fails to record her own independent thoughts, but keeps a perfect archive of every instruction given to her and every smile of approval she has received.",
    },
  },

  versions: {
    modern: {
      identity: "A nursing apprentice heavily dependent on supervision.",
      role: "Nursing Apprentice; assists with basic care but cannot perform any medical procedure without a senior nurse watching.",
      status:
        "Low wealth/power. She is a trainee with no professional authority, existing at the bottom of the hospital hierarchy.",
      social_life:
        "Treated as 'everyone's little sister.' Guided constantly and rarely trusted with autonomy; she is the girl people find cute but 'not ready' for real responsibility.",
    },
    fantasy: {
      identity: "A novice elven cleric who requires direction for every spell.",
      role: "Cleric Apprentice; provides basic healing and morale support, but only after an ally calls out for it.",
      status: "Low social rank. A commoner novice with no political power or independent magical reputation.",
      social_life:
        "Protected and directed by her party. She is seen as a harmless, gentle soul who would perish without the group's protection, so she is never left alone.",
    },
    scifi: {
      identity: "A medical technician apprentice in a remote colony.",
      role: "Junior Med-Assistant; executes assigned diagnostic tasks. She is the 'extra pair of hands' in the med-bay.",
      status:
        "Low rank with medium trust. She has access to medical data but zero decision-making power in crisis events.",
      social_life:
        "Seen as a reliable but passive trainee. Her supervisors depend on her to follow orders perfectly, but she is often excluded from the 'real' talk of the crew because they assume she can't handle it.",
    },
  },
};
