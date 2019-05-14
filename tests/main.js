import assert from "assert";

describe("image_share", function () {
  it("package.json has correct name", async function () {
    const { name } = await import("../package.json");
    assert.strictEqual(name, "image_share");
  });

  
  if (Meteor.isClient) {
	
  }

  if (Meteor.isServer) {
  }
});
