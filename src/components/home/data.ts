import { AdvantageIcon, CommissionIcon, HomeIcon } from '../../assets/icons';
import { Image_1, Image_2, ReviewImg } from '../../assets/images';
import {
  AdvantagesInterface,
  HouseTypeInterface,
  PriceInterface,
  ReviewsInterface,
} from '../../types/homeTypes';

export const ReviewValues: Array<ReviewsInterface> = [
  {
    icon: ReviewImg,
    name: 'Khana Right',
    p: 'GentAfrica made my life easy. It helped me with the search for the first ever investment.They were an absolute pleasure to work with from the beginning to completion. Thanks to the Team.',
    rating: 4.5,
    location: ' Buston, UK',
  },
  {
    icon: Image_1,
    name: 'Mr Brown',
    p: 'GentAfrica made my life easy. It helped me with the search for the first ever investment.They were an absolute pleasure to work with from thebeginning to completion. Thanks to the Team.',
    rating: 4.2,
    location: ' Buston, UK',
  },
  {
    icon: ReviewImg,
    name: 'Mr Brown',
    p: 'GentAfrica made my life easy. It helped me with the search for the first ever investment.They were an absolute pleasure to work with from thebeginning to completion. Thanks to the Team.',
    rating: 4.6,
    location: ' Buston, UK',
  },
  {
    icon: Image_2,
    name: 'Mr Brown',
    p: 'GentAfrica made my life easy. It helped me with the search for the first ever investment.They were an absolute pleasure to work with from thebeginning to completion. Thanks to the Team.',
    rating: 5,
    location: ' Buston, UK',
  },
];

export const housevalues: Array<HouseTypeInterface> = [
  {
    houses: [
      {
        heading: 'Residential Units',
        values: [
          'Self Con',
          ' Single Room',
          '1 bedroom flat',
          '2 bedroom flat',
          ' 3 bedroom flat',
          'Others',
        ],
      },
    ],
    rent: [
      {
        heading: 'Commercials',
        values: ['Shop', 'Office', 'Others'],
      },
    ],
  },
];

export const piceRangevalues: Array<PriceInterface> = [
  {
    label: 'Price Range',

    value: ['200 - 350', '400 - 550', '500 - 650', '700 - 850', '900 - 1150'],
  },
];
