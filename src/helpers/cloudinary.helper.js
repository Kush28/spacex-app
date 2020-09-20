import { SPACEX_IMG_URI, CLOUDINARY_URI, CLOUDINARY_FOLDER, DUMMY_IMG } from '../constants'

const extraParams = 'c_limit,q_auto,f_auto'

export default function cloudinaryUrl(imgUrl, width) {
  if (!imgUrl) return `${DUMMY_IMG}`
  if (!imgUrl.startsWith(SPACEX_IMG_URI)) return imgUrl
  const imgPath = imgUrl.replace(SPACEX_IMG_URI, '')
  const widthParam = width ? `w_${width},` : ''
  return `${CLOUDINARY_URI}${widthParam}${extraParams}/${CLOUDINARY_FOLDER}/${imgPath}`
}
