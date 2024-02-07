/** @jsxImportSource react */

import { Typography } from 'app/ui/typography'

export default function Settings() {
  return (
    <div className="grid place-items-center">
      <div className="bg-background mx-4 flex flex-col items-center gap-4 rounded-xl p-4">
        <Typography variant="h1">Settings</Typography>
        <Typography variant="h3" className="text-center">
          Just here to show a second tab in a webview.
        </Typography>
        <Typography variant="h3" className="pt-8">
          This page is rendered only in the web app, and it uses CSS Grid.
        </Typography>
      </div>
    </div>
  )
}
