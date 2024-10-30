import React, { useEffect, useRef, useState } from "react";

interface SimpleSpeechProps {
  textToSpeak: string;
}

const SimpleSpeech: React.FC<SimpleSpeechProps> = ({ textToSpeak }) => {
  const ttsSpeech = new SpeechSynthesisUtterance(textToSpeak);
  return (
    <div>
      <button
        onClick={() => {
          speechSynthesis.speak(ttsSpeech);
        }}
      >
        Play Audio
      </button>
    </div>
  );
};

export default SimpleSpeech;
