// Timezone data with countries and popular cities
const timezones = [
    { id: 1, name: 'Samoa', cities: ['Apia'], offset: -11, flag: '🇼🇸' },
    { id: 2, name: 'Hawaii', cities: ['Honolulu', 'Hilo'], offset: -10, flag: '🇺🇸' },
    { id: 3, name: 'Alaska', cities: ['Anchorage', 'Fairbanks'], offset: -9, flag: '🇺🇸' },
    { id: 4, name: 'Pacific', cities: ['Los Angeles', 'Seattle', 'Vancouver'], offset: -8, flag: '🇺🇸' },
    { id: 5, name: 'Mountain', cities: ['Denver', 'Phoenix', 'Calgary'], offset: -7, flag: '🇺🇸' },
    { id: 6, name: 'Central', cities: ['Chicago', 'Mexico City', 'Winnipeg'], offset: -6, flag: '🇺🇸' },
    { id: 7, name: 'Eastern', cities: ['New York', 'Toronto', 'Miami'], offset: -5, flag: '🇺🇸' },
    { id: 8, name: 'Atlantic', cities: ['Halifax', 'San Juan'], offset: -4, flag: '🇨🇦' },
    { id: 9, name: 'Newfoundland', cities: ['St. John\'s'], offset: -3.5, flag: '🇨🇦' },
    { id: 10, name: 'Brazil', cities: ['São Paulo', 'Rio de Janeiro', 'Brasília'], offset: -3, flag: '🇧🇷' },
    { id: 11, name: 'Cape Verde', cities: ['Praia'], offset: -1, flag: '🇨🇻' },
    { id: 12, name: 'UTC', cities: ['Coordinated Universal Time'], offset: 0, flag: '🌐' },
    { id: 13, name: 'London', cities: ['London', 'Dublin', 'Lisbon'], offset: 0, flag: '🇬🇧' },
    { id: 14, name: 'Central Europe', cities: ['Paris', 'Berlin', 'Rome', 'Madrid'], offset: 1, flag: '🇪🇺' },
    { id: 15, name: 'Eastern Europe', cities: ['Athens', 'Helsinki', 'Cairo'], offset: 2, flag: '🇪🇺' },
    { id: 16, name: 'Moscow', cities: ['Moscow', 'Istanbul', 'Riyadh'], offset: 3, flag: '🇷🇺' },
    { id: 17, name: 'Dubai', cities: ['Dubai', 'Abu Dhabi', 'Baku'], offset: 4, flag: '🇦🇪' },
    { id: 18, name: 'Pakistan', cities: ['Karachi', 'Islamabad'], offset: 5, flag: '🇵🇰' },
    { id: 19, name: 'India', cities: ['New Delhi', 'Mumbai', 'Kolkata'], offset: 5.5, flag: '🇮🇳' },
    { id: 20, name: 'Bangladesh', cities: ['Dhaka', 'Chittagong'], offset: 6, flag: '🇧🇩' },
    { id: 21, name: 'Thailand', cities: ['Bangkok', 'Hanoi', 'Jakarta'], offset: 7, flag: '🇹🇭' },
    { id: 22, name: 'China', cities: ['Beijing', 'Shanghai', 'Hong Kong'], offset: 8, flag: '🇨🇳' },
    { id: 23, name: 'Japan', cities: ['Tokyo', 'Osaka', 'Seoul'], offset: 9, flag: '🇯🇵' },
    { id: 24, name: 'Australia Eastern', cities: ['Sydney', 'Melbourne', 'Brisbane'], offset: 10, flag: '🇦🇺' },
    { id: 25, name: 'New Zealand', cities: ['Auckland', 'Wellington'], offset: 12, flag: '🇳🇿' }
];

// Country data for search (expanded)


