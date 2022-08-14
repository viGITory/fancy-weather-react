import './VoiceSearch.css';

import { useEffect } from 'react';
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';
import useSpeechSynth from '../../hooks/useSpeechSynth';

import { ReactComponent as MicIcon } from '../../assets/mic.svg';
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
        aria-label={`${translate[lang].buttons.voice_control}`}
        onClick={() => {
          listening ? exit() : listen();
        }}
      >
        <MicIcon />
      </button>
      {listening && <Pulse />}
      <ul
        className={`voice-search__commands${
          listening ? ' voice-search__commands--show' : ''
        }`}
      >
        <li className="voice-search__commands-item">
          {translate[lang].voice_commands.city_name}
        </li>
        <li className="voice-search__commands-item">
          {translate[lang].voice_commands.weather_now}
        </li>
        <li className="voice-search__commands-item">
          {translate[lang].voice_commands.exit}
        </li>
      </ul>
    </div>
  );
};

export default VoiceSearch;
