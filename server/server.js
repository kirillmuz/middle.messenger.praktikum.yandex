/* eslint-disable no-undef */
import express from 'express';
import path, { join } from 'path';

const app = express();

const PORT = 3000;

app.use(express.static(path.resolve(process.cwd(), 'dist')));

app.get('*', (req, res) => {
    const indexPath = join(path.resolve(process.cwd(), 'dist'), 'index.html');
    res.sendFile(indexPath);
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на ${PORT}`);
});
