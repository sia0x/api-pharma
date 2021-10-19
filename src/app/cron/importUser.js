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

const importUserDataToMongo = async (user) => {
  if (user && user.length > 0) {
    user.map(async (result) => {
      Object.assign(result, { imported_t: new Date(), status: 'published' });

      const data = UserCollection.create(result);
    });

    console.log('dados importados para o mongo');
  }
};

const getDataAndImport = async () => {
  const user = await getDatafromRandomUserApi();

  importUserDataToMongo(user);
};

const cronImportUserData = () => {
  const job = new CronJob('00 01 * * *', async () => getDataAndImport());
  job.start();
};

export default cronImportUserData;
