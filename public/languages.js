const languages = [
  // {
  //   no: "1",
  //   name: "Afrikaans",
  //   native: "Afrikaans",
  //   code: "af",
  // },
  // {
  //   no: "2",
  //   name: "Albanian",
  //   native: "Shqip",
  //   code: "sq",
  // },
  // {
  //   no: "3",
  //   name: "Arabic",
  //   native: "عربي",
  //   code: "ar",
  // },
  // {
  //   no: "4",
  //   name: "Armenian",
  //   native: "Հայերէն",
  //   code: "hy",
  // },
  // {
  //   no: "5",
  //   name: "Azerbaijani",
  //   native: "آذربایجان دیلی",
  //   code: "az",
  // },
  // {
  //   no: "6",
  //   name: "Basque",
  //   native: "Euskara",
  //   code: "eu",
  // },
  // {
  //   no: "7",
  //   name: "Belarusian",
  //   native: "Беларуская",
  //   code: "be",
  // },
  // {
  //   no: "8",
  //   name: "Bulgarian",
  //   native: "Български",
  //   code: "bg",
  // },
  // {
  //   no: "9",
  //   name: "Catalan",
  //   native: "Català",
  //   code: "ca",
  // },
  // {
  //   no: "10",
  //   name: "Chinese (Simplified)",
  //   native: "中文简体",
  //   code: "zh-CN",
  // },
  // {
  //   no: "11",
  //   name: "Chinese (Traditional)",
  //   native: "中文繁體",
  //   code: "zh-TW",
  // },
  // {
  //   no: "12",
  //   name: "Croatian",
  //   native: "Hrvatski",
  //   code: "hr",
  // },
  // {
  //   no: "13",
  //   name: "Czech",
  //   native: "Čeština",
  //   code: "cs",
  // },
  // {
  //   no: "14",
  //   name: "Danish",
  //   native: "Dansk",
  //   code: "da",
  // },
  // {
  //   no: "15",
  //   name: "Dutch",
  //   native: "Nederlands",
  //   code: "nl",
  // },
  // {
  //   no: "16",
  //   name: "English",
  //   native: "English",
  //   code: "en",
  // },
  // {
  //   no: "17",
  //   name: "Estonian",
  //   native: "Eesti keel",
  //   code: "et",
  // },
  // {
  //   no: "18",
  //   name: "Filipino",
  //   native: "Filipino",
  //   code: "tl",
  // },
  // {
  //   no: "19",
  //   name: "Finnish",
  //   native: "Suomi",
  //   code: "fi",
  // },
  // {
  //   no: "20",
  //   name: "French",
  //   native: "Français",
  //   code: "fr",
  // },
  // {
  //   no: "21",
  //   name: "Galician",
  //   native: "Galego",
  //   code: "gl",
  // },
  // {
  //   no: "22",
  //   name: "Georgian",
  //   native: "ქართული",
  //   code: "ka",
  // },
  // {
  //   no: "23",
  //   name: "German",
  //   native: "Deutsch",
  //   code: "de",
  // },
  // {
  //   no: "24",
  //   name: "Greek",
  //   native: "Ελληνικά",
  //   code: "el",
  // },
  // {
  //   no: "25",
  //   name: "Haitian Creole",
  //   native: "Kreyòl ayisyen",
  //   code: "ht",
  // },
  // {
  //   no: "26",
  //   name: "Hebrew",
  //   native: "עברית",
  //   code: "iw",
  // },
  // {
  //   no: "27",
  //   name: "Hindi",
  //   native: "हिन्दी",
  //   code: "hi",
  // },
  // {
  //   no: "28",
  //   name: "Hungarian",
  //   native: "Magyar",
  //   code: "hu",
  // },
  // {
  //   no: "29",
  //   name: "Icelandic",
  //   native: "Íslenska",
  //   code: "is",
  // },
  // {
  //   no: "30",
  //   name: "Indonesian",
  //   native: "Bahasa Indonesia",
  //   code: "id",
  // },
  // {
  //   no: "31",
  //   name: "Irish",
  //   native: "Gaeilge",
  //   code: "ga",
  // },
  // {
  //   no: "32",
  //   name: "Italian",
  //   native: "Italiano",
  //   code: "it",
  // },
  // {
  //   no: "33",
  //   name: "Japanese",
  //   native: "日本語",
  //   code: "ja",
  // },
  // {
  //   no: "34",
  //   name: "kannada",
  //   native: "ಕನ್ನಡ",
  //   code: "kn",
  // },
  // {
  //   no: "35",
  //   name: "Korean",
  //   native: "한국어",
  //   code: "ko",
  // },
  // {
  //   no: "36",
  //   name: "Latvian",
  //   native: "Latviešu",
  //   code: "lv",
  // },
  // {
  //   no: "37",
  //   name: "Lithuanian",
  //   native: "Lietuvių kalba",
  //   code: "lt",
  // },
  // {
  //   no: "38",
  //   name: "Macedonian",
  //   native: "Македонски",
  //   code: "mk",
  // },
  // {
  //   no: "39",
  //   name: "Malay",
  //   native: "Malay",
  //   code: "ms",
  // },
  // {
  //   no: "40",
  //   name: "Malayalam",
  //   native: "മലയാളം",
  //   code: "ml",
  // },
  // {
  //   no: "41",
  //   name: "Maltese",
  //   native: "Malti",
  //   code: "mt",
  // },
  // {
  //   no: "42",
  //   name: "Norwegian",
  //   native: "Norsk",
  //   code: "no",
  // },
  // {
  //   no: "43",
  //   name: "Persian",
  //   native: "فارسی",
  //   code: "fa",
  // },
  // {
  //   no: "44",
  //   name: "Polish",
  //   native: "Polski",
  //   code: "pl",
  // },
  // {
  //   no: "45",
  //   name: "Portuguese",
  //   native: "Português",
  //   code: "pt",
  // },
  // {
  //   no: "46",
  //   name: "Romanian",
  //   native: "Română",
  //   code: "ro",
  // },
  // {
  //   no: "47",
  //   name: "Russian",
  //   native: "Русский",
  //   code: "ru",
  // },
  // {
  //   no: "48",
  //   name: "Serbian",
  //   native: "Српски",
  //   code: "sr",
  // },
  // {
  //   no: "49",
  //   name: "Slovak",
  //   native: "Slovenčina",
  //   code: "sk",
  // },
  // {
  //   no: "50",
  //   name: "Slovenian",
  //   native: "Slovensko",
  //   code: "sl",
  // },
  // {
  //   no: "51",
  //   name: "Spanish",
  //   native: "Español",
  //   code: "es",
  // },
  // {
  //   no: "52",
  //   name: "Swahili",
  //   native: "Kiswahili",
  //   code: "sw",
  // },
  // {
  //   no: "53",
  //   name: "Swedish",
  //   native: "Svenska",
  //   code: "sv",
  // },
  // {
  //   no: "54",
  //   name: "Tamil",
  //   native: "தமிழ்",
  //   code: "ta",
  // },
  // {
  //   no: "55",
  //   name: "Telugu",
  //   native: "తెలుగు",
  //   code: "te",
  // },
  // {
  //   no: "56",
  //   name: "Thai",
  //   native: "ไทย",
  //   code: "th",
  // },
  // {
  //   no: "57",
  //   name: "Turkish",
  //   native: "Türkçe",
  //   code: "tr",
  // },
  // {
  //   no: "58",
  //   name: "Ukrainian",
  //   native: "Українська",
  //   code: "uk",
  // },
  // {
  //   no: "59",
  //   name: "Urdu",
  //   native: "اردو",
  //   code: "ur",
  // },
  // {
  //   no: "60",
  //   name: "Vietnamese",
  //   native: "Tiếng Việt",
  //   code: "vi",
  // },
  // {
  //   no: "61",
  //   name: "Welsh",
  //   native: "Cymraeg",
  //   code: "cy",
  // },
  // {
  //   no: "62",
  //   name: "Yiddish",
  //   native: "ייִדיש",
  //   code: "yi",
  // },
  {
    "language": "Afrikaans",
    "code": "af"
  },
  {
    "language": "Albanian",
    "code": "sq"
  },
  {
    "language": "Amharic",
    "code": "am"
  },
  {
    "language": "Arabic",
    "code": "ar"
  },
  {
    "language": "Armenian",
    "code": "hy"
  },
  {
    "language": "Azerbaijani",
    "code": "az"
  },
  {
    "language": "Basque",
    "code": "eu"
  },
  {
    "language": "Belarusian",
    "code": "be"
  },
  {
    "language": "Bengali",
    "code": "bn"
  },
  {
    "language": "Bosnian",
    "code": "bs"
  },
  {
    "language": "Bulgarian",
    "code": "bg"
  },
  {
    "language": "Catalan",
    "code": "ca"
  },
  {
    "language": "Cebuano",
    "code": "ceb"
  },
  {
    "language": "Chinese (Simplified)",
    "code": "zh-CN"
  },
  {
    "language": "Chinese (Traditional)",
    "code": "zh-TW"
  },
  {
    "language": "Corsican",
    "code": "co"
  },
  {
    "language": "Croatian",
    "code": "hr"
  },
  {
    "language": "Czech",
    "code": "cs"
  },
  {
    "language": "Danish",
    "code": "da"
  },
  {
    "language": "Dutch",
    "code": "nl"
  },
  {
    "language": "English",
    "code": "en"
  },
  {
    "language": "Esperanto",
    "code": "eo"
  },
  {
    "language": "Estonian",
    "code": "et"
  },
  {
    "language": "Finnish",
    "code": "fi"
  },
  {
    "language": "French",
    "code": "fr"
  },
  {
    "language": "Frisian",
    "code": "fy"
  },
  {
    "language": "Galician",
    "code": "gl"
  },
  {
    "language": "Georgian",
    "code": "ka"
  },
  {
    "language": "German",
    "code": "de"
  },
  {
    "language": "Greek",
    "code": "el"
  },
  {
    "language": "Gujarati",
    "code": "gu"
  },
  {
    "language": "Haitian Creole",
    "code": "ht"
  },
  {
    "language": "Hausa",
    "code": "ha"
  },
  {
    "language": "Hawaiian",
    "code": "haw"
  },
  {
    "language": "Hebrew",
    "code": "iw"
  },
  {
    "language": "Hindi",
    "code": "hi"
  },
  {
    "language": "Hmong",
    "code": "hmn"
  },
  {
    "language": "Hungarian",
    "code": "hu"
  },
  {
    "language": "Icelandic",
    "code": "is"
  },
  {
    "language": "Igbo",
    "code": "ig"
  },
  {
    "language": "Indonesian",
    "code": "id"
  },
  {
    "language": "Irish",
    "code": "ga"
  },
  {
    "language": "Italian",
    "code": "it"
  },
  {
    "language": "Japanese",
    "code": "ja"
  },
  {
    "language": "Javanese",
    "code": "jw"
  },
  {
    "language": "Kannada",
    "code": "kn"
  },
  {
    "language": "Kazakh",
    "code": "kk"
  },
  {
    "language": "Khmer",
    "code": "km"
  },
  {
    "language": "Korean",
    "code": "ko"
  },
  {
    "language": "Kurdish",
    "code": "ku"
  },
  {
    "language": "Kyrgyz",
    "code": "ky"
  },
  {
    "language": "Lao",
    "code": "lo"
  },
  {
    "language": "Latin",
    "code": "la"
  },
  {
    "language": "Latvian",
    "code": "lv"
  },
  {
    "language": "Lithuanian",
    "code": "lt"
  },
  {
    "language": "Luxembourgish",
    "code": "lb"
  },
  {
    "language": "Macedonian",
    "code": "mk"
  },
  {
    "language": "Malagasy",
    "code": "mg"
  },
  {
    "language": "Malay",
    "code": "ms"
  },
  {
    "language": "Malayalam",
    "code": "ml"
  },
  {
    "language": "Maltese",
    "code": "mt"
  },
  {
    "language": "Maori",
    "code": "mi"
  },
  {
    "language": "Marathi",
    "code": "mr"
  },
  {
    "language": "Mongolian",
    "code": "mn"
  },
  {
    "language": "Myanmar (Burmese)",
    "code": "my"
  },
  {
    "language": "Nepali",
    "code": "ne"
  },
  {
    "language": "Norwegian",
    "code": "no"
  },
  {
    "language": "Nyanja (Chichewa)",
    "code": "ny"
  },
  {
    "language": "Pashto",
    "code": "ps"
  },
  {
    "language": "Persian",
    "code": "fa"
  },
  {
    "language": "Polish",
    "code": "pl"
  },
  {
    "language": "Portuguese (Portugal, Brazil)",
    "code": "pt"
  },
  {
    "language": "Punjabi",
    "code": "pa"
  },
  {
    "language": "Romanian",
    "code": "ro"
  },
  {
    "language": "Russian",
    "code": "ru"
  },
  {
    "language": "Samoan",
    "code": "sm"
  },
  {
    "language": "Scots Gaelic",
    "code": "gd"
  },
  {
    "language": "Serbian",
    "code": "sr"
  },
  {
    "language": "Sesotho",
    "code": "st"
  },
  {
    "language": "Shona",
    "code": "sn"
  },
  {
    "language": "Sindhi",
    "code": "sd"
  },
  {
    "language": "Sinhala (Sinhalese)",
    "code": "si"
  },
  {
    "language": "Slovak",
    "code": "sk"
  },
  {
    "language": "Slovenian",
    "code": "sl"
  },
  {
    "language": "Somali",
    "code": "so"
  },
  {
    "language": "Spanish",
    "code": "es"
  },
  {
    "language": "Sundanese",
    "code": "su"
  },
  {
    "language": "Swahili",
    "code": "sw"
  },
  {
    "language": "Swedish",
    "code": "sv"
  },
  {
    "language": "Tagalog (Filipino)",
    "code": "tl"
  },
  {
    "language": "Tajik",
    "code": "tg"
  },
  {
    "language": "Tamil",
    "code": "ta"
  },
  {
    "language": "Telugu",
    "code": "te"
  },
  {
    "language": "Thai",
    "code": "th"
  },
  {
    "language": "Turkish",
    "code": "tr"
  },
  {
    "language": "Ukrainian",
    "code": "uk"
  },
  {
    "language": "Urdu",
    "code": "ur"
  },
  {
    "language": "Uzbek",
    "code": "uz"
  },
  {
    "language": "Vietnamese",
    "code": "vi"
  },
  {
    "language": "Welsh",
    "code": "cy"
  },
  {
    "language": "Xhosa",
    "code": "xh"
  },
  {
    "language": "Yiddish",
    "code": "yi"
  },
  {
    "language": "Yoruba",
    "code": "yo"
  },
  {
    "language": "Zulu",
    "code": "zu"
  }
];
