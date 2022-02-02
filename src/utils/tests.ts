/* eslint-disable import/prefer-default-export */

import { act } from 'react-dom/test-utils'

export function getSuccessFetchStub<T>(response: T) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return function fetchStub(_url: string) {
    return new Promise((resolve) => {
      resolve({ json: () => Promise.resolve(response) })
    })
  } as jest.Mock
}

export async function awaitMockTimers() {
  await act(async () => {
    jest.runOnlyPendingTimers()
  })
}