const countries = [
    { id: 1, name: 'Afghanistan', timezones: [
        { name: 'Afghanistan Time', cities: ['Kabul'], offset: 4.5 }
    ]},
    { id: 2, name: 'Albania', timezones: [
        { name: 'Central European Time', cities: ['Tirana'], offset: 1 }
    ]},
    { id: 3, name: 'Algeria', timezones: [
        { name: 'Central European Time', cities: ['Algiers'], offset: 1 }
    ]},
    { id: 4, name: 'Andorra', timezones: [
        { name: 'Central European Time', cities: ['Andorra la Vella'], offset: 1 }
    ]},
    { id: 5, name: 'Angola', timezones: [
        { name: 'West Africa Time', cities: ['Luanda'], offset: 1 }
    ]},
    { id: 6, name: 'Antigua and Barbuda', timezones: [
        { name: 'Atlantic Standard Time', cities: ['St. John\'s'], offset: -4 }
    ]},
    { id: 7, name: 'Argentina', timezones: [
        { name: 'Argentina Time', cities: ['Buenos Aires'], offset: -3 }
    ]},
    { id: 8, name: 'Armenia', timezones: [
        { name: 'Armenia Time', cities: ['Yerevan'], offset: 4 }
    ]},
    { id: 9, name: 'Australia', timezones: [
        { name: 'Australian Western Standard Time', cities: ['Perth'], offset: 8 },
        { name: 'Australian Central Standard Time', cities: ['Darwin'], offset: 9.5 },
        { name: 'Australian Eastern Standard Time', cities: ['Sydney', 'Melbourne', 'Brisbane'], offset: 10 },
        { name: 'Lord Howe Standard Time', cities: ['Lord Howe Island'], offset: 10.5 }
    ]},
    { id: 10, name: 'Austria', timezones: [
        { name: 'Central European Time', cities: ['Vienna'], offset: 1 }
    ]},
    { id: 11, name: 'Azerbaijan', timezones: [
        { name: 'Azerbaijan Time', cities: ['Baku'], offset: 4 }
    ]},
    { id: 12, name: 'Bahamas', timezones: [
        { name: 'Eastern Standard Time', cities: ['Nassau'], offset: -5 }
    ]},
    { id: 13, name: 'Bahrain', timezones: [
        { name: 'Arabia Standard Time', cities: ['Manama'], offset: 3 }
    ]},
    { id: 14, name: 'Bangladesh', timezones: [
        { name: 'Bangladesh Standard Time', cities: ['Dhaka'], offset: 6 }
    ]},
    { id: 15, name: 'Barbados', timezones: [
        { name: 'Atlantic Standard Time', cities: ['Bridgetown'], offset: -4 }
    ]},
    { id: 16, name: 'Belarus', timezones: [
        { name: 'Moscow Time', cities: ['Minsk'], offset: 3 }
    ]},
    { id: 17, name: 'Belgium', timezones: [
        { name: 'Central European Time', cities: ['Brussels'], offset: 1 }
    ]},
    { id: 18, name: 'Belize', timezones: [
        { name: 'Central Standard Time', cities: ['Belmopan'], offset: -6 }
    ]},
    { id: 19, name: 'Benin', timezones: [
        { name: 'West Africa Time', cities: ['Porto-Novo'], offset: 1 }
    ]},
    { id: 20, name: 'Bhutan', timezones: [
        { name: 'Bhutan Time', cities: ['Thimphu'], offset: 6 }
    ]},
    { id: 21, name: 'Bolivia', timezones: [
        { name: 'Bolivia Time', cities: ['La Paz'], offset: -4 }
    ]},
    { id: 22, name: 'Bosnia and Herzegovina', timezones: [
        { name: 'Central European Time', cities: ['Sarajevo'], offset: 1 }
    ]},
    { id: 23, name: 'Botswana', timezones: [
        { name: 'Central Africa Time', cities: ['Gaborone'], offset: 2 }
    ]},
    { id: 24, name: 'Brazil', timezones: [
        { name: 'Acre Time', cities: ['Rio Branco'], offset: -5 },
        { name: 'Amazonas Time', cities: ['Manaus'], offset: -4 },
        { name: 'Brasilia Time', cities: ['Brasília', 'São Paulo', 'Rio de Janeiro'], offset: -3 },
        { name: 'Fernando de Noronha Time', cities: ['Fernando de Noronha'], offset: -2 }
    ]},
    { id: 25, name: 'Brunei', timezones: [
        { name: 'Brunei Darussalam Time', cities: ['Bandar Seri Begawan'], offset: 8 }
    ]},
    { id: 26, name: 'Bulgaria', timezones: [
        { name: 'Eastern European Time', cities: ['Sofia'], offset: 2 }
    ]},
    { id: 27, name: 'Burkina Faso', timezones: [
        { name: 'Greenwich Mean Time', cities: ['Ouagadougou'], offset: 0 }
    ]},
    { id: 28, name: 'Burundi', timezones: [
        { name: 'Central Africa Time', cities: ['Gitega'], offset: 2 }
    ]},
    { id: 29, name: 'Cabo Verde', timezones: [
        { name: 'Cape Verde Time', cities: ['Praia'], offset: -1 }
    ]},
    { id: 30, name: 'Cambodia', timezones: [
        { name: 'Indochina Time', cities: ['Phnom Penh'], offset: 7 }
    ]},
    { id: 31, name: 'Cameroon', timezones: [
        { name: 'West Africa Time', cities: ['Yaoundé'], offset: 1 }
    ]},
    { id: 32, name: 'Canada', timezones: [
        { name: 'Pacific Standard Time', cities: ['Vancouver'], offset: -8 },
        { name: 'Mountain Standard Time', cities: ['Edmonton'], offset: -7 },
        { name: 'Central Standard Time', cities: ['Winnipeg'], offset: -6 },
        { name: 'Eastern Standard Time', cities: ['Toronto'], offset: -5 },
        { name: 'Atlantic Standard Time', cities: ['Halifax'], offset: -4 },
        { name: 'Newfoundland Standard Time', cities: ['St. John’s'], offset: -3.5 }
    ]},
    { id: 33, name: 'Central African Republic', timezones: [
        { name: 'West Africa Time', cities: ['Bangui'], offset: 1 }
    ]},
    { id: 34, name: 'Chad', timezones: [
        { name: 'West Africa Time', cities: ['N\'Djamena'], offset: 1 }
    ]},
    { id: 35, name: 'Chile', timezones: [
        { name: 'Chile Standard Time', cities: ['Santiago'], offset: -4 },
        { name: 'Easter Island Time', cities: ['Hanga Roa'], offset: -6 }
    ]},
    { id: 36, name: 'China', timezones: [
        { name: 'China Standard Time', cities: ['Beijing'], offset: 8 }
    ]},
    { id: 37, name: 'Colombia', timezones: [
        { name: 'Colombia Time', cities: ['Bogotá'], offset: -5 }
    ]},
    { id: 38, name: 'Comoros', timezones: [
        { name: 'East Africa Time', cities: ['Moroni'], offset: 3 }
    ]},
    { id: 39, name: 'Congo (Republic of the Congo)', timezones: [
        { name: 'West Africa Time', cities: ['Brazzaville'], offset: 1 }
    ]},
    { id: 40, name: 'Costa Rica', timezones: [
        { name: 'Central Standard Time', cities: ['San José'], offset: -6 }
    ]},
    { id: 41, name: 'Croatia', timezones: [
        { name: 'Central European Time', cities: ['Zagreb'], offset: 1 }
    ]},
    { id: 42, name: 'Cuba', timezones: [
        { name: 'Cuba Standard Time', cities: ['Havana'], offset: -5 }
    ]},
    { id: 43, name: 'Cyprus', timezones: [
        { name: 'Eastern European Time', cities: ['Nicosia'], offset: 2 }
    ]},
    { id: 44, name: 'Czech Republic', timezones: [
        { name: 'Central European Time', cities: ['Prague'], offset: 1 }
    ]},
    { id: 45, name: 'Democratic Republic of the Congo', timezones: [
        { name: 'West Africa Time', cities: ['Kinshasa'], offset: 1 },
        { name: 'Central Africa Time', cities: ['Lubumbashi'], offset: 2 }
    ]},
    { id: 46, name: 'Denmark', timezones: [
        { name: 'Central European Time', cities: ['Copenhagen'], offset: 1 }
    ]},
    { id: 47, name: 'Djibouti', timezones: [
        { name: 'East Africa Time', cities: ['Djibouti'], offset: 3 }
    ]},
    { id: 48, name: 'Dominica', timezones: [
        { name: 'Atlantic Standard Time', cities: ['Roseau'], offset: -4 }
    ]},
    { id: 49, name: 'Dominican Republic', timezones: [
        { name: 'Atlantic Standard Time', cities: ['Santo Domingo'], offset: -4 }
    ]},
    { id: 50, name: 'Ecuador', timezones: [
        { name: 'Ecuador Time', cities: ['Quito'], offset: -5 },
        { name: 'Galápagos Time', cities: ['Puerto Ayora'], offset: -6 }
    ]},
    { id: 51, name: 'Egypt', timezones: [
        { name: 'Eastern European Time', cities: ['Cairo'], offset: 2 }
    ]},
    { id: 52, name: 'El Salvador', timezones: [
        { name: 'Central Standard Time', cities: ['San Salvador'], offset: -6 }
    ]},
    { id: 53, name: 'Equatorial Guinea', timezones: [
        { name: 'West Africa Time', cities: ['Malabo'], offset: 1 }
    ]},
    { id: 54, name: 'Eritrea', timezones: [
        { name: 'East Africa Time', cities: ['Asmara'], offset: 3 }
    ]},
    { id: 55, name: 'Estonia', timezones: [
        { name: 'Eastern European Time', cities: ['Tallinn'], offset: 2 }
    ]},
    { id: 56, name: 'Eswatini', timezones: [
        { name: 'Central Africa Time', cities: ['Mbabane'], offset: 2 }
    ]},
    { id: 57, name: 'Ethiopia', timezones: [
        { name: 'East Africa Time', cities: ['Addis Ababa'], offset: 3 }
    ]},
    { id: 58, name: 'Fiji', timezones: [
        { name: 'Fiji Time', cities: ['Suva'], offset: 12 }
    ]},
    { id: 59, name: 'Finland', timezones: [
        { name: 'Eastern European Time', cities: ['Helsinki'], offset: 2 }
    ]},
    { id: 60, name: 'France', timezones: [
        { name: 'Central European Time', cities: ['Paris'], offset: 1 }
    ]},
    { id: 61, name: 'Gabon', timezones: [
        { name: 'West Africa Time', cities: ['Libreville'], offset: 1 }
    ]},
    { id: 62, name: 'Gambia', timezones: [
        { name: 'Greenwich Mean Time', cities: ['Banjul'], offset: 0 }
    ]},
    { id: 63, name: 'Georgia', timezones: [
        { name: 'Georgia Time', cities: ['Tbilisi'], offset: 4 }
    ]},
    { id: 64, name: 'Germany', timezones: [
        { name: 'Central European Time', cities: ['Berlin'], offset: 1 }
    ]},
    { id: 65, name: 'Ghana', timezones: [
        { name: 'Greenwich Mean Time', cities: ['Accra'], offset: 0 }
    ]},
    { id: 66, name: 'Greece', timezones: [
        { name: 'Eastern European Time', cities: ['Athens'], offset: 2 }
    ]},
    { id: 67, name: 'Grenada', timezones: [
        { name: 'Atlantic Standard Time', cities: ['St. George\'s'], offset: -4 }
    ]},
    { id: 68, name: 'Guatemala', timezones: [
        { name: 'Central Standard Time', cities: ['Guatemala City'], offset: -6 }
    ]},
    { id: 69, name: 'Guinea', timezones: [
        { name: 'Greenwich Mean Time', cities: ['Conakry'], offset: 0 }
    ]},
    { id: 70, name: 'Guinea-Bissau', timezones: [
        { name: 'Greenwich Mean Time', cities: ['Bissau'], offset: 0 }
    ]},
    { id: 71, name: 'Guyana', timezones: [
        { name: 'Guyana Time', cities: ['Georgetown'], offset: -4 }
    ]},
    { id: 72, name: 'Haiti', timezones: [
        { name: 'Eastern Standard Time', cities: ['Port-au-Prince'], offset: -5 }
    ]},
    { id: 73, name: 'Honduras', timezones: [
        { name: 'Central Standard Time', cities: ['Tegucigalpa'], offset: -6 }
    ]},
    { id: 74, name: 'Hungary', timezones: [
        { name: 'Central European Time', cities: ['Budapest'], offset: 1 }
    ]},
    { id: 75, name: 'Iceland', timezones: [
        { name: 'Greenwich Mean Time', cities: ['Reykjavík'], offset: 0 }
    ]},
    { id: 76, name: 'India', timezones: [
        { name: 'Indian Standard Time', cities: ['New Delhi', 'Mumbai', 'Kolkata'], offset: 5.5 }
    ]},
    { id: 77, name: 'Indonesia', timezones: [
        { name: 'Western Indonesia Time', cities: ['Jakarta'], offset: 7 },
        { name: 'Central Indonesia Time', cities: ['Makassar'], offset: 8 },
        { name: 'Eastern Indonesia Time', cities: ['Jayapura'], offset: 9 }
    ]},
    { id: 78, name: 'Iran', timezones: [
        { name: 'Iran Standard Time', cities: ['Tehran'], offset: 3.5 }
    ]},
    { id: 79, name: 'Iraq', timezones: [
        { name: 'Arabia Standard Time', cities: ['Baghdad'], offset: 3 }
    ]},
    { id: 80, name: 'Ireland', timezones: [
        { name: 'Greenwich Mean Time', cities: ['Dublin'], offset: 0 }
    ]},
    { id: 81, name: 'Israel', timezones: [
        { name: 'Israel Standard Time', cities: ['Jerusalem'], offset: 2 }
    ]},
    { id: 82, name: 'Italy', timezones: [
        { name: 'Central European Time', cities: ['Rome'], offset: 1 }
    ]},
    { id: 83, name: 'Jamaica', timezones: [
        { name: 'Eastern Standard Time', cities: ['Kingston'], offset: -5 }
    ]},
    { id: 84, name: 'Japan', timezones: [
        { name: 'Japan Standard Time', cities: ['Tokyo'], offset: 9 }
    ]},
    { id: 85, name: 'Jordan', timezones: [
        { name: 'Eastern European Time', cities: ['Amman'], offset: 2 }
    ]},
    { id: 86, name: 'Kazakhstan', timezones: [
        { name: 'West Kazakhstan Time', cities: ['Aktobe'], offset: 5 },
        { name: 'East Kazakhstan Time', cities: ['Almaty'], offset: 6 }
    ]},
    { id: 87, name: 'Kenya', timezones: [
        { name: 'East Africa Time', cities: ['Nairobi'], offset: 3 }
    ]},
    { id: 88, name: 'Kiribati', timezones: [
        { name: 'Gilbert Islands Time', cities: ['Tarawa'], offset: 12 },
        { name: 'Phoenix Islands Time', cities: ['Kanton'], offset: 13 },
        { name: 'Line Islands Time', cities: ['Kiritimati'], offset: 14 }
    ]},
    { id: 89, name: 'Kuwait', timezones: [
        { name: 'Arabia Standard Time', cities: ['Kuwait City'], offset: 3 }
    ]},
    { id: 90, name: 'Kyrgyzstan', timezones: [
        { name: 'Kyrgyzstan Time', cities: ['Bishkek'], offset: 6 }
    ]},
    { id: 91, name: 'Laos', timezones: [
        { name: 'Indochina Time', cities: ['Vientiane'], offset: 7 }
    ]},
    { id: 92, name: 'Latvia', timezones: [
        { name: 'Eastern European Time', cities: ['Riga'], offset: 2 }
    ]},
    { id: 93, name: 'Lebanon', timezones: [
        { name: 'Eastern European Time', cities: ['Beirut'], offset: 2 }
    ]},
    { id: 94, name: 'Lesotho', timezones: [
        { name: 'Central Africa Time', cities: ['Maseru'], offset: 2 }
    ]},
    { id: 95, name: 'Liberia', timezones: [
        { name: 'Greenwich Mean Time', cities: ['Monrovia'], offset: 0 }
    ]},
    { id: 96, name: 'Libya', timezones: [
        { name: 'Eastern European Time', cities: ['Tripoli'], offset: 2 }
    ]},
    { id: 97, name: 'Liechtenstein', timezones: [
        { name: 'Central European Time', cities: ['Vaduz'], offset: 1 }
    ]},
    { id: 98, name: 'Lithuania', timezones: [
        { name: 'Eastern European Time', cities: ['Vilnius'], offset: 2 }
    ]},
    { id: 99, name: 'Luxembourg', timezones: [
        { name: 'Central European Time', cities: ['Luxembourg City'], offset: 1 }
    ]},
    { id: 100, name: 'Madagascar', timezones: [
        { name: 'East Africa Time', cities: ['Antananarivo'], offset: 3 }
    ]},
    { id: 101, name: 'Malawi', timezones: [
        { name: 'Central Africa Time', cities: ['Lilongwe'], offset: 2 }
    ]},
    { id: 102, name: 'Malaysia', timezones: [
        { name: 'Malaysia Time', cities: ['Kuala Lumpur'], offset: 8 }
    ]},
    { id: 103, name: 'Maldives', timezones: [
        { name: 'Maldives Time', cities: ['Malé'], offset: 5 }
    ]},
    { id: 104, name: 'Mali', timezones: [
        { name: 'Greenwich Mean Time', cities: ['Bamako'], offset: 0 }
    ]},
    { id: 105, name: 'Malta', timezones: [
        { name: 'Central European Time', cities: ['Valletta'], offset: 1 }
    ]},
    { id: 106, name: 'Marshall Islands', timezones: [
        { name: 'Marshall Islands Time', cities: ['Majuro'], offset: 12 }
    ]},
    { id: 107, name: 'Mauritania', timezones: [
        { name: 'Greenwich Mean Time', cities: ['Nouakchott'], offset: 0 }
    ]},
    { id: 108, name: 'Mauritius', timezones: [
        { name: 'Mauritius Time', cities: ['Port Louis'], offset: 4 }
    ]},
    { id: 109, name: 'Mexico', timezones: [
        { name: 'Pacific Standard Time', cities: ['Tijuana'], offset: -8 },
        { name: 'Mountain Standard Time', cities: ['Hermosillo'], offset: -7 },
        { name: 'Central Standard Time', cities: ['Mexico City'], offset: -6 },
        { name: 'Eastern Standard Time', cities: ['Cancún'], offset: -5 }
    ]},
    { id: 110, name: 'Micronesia', timezones: [
        { name: 'Chuuk Time', cities: ['Weno'], offset: 10 },
        { name: 'Pohnpei Time', cities: ['Palikir'], offset: 11 }
    ]},
    { id: 111, name: 'Moldova', timezones: [
        { name: 'Eastern European Time', cities: ['Chișinău'], offset: 2 }
    ]},
    { id: 112, name: 'Monaco', timezones: [
        { name: 'Central European Time', cities: ['Monaco'], offset: 1 }
    ]},
    { id: 113, name: 'Mongolia', timezones: [
        { name: 'Western Mongolia Time', cities: ['Hovd'], offset: 7 },
        { name: 'Eastern Mongolia Time', cities: ['Ulaanbaatar'], offset: 8 }
    ]},
    { id: 114, name: 'Montenegro', timezones: [
        { name: 'Central European Time', cities: ['Podgorica'], offset: 1 }
    ]},
    { id: 115, name: 'Morocco', timezones: [
        { name: 'Western European Time', cities: ['Rabat'], offset: 1 }
    ]},
    { id: 116, name: 'Mozambique', timezones: [
        { name: 'Central Africa Time', cities: ['Maputo'], offset: 2 }
    ]},
    { id: 117, name: 'Myanmar', timezones: [
        { name: 'Myanmar Time', cities: ['Yangon'], offset: 6.5 }
    ]},
    { id: 118, name: 'Namibia', timezones: [
        { name: 'Central Africa Time', cities: ['Windhoek'], offset: 2 }
    ]},
    { id: 119, name: 'Nauru', timezones: [
        { name: 'Nauru Time', cities: ['Yaren'], offset: 12 }
    ]},
    { id: 120, name: 'Nepal', timezones: [
        { name: 'Nepal Time', cities: ['Kathmandu'], offset: 5.75 }
    ]},
    { id: 121, name: 'Netherlands', timezones: [
        { name: 'Central European Time', cities: ['Amsterdam'], offset: 1 }
    ]},
    { id: 122, name: 'New Zealand', timezones: [
        { name: 'New Zealand Standard Time', cities: ['Wellington'], offset: 12 },
        { name: 'Chatham Islands Standard Time', cities: ['Waitangi'], offset: 12.75 }
    ]},
    { id: 123, name: 'Nicaragua', timezones: [
        { name: 'Central Standard Time', cities: ['Managua'], offset: -6 }
    ]},
    { id: 124, name: 'Niger', timezones: [
        { name: 'West Africa Time', cities: ['Niamey'], offset: 1 }
    ]},
    { id: 125, name: 'Nigeria', timezones: [
        { name: 'West Africa Time', cities: ['Abuja'], offset: 1 }
    ]},
    { id: 126, name: 'North Korea', timezones: [
        { name: 'Korea Standard Time', cities: ['Pyongyang'], offset: 9 }
    ]},
    { id: 127, name: 'North Macedonia', timezones: [
        { name: 'Central European Time', cities: ['Skopje'], offset: 1 }
    ]},
    { id: 128, name: 'Norway', timezones: [
        { name: 'Central European Time', cities: ['Oslo'], offset: 1 }
    ]},
    { id: 129, name: 'Oman', timezones: [
        { name: 'Gulf Standard Time', cities: ['Muscat'], offset: 4 }
    ]},
    { id: 130, name: 'Pakistan', timezones: [
        { name: 'Pakistan Standard Time', cities: ['Islamabad'], offset: 5 }
    ]},
    { id: 131, name: 'Palau', timezones: [
        { name: 'Palau Time', cities: ['Ngerulmud'], offset: 9 }
    ]},
    { id: 132, name: 'Palestine', timezones: [
        { name: 'Eastern European Time', cities: ['Ramallah'], offset: 2 }
    ]},
    { id: 133, name: 'Panama', timezones: [
        { name: 'Eastern Standard Time', cities: ['Panama City'], offset: -5 }
    ]},
    { id: 134, name: 'Papua New Guinea', timezones: [
        { name: 'Papua New Guinea Time', cities: ['Port Moresby'], offset: 10 },
        { name: 'Bougainville Time', cities: ['Arawa'], offset: 11 }
    ]},
    { id: 135, name: 'Paraguay', timezones: [
        { name: 'Paraguay Time', cities: ['Asunción'], offset: -4 }
    ]},
    { id: 136, name: 'Peru', timezones: [
        { name: 'Peru Time', cities: ['Lima'], offset: -5 }
    ]},
    { id: 137, name: 'Philippines', timezones: [
        { name: 'Philippine Time', cities: ['Manila'], offset: 8 }
    ]},
    { id: 138, name: 'Poland', timezones: [
        { name: 'Central European Time', cities: ['Warsaw'], offset: 1 }
    ]},
    { id: 139, name: 'Portugal', timezones: [
        { name: 'Western European Time', cities: ['Lisbon'], offset: 0 },
        { name: 'Azores Time', cities: ['Ponta Delgada'], offset: -1 }
    ]},
    { id: 140, name: 'Qatar', timezones: [
        { name: 'Arabia Standard Time', cities: ['Doha'], offset: 3 }
    ]},
    { id: 141, name: 'Romania', timezones: [
        { name: 'Eastern European Time', cities: ['Bucharest'], offset: 2 }
    ]},
    { id: 142, name: 'Russia', timezones: [
        { name: 'Kaliningrad Time', cities: ['Kaliningrad'], offset: 2 },
        { name: 'Moscow Time', cities: ['Moscow'], offset: 3 },
        { name: 'Yekaterinburg Time', cities: ['Yekaterinburg'], offset: 5 },
        { name: 'Omsk Time', cities: ['Omsk'], offset: 6 },
        { name: 'Krasnoyarsk Time', cities: ['Krasnoyarsk'], offset: 7 },
        { name: 'Irkutsk Time', cities: ['Irkutsk'], offset: 8 },
        { name: 'Yakutsk Time', cities: ['Yakutsk'], offset: 9 },
        { name: 'Vladivostok Time', cities: ['Vladivostok'], offset: 10 },
        { name: 'Magadan Time', cities: ['Magadan'], offset: 11 },
        { name: 'Kamchatka Time', cities: ['Petropavlovsk-Kamchatsky'], offset: 12 }
    ]},
    { id: 143, name: 'Rwanda', timezones: [
        { name: 'Central Africa Time', cities: ['Kigali'], offset: 2 }
    ]},
    { id: 144, name: 'Saint Kitts and Nevis', timezones: [
        { name: 'Atlantic Standard Time', cities: ['Basseterre'], offset: -4 }
    ]},
    { id: 145, name: 'Saint Lucia', timezones: [
        { name: 'Atlantic Standard Time', cities: ['Castries'], offset: -4 }
    ]},
    { id: 146, name: 'Saint Vincent and the Grenadines', timezones: [
        { name: 'Atlantic Standard Time', cities: ['Kingstown'], offset: -4 }
    ]},
    { id: 147, name: 'Samoa', timezones: [
        { name: 'Samoa Standard Time', cities: ['Apia'], offset: 13 }
    ]},
    { id: 148, name: 'San Marino', timezones: [
        { name: 'Central European Time', cities: ['San Marino'], offset: 1 }
    ]},
    { id: 149, name: 'São Tomé and Príncipe', timezones: [
        { name: 'Greenwich Mean Time', cities: ['São Tomé'], offset: 0 }
    ]},
    { id: 150, name: 'Saudi Arabia', timezones: [
        { name: 'Arabia Standard Time', cities: ['Riyadh'], offset: 3 }
    ]},
    { id: 151, name: 'Senegal', timezones: [
        { name: 'Greenwich Mean Time', cities: ['Dakar'], offset: 0 }
    ]},
    { id: 152, name: 'Serbia', timezones: [
        { name: 'Central European Time', cities: ['Belgrade'], offset: 1 }
    ]},
    { id: 153, name: 'Seychelles', timezones: [
        { name: 'Seychelles Time', cities: ['Victoria'], offset: 4 }
    ]},
    { id: 154, name: 'Sierra Leone', timezones: [
        { name: 'Greenwich Mean Time', cities: ['Freetown'], offset: 0 }
    ]},
    { id: 155, name: 'Singapore', timezones: [
        { name: 'Singapore Standard Time', cities: ['Singapore'], offset: 8 }
    ]},
    { id: 156, name: 'Slovakia', timezones: [
        { name: 'Central European Time', cities: ['Bratislava'], offset: 1 }
    ]},
    { id: 157, name: 'Slovenia', timezones: [
        { name: 'Central European Time', cities: ['Ljubljana'], offset: 1 }
    ]},
    { id: 158, name: 'Solomon Islands', timezones: [
        { name: 'Solomon Islands Time', cities: ['Honiara'], offset: 11 }
    ]},
    { id: 159, name: 'Somalia', timezones: [
        { name: 'East Africa Time', cities: ['Mogadishu'], offset: 3 }
    ]},
    { id: 160, name: 'South Africa', timezones: [
        { name: 'South Africa Standard Time', cities: ['Pretoria'], offset: 2 }
    ]},
    { id: 161, name: 'South Korea', timezones: [
        { name: 'Korea Standard Time', cities: ['Seoul'], offset: 9 }
    ]},
    { id: 162, name: 'South Sudan', timezones: [
        { name: 'Central Africa Time', cities: ['Juba'], offset: 2 }
    ]},
    { id: 163, name: 'Spain', timezones: [
        { name: 'Central European Time', cities: ['Madrid'], offset: 1 },
        { name: 'Western European Time', cities: ['Santa Cruz de Tenerife'], offset: 0 }
    ]},
    { id: 164, name: 'Sri Lanka', timezones: [
        { name: 'Sri Lanka Time', cities: ['Colombo'], offset: 5.5 }
    ]},
    { id: 165, name: 'Sudan', timezones: [
        { name: 'Central Africa Time', cities: ['Khartoum'], offset: 2 }
    ]},
    { id: 166, name: 'Suriname', timezones: [
        { name: 'Suriname Time', cities: ['Paramaribo'], offset: -3 }
    ]},
    { id: 167, name: 'Sweden', timezones: [
        { name: 'Central European Time', cities: ['Stockholm'], offset: 1 }
    ]},
    { id: 168, name: 'Switzerland', timezones: [
        { name: 'Central European Time', cities: ['Bern'], offset: 1 }
    ]},
    { id: 169, name: 'Syria', timezones: [
        { name: 'Eastern European Time', cities: ['Damascus'], offset: 3 }
    ]},
    { id: 170, name: 'Taiwan', timezones: [
        { name: 'Taiwan Standard Time', cities: ['Taipei'], offset: 8 }
    ]},
    { id: 171, name: 'Tajikistan', timezones: [
        { name: 'Tajikistan Time', cities: ['Dushanbe'], offset: 5 }
    ]},
    { id: 172, name: 'Tanzania', timezones: [
        { name: 'East Africa Time', cities: ['Dodoma'], offset: 3 }
    ]},
    { id: 173, name: 'Thailand', timezones: [
        { name: 'Indochina Time', cities: ['Bangkok'], offset: 7 }
    ]},
    { id: 174, name: 'Timor-Leste', timezones: [
        { name: 'Timor-Leste Time', cities: ['Dili'], offset: 9 }
    ]},
    { id: 175, name: 'Togo', timezones: [
        { name: 'Greenwich Mean Time', cities: ['Lomé'], offset: 0 }
    ]},
    { id: 176, name: 'Tonga', timezones: [
        { name: 'Tonga Time', cities: ['Nuku\'alofa'], offset: 13 }
    ]},
    { id: 177, name: 'Trinidad and Tobago', timezones: [
        { name: 'Atlantic Standard Time', cities: ['Port of Spain'], offset: -4 }
    ]},
    { id: 178, name: 'Tunisia', timezones: [
        { name: 'Central European Time', cities: ['Tunis'], offset: 1 }
    ]},
    { id: 179, name: 'Turkey', timezones: [
        { name: 'Turkey Time', cities: ['Ankara'], offset: 3 }
    ]},
    { id: 180, name: 'Turkmenistan', timezones: [
        { name: 'Turkmenistan Time', cities: ['Ashgabat'], offset: 5 }
    ]},
    { id: 181, name: 'Tuvalu', timezones: [
        { name: 'Tuvalu Time', cities: ['Funafuti'], offset: 12 }
    ]},
    { id: 182, name: 'Uganda', timezones: [
        { name: 'East Africa Time', cities: ['Kampala'], offset: 3 }
    ]},
    { id: 183, name: 'Ukraine', timezones: [
        { name: 'Eastern European Time', cities: ['Kyiv'], offset: 2 }
    ]},
    { id: 184, name: 'United Arab Emirates', timezones: [
        { name: 'Gulf Standard Time', cities: ['Abu Dhabi'], offset: 4 }
    ]},
    { id: 185, name: 'United Kingdom', timezones: [
        { name: 'Greenwich Mean Time', cities: ['London'], offset: 0 }
    ]},
    { id: 186, name: 'United States', timezones: [
        { name: 'Hawaii-Aleutian Standard Time', cities: ['Honolulu'], offset: -10 },
        { name: 'Alaska Standard Time', cities: ['Anchorage'], offset: -9 },
        { name: 'Pacific Standard Time', cities: ['Los Angeles'], offset: -8 },
        { name: 'Mountain Standard Time', cities: ['Denver'], offset: -7 },
        { name: 'Central Standard Time', cities: ['Chicago'], offset: -6 },
        { name: 'Eastern Standard Time', cities: ['New York'], offset: -5 }
    ]},
    { id: 187, name: 'Uruguay', timezones: [
        { name: 'Uruguay Time', cities: ['Montevideo'], offset: -3 }
    ]},
    { id: 188, name: 'Uzbekistan', timezones: [
        { name: 'Uzbekistan Time', cities: ['Tashkent'], offset: 5 }
    ]},
    { id: 189, name: 'Vanuatu', timezones: [
        { name: 'Vanuatu Time', cities: ['Port Vila'], offset: 11 }
    ]},
    { id: 190, name: 'Vatican City', timezones: [
        { name: 'Central European Time', cities: ['Vatican City'], offset: 1 }
    ]},
    { id: 191, name: 'Venezuela', timezones: [
        { name: 'Venezuela Time', cities: ['Caracas'], offset: -4 }
    ]},
    { id: 192, name: 'Vietnam', timezones: [
        { name: 'Indochina Time', cities: ['Hanoi'], offset: 7 }
    ]},
    { id: 193, name: 'Yemen', timezones: [
        { name: 'Arabia Standard Time', cities: ['Sana\'a'], offset: 3 }
    ]},
    { id: 194, name: 'Zambia', timezones: [
        { name: 'Central Africa Time', cities: ['Lusaka'], offset: 2 }
    ]},
    { id: 195, name: 'Zimbabwe', timezones: [
        { name: 'Central Africa Time', cities: ['Harare'], offset: 2 }
    ]}
];





