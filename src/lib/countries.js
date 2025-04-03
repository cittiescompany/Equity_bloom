const countries = [
  {
    "name": "Canada",
    "slug": "canada",
    "code": "CA",
    "currencyCode": "CAD"
  },
  {
    "name": "United Kingdom",
    "slug": "united-kingdom",
    "code": "GB",
    "currencyCode": "GBP"
  },
  {
    "name": "United States",
    "slug": "united-states",
    "code": "US",
    "currencyCode": "USD"
  },
  {
    "name": "China",
    "slug": "china",
    "code": "CN",
    "currencyCode": "CNY"
  },
  {
    "name": "Nigeria",
    "slug": "nigeria",
    "code": "NG",
    "currencyCode": "NGN"
  },
  {
    "name": "Ghana",
    "slug": "ghana",
    "code": "GH",
    "currencyCode": "GHS"
  },
  {
    "name": "Kenya",
    "slug": "kenya",
    "code": "KE",
    "currencyCode": "KES"
  }
]

const all={
  "africa": [
    {
      "name": "Botswana",
      "slug": "botswana",
      "code": "BW",
      "currencyCode": "BWP"
    },
    {
      "name": "Egypt",
      "slug": "egypt",
      "code": "EG",
      "currencyCode": "EGP"
    },
    {
      "name": "Ivory Coast",
      "slug": "ivory-coast",
      "code": "CI",
      "currencyCode": "XOF"
    },
    {
      "name": "Kenya",
      "slug": "kenya",
      "code": "KE",
      "currencyCode": "KES"
    },
    {
      "name": "Malawi",
      "slug": "malawi",
      "code": "MW",
      "currencyCode": "MWK"
    },
    {
      "name": "Mauritius",
      "slug": "mauritius",
      "code": "MU",
      "currencyCode": "MUR"
    },
    {
      "name": "Morocco",
      "slug": "morocco",
      "code": "MA",
      "currencyCode": "MAD"
    },
    {
      "name": "Namibia",
      "slug": "namibia",
      "code": "NA",
      "currencyCode": "NAD"
    },
    {
      "name": "Nigeria",
      "slug": "nigeria",
      "code": "NG",
      "currencyCode": "NGN"
    },
    {
      "name": "Rwanda",
      "slug": "rwanda",
      "code": "RW",
      "currencyCode": "RWF"
    },
    {
      "name": "South Africa",
      "slug": "south-africa",
      "code": "ZA",
      "currencyCode": "ZAR"
    },
    {
      "name": "Tanzania",
      "slug": "tanzania",
      "code": "TZ",
      "currencyCode": "TZS"
    },
    {
      "name": "Tunisia",
      "slug": "tunisia",
      "code": "TN",
      "currencyCode": "TND"
    },
    {
      "name": "Uganda",
      "slug": "uganda",
      "code": "UG",
      "currencyCode": "UGX"
    },
    {
      "name": "Zambia",
      "slug": "zambia",
      "code": "ZM",
      "currencyCode": "ZMW"
    },
    {
      "name": "Zimbabwe",
      "slug": "zimbabwe",
      "code": "ZW",
      "currencyCode": "ZWL"
    }
  ],
  "global": [
    {
      "name": "Abu Dhabi",
      "slug": "abu-dhabi",
      "code": "AE",
      "currencyCode": "AED"
    },
    {
      "name": "Argentina",
      "slug": "argentina",
      "code": "AR",
      "currencyCode": "ARS"
    },
    {
      "name": "Australia",
      "slug": "australia",
      "code": "AU",
      "currencyCode": "AUD"
    },
    {
      "name": "Austria",
      "slug": "austria",
      "code": "AT",
      "currencyCode": "EUR"
    },
    {
      "name": "Bahrain",
      "slug": "bahrain",
      "code": "BH",
      "currencyCode": "BHD"
    },
    {
      "name": "Belgium",
      "slug": "belgium",
      "code": "BE",
      "currencyCode": "EUR"
    },
    {
      "name": "Bosnia",
      "slug": "bosnia",
      "code": "BA",
      "currencyCode": "BAM"
    },
    {
      "name": "Brazil",
      "slug": "brazil",
      "code": "BR",
      "currencyCode": "BRL"
    },
    {
      "name": "Bulgaria",
      "slug": "bulgaria",
      "code": "BG",
      "currencyCode": "BGN"
    },
    {
      "name": "Canada",
      "slug": "canada",
      "code": "CA",
      "currencyCode": "CAD"
    },
    {
      "name": "Chile",
      "slug": "chile",
      "code": "CL",
      "currencyCode": "CLP"
    },
    {
      "name": "China",
      "slug": "china",
      "code": "CN",
      "currencyCode": "CNY"
    },
    {
      "name": "Colombia",
      "slug": "colombia",
      "code": "CO",
      "currencyCode": "COP"
    },
    {
      "name": "Costa Rica",
      "slug": "costa-rica",
      "code": "CR",
      "currencyCode": "CRC"
    },
    {
      "name": "Croatia",
      "slug": "croatia",
      "code": "HR",
      "currencyCode": "HRK"
    },
    {
      "name": "Cyprus",
      "slug": "cyprus",
      "code": "CY",
      "currencyCode": "EUR"
    },
    {
      "name": "Czech Republic",
      "slug": "czech-republic",
      "code": "CZ",
      "currencyCode": "CZK"
    },
    {
      "name": "Denmark",
      "slug": "denmark",
      "code": "DK",
      "currencyCode": "DKK"
    },
    {
      "name": "Estonia",
      "slug": "estonia",
      "code": "EE",
      "currencyCode": "EUR"
    },
    {
      "name": "Finland",
      "slug": "finland",
      "code": "FI",
      "currencyCode": "EUR"
    },
    {
      "name": "France",
      "slug": "france",
      "code": "FR",
      "currencyCode": "EUR"
    },
    {
      "name": "Germany",
      "slug": "germany",
      "code": "DE",
      "currencyCode": "EUR"
    },
    {
      "name": "Greece",
      "slug": "greece",
      "code": "GR",
      "currencyCode": "EUR"
    },
    {
      "name": "Hong Kong",
      "slug": "hong-kong",
      "code": "HK",
      "currencyCode": "HKD"
    },
    {
      "name": "Hungary",
      "slug": "hungary",
      "code": "HU",
      "currencyCode": "HUF"
    },
    {
      "name": "Iceland",
      "slug": "iceland",
      "code": "IS",
      "currencyCode": "ISK"
    },
    {
      "name": "India",
      "slug": "india",
      "code": "IN",
      "currencyCode": "INR"
    },
    {
      "name": "Indonesia",
      "slug": "indonesia",
      "code": "ID",
      "currencyCode": "IDR"
    },
    {
      "name": "Iraq",
      "slug": "iraq",
      "code": "IQ",
      "currencyCode": "IQD"
    },
    {
      "name": "Ireland",
      "slug": "ireland",
      "code": "IE",
      "currencyCode": "EUR"
    },
    {
      "name": "Israel",
      "slug": "israel",
      "code": "IL",
      "currencyCode": "ILS"
    },
    {
      "name": "Italy",
      "slug": "italy",
      "code": "IT",
      "currencyCode": "EUR"
    },
    {
      "name": "Jamaica",
      "slug": "jamaica",
      "code": "JM",
      "currencyCode": "JMD"
    },
    {
      "name": "Japan",
      "slug": "japan",
      "code": "JP",
      "currencyCode": "JPY"
    },
    {
      "name": "Jordan",
      "slug": "jordan",
      "code": "JO",
      "currencyCode": "JOD"
    },
    {
      "name": "Kazakhstan",
      "slug": "kazakhstan",
      "code": "KZ",
      "currencyCode": "KZT"
    },
    {
      "name": "Kuwait",
      "slug": "kuwait",
      "code": "KW",
      "currencyCode": "KWD"
    },
    {
      "name": "Latvia",
      "slug": "latvia",
      "code": "LV",
      "currencyCode": "EUR"
    },
    {
      "name": "Lebanon",
      "slug": "lebanon",
      "code": "LB",
      "currencyCode": "LBP"
    },
    {
      "name": "Lithuania",
      "slug": "lithuania",
      "code": "LT",
      "currencyCode": "EUR"
    },
    {
      "name": "Malaysia",
      "slug": "malaysia",
      "code": "MY",
      "currencyCode": "MYR"
    },
    {
      "name": "Malta",
      "slug": "malta",
      "code": "MT",
      "currencyCode": "EUR"
    },
    {
      "name": "Mexico",
      "slug": "mexico",
      "code": "MX",
      "currencyCode": "MXN"
    },
    {
      "name": "Montenegro",
      "slug": "montenegro",
      "code": "ME",
      "currencyCode": "EUR"
    },
    {
      "name": "Netherlands",
      "slug": "netherlands",
      "code": "NL",
      "currencyCode": "EUR"
    },
    {
      "name": "New Zealand",
      "slug": "new-zealand",
      "code": "NZ",
      "currencyCode": "NZD"
    },
    {
      "name": "Norway",
      "slug": "norway",
      "code": "NO",
      "currencyCode": "NOK"
    },
    {
      "name": "Oman",
      "slug": "oman",
      "code": "OM",
      "currencyCode": "OMR"
    },
    {
      "name": "Pakistan",
      "slug": "pakistan",
      "code": "PK",
      "currencyCode": "PKR"
    },
    {
      "name": "Palestine",
      "slug": "palestine",
      "code": "PS",
      "currencyCode": "ILS"
    },
    {
      "name": "Peru",
      "slug": "peru",
      "code": "PE",
      "currencyCode": "PEN"
    },
    {
      "name": "Philippines",
      "slug": "philippines",
      "code": "PH",
      "currencyCode": "PHP"
    },
    {
      "name": "Poland",
      "slug": "poland",
      "code": "PL",
      "currencyCode": "PLN"
    },
    {
      "name": "Portugal",
      "slug": "portugal",
      "code": "PT",
      "currencyCode": "EUR"
    },
    {
      "name": "Qatar",
      "slug": "qatar",
      "code": "QA",
      "currencyCode": "QAR"
    },
    {
      "name": "Romania",
      "slug": "romania",
      "code": "RO",
      "currencyCode": "RON"
    },
    {
      "name": "Russia",
      "slug": "russia",
      "code": "RU",
      "currencyCode": "RUB"
    },
    {
      "name": "Saudi Arabia",
      "slug": "saudi-arabia",
      "code": "SA",
      "currencyCode": "SAR"
    },
    {
      "name": "Serbia",
      "slug": "serbia",
      "code": "RS",
      "currencyCode": "RSD"
    },
    {
      "name": "Singapore",
      "slug": "singapore",
      "code": "SG",
      "currencyCode": "SGD"
    },
    {
      "name": "Slovakia",
      "slug": "slovakia",
      "code": "SK",
      "currencyCode": "EUR"
    },
    {
      "name": "Slovenia",
      "slug": "slovenia",
      "code": "SI",
      "currencyCode": "EUR"
    },
    {
      "name": "South Korea",
      "slug": "south-korea",
      "code": "KR",
      "currencyCode": "KRW"
    },
    {
      "name": "Spain",
      "slug": "spain",
      "code": "ES",
      "currencyCode": "EUR"
    },
    {
      "name": "Sri Lanka",
      "slug": "sri-lanka",
      "code": "LK",
      "currencyCode": "LKR"
    },
    {
      "name": "Sweden",
      "slug": "sweden",
      "code": "SE",
      "currencyCode": "SEK"
    },
    {
      "name": "Switzerland",
      "slug": "switzerland",
      "code": "CH",
      "currencyCode": "CHF"
    },
    {
      "name": "Taiwan",
      "slug": "taiwan",
      "code": "TW",
      "currencyCode": "TWD"
    },
    {
      "name": "Thailand",
      "slug": "thailand",
      "code": "TH",
      "currencyCode": "THB"
    },
    {
      "name": "Turkey",
      "slug": "turkey",
      "code": "TR",
      "currencyCode": "TRY"
    },
    {
      "name": "Ukraine",
      "slug": "ukraine",
      "code": "UA",
      "currencyCode": "UAH"
    },
    {
      "name": "United Kingdom",
      "slug": "united-kingdom",
      "code": "GB",
      "currencyCode": "GBP"
    },
    {
      "name": "United States",
      "slug": "united-states",
      "code": "US",
      "currencyCode": "USD"
    },
    {
      "name": "Venezuela",
      "slug": "venezuela",
      "code": "VE",
      "currencyCode": "VES"
    },
    {
      "name": "Vietnam",
      "slug": "vietnam",
      "code": "VN",
      "currencyCode": "VND"
    }
  ]
}

export default countries;

export const getCountryCode = (slug) => {
  return [...countries.global, ...countries.africa].find((country) => country.slug === slug)?.code;
};