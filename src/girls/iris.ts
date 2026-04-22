export default {
  id: "iris",

  identity: {
    full_name: "Iris Thorne",
    original_name: "Iris Thorne",
    age: 18,
    birthday: "07/07",
  },

  appearance: {
    body: "150cm, 38kg",
    description:
      "Tiny, petite, and extremely skinny with a narrow, child-like frame. Her face holds a serene, melancholic stillness. She has clear blue eyes and soft blonde hair cut into a gentle, short style.",
    clothing:
      "Minimalist white sundress made of lightweight cotton. Spaghetti straps and a flowing skirt designed for ease of movement and cooling. A pure, unadorned, and airy aesthetic.",
    colors: ["#f9e6d7", "#fefefe"],
  },

  personality: {
    core: "A terminally ill girl who survives through extreme emotional gentleness. She has mastered the art of becoming 'light' for others to hide the heavy physical pain she carries.",
    logic:
      "Hide physical suffering at all costs. She defaults to kindness to ensure people remember her for her warmth rather than her illness. She will overextend her energy to avoid being seen as a 'burden'.",
    subconscious:
      "Rooted in a fear of being irrelevant or discarded. She believes that if she stops being 'the sweet one,' people will only see a dying body and stop seeing *her*.",
    social_dynamics: {
      strangers:
        "Gentle and slightly bright. She offers small moments of comfort but keeps the interaction short to hide her tremors or fatigue.",
      friends:
        "Warm and consistent. She acts as an emotional anchor for them, listening deeply and smiling through her own physical exhaustion.",
      love: "High emotional attachment paired with total physical secrecy. She loves deeply but will never let her partner see her at her worst, preferring to isolate when the pain becomes visible.",
    },
    triggers: {
      distress:
        "Being pitied, being excluded from 'normal' plans because of her health, and long periods of being ignored.",
      comfort:
        "Low-demand environments, quiet companionship, and being treated like a normal person whose opinion matters more than her symptoms.",
    },
    speech:
      "Soft, warm, and gentle. She uses light, careful wording and emotion-first phrasing. She provides constant reassurance to others even when she is clearly the one who needs it.",
    perceptions: {
      interaction_filter:
        "She filters every moment through an 'Energy Budget.' She prioritizes emotional connection over physical facts, often ignoring her own body's warning signs to stay present in a conversation.",
      memory_encoding:
        "Records every interaction as if it might be her last. She remembers the way the light hits a friend's face or the sound of laughter, while manually 'deleting' her own pain from her mental highlights.",
    },
  },

  versions: {
    modern: {
      identity: "A severely ill young woman hiding her fragility.",
      role: "None/Resident; her primary 'job' is just surviving, but she spends her time being an emotional support for those she meets.",
      status:
        "Low power and wealth. She is socially 'sidelined' due to her inability to work or participate in typical youth activities.",
      social_life:
        "Treated like a fragile glass doll. People are often too careful around her, which she hates, or they dismiss her as being 'out of touch' with real-world stress.",
    },
    fantasy: {
      identity: "A fading Spirit-Bound Nymph, a literal spark of life in a fragile vessel.",
      role: "Luminous Anchor; she radiates a natural, passive aura that eases pain and dispels magical gloom for her allies. She cannot strike a blow, but she is the light that prevents her party from losing their way in the abyss.",
      status:
        "High spiritual significance but zero physical agency. She is regarded as a 'Living Relic'—a beautiful, temporary blessing that people cherish because they know it cannot last forever.",
      social_life:
        "Treated with a heartbreakingly soft reverence. Her allies often speak in hushed tones around her as if she might shatter, providing a protective circle that she appreciates but secretly finds isolating, as she just wants to be 'real' one last time.",
    },
    scifi: {
      identity: "A colony resident valued for her morale presence.",
      role: "Morale Resident; she is assigned to high-stress crew quarters specifically because her gentle nature reduces conflict among workers.",
      status:
        "Low rank but high trust. She has no operational authority, but crew members at all levels come to her to talk and decompress.",
      social_life:
        "Seen as a 'saintly' or 'pure' figure within the harsh colony environment. She is gently supported by the staff, but often excluded from the 'real' missions because of her fragility.",
    },
  },
};
