// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { withSSRContext } from "aws-amplify"
import '../../configureAmplify'

export default async function(req, res) {
  const {Auth} = withSSRContext( {req} )
  const user = await Auth.currentAuthenticatedUser()
  res.status(200).json({ name: user })
}
