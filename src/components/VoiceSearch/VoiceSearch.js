import './VoiceSearch.css';

import React, { useEffect } from 'react';
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';

import Pulse from '../Pulse/Pulse';

import translate from '../../data/translate';

const VoiceSearch = ({
  getWeather,
  setSearchValue,
  lang,
  locale,
  voiceWeatherText,
}) => {
  const recognition = window.speechSynthesis;

  const commands = [
    {
      command: [translate[lang].voice_commands.weather_now],
      callback: () => {
        speak(voiceWeatherText);
      },
    },
    {
      command: [translate[lang].voice_commands.exit],
      callback: () => {
        exit();
      },
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
    recognition.cancel();
    resetTranscript();
  };

  function speak(text) {
    const speech = new SpeechSynthesisUtterance(text);

    if (locale === 'ru-RU')
      speech.voice = speechSynthesis
        .getVoices()
        .filter((voice) => voice.name === 'Google русский')[0];

    speech.lang = locale;

    speechSynthesis.speak(speech);
    speech.addEventListener('end', () => resetTranscript());
  }

  useEffect(() => {
    if (finalTranscript !== '') {
      if (!commandNames.has(finalTranscript) && !recognition.speaking) {
        setSearchValue(finalTranscript);
        getWeather(finalTranscript);

        resetTranscript();
      }
    }
  }, [finalTranscript]);

  return (
    <div className="voice-search">
      <button
        className="voice-search__button"
        onClick={() => {
          if (listening) {
            exit();
          } else {
            listen();
          }
        }}
      >
        <span className="visually-hidden">Mic</span>
      </button>
      {listening ? <Pulse /> : null}
    </div>
  );
};

export default VoiceSearch;
