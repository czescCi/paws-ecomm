import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token:
    "sk94i6L1QTK1oDWXJqW7RK9q6d0vaPWphCHXRzuZPkIZrlZJDzYjne89iPMRenln9NDxivPzyN8IbLw9qYXjdishxoE0YVUi6krqBEYESvJWUzyBYHUHq5QzkbxSDVOQ51GQIbMKtU91suWTh4GQJcFXHpdatBGYF8uxls7aMjqKy1gtdr56",
})
