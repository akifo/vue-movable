export default function (translate3dChar) {
  const results = translate3dChar.match(/translate3d\((.+)px,(.+)px,(.+)px\)/)
  if (!results) return [0, 0, 0]
  return [parseInt(results[1]), parseInt(results[2]), parseInt(results[3])]
}
