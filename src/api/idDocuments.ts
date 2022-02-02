import { EvaluationsResponse } from '../model/evaluationsResponse'
import { EVALUATIONS_ROUTE } from './routes'

// WARNING: document should be a file (mocks)
export default async function validateIdDocument(document: string) {
  // WARNING: I would use axios with a formData body
  const response = await fetch(EVALUATIONS_ROUTE, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ document }),
  })
  return (await response.json()) as EvaluationsResponse
}
