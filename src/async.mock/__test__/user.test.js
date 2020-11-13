import { register } from "../user";
import { verifyUsername } from "../verify";

jest.mock("../verify");
jest.mock("axios");

describe("register", () => {
  test("should post user when validated", async () => {
    // TODO 19: add test here
    await expect(register("username", "password")).resolves.toEqual({
      username: "username",
      password: "password",
    });
  });

  test("should reject with Error when username is invalid", async () => {
    // TODO 20: add test here
    verifyUsername.mockReturnValue(false);
    await expect(register("username", "password")).rejects.toEqual(
      new Error("wrong username or password")
    );
  });
});
