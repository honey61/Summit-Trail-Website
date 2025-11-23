const app = require('./app');
const connectDB = require('./config/db');
require('dotenv').config();

const PORT = process.env.PORT || 5000;

connectDB(process.env.MONGO_URI).then(() => {
  app.listen(PORT, () => console.log(`Server started on ${PORT}`));
}).catch(err => {
  console.error('DB connect failed', err);
  process.exit(1);
});
