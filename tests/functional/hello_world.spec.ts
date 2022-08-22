import { test } from '@japa/runner'

test('must display welcome page', async ({ client }) => { //registra o nosso test
  const response = await client.get('/')

  response.assertStatus(200)
  response.assertBodyContains({ hello: 'world' })
})
