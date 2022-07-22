import { useState, useEffect } from 'react';

const useSpeechSynth = (text, locale) => {
  const [isSpeak, setIsSpeak] = useState(false);

  const onSpeakEnd = () => {
    setIsSpeak(false);
  };

  useEffect(() => {
    speechSynthesis.cancel();

    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = locale;

    if (locale === 'ru-RU')
      speech.voice = speechSynthesis
        .getVoices()
        .filter((voice) => voice.name === 'Google русский')[0];

    if (isSpeak) {
      speechSynthesis.speak(speech);
      speech.addEventListener('end', onSpeakEnd);
    }

    return () => {
      speech.removeEventListener('end', onSpeakEnd);
    };
  }, [isSpeak, locale, text]);

  return { isSpeak, setIsSpeak };
};

export default useSpeechSynth;
