export function generateUuid(): string {
  const chars = "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx".split("");

  for (let i = 0, len = chars.length; i < len; i++) {
    if (chars[i] === "x") {
      chars[i] = Math.floor(Math.random() * 16).toString(16);
    }
  }
  return chars.join("");
}
