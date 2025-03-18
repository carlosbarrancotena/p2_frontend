// components/Meanings.tsx
import { ComponentChildren } from "preact";

interface MeaningsProps {
  meanings: Array<{
    partOfSpeech: string;
    definitions: Array<{
      definition: string;
      example?: string;
      synonyms?: string[];
      antonyms?: string[];
    }>;
  }>;
}

export default function Meanings({ meanings }: MeaningsProps) {
  // Agrupar significados por partOfSpeech
  const groupedMeanings = meanings.reduce((acc, meaning) => {
    if (!acc[meaning.partOfSpeech]) {
      acc[meaning.partOfSpeech] = [];
    }
    acc[meaning.partOfSpeech].push(...meaning.definitions);
    return acc;
  }, {} as Record<string, typeof meanings[0]["definitions"]>);

  return (
    <div>
      <h3>Meanings</h3>
      {Object.entries(groupedMeanings).map(([partOfSpeech, definitions]) => (
        <div key={partOfSpeech}>
          <h4>{partOfSpeech}</h4>
          <ul>
            {definitions.map((def, i) => (
              <li key={i}>
                <strong>Definition:</strong> {def.definition}
                {def.example && (
                  <>
                    <br />
                    <strong>Example:</strong> {def.example}
                  </>
                )}
                {def.synonyms && def.synonyms.length > 0 && (
                  <>
                    <br />
                    <strong>Synonyms:</strong> {def.synonyms.join(", ")}
                  </>
                )}
                {def.antonyms && def.antonyms.length > 0 && (
                  <>
                    <br />
                    <strong>Antonyms:</strong> {def.antonyms.join(", ")}
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}