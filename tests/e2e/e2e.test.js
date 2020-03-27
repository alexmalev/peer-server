const axios = require("axios");

const expectedResource = { stay: `the f**k at home ${Date.now()}` };

const { BASE_URL_FIRST, BASE_URL_SECOND } = process.env;

describe("should store and retreive a resource", () => {
  it("publishes a resource to the peer server", async () => {
    const { status } = await axios.post(
      `${BASE_URL_FIRST}/api/resource`,
      expectedResource
    );
    expect(status).toBe(200);
  });

  it("gets the resource from the peerService", async () => {
    const { data } = await axios.get(`${BASE_URL_SECOND}/api/resource`);
    expect(data).toEqual(expectedResource);
  });
});
