const request = require('supertest');
const app = require('../server');

describe('Sales Dashboard API', () => {

  test('GET /health returns OK', async () => {
    const res = await request(app).get('/health');
    expect(res.status).toBe(200);
    expect(res.body.status).toBe('OK');
  });

  test('GET /api/sales returns array of sales', async () => {
    const res = await request(app).get('/api/sales');
    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(Array.isArray(res.body.data)).toBe(true);
    expect(res.body.count).toBeGreaterThan(0);
  });

  test('GET /api/summary returns totals', async () => {
    const res = await request(app).get('/api/summary');
    expect(res.status).toBe(200);
    expect(res.body.totalSales).toBeGreaterThan(0);
    expect(res.body.totalProfit).toBeGreaterThan(0);
  });

  test('GET /api/:id returns single item', async () => {
    const res = await request(app).get('/api/1');
    expect(res.status).toBe(200);
    expect(res.body.data.id).toBe(1);
  });

  test('GET /api/:id with invalid id returns 404', async () => {
    const res = await request(app).get('/api/9999');
    expect(res.status).toBe(404);
  });

  test('POST /api/sales creates new item', async () => {
    const res = await request(app)
      .post('/api/sales')
      .send({ month: 'Test', sales: 1000, profit: 500 });
    expect(res.status).toBe(201);
    expect(res.body.success).toBe(true);
    expect(res.body.data.month).toBe('Test');
  });
});
