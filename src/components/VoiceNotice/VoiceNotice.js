import './VoiceNotice.css';
import { useState } from 'react';
import useSpeechSynth from '../../hooks/useSpeechSynth';

import { ReactComponent as PlayIcon } from '../../assets/play.svg';
import { ReactComponent as PauseIcon } from '../../assets/pause.svg';
import HoverGlow from '../HoverGlow/HoverGlow';

import addRippleEffect from '../../utils/addRippleEffect';
import getCursorPos from '../../utils/getCursorPos';
import translate from '../../data/translate';

const VoiceNotice = ({ appState, voiceWeatherText }) => {
  const [glow, setGlow] = useState({});

  const { locale, lang } = appState;
  const { isSpeak, setIsSpeak } = useSpeechSynth(voiceWeatherText, locale);

  return (
    <button
      className="voice-notice"
      aria-label={`${translate[lang].buttons.voice_notice}`}
      onClick={(e) => {
        isSpeak ? setIsSpeak(false) : setIsSpeak(true);
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
      {isSpeak ? <PauseIcon /> : <PlayIcon />}
      <HoverGlow
        coordX={glow.coordX}
        coordY={glow.coordY}
        opacity={glow.opacity}
      />
    </button>
  );
};

export default VoiceNotice;
