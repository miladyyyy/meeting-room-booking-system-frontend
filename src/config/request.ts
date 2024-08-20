import { defineConfig } from '@umijs/max'
const request: Parameters<typeof defineConfig>[0]['request'] = {
  dataField: 'data',
}

export default request
