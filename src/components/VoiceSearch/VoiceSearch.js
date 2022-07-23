import './VoiceSearch.css';

import { useEffect } from 'react';
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';
import useSpeechSynth from '../../hooks/useSpeechSynth';

import Pulse from '../Pulse/Pulse';

import translate from '../../data/translate';

const VoiceSearch = ({
  appState,
  voiceWeatherText,

  getCityData,
  setSearchValue,
}) => {
  const { lang, locale } = appState;
  const { isSpeak, setIsSpeak } = useSpeechSynth(voiceWeatherText, locale);

  const commands = [
    {
      command: [translate[lang].voice_commands.weather_now],
      callback: () => setIsSpeak(true),
    },
    {
      command: [translate[lang].voice_commands.exit],
      callback: () => exit(),
    },
  ];

  const { finalTranscript, resetTranscript, listening } = useSpeechRecognition({
    commands,
  });

  const commandNames = new Set(
    commands
      .map((item) => item.command)
      .flat()
      .map((item) => item.toLowerCase())
  );

  const listen = () => {
    SpeechRecognition.startListening({
      continuous: true,
      language: locale,
    });
  };

  const exit = () => {
    SpeechRecognition.abortListening();
    setIsSpeak(false);
  };

  useEffect(() => {
    resetTranscript();

    if (finalTranscript !== '') {
      if (!commandNames.has(finalTranscript) && !speechSynthesis.speaking) {
        setSearchValue(finalTranscript);
        getCityData(finalTranscript);
      }
    }
  }, [finalTranscript, isSpeak]);

  return (
    <div className="voice-search">
      <button
        className="voice-search__button"
        onClick={() => {
          listening ? exit() : listen();
        }}
      >
        <span className="visually-hidden">Mic</span>
      </button>
      {listening && <Pulse />}
    </div>
  );
};

export default VoiceSearch;
