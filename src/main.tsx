// Spiceflow app entry point for robot.co-components demo
import "./globals.css";
import { Spiceflow } from "spiceflow";
import NodeGrid from "./nodegrid/page";

export const app = new Spiceflow()
  .layout("/*", async ({ children }) => {
    return (
      <html lang="en">
        <body>{children}</body>
      </html>
    );
  })
  .page("/", async () => {
    return <NodeGrid />;
  });

app.listen(3000);
