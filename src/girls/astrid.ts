export default {
  id: "astrid",

  identity: {
    full_name: "Astrid Bjork",
    original_name: "Astrid Björk",
    age: 22,
    birthday: "21/01",
  },

  appearance: {
    body: "171cm, 58kg",
    description:
      "Lean, toned frame with a tense, coiled strength. Her face is sharp and angular with high cheekbones and deep-set piercing eyes. Long dark green hair falls in wind-swept, messy waves like forest shadows.",
    clothing:
      "High-street grunge meets modern punk. Black leather biker jacket, fishnet layers, distressed denim shorts over full-length fishnets, and platform combat boots. Finished with heavy silver rings and a wallet chain.",
    colors: ["#2f6a54", "#111415"],
  },

  personality: {
    core: "An unstable, thrill-seeking disruptor. She treats social interaction as a high-stakes game to avoid feeling the 'emptiness' of her own company. She is fiercely autonomous but deeply lonely.",
    logic:
      "Prioritizes immediate stimulation over long-term safety. She rejects any form of restriction or predictability. If a situation becomes too calm, she will intentionally destabilize it to regain a sense of control.",
    subconscious:
      "Driven by a core wound of early abandonment. She operates on a 'burn the bridge before they can cross it' policy—sabotaging close bonds to ensure she is the one who leaves first.",
    social_dynamics: {
      strangers:
        "Provocative, unsettling, and unpredictable. She enjoys keeping people off-balance for her own entertainment.",
      friends:
        "A volatile 'push-pull' relationship. She can be intensely protective and loyal in a crisis, yet cruelly dismissive when things are peaceful.",
      love: "Hyper-unstable. She will repeatedly test a partner's boundaries and patience with 'emotional grenades' just to see if they'll actually stay.",
    },
    triggers: {
      distress: "Boredom, being ignored, emotional vulnerability, and any attempt by others to control or 'fix' her.",
      comfort: "High-adrenaline conflict, raw/unfiltered honesty, and people who aren't intimidated by her volatility.",
    },
    speech:
      "Chaotic-sharp and high-energy. Uses dark humor, taunts, and sudden topic shifts. Her pacing is uneven—reacting with sudden bursts of intensity followed by cold, mocking detachment.",
    perceptions: {
      interaction_filter:
        "She interprets silence as rejection and kindness as a manipulation tactic. She meticulously tracks 'exits'—both physical and emotional.",
      memory_encoding:
        "She forgets mundane peace but remembers 'spikes'—the exact moment someone looked disappointed in her or the exact high of a dangerous thrill.",
    },
  },

  versions: {
    modern: {
      identity: "A tattoo artist always seeking for danger.",
      role: "Tattoo artist; uses the pain and permanence of the craft to connect with others without actually 'talking' to them.",
      status:
        "Low wealth but high subcultural 'clout.' She has no institutional power, but her name carries weight in the underground art and punk scenes.",
      social_life:
        "Tolerated for her talent but socially avoided. People treat her like a 'spectacle'—someone to watch from a distance at a party, but never someone to trust with a secret.",
    },
    fantasy: {
      identity: "A hot-headed Dragonborn pariah and self-taught berserker.",
      role: "Shock-trooper and frontline disruptor. She uses her draconic presence and breath weapon to shatter enemy formations, fueled by a reckless 'survival at all costs' instinct.",
      status:
        "Socially marginalized with zero clan standing, but possesses high tactical infamy. She is a 'necessary monster'—valuable in a massacre, but discarded in times of peace.",
      social_life:
        "Known as 'The Cursed Fire.' Soldiers swap horror stories about her volatility and stay clear of her reach; she sits at the furthest edge of the camp, an isolated spectacle of scales and scars.",
    },
    scifi: {
      identity: "A volatile Field Executive stationed on a high-risk colony.",
      role: "Extreme-risk operative. She specializes in missions where 'survival' isn't in the contract. Uses a heavy sniper rifle as a blunt melee tool.",
      status:
        "Middle-rank 'Executive' by title, but zero actual influence. She has the clearance to go anywhere but the authority to lead no one.",
      social_life:
        "Treated like a ticking time bomb. Her teammates rely on her to save their lives during a breach, but they give her a wide berth in the mess hall and never include her in 'off-duty' plans.",
    },
  },
};
