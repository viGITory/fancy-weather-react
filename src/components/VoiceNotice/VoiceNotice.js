import './VoiceNotice.css';
import { useState } from 'react';

import HoverGlow from '../HoverGlow/HoverGlow';

import addRippleEffect from '../../utils/addRippleEffect';
import getCursorPos from '../../utils/getCursorPos';
import translate from '../../data/translate';

const VoiceNotice = ({ lang, locale, voiceWeatherText }) => {
  const [isActive, setIsActive] = useState(false);
  const [glow, setGlow] = useState({});

  const recognition = window.speechSynthesis;

  const speak = (text) => {
    recognition.cancel();

    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = locale;

    if (locale === 'ru-RU')
      speech.voice = recognition
        .getVoices()
        .filter((voice) => voice.name === 'Google русский')[0];

    recognition.speak(speech);
    setIsActive(true);

    speech.addEventListener('end', () => {
      setIsActive(false);
    });
  };

  return (
    <button
      className={`voice-notice${isActive ? ' voice-notice--active' : ''}`}
      onClick={(e) => {
        isActive ? recognition.cancel() : speak(voiceWeatherText);
        addRippleEffect(e);
      }}
      onMouseMove={(e) => {
        const pos = getCursorPos(e);
        setGlow({ coordX: pos.x, coordY: pos.y, opacity: 1 });
      }}
      onMouseLeave={() => {
        setGlow({ opacity: 0 });
      }}
    >
      <span className="visually-hidden">
        {translate[lang].voice_notice.button}
      </span>
      <HoverGlow
        coordX={glow.coordX}
        coordY={glow.coordY}
        opacity={glow.opacity}
      />
    </button>
  );
};

export default VoiceNotice;
