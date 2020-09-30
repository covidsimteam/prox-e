export enum SUDURPASCHIM_DISTRICTS {
  'Kanchanpur',
  'Kailali',
  'Darchula',
  'Doti',
  'Dadeldhura',
  'Bajhang',
  'Bajura',
  'Baitadi',
  'Achham',
}

export const SUDURPASCHIM = {
  number: 1,
  name: 'Sudurpaschim',
  districts: Object.values(SUDURPASCHIM_DISTRICTS)
};

export enum KARNALI_DISTRICTS {
  'Rukum W',
  'Salyan',
  'Mugu',
  'Kalikot',
  'Jumla',
  'Jajarkot',
  'Humla',
  'Dolpa',
  'Dailekh',
  'Surkhet'
}

export const KARNALI = {
  number: 2,
  name: 'Karnali',
  districts: Object.values(KARNALI_DISTRICTS)
};

export enum PROVINCE_5_DISTRICTS {
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
}

export const PROVINCE_5 = {
  number: 5,
  name: 'Province 5',
  districts: Object.values(PROVINCE_5_DISTRICTS)
};

export enum GANDAKI_DISTRICTS {
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
  'Syangja'
}

export const GANDAKI = {
  number: 4,
  name: 'Gandaki',
  districts: Object.keys(GANDAKI_DISTRICTS)
};

export enum BAGMATI_DISTRICTS {
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
  'Sindhupalchok'
}

export const BAGMATI = {
  number: 3,
  name: 'Bagmati',
  districts: Object.values(BAGMATI_DISTRICTS)
};

export enum PROVINCE_2_DISTRICTS {
  'Siraha',
  'Sarlahi',
  'Saptari',
  'Rautahat',
  'Parsa',
  'Mahottari',
  'Dhanusha',
  'Bara'
}

export const PROVINCE_2 = {
  number: 2,
  name: 'Province 2',
  districts: Object.values(PROVINCE_2_DISTRICTS)
};

export enum PROVINCE_1_DISTRICTS {
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
  'Solukhumbu'
}

export const PROVINCE_1 = {
  number: 1,
  name: 'Province 1',
  districts: Object.values(PROVINCE_1_DISTRICTS)
};

export const PROVINCES = [
  PROVINCE_1,
  PROVINCE_2,
  BAGMATI,
  GANDAKI,
  PROVINCE_5,
  KARNALI,
  SUDURPASCHIM,
];
