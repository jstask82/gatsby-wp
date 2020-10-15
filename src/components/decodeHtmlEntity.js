import * as he from "he"

export default function decodeHtmlEntity(entity) {
  const decodedEntity = he.decode(entity)
  return decodedEntity
}