// DOM Elements
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');
const selectedTimezone = document.getElementById('selected-timezone');
const timelineContainer = document.getElementById('timezone-timeline');

// Initialize the app
function init() {
    renderTimeline();
    setupSearchListener();
    updateAllTimes();
    
    // Update times every second
    setInterval(updateAllTimes, 1000);
}

// Render the timeline
function renderTimeline() {
    timelineContainer.innerHTML = '';
    
    timezones.forEach(timezone => {
        const timeInZone = getTimeInTimezone(timezone.offset);
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        timelineItem.setAttribute('data-flag', timezone.flag); // Set flag emoji
        
        const citiesList = timezone.cities.join(', ');
        
        timelineItem.innerHTML = `
            <div class="timeline-content">
                <h3>${timezone.name}</h3>
                <p class="cities">${citiesList}</p>
                <p>${formatOffset(timezone.offset)} hours</p>
                <p class="time-display">${timeInZone.time}</p>
                <p class="date-display">${timeInZone.date}</p>
            </div>
        `;
        
        timelineContainer.appendChild(timelineItem);
    });
}

// Set up search functionality
function setupSearchListener() {
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        
        if (query.length < 2) {
            searchResults.innerHTML = '';
            return;
        }
        
        // Search in countries and cities
        const filteredCountries = countries.filter(country => 
            country.name.toLowerCase().includes(query) ||
            country.timezones.some(tz => 
                tz.cities.some(city => city.toLowerCase().includes(query))
            )
        );
        
        renderSearchResults(filteredCountries, query);
    });
}

