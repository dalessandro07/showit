import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  title: string
  description: string
}

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { url } = JSON.parse(req.body)

  console.log(req.body)

  const response = await fetch(url)
  const html = await response.text()

  // get metadata from html

  const title =
    html.match(/<title>(.*?)<\/title>/)?.[1] || 'No se encontró el título.'

  const description =
    html.match(/<meta name="description" content="(.*?)">/)?.[1] ||
    'No se encontró la descripción.'

  res.status(200).json({ title, description })
}
