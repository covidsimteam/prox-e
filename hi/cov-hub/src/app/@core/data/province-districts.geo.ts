export const SUDURPASCHIM = {
  number: 1,
  name: 'Sudurpaschim',
  districts: [
  'Kanchanpur',
  'Kailali',
  'Darchula',
  'Doti',
  'Dadeldhura',
  'Bajhang',
  'Bajura',
  'Baitadi',
  'Achham',
  ],
};

export const KARNALI = {
  number: 2,
  name: 'Karnali',
  districts: [
  'Rukum W',
  'Salyan',
  'Mugu',
  'Kalikot',
  'Jumla',
  'Jajarkot',
  'Humla',
  'Dolpa',
  'Dailekh',
  'Surkhet',
  ],
};

export const PROVINCE_5 = {
  number: 5,
  name: 'Province 5',
  districts: [
    'Pyuthan',
    'Palpa',
    'Nawalparasi W',
    'Kapilbastu',
    'Gulmi',
    'Dang',
    'Bardiya',
    'Rupandehi',
    'Banke',
    'Rukum E',
    'Arghakhanchi',
    'Rolpa',
  ],
};

export const GANDAKI = {
  number: 4,
  name: 'Gandaki',
  districts: [
    'Parbat',
    'Nawalparasi E',
    'Myagdi',
    'Mustang',
    'Manang',
    'Lamjung',
    'Kaski',
    'Gorkha',
    'Tanahu',
    'Baglung',
    'Syangja',
  ],
};

export const BAGMATI = {
  number: 3,
  name: 'Bagmati',
  districts: [
    'Nuwakot',
    'Makawanpur',
    'Lalitpur',
    'Kabhrepalanchok',
    'Kathmandu',
    'Dolakha',
    'Dhading',
    'Chitawan',
    'Bhaktapur',
    'Ramechhap',
    'Rasuwa',
    'Sindhuli',
    'Sindhupalchok',
  ],
};

export const PROVINCE_2 = {
  number: 2,
  name: 'Province 2',
  districts: [
    'Siraha',
    'Sarlahi',
    'Saptari',
    'Rautahat',
    'Parsa',
    'Mahottari',
    'Dhanusha',
    'Bara',
  ],
};

export const PROVINCE_1 = {
  number: 1,
  name: 'Province 1',
  districts: [
    'Sankhuwasabha',
    'Panchthar',
    'Morang',
    'Okhaldhunga',
    'Khotang',
    'Jhapa',
    'Terhathum',
    'Udayapur',
    'Ilam',
    'Taplejung',
    'Dhankuta',
    'Sunsari',
    'Bhojpur',
    'Solukhumbu',
  ],
};

export interface Province {
  number: number;
  name: string;
  districts: string[];
}

export const PROVINCES = [
  PROVINCE_1,
  PROVINCE_2,
  BAGMATI,
  GANDAKI,
  PROVINCE_5,
  KARNALI,
  SUDURPASCHIM,
];
