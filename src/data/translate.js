const translate = {
  en: {
    project_name: 'Fancy weather',
    buttons: {
      background: 'Change background',
      voice_notice: 'Voice notice',
      position: 'Current location',
      voice_control: 'Voice control',
      search: 'Search',
      show_more: 'Show more',
    },
    greeting: {
      morning: 'Good morning',
      afternoon: 'Good afternoon',
      evening: 'Good evening',
      night: 'Good night',
    },
    api_loading: {
      location: 'Waiting for location...',
      weather: 'Waiting for weather...',
      images: 'Waiting for images...',
    },
    search: {
      input: 'Search city',
      errors: {
        404: 'City not found',
        other: 'Something went wrong :(',
      },
    },
    day_time: {
      morning: 'Morning',
      day: 'Day',
      evening: 'Evening',
      night: 'Night',
    },
    weather: {
      weather_now: 'Weather now in',
      temp: 'Temperature',
      feels_like: 'Feels like',
      humidity: 'Humidity',
      wind: {
        name: 'Wind',
        m_s: 'm/s',
        index: 'Beaufort scale',
        directions: {
          n: {
            shortname: 'N',
            fullname: 'North',
          },
          nne: {
            shortname: 'NNE',
            fullname: 'North-northeast',
          },
          ne: {
            shortname: 'NE',
            fullname: 'Northeast',
          },
          ene: {
            shortname: 'ENE',
            fullname: 'East-northeast',
          },
          e: {
            shortname: 'E',
            fullname: 'East',
          },
          ese: {
            shortname: 'ESE',
            fullname: 'East-southeast',
          },
          se: {
            shortname: 'SE',
            fullname: 'Southeast',
          },
          sse: {
            shortname: 'SSE',
            fullname: 'South-southeast',
          },
          s: {
            shortname: 'S',
            fullname: 'South',
          },
          ssw: {
            shortname: 'SSW',
            fullname: 'South-southwest',
          },
          sw: {
            shortname: 'SW',
            fullname: 'Southwest',
          },
          wsw: {
            shortname: 'WSW',
            fullname: 'West-southwest',
          },
          w: {
            shortname: 'W',
            fullname: 'West',
          },
          wnw: {
            shortname: 'WNW',
            fullname: 'West-northwest',
          },
          nw: {
            shortname: 'NW',
            fullname: 'Northwest',
          },
          nnw: {
            shortname: 'NNW',
            fullname: 'North-northwest',
          },
        },
      },
      sun: {
        name: 'Sun',
        uv: 'UV Index',
        sunrise: 'Sunrise',
        sunset: 'Sunset',
      },
      moon: {
        name: 'Moon',
        moonrise: 'Moonrise',
        moonset: 'Moonset',
        phases: {
          moon_new: 'New Moon',
          moon_waxing_crescent: 'Waxing crescent',
          moon_first_quarter: 'First quarter',
          moon_waxing_gibbous: 'Waxing gibbous',
          moon_full: 'Full Moon',
          moon_waning_gibbous: 'Waning gibbous',
          moon_last_quarter: 'Last quarter',
          moon_waning_crescent: 'Waning crescent',
        },
      },
      thermometer: {
        warmer: 'Warmer than yesterday',
        colder: 'Colder than yesterday',
        equal: 'Temp like yesterday',
      },
    },
    coords: {
      latitude: 'Latitude',
      longitude: 'Longitude',
    },
    voice_commands: {
      city_name: '(City name)',
      weather_now: 'Weather now',
      exit: 'Exit',
    },
  },
  ru: {
    project_name: 'Модная погода',
    buttons: {
      background: 'Обновить фон',
      voice_notice: 'Голосовое уведомление',
      position: 'Текущее местоположение',
      voice_control: 'Голосовое управление',
      search: 'Поиск',
      show_more: 'Показать больше',
    },
    greeting: {
      morning: 'Доброе утро',
      afternoon: 'Добрый день',
      evening: 'Добрый вечер',
      night: 'Доброй ночи',
    },
    api_loading: {
      location: 'Ждем местоположение...',
      weather: 'Ждем погоду...',
      images: 'Ждем изображения...',
    },
    day_time: {
      morning: 'Утро',
      day: 'День',
      evening: 'Вечер',
      night: 'Ночь',
    },
    search: {
      input: 'Поиск по городу',
      errors: {
        404: 'Город не найден',
        other: 'Что-то пошло не так :(',
      },
    },
    weather: {
      weather_now: 'Погода сейчас в',
      temp: 'Температура',
      feels_like: 'Ощущается как',
      humidity: 'Влажность',
      wind: {
        name: 'Ветер',
        m_s: 'м/с',
        index: 'Шкала Бофорта',
        directions: {
          n: {
            shortname: 'С',
            fullname: 'Северный',
          },
          nne: {
            shortname: 'ССВ',
            fullname: 'Северный северо-восточный',
          },
          ne: {
            shortname: 'СВ',
            fullname: 'Северо-восточный',
          },
          ene: {
            shortname: 'ВСВ',
            fullname: 'Восточный северо-восточный',
          },
          e: {
            shortname: 'В',
            fullname: 'Восточный',
          },
          ese: {
            shortname: 'ВЮВ',
            fullname: 'Восточный юго-восточный',
          },
          se: {
            shortname: 'ЮВ',
            fullname: 'Юго-восточный',
          },
          sse: {
            shortname: 'ЮЮВ',
            fullname: 'Южный юго-восточный',
          },
          s: {
            shortname: 'Ю',
            fullname: 'Южный',
          },
          ssw: {
            shortname: 'ЮЮЗ',
            fullname: 'Южный юго-западный',
          },
          sw: {
            shortname: 'ЮЗ',
            fullname: 'Юго-западный',
          },
          wsw: {
            shortname: 'ЗЮЗ',
            fullname: 'Западный юго-западный',
          },
          w: {
            shortname: 'З',
            fullname: 'Западный',
          },
          wnw: {
            shortname: 'ЗСЗ',
            fullname: 'Западный северо-западный',
          },
          nw: {
            shortname: 'СЗ',
            fullname: 'Северо-западный',
          },
          nnw: {
            shortname: 'ССЗ',
            fullname: 'Северный северо-западный',
          },
        },
      },
      sun: {
        name: 'Солнце',
        uv: 'УФ-индекс',
        sunrise: 'Рассвет',
        sunset: 'Закат',
      },
      moon: {
        name: 'Луна',
        moonrise: 'Восход',
        moonset: 'Заход',
        phases: {
          moon_new: 'Новолуние',
          moon_waxing_crescent: 'Молодая луна',
          moon_first_quarter: 'Первая четверть',
          moon_waxing_gibbous: 'Прибывающая луна',
          moon_full: 'Полнолуние',
          moon_waning_gibbous: 'Убывающая луна',
          moon_last_quarter: 'Последняя четверть',
          moon_waning_crescent: 'Старая луна',
        },
      },
      thermometer: {
        warmer: 'Теплее чем вчера',
        colder: 'Холоднее чем вчера',
        equal: 'Температура как вчера',
      },
    },
    coords: {
      latitude: 'Широта',
      longitude: 'Долгота',
    },
    voice_commands: {
      city_name: '(Название города)',
      weather_now: 'Погода сейчас',
      exit: 'Выйти',
    },
    easter_eggs: {
      48: {
        country_name: `Полонд`,
        17: {
          city_name: 'Жешув',
          quote:
            '"Мне надо бы снять койку за 1500 злотых в месяц и немного денег на кусок батона"',
        },
      },
    },
  },
  es: {
    project_name: 'Clima de moda',
    buttons: {
      background: 'Actualizar fondo',
      voice_notice: 'Notificación de voz',
      position: 'Ubicación actual',
      voice_control: 'Control de voz',
      search: 'Buscar',
      show_more: 'Mostrar más',
    },
    greeting: {
      morning: 'Buenos dias',
      afternoon: 'Buenas tardes',
      evening: 'Buenas noches',
      night: 'Buenas noches',
    },
    api_loading: {
      location: 'Esperando la ubicación...',
      weather: 'Esperando el clima...',
      images: 'Esperando imagenes...',
    },
    search: {
      input: 'Buscar de ciudad',
      errors: {
        404: 'Ciudad no encontrada',
        other: 'Algo salió mal :(',
      },
    },
    day_time: {
      morning: 'Madrugada',
      day: 'Mañana',
      evening: 'Tarde',
      night: 'Noche',
    },
    weather: {
      weather_now: 'Tiempo ahora en',
      temp: 'Temperatura',
      feels_like: 'Sensación',
      humidity: 'Humedad',
      wind: {
        name: 'Viento',
        m_s: 'm/s',
        index: 'Escala de Beaufort',
        directions: {
          n: {
            shortname: 'N',
            fullname: 'Norte',
          },
          nne: {
            shortname: 'NNE',
            fullname: 'Norte-noreste',
          },
          ne: {
            shortname: 'NE',
            fullname: 'Noreste',
          },
          ene: {
            shortname: 'ENE',
            fullname: 'Este-noreste',
          },
          e: {
            shortname: 'E',
            fullname: 'Este',
          },
          ese: {
            shortname: 'ESE',
            fullname: 'Este-sureste',
          },
          se: {
            shortname: 'SE',
            fullname: 'Sureste',
          },
          sse: {
            shortname: 'SSE',
            fullname: 'Sur-sureste',
          },
          s: {
            shortname: 'S',
            fullname: 'Sur',
          },
          ssw: {
            shortname: 'SSO',
            fullname: 'Sur-suroeste',
          },
          sw: {
            shortname: 'SO',
            fullname: 'Suroeste',
          },
          wsw: {
            shortname: 'OSO',
            fullname: 'Oeste-suroeste',
          },
          w: {
            shortname: 'O',
            fullname: 'Oeste',
          },
          wnw: {
            shortname: 'ONO',
            fullname: 'Oeste-noroeste',
          },
          nw: {
            shortname: 'NO',
            fullname: 'Noroeste',
          },
          nnw: {
            shortname: 'NNO',
            fullname: 'Norte-noroeste',
          },
        },
      },
      sun: {
        name: 'Sol',
        uv: 'Índice UV',
        sunrise: 'Salida Sol',
        sunset: 'Puesta Sol',
      },
      moon: {
        name: 'Luna',
        moonrise: 'Salida Luna',
        moonset: 'Puesta Luna',
        phases: {
          moon_new: 'Luna nueva',
          moon_waxing_crescent: 'Luna creciente',
          moon_first_quarter: 'Cuarto creciente',
          moon_waxing_gibbous: 'Luna gibosa creciente',
          moon_full: 'Luna llena',
          moon_waning_gibbous: 'Luna gibosa menguante',
          moon_last_quarter: 'Cuarto menguante',
          moon_waning_crescent: 'Luna menguante',
        },
      },
      thermometer: {
        warmer: 'Más cálido que ayer',
        colder: 'Más frío que ayer',
        equal: 'Temperatura como ayer',
      },
    },
    coords: {
      latitude: 'Latitud',
      longitude: 'Longitud',
    },
    voice_commands: {
      city_name: '(Nombre de ciudad)',
      weather_now: 'Tiempo ahora',
      exit: 'Salida',
    },
  },
  fr: {
    project_name: 'Météo à la mode',
    buttons: {
      background: `Mettre à jour l'arrière-plan`,
      voice_notice: 'Notification vocale',
      position: 'Localisation actuelle',
      voice_control: 'Commande vocale',
      search: 'Rechercher',
      show_more: 'Montre plus',
    },
    greeting: {
      morning: 'Bonjour',
      afternoon: 'Bon après-midi',
      evening: 'Bonsoir',
      night: 'Bonne nuit',
    },
    api_loading: {
      location: 'En attente de localisation...',
      weather: 'En attendant la météo...',
      images: `En attente d'images...`,
    },
    search: {
      input: 'Recherche de ville',
      errors: {
        404: 'Ville introuvable',
        other: `Quelque chose s'est mal passé :(`,
      },
    },
    day_time: {
      morning: 'Matin',
      day: 'Jour',
      evening: 'Soirée',
      night: 'Nuit',
    },
    weather: {
      weather_now: `Météo actuelle à`,
      temp: 'Température',
      feels_like: 'Ressentie',
      humidity: 'Humidité',
      wind: {
        name: 'Vent',
        m_s: 'm/s',
        index: 'Échelle de Beaufort',
        directions: {
          n: {
            shortname: 'N',
            fullname: 'Nord',
          },
          nne: {
            shortname: 'NNE',
            fullname: 'Nord-nordest',
          },
          ne: {
            shortname: 'NE',
            fullname: 'Nord-est',
          },
          ene: {
            shortname: 'ENE',
            fullname: 'Est-nordest',
          },
          e: {
            shortname: 'E',
            fullname: 'Est',
          },
          ese: {
            shortname: 'ESE',
            fullname: 'Est-sudest',
          },
          se: {
            shortname: 'SE',
            fullname: 'Sud-est',
          },
          sse: {
            shortname: 'SSE',
            fullname: 'Sud-sudest',
          },
          s: {
            shortname: 'S',
            fullname: 'Sud',
          },
          ssw: {
            shortname: 'SSO',
            fullname: 'Sud-sudouest',
          },
          sw: {
            shortname: 'SO',
            fullname: 'Sud-ouest',
          },
          wsw: {
            shortname: 'OSO',
            fullname: 'Ouest-sudouest',
          },
          w: {
            shortname: 'O',
            fullname: 'Ouest',
          },
          wnw: {
            shortname: 'ONO',
            fullname: 'Ouest-nordouest',
          },
          nw: {
            shortname: 'NO',
            fullname: 'Nord-ouest',
          },
          nnw: {
            shortname: 'NNO',
            fullname: 'Nord-nordouest',
          },
        },
      },
      sun: {
        name: 'Soleil',
        uv: 'Indice UV',
        sunrise: 'Lever',
        sunset: 'Coucher',
      },
      moon: {
        name: 'Lune',
        moonrise: 'Lever',
        moonset: 'Coucher',
        phases: {
          moon_new: 'Nouvelle lune',
          moon_waxing_crescent: 'Premier croissant',
          moon_first_quarter: 'Premier quartier',
          moon_waxing_gibbous: 'Gibbeuse croissante',
          moon_full: 'Pleine lune',
          moon_waning_gibbous: 'Gibbeuse décroissante',
          moon_last_quarter: 'Dernier quartier',
          moon_waning_crescent: 'Dernier croissant',
        },
      },
      thermometer: {
        warmer: `Plus chaud qu'hier`,
        colder: `Plus froid qu'hier`,
        equal: 'Température comme hier',
      },
    },
    coords: {
      latitude: 'Latitude',
      longitude: 'Longitude',
    },
    voice_commands: {
      city_name: '(Nom de Ville)',
      weather_now: 'Temps maintenant',
      exit: 'Sortir',
    },
  },
  de: {
    project_name: 'Trendiges Wetter',
    buttons: {
      background: 'Hintergrund aktualisieren',
      voice_notice: 'Sprachbenachrichtigung',
      position: 'Aktueller Standort',
      voice_control: 'Stimmenkontrolle',
      search: 'Suchen',
      show_more: 'Zeig mehr',
    },
    greeting: {
      morning: 'Guten Morgen',
      afternoon: 'Guten Tag',
      evening: 'Guten Abend',
      night: 'Gute Nacht',
    },
    api_loading: {
      location: 'Warten auf Standort...',
      weather: 'Wetter abwarten...',
      images: 'Bilder warten...',
    },
    search: {
      input: 'Stadt suchen',
      errors: {
        404: 'Stadt nicht gefunden',
        other: 'Etwas ist schief gelaufen :(',
      },
    },
    day_time: {
      morning: 'Morgen',
      day: 'Tag',
      evening: 'Abend',
      night: 'Nacht',
    },
    weather: {
      weather_now: 'Wetter jetzt in',
      temp: 'Temperatur',
      feels_like: 'Gefühlt',
      humidity: 'Luftfeuchtigkeit',
      wind: {
        name: 'Wind',
        m_s: 'm/s',
        index: 'Beaufortskala',
        directions: {
          n: {
            shortname: 'N',
            fullname: 'Norden',
          },
          nne: {
            shortname: 'NNO',
            fullname: 'Nord-nordost',
          },
          ne: {
            shortname: 'NO',
            fullname: 'Nord-ost',
          },
          ene: {
            shortname: 'ONO',
            fullname: 'Ost-nordost',
          },
          e: {
            shortname: 'O',
            fullname: 'Ost',
          },
          ese: {
            shortname: 'OSO',
            fullname: 'Ost-südost',
          },
          se: {
            shortname: 'SO',
            fullname: 'Süd-ost',
          },
          sse: {
            shortname: 'SSO',
            fullname: 'Süd-südost',
          },
          s: {
            shortname: 'S',
            fullname: 'Süden',
          },
          ssw: {
            shortname: 'SSW',
            fullname: 'Süd-südwest',
          },
          sw: {
            shortname: 'SW',
            fullname: 'Süd-westen',
          },
          wsw: {
            shortname: 'WSW',
            fullname: 'West-südwest',
          },
          w: {
            shortname: 'W',
            fullname: 'Westen',
          },
          wnw: {
            shortname: 'WNW',
            fullname: 'West-nordwest',
          },
          nw: {
            shortname: 'NW',
            fullname: 'Nord-west',
          },
          nnw: {
            shortname: 'NNW',
            fullname: 'Nord-nordwest',
          },
        },
      },
      sun: {
        name: 'Sonne',
        uv: 'UV-Indexwert',
        sunrise: 'Sonnenaufgang',
        sunset: 'Sonnenuntergang',
      },
      moon: {
        name: 'Mond',
        moonrise: 'Mondaufgang',
        moonset: 'Monduntergang',
        phases: {
          moon_new: 'Neumond',
          moon_waxing_crescent: 'Erstes Viertel',
          moon_first_quarter: 'Zunehmender Halbmond',
          moon_waxing_gibbous: 'Zweites Viertel',
          moon_full: 'Vollmond',
          moon_waning_gibbous: 'Drittes Viertel',
          moon_last_quarter: 'Abnehmender Halbmond',
          moon_waning_crescent: 'Letztes Viertel',
        },
      },
      thermometer: {
        warmer: `Wärmer als gestern`,
        colder: `Kälter als gestern`,
        equal: 'Temperatur wie gestern',
      },
    },
    coords: {
      latitude: 'Breitengrad',
      longitude: 'Längengrad',
    },
    voice_commands: {
      city_name: '(Stadtname)',
      weather_now: 'Wetter jetzt',
      exit: 'Ausfahrt',
    },
  },
};

export default translate;
