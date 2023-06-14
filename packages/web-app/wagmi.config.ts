import { defineConfig } from '@wagmi/cli'
import { foundry, react } from '@wagmi/cli/plugins'

export default defineConfig({
  out: 'lib/blockchain.ts',
  plugins: [
    react(),
    foundry({
      project: '../smart-contracts',
    }),
  ],
})
