import delay from '../util/delay';
import { random } from 'lodash';

export default async () => {
  await delay(2000);

  const shouldErrorOut = random(1, 10);
  if (shouldErrorOut > 7) {
    throw new Error('THIS IS WRONG!!!');
  }

  const response = await fetch('http://localhost:3000/names');
  const jsonData = await response.json();

  return jsonData;
};
