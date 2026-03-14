// Spiceflow app entry point for robot.co-components demo
import '../app/globals.css'
import { Spiceflow } from 'spiceflow'
import NodeGrid from '../app/nodegrid/page'

const app = new Spiceflow()
  .layout('/*', async ({ children }) => {
    return (
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
    )
  })
  .page('/', async () => {
    return <NodeGrid />
  })

export default app
