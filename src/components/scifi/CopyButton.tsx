"use client";

import Button from "./Button";
import { characters } from "@girls";

export default function CopyButton({ id }: { id: string }) {
    const character = characters.find((c) => c.id === id);

    const handleCopy = () => {
        if (!character) return;

        const { identity, appearance, personality, versions } = character;
        const scifi = versions.scifi;

        const text = `full_name: ${identity.full_name} (${identity.original_name}), age: ${identity.age}, birthday: ${identity.birthday}, body: ${appearance.body}
appearance: ${appearance.description}
personality core: ${personality.core}
behavior and decision logic: ${personality.logic}
subconscious: ${personality.subconscious}
social_dynamics - strangers: ${personality.social_dynamics.strangers}
social_dynamics - friends: ${personality.social_dynamics.friends}
social_dynamics - love: ${personality.social_dynamics.love}
triggers - ignite: ${personality.triggers.ignite},
triggers - soothe: ${personality.triggers.soothe},
speech: ${personality.speech}
interaction_filter: ${personality.perceptions.interaction_filter}
memory_encoding: ${personality.perceptions.memory_encoding}
identity: ${scifi.identity}
role: ${scifi.role}
status: ${scifi.status}
social_life: ${scifi.social_life}`;

        navigator.clipboard.writeText(text).then(() => { });
    };

    return <Button onClick={handleCopy}>Copy</Button>;
}