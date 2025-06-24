const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../../server');
const Report = require('../../models/report');
require('dotenv').config();

beforeAll(async () => {
  await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
});

afterEach(async () => {
  await Report.deleteMany();
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('Report API Integration Tests', () => {
  it('should create a report successfully', async () => {
    const res = await request(app).post('/api/reports').send({
      name: 'Sristi',
      phone: '9876543210',
      location: 'Bhubaneswar',
      emergencyType: 'Stalking'
    });

    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe('Sristi');
    expect(res.body.status).toBe('Pending'); // default
  });

  it('should fail when required fields are missing', async () => {
    const res = await request(app).post('/api/reports').send({
      name: 'Sristi'
    });

    expect(res.statusCode).toBe(400);
  });

  it('should fetch all reports', async () => {
    await Report.create({
      name: 'Tina',
      phone: '1234567890',
      location: 'Mumbai',
      emergencyType: 'Harassment'
    });

    const res = await request(app).get('/api/reports');
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBe(1);
    expect(res.body[0].name).toBe('Tina');
  });
});