// Render search results
function renderSearchResults(results, query) {
    searchResults.innerHTML = '';
    
    if (results.length === 0) {
        searchResults.innerHTML = '<p>No results found</p>';
        return;
    }
    
    results.forEach(country => {
        country.timezones.forEach(timezone => {
            // Filter cities that match the query
            const matchingCities = query.length >= 2 
                ? timezone.cities.filter(city => city.toLowerCase().includes(query))
                : timezone.cities;
            
            // Only show timezone if country matches or has matching cities
            if (country.name.toLowerCase().includes(query) || matchingCities.length > 0) {
                const resultItem = document.createElement('div');
                resultItem.className = 'timezone-item';
                
                // Show matching cities or first city if country matches
                const cityDisplay = matchingCities.length > 0 
                    ? matchingCities.join(', ')
                    : timezone.cities[0] + (timezone.cities.length > 1 ? '...' : '');
                
                resultItem.innerHTML = `
                    <div class="timezone-info">
                        <i class="fas fa-map-marker-alt map-icon"></i>
                        <div class="timezone-details">
                            <h3>${country.name} ${timezone.name}</h3>
                            <p>${cityDisplay}</p>
                        </div>
                    </div>
                    <button class="add-button" data-country="${country.name}" data-timezone="${timezone.name}" data-offset="${timezone.offset}" data-cities="${timezone.cities.join(',')}">
                        <i class="fas fa-plus"></i>
                    </button>
                `;
                
                searchResults.appendChild(resultItem);
            }
        });
    });
    
    // Add event listeners to add buttons
    document.querySelectorAll('.add-button').forEach(button => {
        button.addEventListener('click', (e) => {
            const country = e.currentTarget.getAttribute('data-country');
            const timezone = e.currentTarget.getAttribute('data-timezone');
            const offset = parseFloat(e.currentTarget.getAttribute('data-offset'));
            const cities = e.currentTarget.getAttribute('data-cities').split(',');
            
            addSelectedTimezone(country, timezone, offset, cities);
        });
    });
}

