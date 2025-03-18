// components/Phonetics.tsx
import { ComponentChildren } from "preact";

interface PhoneticsProps {
  phonetics: Array<{
    text: string;
    audio?: string;
  }>;
}

export default function Phonetics({ phonetics }: PhoneticsProps) {
  // Eliminar duplicados basados en el texto de la fonética
  const uniquePhonetics = phonetics.filter(
    (ph, index, self) =>
      index === self.findIndex((p) => p.text === ph.text),
  );

  return (
    <div>
      <h3>Phonetics</h3>
      <ul>
        {uniquePhonetics.map((ph, index) => (
          <li key={index}>
            <strong>Text:</strong> {ph.text}
            {ph.audio && (
              <>
                <br />
                <strong>Audio:</strong> <audio controls src={ph.audio} />
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}