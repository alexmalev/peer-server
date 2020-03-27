const {
  getResource,
  setResource
} = require("../../src/routes/public/resource/resourceModel");

const {
  storeResource
} = require("../../src/routes/private/resource/resourceModel");

const expectedResource = JSON.stringify({ stay: "the f**k at home" });

const dbMock = {
  getResource: () => expectedResource,
  setResource: jest.fn()
};

const peerPublisherMock = {
  publishResource: jest.fn()
};

describe("api resource model", () => {
  it("gets a resource from db", () => {
    const resource = getResource(dbMock);
    expect(resource).toBe(expectedResource);
  });

  it("publishes a resource to a peerService", () => {
    setResource(expectedResource, peerPublisherMock);
    expect(peerPublisherMock.publishResource).toHaveBeenCalledWith(
      expectedResource
    );
  });
});

describe("internal resource model", () => {
  it("stores the resource in the db", () => {
    storeResource(dbMock, expectedResource);
    expect(dbMock.setResource).toHaveBeenCalledWith(expectedResource);
  });
});