// Add a selected timezone
function addSelectedTimezone(country, timezone, offset, cities) {
    const timeData = getTimeInTimezone(offset);
    const selectedItem = document.createElement('div');
    selectedItem.className = 'selected-item';
    selectedItem.setAttribute('data-offset', offset);
    
    const citiesDisplay = cities.length > 3 ? cities.slice(0, 3).join(', ') + '...' : cities.join(', ');
    
    selectedItem.innerHTML = `
        <h3>${country} ${timezone}</h3>
        <p class="cities-display">${citiesDisplay}</p>
        <div class="time">${timeData.time}</div>
        <div class="date">${timeData.date}</div>
    `;
    
    selectedTimezone.innerHTML = '';
    selectedTimezone.appendChild(selectedItem);
    
    // Clear search
    searchInput.value = '';
    searchResults.innerHTML = '';
}

// Get time in a specific timezone with seconds
function getTimeInTimezone(offset) {
    const now = new Date();
    
    // Get UTC time in milliseconds
    const utcTime = now.getTime() + (now.getTimezoneOffset() * 60000);
    
    // Create new date object for the timezone
    const timezoneDate = new Date(utcTime + (3600000 * offset));
    
    // Format time and date with seconds
    const time = timezoneDate.toLocaleTimeString([], { 
        hour: '2-digit', 
        minute: '2-digit',
        second: '2-digit'
    });
    const date = timezoneDate.toLocaleDateString([], { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
    
    return { time, date };
}

// Format offset for display
function formatOffset(offset) {
    if (offset === 0) return '0';
    return offset > 0 ? `+${offset}` : offset.toString();
}

// Update all displayed times
function updateAllTimes() {
    // Update timeline times
    document.querySelectorAll('.timeline-item').forEach((item, index) => {
        const timezone = timezones[index];
        const timeDisplay = item.querySelector('.time-display');
        const dateDisplay = item.querySelector('.date-display');
        const timeInZone = getTimeInTimezone(timezone.offset);
        
        timeDisplay.textContent = timeInZone.time;
        dateDisplay.textContent = timeInZone.date;
    });
    
    // Update selected timezone if any
    if (selectedTimezone.querySelector('.selected-item')) {
        const timeElement = selectedTimezone.querySelector('.time');
        const dateElement = selectedTimezone.querySelector('.date');
        const offsetAttr = selectedTimezone.querySelector('.selected-item').getAttribute('data-offset');
        
        if (offsetAttr) {
            const offset = parseFloat(offsetAttr);
            const timeData = getTimeInTimezone(offset);
            
            timeElement.textContent = timeData.time;
            dateElement.textContent = timeData.date;
        }
    }
}

// Initialize the app when the DOM is loaded
document.addEventListener('DOMContentLoaded', init);