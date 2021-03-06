const { createDefaultResponse } = require('../../../src/utils/request')

describe('Request utils', () => {
  it('createDefaultResponse without data', () => {
    const response = createDefaultResponse(true, 'Error')
    expect(response).toEqual({
      data: null,
      error: true,
      message: 'Error'
    })
  })
  it('createDefaultResponse with data', () => {
    const response = createDefaultResponse(false, 'Success', { id: 1 })
    expect(response).toEqual({
      data: { id: 1 },
      error: false,
      message: 'Success'
    })
  })
})
