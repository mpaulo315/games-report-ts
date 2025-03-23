import {  getGames } from "./";

describe("getGames", () => {
  it("should be a test", async () => {
    await getGames();
    
    expect(true).toBe(true);
  }, 20000);
});

// describe("countGames", () => {
//   it("should retrieve something", async () => {
//     const data = await countGames();
//     expect(data).toBeDefined();
//   });


//   it("should return a number", async () => {
//     const data = await countGames();
//     expect(typeof data).toBe("number");
//   });
// });
