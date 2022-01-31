const axios = require("axios");

const MockAdapter = require("axios-mock-adapter");
const { searchArtistAPI } = require("../api");

describe("searchArtist", () => {
  let mock;

  beforeAll(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.reset();
  });

  describe("when searchArtistAPI call is successful", () => {
    it(" should return data ", (done) => {
      const data = { response: true };
      mock
        .onGet(
          `https://rest.bandsintown.com/artists/atif?app_id=${process.env.NEXT_PUBLIC_APP_ID}`
        )
        .reply(200, data);

      searchArtistAPI("atif").then((response) => {
        expect(response).toEqual(data);
        done();
      });
    });
  });
  describe("when searchArtistAPI call is unsuccessful", () => {
    it(" should return null as result", (done) => {
      mock
        .onGet(
          `https://rest.bandsintown.com/artists/atif%20a?app_id=${process.env.NEXT_PUBLIC_APP_ID}`
        )
        .networkErrorOnce();

      searchArtistAPI("atif%20a").then((response) => {
        expect(response).toEqual(null);
        done();
      });
    });
  });
});
