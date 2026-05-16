import { getStoredUser } from "./utils/storage";

test("getStoredUser returns null when localStorage is empty", () => {
  localStorage.clear();
  expect(getStoredUser()).toBeNull();
});

test("getStoredUser returns the parsed user object", () => {
  localStorage.setItem(
    "user",
    JSON.stringify({ _id: "1", name: "Aisha", email: "aisha@example.com" }),
  );

  expect(getStoredUser()).toEqual({
    _id: "1",
    name: "Aisha",
    email: "aisha@example.com",
  });
});
