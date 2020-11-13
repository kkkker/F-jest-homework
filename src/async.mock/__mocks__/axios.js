export default {
  post: jest.fn((url, user) => Promise.resolve({ data: { ...user } })),
  get: jest.fn(() => Promise.resolve({ data: {} })),
};
