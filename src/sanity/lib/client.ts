import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
  token: 'skY5AcOralF7PI6SAIiMSSzjA0AnYzKdXg8IXlCx4t5XjbOZNfNPWY52Kej425MaLol6Kd3Bj4R6H8ZRPr9t0VKr5UaiVTDMXXLWkpcl3pT9VFBRGsNLLtdyUxQgdfbTO0O5xa2yO6gq2bVrQAWUmP0G7ec1oVMDFi2cqURM8UtzHZ60cX4q'
})
