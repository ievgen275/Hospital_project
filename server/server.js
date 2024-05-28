const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const host = 'localhost';
const port = 3000;

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
   console.log(`${req.method} ${req.url}`);
   next();
});

const readStationsFromFile = () => {
   try {
      console.log('Читання файлу anonymous.json...');
      if (!fs.existsSync('anonymous.json')) {
         console.log("Файл anonymous.json не існує, повертаємо порожній масив.");
         return [];
      }
      const data = fs.readFileSync('anonymous.json');
      console.log('Файл прочитано успішно.');
      return data.length ? JSON.parse(data) : [];
   } catch (error) {
      console.error('Помилка при зчитуванні файлу anonymous.json:', error);
      return [];
   }
};

const writeStationsToFile = (stations) => {
   try {
      console.log('Запис у файл anonymous.json...');
      fs.writeFileSync('anonymous.json', JSON.stringify(stations, null, 2));
      console.log('Запис виконано успішно.');
   } catch (error) {
      console.error('Помилка при записі у файл anonymous.json:', error);
   }
};

app.post('/anonymous', (req, res) => {
   try {
      const stations = readStationsFromFile();
      const station = req.body;
      const stationId = stations.length ? stations[stations.length - 1].id + 1 : 1;
      const newStation = { ...station, id: stationId };
      stations.push(newStation);
      writeStationsToFile(stations);
      res.send(newStation);
   } catch (error) {
      console.error('Внутрішня помилка сервера при створенні станції:', error);
      res.status(500).send('Внутрішня помилка сервера');
   }
});

// Запуск сервера
app.listen(port, host, () => {
   console.log(`Сервер працює на http://${host}:${port}`);
});