"use client";

import { useState } from "react";
import Image from "next/image";
import { characters } from "@girls";
import BinaryLine from "@components/scifi/BinaryLine";
import Button from "@components/scifi/Button";
import ImageFrame from "@components/scifi/ImageFrame";

export default function ScifiPage() {
  const [selectedCharacter, setSelectedCharacter] = useState<string | null>(
    characters[0]?.id || null
  );

  const getCharacterImage = (id: string) => `/girls/${id}/anime_profile.png`;
  const getCharacterIcon = (id: string) => `/svg/scifi/${id}.svg`;

  const selectedCharacterData = characters.find((c) => c.id === selectedCharacter);

  return (
    <div className="relative z-10">
      <div className="min-h-screen md:min-h-[65vh]">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full items-start">
          <div className="flex flex-col relative">
            <BinaryLine align="right" binary="0110101101101111101" text="Yizhu Industries" />

            <div className="flex justify-center items-start md:h-[70vh] md:overflow-y-scroll my-4 p-4 md:p-6 no-scrollbar">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {characters.map((character) => (
                  <ImageFrame
                    key={character.id}
                    id={character.id}
                    image={getCharacterImage(character.id)}
                    alt={character.identity.full_name}
                    name={character.id}
                    selected={selectedCharacter === character.id}
                    icon={getCharacterIcon(character.id)}
                    onClick={setSelectedCharacter}
                  />
                ))}
              </div>
            </div>

            <BinaryLine align="left" binary="010111101110111" text="Yizhu Industries" />
          </div>
          <div className="hidden md:block relative h-[80vh] overflow-visible z-30">
            {selectedCharacter && (
              <div className="absolute inset-0 flex justify-center">
                <Image
                  id="main-preview"
                  src={getCharacterImage(selectedCharacter)}
                  alt="Character Preview"
                  width={768}
                  height={1152}
                  className="h-[95vh] w-auto max-w-none object-contain object-top -mt-[13vh] pointer-events-none"
                  priority
                />
              </div>
            )}

            {selectedCharacterData && (
              <div className="absolute bottom-8 right-8 flex flex-col items-end gap-4 z-10">
                <h2 className={`${selectedCharacterData.identity.original_name.length < 4 ? "text-9xl" : "text-8xl"} text-white text-right name drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]`}>
                  {selectedCharacterData.identity.original_name.split(" ").map((part: string, i: number, arr: string[]) => (
                    <span key={i}>
                      {part}
                      {i < arr.length - 1 && <br />}
                    </span>
                  ))}
                </h2>
                <div className="flex flex-col gap-3">
                  <Button href={`/scifi/characters/${selectedCharacterData.id}`}>View Character</Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}