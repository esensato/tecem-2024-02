const TransferenciaTest = artifacts.require("TransferenciaTest");

contract("TransferenciaTest", function (/* accounts */) {
  it("should assert true", async function () {
    await TransferenciaTest.deployed();
    return assert.isTrue(true);
  });
});
