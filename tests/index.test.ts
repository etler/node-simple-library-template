import { someExport } from "@/index.js";

describe("Node Simple Library Template", () => {
  describe("someExport", () => {
    it("should return something", () => {
      const result = someExport("SOMETHING");
      expect(result).toEqual("something");
    });
  });
});
