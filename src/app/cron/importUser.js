import { CronJob } from 'cron';
import UserCollection from '../models/User';
import randomUserApi from '../interceptor/randomuser/api';

let page = 1;

const getDatafromRandomUserApi = async () => {
  const user = [];
  while (page <= 5) {
    const { results } = (
      await randomUserApi.get('/api/', {
        params: { page, results: 100 },
      })
    ).data;

    user.push(results);

    page += 1;
  }

  return user;
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
