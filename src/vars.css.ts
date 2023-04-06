import { createGlobalThemeContract } from "@vanilla-extract/css";

// Type 'null' is not assignable to type 'string | Tokens'.
export const vars = createGlobalThemeContract({
  color: {
    gray100: null,
  },
});

// Working
// export const vars = createGlobalThemeContract({
//   color: {
//     gray100: 'color-gray-100',
//   },
// });

// Working 2 - Add mapFn
// export const vars = createGlobalThemeContract(
//   {
//     color: {
//       gray100: null,
//     },
//   },
//   (_value, path) => `test-${path.join("-")}`
// );
