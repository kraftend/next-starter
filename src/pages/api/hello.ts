import type { NextApiRequest, NextApiResponse } from 'next';
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

type HelloResponse = {
  name: String;
};

export default (req: NextApiRequest, res: NextApiResponse<HelloResponse>) => {
  res.status(200).json({ name: 'John Doe' });
};
