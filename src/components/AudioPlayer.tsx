import React, { useRef } from "react";

const apiUrl = import.meta.env.VITE_API_URL;

interface AudioPlayerProps {
  textToSpeak: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ textToSpeak }) => {
  const audioContextRef = useRef<AudioContext | null>(null);

  const handlePlayClick = async () => {
    console.log(textToSpeak);
    if (!textToSpeak.trim()) {
      alert("No text provided for TTS");
      return;
    }

    const response = await fetch(apiUrl + `messages/start-audio`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text: textToSpeak,
      }),
    });

    console.log("POST response:", response);

    const ws = new WebSocket(
      `${apiUrl}?text=${encodeURIComponent(textToSpeak)}`
    );

    // const ws = new WebSocket(
    //   `ws://${apiUrl.replace(/^https?:\/\//, "")}?text=${encodeURIComponent(
    //     textToSpeak
    //   )}`
    // );
    const audioContext = new AudioContext();
    audioContextRef.current = audioContext;

    ws.binaryType = "arraybuffer";

    ws.onopen = () => {
      console.log("WebSocket connection opened");
    };

    ws.onmessage = async (event) => {
      const audioData = event.data;

      console.log("Audio data received:", audioData); // Log to verify data reception

      // Decode audio data and play it immediately
      const audioBuffer = await audioContext.decodeAudioData(audioData);
      const source = audioContext.createBufferSource();
      source.buffer = audioBuffer;
      source.connect(audioContext.destination);
      source.start();
      console.log("Audio played");
    };

    ws.onclose = () => {
      console.log("WebSocket connection closed ");
    };

    ws.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    return () => {
      // Clean up on component unmount
      ws.close();
      audioContext.close();
    };
  };

  return (
    <div>
      <button onClick={handlePlayClick}>Play Audio</button>
    </div>
  );
};

export default AudioPlayer;
