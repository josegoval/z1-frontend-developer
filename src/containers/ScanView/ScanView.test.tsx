import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { EvaluationsResponse } from '../../model/evaluationsResponse'
import ScanView from '.'
import { awaitMockTimers, getSuccessFetchStub } from '../../utils/tests'
import Provider from '../Provider'

describe('ScanView', () => {
  beforeAll(jest.useFakeTimers)
  afterAll(jest.clearAllTimers)

  test('success id document', async () => {
    jest
      .spyOn(global, 'fetch')
      .mockImplementation(
        getSuccessFetchStub<EvaluationsResponse>({ summary: { outcome: 'Approved' } })
      )

    render(
      <Provider>
        <ScanView />
      </Provider>
    )

    // on start
    expect(screen.getByText(/Scan your ID/)).toBeInTheDocument()
    expect(screen.queryByRole('button', { name: /Take picture/i })).toBeVisible()
    expect(screen.queryByText(/Fit your ID card inside the frame/)).toBeNull()
    await userEvent.click(screen.getByText(/Take picture/))
    // when modal visible...
    expect(screen.getByText(/Fit your ID card inside the frame/)).toBeInTheDocument()
    await awaitMockTimers()
    expect(await screen.findByText(/Picture taken!/)).toBeInTheDocument()
    await awaitMockTimers()
    // when modal not visible and successful scan...
    expect(screen.queryByText(/Fit your ID card inside the frame/)).toBeNull()
    expect(await screen.findByText('Accepted')).toBeInTheDocument()
    expect(screen.queryByRole('button', { name: /[Take picture|Retake picture]/i })).toBeNull()
  })

  test('error id document', async () => {
    jest
      .spyOn(global, 'fetch')
      .mockImplementation(
        getSuccessFetchStub<EvaluationsResponse>({ summary: { outcome: 'Too Much Glare' } })
      )

    render(
      <Provider>
        <ScanView />
      </Provider>
    )

    // on start
    await userEvent.click(screen.getByText(/Take picture/))
    // when modal visible...
    expect(screen.queryByText(/Room lighting is too low/)).toBeInTheDocument()
    await awaitMockTimers()
    expect(screen.queryByText(/Room lighting is too low/)).toBeNull()
    await userEvent.click(screen.getByRole('button', { name: /Cancel/i }))
    // when modal not visible and failed scan...
    expect(screen.queryByText(/Fit your ID card inside the frame/)).toBeNull()
    expect(await screen.findByText('Rejected')).toBeInTheDocument()
    await userEvent.click(screen.getByRole('button', { name: /Retake picture/i }))
    // on retake...
    expect(screen.getByText(/Fit your ID card inside the frame/)).toBeInTheDocument()
  })
})
