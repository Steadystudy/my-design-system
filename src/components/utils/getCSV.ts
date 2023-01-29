import Papa, { ParseResult } from 'papaparse';

function Validate(file: string) {
  const regex = /\.csv$/;
  if (!regex.test(file)) throw new Error('csv 파일이 아닙니다.');
}

async function toJson(file: string) {
  return new Promise((resolve, reject) => {
    Papa.parse(file, {
      header: true,
      download: true,
      skipEmptyLines: true,
      delimiter: ',',
      complete: (results: ParseResult<any>) => {
        resolve(results.data);
      },
      error(err) {
        reject(err);
      },
    });
  });
}

const getCSV = async (file: string) => {
  try {
    Validate(file);
    const data = await toJson(file);
    return data as any;
  } catch (err) {
    console.error('Could not parse json', err);
  }
};

export default getCSV;
