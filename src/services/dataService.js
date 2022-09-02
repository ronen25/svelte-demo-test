import delay from '../util/delay';

export default async () => {
  await delay(2000);

  const response = await fetch('http://localhost:3000/names');
  const jsonData = await response.json();

  return jsonData;
};
