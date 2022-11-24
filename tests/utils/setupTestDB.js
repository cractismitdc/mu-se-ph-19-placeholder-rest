// Plaace this before the tests abovethe "describe" section
const setupTestDB = () => {
  beforeAll(async () => {
    // Call this before executing all test
  });

  beforeEach(async () => {
    // before each test
  });

  afterAll(async () => {
    // add closing db calls and etc
  });
};

module.exports = setupTestDB;
