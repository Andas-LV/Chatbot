import { NextApiRequest, NextApiResponse } from 'next';

interface MyNextApiRequest extends NextApiRequest {
    files?: {
        [key: string]: any;
    };
}

export default async function handler(req: MyNextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const file = req.files?.avatar;
        res.status(200).json({ message: 'Файл успешно загружен' });
    } else {
        res.status(405).json({ message: 'Метод не разрешен' });
    }
}

