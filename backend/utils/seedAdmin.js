require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Admin = require('../models/Admin');
const connectDB = require('../config/db');

async function seed() {
  await connectDB(process.env.MONGO_URI);
  const email = process.env.ADMIN_EMAIL;
  const password = process.env.ADMIN_PASSWORD;
  if (!email || !password) {
    console.error('Set ADMIN_EMAIL and ADMIN_PASSWORD in .env');
    process.exit(1);
  }
  const exists = await Admin.findOne({ email });
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  if (exists) {
    exists.passwordHash = hash;
    await exists.save();
    console.log('Admin exists — password updated');
  } else {
    const admin = new Admin({ email, passwordHash: hash });
    await admin.save();
    console.log('Admin created');
  }
  process.exit(0);
}

seed().catch(e => { console.error(e); process.exit(1); });
