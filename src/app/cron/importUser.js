import { CronJob } from 'cron';
import UserCollection from '../models/User';

const user = {
  results: [
    {
      gender: 'female',
      name: {
        title: 'Miss',
        first: 'یسنا',
        last: 'جعفری',
      },
      location: {
        street: {
          number: 9247,
          name: 'پارک طالقانی',
        },
        city: 'دزفول',
        state: 'اصفهان',
        country: 'Iran',
        postcode: 96707,
        coordinates: {
          latitude: '29.4159',
          longitude: '121.2062',
        },
        timezone: {
          offset: '-5:00',
          description: 'Eastern Time (US & Canada), Bogota, Lima',
        },
      },
      email: 'ysn.jaafry@example.com',
      login: {
        uuid: 'f123ee61-f315-488c-b3ba-6ba5d250fd64',
        username: 'purplegorilla726',
        password: 'poopy',
        salt: 'ogtHFVUo',
        md5: '93dbb38ea3cc388a5359df7b085b3887',
        sha1: 'bcef139353e4ad50ecde69fc668b054cb8755401',
        sha256:
          'd2801d2829bf2afd73793830fb42a901e64527821a05b4e34365a1292ba9ea4a',
      },
      dob: {
        date: '1978-11-29T22:47:25.067Z',
        age: 43,
      },
      registered: {
        date: '2008-08-22T23:25:26.085Z',
        age: 13,
      },
      phone: '013-09842539',
      cell: '0961-365-8363',
      id: {
        name: '',
        value: null,
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/women/81.jpg',
        medium: 'https://randomuser.me/api/portraits/med/women/81.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/women/81.jpg',
      },
      nat: 'IR',
    },
  ],
  info: {
    seed: '88253067be99f577',
    results: 1,
    page: 1,
    version: '1.3',
  },
};

const importUserData = async (user) => {
  if (user && user.results.length > 0) {
    user.results.map(async (result) => {
      Object.assign(result, { imported_t: new Date(), status: 'published' });

      const data = UserCollection.create(result);
    });
  }
};

const cronImportUserData = () => {
  const job = new CronJob('02 19 * * FRI', async () => importUserData(user));
  job.start();
};

export default cronImportUserData;
