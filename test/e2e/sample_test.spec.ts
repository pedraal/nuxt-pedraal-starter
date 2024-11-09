import { createPage, fetch, setup } from '@nuxt/test-utils/e2e'
import { beforeEach, describe, expect, test } from 'vitest'
import { consola } from 'consola'
import { $fetchToDom } from '../utils/dom'

describe('e2e sample test', async () => {
  await setup()

  beforeEach(() => {
    consola.restoreConsole()
  })

  test('get server response', async () => {
    const res = await fetch('/')
    expect(res.status).toEqual(200)
  })

  test('get dom', async () => {
    const page = await $fetchToDom('/')
    expect(page.querySelector('body')).toBeTruthy()
  })

  test('get browser', async () => {
    const page = await createPage('/')
    await expect(page.locator('body').isVisible()).resolves.toBeTruthy()
  })
})
